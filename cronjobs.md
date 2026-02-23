# Cron Jobs

Recurring tasks, scheduled automations, and periodic maintenance. Things that need to happen on a regular cadence — whether automated or manually triggered.

---

## How This File Works

Each cron job has:
- **Frequency:** How often it runs
- **Owner:** Who/what is responsible
- **Method:** Manual, script, Vercel cron, GitHub Action, or external service
- **Status:** Active, paused, or planned

---

## Development

| Task | Frequency | Owner | Method | Status |
|------|-----------|-------|--------|--------|
| Pull latest `outmore-globals` | Weekly | Developer | `cd ~/outmore-globals && git pull` | Active |
| Update Supabase types | Per feature branch | Developer | `npx supabase gen types typescript` | Active |
| Update npm dependencies | Biweekly | Developer | `npm update` + test | Active |
| Audit for security vulnerabilities | Monthly | Developer | `npm audit` | Active |
| Review and update CLAUDE.md | Monthly | Developer | Manual review | Active |
| Prune merged git branches | Weekly | Developer | `git branch --merged \| grep -v main \| xargs git branch -d` | Planned |

## Deployment

| Task | Frequency | Owner | Method | Status |
|------|-----------|-------|--------|--------|
| Verify Vercel env vars match .env.local | Per deploy | Developer | Manual check | Active |
| Review Vercel build logs for warnings | Per deploy | Developer | Vercel dashboard | Active |
| Check Vercel analytics for errors | Weekly | Developer | Vercel dashboard | Planned |
| SSL certificate renewal | Auto | Vercel | Automatic | Active |

## Marketing

| Task | Frequency | Owner | Method | Status |
|------|-----------|-------|--------|--------|
| Review GA4 traffic and conversions | Weekly | Marketing | GA4 dashboard | Planned |
| Audit SEO performance | Monthly | Marketing agent | `/outmore-review` or `audit-website` skill | Planned |
| Review Klaviyo email performance | Weekly | Marketing | Klaviyo dashboard | Planned |
| Check Meta Pixel/CAPI tracking | Monthly | Marketing | Meta Events Manager | Planned |
| Update schema markup | Quarterly | Marketing agent | `schema-markup` skill | Planned |
| Content calendar review | Weekly | Marketing | <!-- Tool --> | Planned |

## Data & Database

| Task | Frequency | Owner | Method | Status |
|------|-----------|-------|--------|--------|
| Supabase database backup verification | Weekly | Backend | Supabase dashboard | Planned |
| Review RLS policies | Monthly | Backend | Manual audit | Planned |
| Clean up orphaned storage files | Monthly | Backend | Supabase Storage dashboard | Planned |
| Review database query performance | Monthly | Backend | `supabase-postgres-best-practices` skill | Planned |

## Memory Maintenance

| Task | Frequency | Owner | Method | Status |
|------|-----------|-------|--------|--------|
| Archive daily logs older than 30 days | Monthly | Developer | Move `Memory/daily/*.md` → `Memory/archive/` | Planned |
| Review LTmemory.md for accuracy | Quarterly | Developer | Manual review | Planned |
| Archive completed project memory | On completion | Developer | Move to `Memory/archive/` | Planned |
| Review lessons.md and add new entries | Monthly | Developer | Manual review | Planned |
| Clean dead links in references | Quarterly | Developer | Manual or automated check | Planned |

## AI & Agent Maintenance

| Task | Frequency | Owner | Method | Status |
|------|-----------|-------|--------|--------|
| Update skills to latest versions | Monthly | Developer | `npx skills update` | Planned |
| Review agent definitions for accuracy | Quarterly | Developer | Check `agents/*.md` | Planned |
| Check for new useful skills | Monthly | Developer | `npx skills find` | Planned |
| Review Claude Code settings | Quarterly | Developer | Check `~/.claude/settings.json` | Planned |

---

## Automation Ideas (Not Yet Implemented)

Ideas for future automation. Move to the active tables above when implemented.

- **GitHub Action:** Auto-run `npm audit` on schedule and create issues for vulnerabilities
- **Vercel Cron:** Scheduled sitemap regeneration
- **GitHub Action:** Auto-update Supabase types on schema migration
- **Script:** Weekly backup of Memory/ directory to cloud storage
- **GitHub Action:** Automated lighthouse/performance audit on main branch deploys
- **Script:** Sync `.env.secrets` template with actual required keys across projects

---

## Adding a New Cron Job

1. Add it to the appropriate section in this file
2. Set status to `Planned`
3. Implement the automation (script, GitHub Action, Vercel cron, etc.)
4. Update status to `Active`
5. If it requires a new tool or service, update `tools.md`
