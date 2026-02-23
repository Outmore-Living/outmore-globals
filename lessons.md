# Lessons

What we've learned building Outmore Living. Hard-won knowledge that should inform every future decision.

> **Rule:** When something goes wrong (or right) in a meaningful way, document it here. Future you will thank present you.

---

## How to Use This File

Each lesson follows this format:
- **Context:** What happened
- **Lesson:** What we learned
- **Action:** What we do differently now

---

## Development

### <!-- Lesson Title -->
- **Context:** <!-- What happened -->
- **Lesson:** <!-- What we learned -->
- **Action:** <!-- What changed -->

<!-- Example format:
### Always generate Supabase types before building features
- **Context:** Built an entire feature against assumed table columns, then discovered the schema was different in production.
- **Lesson:** Generated types catch schema mismatches at compile time, not at runtime in production.
- **Action:** Run `npx supabase gen types typescript` at the start of every feature branch. Add to project setup checklist.
-->

---

## Product

### <!-- Lesson Title -->
- **Context:** <!-- What happened -->
- **Lesson:** <!-- What we learned -->
- **Action:** <!-- What changed -->

---

## Marketing

### <!-- Lesson Title -->
- **Context:** <!-- What happened -->
- **Lesson:** <!-- What we learned -->
- **Action:** <!-- What changed -->

---

## Operations

### <!-- Lesson Title -->
- **Context:** <!-- What happened -->
- **Lesson:** <!-- What we learned -->
- **Action:** <!-- What changed -->

---

## Brand & Design

### <!-- Lesson Title -->
- **Context:** <!-- What happened -->
- **Lesson:** <!-- What we learned -->
- **Action:** <!-- What changed -->

---

## AI & Agents

### Skills need `-y -g` flags for non-interactive install
- **Context:** First batch of `npx skills add` commands hung waiting for interactive prompts during agent team setup.
- **Lesson:** Always pass `-y` (auto-confirm) and `-g` (global install) flags when installing skills programmatically.
- **Action:** Updated all skill install commands to use `-y -g`.

### CLAUDE.md must be at `~/` for global auto-loading
- **Context:** Moved CLAUDE.md into the Outmore Living folder, breaking Claude Code's auto-detection.
- **Lesson:** Claude Code reads CLAUDE.md from three locations: `~/` (global), project root, and `.claude/` dir. Moving it out of those paths breaks the chain.
- **Action:** Keep master CLAUDE.md at `~/CLAUDE.md`. Per-project overrides go in project root or `.claude/`.

### Symlinks beat copies for shared config
- **Context:** Agents and skills were initially copied into `~/.claude/`. Updates required manual re-copying.
- **Lesson:** Symlinks from a git repo mean `git pull` propagates updates instantly. No manual sync.
- **Action:** `setup.sh` creates symlinks for agents/ and skills/, not copies.

---

## Customer

### <!-- Lesson Title -->
- **Context:** <!-- What happened -->
- **Lesson:** <!-- What we learned -->
- **Action:** <!-- What changed -->

---

## Meta: About This File

- Add lessons as they happen, don't batch them
- Be specific — vague lessons don't help anyone
- Include the "Action" — a lesson without a change is just a story
- Review quarterly: are these lessons still relevant? Have they been internalized?
- If a lesson applies to a specific project, note the project name
