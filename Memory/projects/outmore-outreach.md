# Project: Outmore Outreach

## Overview
AI-powered cold outreach system for Outmore Living's hospitality B2B sales. Replaces Amplemarket. Uses Claude for voice learning + email generation, Gmail API for ingestion, Instantly V2 for sending.

## Status
Active

## Repo
- GitHub: https://github.com/Outmore-Living/outmore-outreach
- PR #1: https://github.com/Outmore-Living/outmore-outreach/pull/1 (Gmail + Amplemarket import)
- Branch: `claude/beautiful-mccarthy`

## Key Decisions

| Decision | Choice | Why | Date |
|----------|--------|-----|------|
| Gmail auth | Service account with domain-wide delegation | One credential serves all 8 mailboxes without per-user OAuth | 2026-02-18 |
| Multi-mailbox config | `GMAIL_SENDER_CONFIG` env var (JSON) | Avoids schema changes; voice_profiles has single email_address | 2026-02-18 |
| Amplemarket import | Single standalone script with 5 phases | FK dependencies require ordering; one file is simpler to run/debug | 2026-02-18 |
| Import idempotency | Unique indexes + upsert with ignoreDuplicates | Safe to re-run without creating dupes | 2026-02-18 |
| Import script types | `@ts-nocheck` | Standalone migration script; Supabase client is untyped (no Database generic) | 2026-02-18 |
| Sender domains | 4 domains x 2 senders (kevin, kasey) = 8 mailboxes | Old domains are dead; new domains: liveoutmore.com, outmoredesigns.com, outmorecomfort.com, outmorehospitality.com | 2026-02-18 |
| Alex as 3rd sender | voice_profile added in migration 007 | Alex owns 7,444 contacts in Amplemarket data; email: alex@outmoreliving.com | 2026-02-18 |

## Architecture Notes

### File Map (what's been built)

```
src/
  lib/
    gmail/
      client.ts         -- Service account auth, createGmailClient(delegatedEmail)
      parser.ts         -- fetchSentEmails(), parseGmailMessage(), MIME decoding
    claude/
      client.ts         -- callClaude(), callClaudeJSON<T>() wrappers
      prompts.ts        -- loadPrompt() from prompts/ directory
    instantly/
      client.ts         -- Instantly V2 API client (partial, sending commented out)
    supabase/
      server.ts         -- createServerClient() using service role key
      types.ts          -- Generated Supabase types (run `npx supabase gen types`)
  app/
    api/
      jobs/
        gmail-ingest/route.ts   -- Cron job: fetch Gmail -> classify -> store voice_emails
        enrichment/route.ts     -- Placeholder (Firecrawl not implemented)
        challenge-gen/route.ts  -- Training challenge generation
        sync-instantly/route.ts -- Sync approved sequences to Instantly (sending commented out)
        voice-rebuild/route.ts  -- Voice profile rebuild trigger
        weekly-learning/route.ts -- Weekly performance analysis
      sequences/                -- Review/approve/reject endpoints
      training/                 -- Session management
      voice-profile/            -- Profile + feedback
      webhooks/instantly/       -- Instantly event receiver
    dashboard/                  -- UI pages (sequences, training, voice-profile, campaigns)
  components/                   -- React UI components
scripts/
  import-amplemarket.ts         -- 5-phase Amplemarket data migration (~570 lines)
supabase/
  migrations/
    001_core_tables.sql         -- contacts, companies, campaigns, etc.
    002_voice_learning.sql      -- voice_emails, voice_profiles, training tables
    003-006                     -- Various schema additions
    007_amplemarket_prep.sql    -- Alex voice profile + unique indexes for import
prompts/                        -- Claude prompt templates (12 files)
.env.example                    -- All env vars documented
```

### Gmail Integration

- **Auth:** Google service account JSON in `GOOGLE_SERVICE_ACCOUNT_KEY` env var
- **Delegation:** Service account impersonates each sender email via JWT `subject` field
- **Mailbox config:** `GMAIL_SENDER_CONFIG` env var maps person names to email arrays:
  ```json
  {
    "kevin": ["kevin@liveoutmore.com", "kevin@outmoredesigns.com", "kevin@outmorecomfort.com", "kevin@outmorehospitality.com"],
    "kasey": ["kasey@liveoutmore.com", "kasey@outmoredesigns.com", "kasey@outmorecomfort.com", "kasey@outmorehospitality.com"]
  }
  ```
- **Fetch flow:** For each voice_profile -> for each mailbox -> query `in:sent after:DATE` -> parse MIME -> dedup by gmail_message_id -> classify with Claude -> insert to voice_emails
- **Parser:** Handles multipart/alternative, multipart/mixed, base64url decoding, HTML tag stripping. Prefers text/plain over text/html.
- **Filtering:** Excludes internal emails (to @outmoreliving.com)

### Amplemarket Import (`scripts/import-amplemarket.ts`)

5 phases in FK-dependency order:

1. **Companies** — Parse contacts CSV, build unique company map by domain (~14,600). Batch upsert 500/batch.
2. **Contacts** — 26,465 rows. Links to companies via domain->id map. Classifies roles (decision_maker, influencer, champion, unknown) from simplified_title. Stores amplemarket_id, status, opens, replies in enrichment_data JSONB.
3. **Excluded Emails** — 968 do_not_contact flags. Updates existing contacts or inserts unknowns.
4. **Campaigns + Performance** — 30 campaigns from stats CSV. Maps owner emails to person names. Stores open/reply/bounce rates in performance_insights.
5. **Voice Emails** — 841 stage emails (151 active + 690 archived sequences). Owner resolved by joining sequence name to stats CSV. Synthetic gmail_message_id (`amp_{slug}_{step}`) for idempotency. Templates with `{{variables}}` preserved as-is.

**Data sources:** 5 files in `amplemarket export data/` folder (main repo, not worktree):
- `contacts_2026-02-18_120208.csv` (26,465 rows)
- `excluded_emails_2026-02-18_123248.csv` (968 rows)
- `sequence_stats_2026-02-18_141556.csv` (30 rows)
- `amplemarket-sequences-export.json` (21 active sequences)
- `amplemarket-archived-export.json` (103 archived sequences)

**Senders:** Kevin (15,986 contacts), Alex (7,444), Kasey (3,035)

### Database Indexes (added in migration 007)

- `idx_contacts_email_unique` — UNIQUE on contacts.email WHERE email IS NOT NULL
- `idx_companies_domain_unique` — UNIQUE on companies.domain WHERE domain IS NOT NULL

### Dependencies Added

- `googleapis` (^171.4.0) — Gmail API
- `csv-parse` (^6.1.0) — CSV streaming parser for import script
- `tsx` (^4.21.0) — TypeScript execution for standalone scripts

## Completion Status

| Feature | Status | Notes |
|---------|--------|-------|
| Database schema (001-007) | Done | 7 migrations, all tables + indexes |
| Dashboard UI | Done | Sequences, training, voice-profile, campaigns pages |
| Claude integration | Done | callClaude/callClaudeJSON + 12 prompt templates |
| Gmail ingestion | Done (code) | Needs Google Cloud Console setup (service account + delegation) |
| Amplemarket import | Done (code) | Needs migration 007 applied + script run against Supabase |
| Instantly V2 sending | 50% | Client exists, API call commented out in sync-instantly route |
| Firecrawl enrichment | 0% | Placeholder route only |
| Auth (Google SSO) | 0% | Disabled for dev, planned for later |
| Voice training UI | Done | 3 training modes + onboarding |
| Sequence review UI | Done | Queue + detail + approve/reject |

## Open Questions
- Instantly V2 API: sending endpoint needs to be uncommented and tested with real API key
- Firecrawl: which plan/key? What enrichment data to scrape?
- Some active sequences in JSON may not match stats CSV names exactly (slight name differences) — import script has fuzzy matching but edge cases may need manual mapping

## Env Vars Required

See `.env.example` in repo. Critical ones:
- `NEXT_PUBLIC_SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY`
- `ANTHROPIC_API_KEY`
- `GOOGLE_SERVICE_ACCOUNT_KEY` (full JSON service account key)
- `GMAIL_SENDER_CONFIG` (JSON map of person -> email arrays)
- `INSTANTLY_API_KEY`
- `CRON_SECRET`

## Next Steps (for any agent picking this up)

1. **Apply migration 007** to Supabase: `supabase db push` or run SQL manually
2. **Run import script**: `npx tsx scripts/import-amplemarket.ts` (needs .env.local with Supabase creds)
3. **Google Cloud Console setup** (Alex does manually):
   - Enable Gmail API
   - Create service account
   - Enable domain-wide delegation with scope `https://www.googleapis.com/auth/gmail.readonly`
   - Admin console: authorize the service account client ID for that scope
4. **Uncomment Instantly sending** in sync-instantly route once API key is ready
5. **Build Firecrawl enrichment** pipeline (enrichment/route.ts)
6. **Auth** — Google SSO when ready to go multi-user
