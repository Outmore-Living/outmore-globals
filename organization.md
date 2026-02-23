# Organization

Outmore Living's structure, people, roles, and how we operate.

---

## Company Overview

| Field | Detail |
|-------|--------|
| **Legal Name** | Outmore Living |
| **Type** | Premium heated outdoor furniture — DTC, B2B Hospitality, Specialty Retail, Online 3rd Party Marketplace |
| **Product** | Heated outdoor furniture |
| **Founded** | <!-- Add founding year --> |
| **HQ** | <!-- Add location --> |
| **Website** | <!-- Add URL --> |

## Team

### Leadership

| Name | Role | Responsibilities |
|------|------|------------------|
| Alex Duncan | Co-Founder | Product vision, technology, brand, operations |
| Kevin Long | Co-Founder | <!-- Responsibilities --> |

### Departments

#### Product & Engineering
- Product design and development
- Heating technology R&D
- Manufacturing relationships
- Quality control

#### Technology
- Website and e-commerce (Next.js/Vercel)
- Database and backend (Supabase)
- Marketing automation (Klaviyo, Meta, GA4)
- AI operations (Claude Code agent team)

#### Marketing & Growth
- Brand marketing and content
- SEO and organic growth
- Paid acquisition (Meta, Google)
- Email marketing (Klaviyo)
- Social media
- Analytics and CRO

#### Operations
- Supply chain and fulfillment
- Customer support
- Inventory management
- Shipping and logistics

#### Sales
- Direct-to-consumer (Shopify headless e-commerce)
- B2B Hospitality (hotels, resorts, restaurants — Trade Program)
- Specialty Retail (designer showrooms, retail partners)
- Online 3rd Party Marketplace
- Trade Program (designers, architects, hospitality professionals)

### AI Agent Team

Our development workflow is augmented by 7 specialized Claude Code agents:

| Agent | Role | Focus Area |
|-------|------|------------|
| `frontend` | UI/UX Developer | React, Next.js, Tailwind, brand compliance |
| `backend` | Data/API Engineer | Supabase, server actions, auth, APIs |
| `marketing` | Growth Marketer | SEO, CRO, email, paid ads, analytics |
| `tester` | QA Engineer | Debugging, testing, auditing |
| `reviewer` | Code Reviewer | Quality, security, accessibility (read-only) |
| `deployer` | DevOps Engineer | Vercel, CI/CD, environments |
| `copywriter` | Brand Writer | Voice, copy, messaging (read-only) |

See `agents/` for full agent definitions.

## How We Operate

### Decision-Making
- **Founder-led** for strategy, brand, and product direction
- **Agent-assisted** for technical decisions, code quality, and marketing execution
- **Data-informed** — use analytics before gut feelings

### Communication
- Async-first for documentation and decisions
- Real-time for urgent issues and brainstorming
- All decisions documented (not buried in chat)

### Development Workflow
1. Plan in Linear / GitHub Issues
2. Branch from `main` (`feature/` or `fix/`)
3. Build with agent team (frontend + backend in parallel when possible)
4. Review with `reviewer` agent + manual review
5. Test with `tester` agent
6. Deploy via Vercel (auto-preview on PR, production on merge to `main`)

### Cadence
<!-- Customize these -->
| Activity | Frequency | Notes |
|----------|-----------|-------|
| Sprint planning | <!-- Weekly/Biweekly --> | Set priorities and scope |
| Standup | <!-- Daily/Async --> | Progress, blockers |
| Retrospective | <!-- Biweekly/Monthly --> | What worked, what didn't |
| Analytics review | <!-- Weekly --> | Traffic, conversion, revenue |
| Content publish | <!-- Weekly --> | Blog, social, email |

### Tools We Use

See `tools.md` for the full breakdown. Key platforms:
- **Code:** GitHub (outmore-living org)
- **Deploy:** Vercel
- **Data:** Supabase
- **Commerce:** Shopify
- **Email:** Klaviyo
- **Analytics:** GA4, Meta Pixel/CAPI
- **AI:** Claude Code + agent team
- **Project Management:** <!-- Linear / GitHub Projects / etc. -->

## Key Contacts

<!-- Fill in as team grows -->
| Role | Name | Contact |
|------|------|---------|
| Co-Founder | Alex Duncan | <!-- email --> |
| Co-Founder | Kevin Long | <!-- email --> |

## Vendors & Partners

<!-- Fill in -->
| Partner | Service | Contact |
|---------|---------|---------|
| Vercel | Hosting / deployment | Dashboard |
| Supabase | Database / auth / storage | Dashboard |
| Shopify | E-commerce | Admin |
| Klaviyo | Email marketing | Dashboard |
| <!-- Partner --> | <!-- Service --> | <!-- Contact --> |
