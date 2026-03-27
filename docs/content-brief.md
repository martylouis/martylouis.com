# martylouis.com — Content Brief & Sitemap

**Website Rebuild: Personal Site with Business Backbone**

- **Prepared for:** Marty Thierry
- **Date:** March 26, 2026
- **Version:** 1.0

---

## Executive Summary

This document defines the content strategy, sitemap, and page-by-page specifications for the martylouis.com rebuild. The site will be a **personal site with business backbone** — inspired by sites like Alex Carpenter, Brian Lovin, and Lee Robinson, but with dedicated services pages and clear client pathways underneath.

### Key Decisions

| Decision | Direction |
| --- | --- |
| Site Identity | Personal site with business backbone — not a corporate landing page |
| Design Vibe | Typography-forward, minimal, generous whitespace, dark mode. Ref: [Alex Carpenter](https://alexcarpenter.me), [Brian Lovin](https://brianlovin.com), [Lee Robinson](https://leerob.com/) |
| Primary Goal | Personal brand overall — not optimizing for a single funnel |
| Target Audiences | SaaS/software teams + SMBs needing websites — separate service pages for each |
| Messaging Lean | Unified homepage, audience-specific service landing pages |
| Pricing | Ranges only ($X–$Y depending on scope) on each services page |
| Lead Magnet | UX audit template (free download) — Phase 2 |
| Blog | Phase 3, framed as "Notes" or "Writing" |
| Podcast | Light mention on About page — potential to revive later |
| Dev Skills Angle | Mentioned naturally: "Knowing code makes me a better designer" |
| Hosting/Support | Section within web design services page, not standalone |

---

## Constraints & Context

Marty currently holds three concurrent positions that shape what can and cannot appear on the site:

1. **UX Consultant — Large Organization:** Cannot show the work. Can reference vaguely (domain/problem space, not company name or screens).
2. **UX Consultant — Software Agency:** Same constraints. Can mention the type of work without naming the agency or clients.
3. **Freelance Web Designer & Developer:** Full ownership. Can showcase everything — screenshots, process, metrics. This is the showroom.

**Strategic implication:** The consulting work provides credibility (enterprise-level UX experience), while the freelance work provides the visual portfolio. The About page and services pages bridge both — referencing consulting experience vaguely to establish seniority, while case studies come entirely from freelance projects.

**Hosting & support:** Marty manages hosting and ongoing support for freelance clients. This is a differentiator (recurring relationship, client doesn't get abandoned post-launch) and belongs as a section within the web design services page.

---

## Sitemap

Navigation order: Home, Work, Services, About, Notes (Phase 3)

| Page | URL | Phase | Purpose |
| --- | --- | --- | --- |
| Home | `/` | 1 | Personal intro + what you do + recent work |
| Work | `/work/` | 1 | Project grid with context |
| Project Detail | `/work/[slug]/` | 1 | Individual project pages (evolve to case studies) |
| Services | `/services/` | 1 | Overview of all services + links to sub-pages |
| Web Design & Dev | `/services/web-design/` | 1 | SMB audience service page with pricing ranges |
| UX Consulting | `/services/ux-consulting/` | 1 | SaaS/software audience service page |
| About | `/about/` | 1 | Personal + professional story |
| Contact | `/contact/` | 1 | Contact form + discovery call booking |
| UX Audit Template | `/resources/ux-audit/` | 2 | Lead magnet download (email capture) |
| Notes / Writing | `/notes/` | 3 | Blog/writing section — buyer-focused content |

---

## Page-by-Page Specifications

### Homepage `/`

**Purpose:** Personal introduction that signals who you are, what you do, and recent work. Not a sales page — a front door to your corner of the internet.

**Vibe:** Calm, confident, personal. Think Brian Lovin's homepage — brief intro, then useful links to deeper content.

#### Sections (top to bottom)

1. **Hero / Intro:** Brief personal intro (2–3 sentences). Name, what you do, where you're based. No jargon. Example direction: "Hey, I'm Marty. I'm a designer and developer based on the Gulf Coast of Florida. I help businesses grow through strategic web design and UX consulting."
2. **Currently:** Optional "currently" or "now" section (like /now pages). Could mention: UX consulting for enterprise orgs, working with software teams, taking on freelance projects. Keeps the site feeling alive without a blog.
3. **Selected Work:** 3–4 featured projects with thumbnail, project name, brief description, and link to project detail page. Not a massive grid — curated selection.
4. **Services Teaser:** Brief mention of services with link to /services/. Something like: "I offer web design & development for growing businesses and UX consulting for software teams." Keep it one line — don't replicate the services page.
5. **Footer:** Contact CTA, social links (LinkedIn, GitHub), email. Persistent across all pages.

**Copy direction:** First person. Warm but not gushing. No buzzwords. Write as if talking to someone at a coffee shop who asks what you do.

**What NOT to include:** No testimonial carousel. No "trusted by" logo bar (yet — revisit when case studies are ready). No aggressive CTAs. The homepage earns trust through personality and quality, not persuasion tactics.

---

### Work `/work/`

**Purpose:** Showcase freelance projects with enough context that a visitor understands what you did and why it mattered. Replaces the current screenshot gallery.

#### Sections

1. **Project Grid:** Each card shows: project thumbnail, project name, client type/industry tag, one-line description. Clicking goes to the detail page.
2. **Optional filters:** By type (Web Design, UX/UI) or industry. Only add if you have 6+ projects — otherwise it feels sparse.

#### Project Detail Pages `/work/[slug]/`

Each project gets its own page. Launch with whatever context you have; upgrade to full case studies as you gather client metrics (Phase 2).

**Minimum viable project page:**

- Project name + client industry
- 2–3 sentence overview (what the project was, what you did)
- Your role (design, development, hosting, ongoing support)
- Screenshots or screen recordings
- Tech stack / tools used
- Link to live site (if applicable)

**Full case study format (Phase 2 upgrade):**

- The Challenge: What problem was the client facing?
- The Approach: Your process, key decisions, tradeoffs
- The Outcome: Metrics (traffic, leads, conversions, user adoption)
- Client testimonial
- Before/after comparison (if applicable)

---

### Services `/services/`

**Purpose:** Hub page that routes visitors to the right service. Brief overview of what you offer, then links to the two dedicated service pages.

**Copy direction:** Frame services around client needs, not your skills. Not "I do UX design" but "Is your software losing users to confusing interfaces?" and "Does your business need a website that actually generates leads?"

**Structure:** Two cards/sections: Web Design & Development (links to `/services/web-design/`) and UX Consulting (links to `/services/ux-consulting/`). Each with a 2–3 sentence description and a "Learn more" link.

---

### Web Design & Development `/services/web-design/`

**Target audience:** SMB owners, marketing directors at small–mid companies. Businesses that need a custom website or a redesign of their current one.

**Tone:** Approachable, reassuring, jargon-free. These buyers are often overwhelmed and have likely been burned by a past freelancer. Address those fears directly.

#### Sections

- **Opening value prop:** Something like: "A custom website designed and built by the same person — no handoffs, no miscommunication, no disappearing act." Address the #1 fear: the disappearing freelancer.
- **What's included:** Custom design, responsive development, content integration, SEO foundation, launch support. Use plain language — "your site will look great on phones" not "responsive design."
- **Process overview:** Discovery → Design → Development → Launch → Support. Brief description of each step. Clients love knowing what to expect.
- **Pricing ranges:** Ballpark ranges by project type. E.g., "Small business website: $X–$Y" / "Website redesign: $X–$Y." Mention that final pricing depends on scope. Include what's NOT included to set expectations.
- **Hosting & ongoing support:** Section explaining that you don't disappear after launch. Hosting management, updates, ongoing tweaks. This is a MAJOR differentiator — feature it prominently. Mention monthly/annual pricing if applicable.
- **Featured projects:** 2–3 relevant projects from the /work/ page (Gulf Realty 30A, Manatee Air, etc.)
- **CTA:** "Ready to talk about your project?" → Contact page or discovery call link.

**SEO keywords to target:** freelance web designer Florida, custom website design Gulf Coast, small business website designer, website redesign [location]

---

### UX Consulting `/services/ux-consulting/`

**Target audience:** Product managers, design leads, CTOs, founders at software/SaaS companies who need UX help — either embedded design capacity or a specific project (redesign, new feature, audit).

**Tone:** Strategic, experienced, peer-level. These buyers evaluate design quality AND strategic thinking. They need to know you can operate at their level.

#### Sections

- **Opening value prop:** Frame around their pain: design bottlenecks, UX debt, shipping faster than design can keep up. Something like: "Senior-level UX thinking without the overhead of a full-time hire or the markup of an agency."
- **What this looks like:** Engagement models — embedded designer (weekly hours), project-based (redesign, new feature), UX audit. Be specific about deliverables: wireframes, prototypes, user flows, design systems, usability testing.
- **Credibility signals:** This is where you reference the consulting work vaguely: "I currently consult on UX for enterprise organizations and software agencies, working across [domains you can mention]." No names needed — the specificity of the domain signals real experience.
- **Technical depth:** Mention that knowing code makes you a better designer. You understand implementation constraints, can speak the engineering team's language, and design solutions that are actually buildable. Reference tools/platforms: Figma, SalesForce, Optimizely, A/B testing, design systems.
- **Pricing ranges:** Hourly/weekly rate ranges or project-based ranges. Different structure than web design — consulting is typically time-based.
- **Featured projects:** EvolvClaims, Wattsware, or any SaaS/software-adjacent freelance work.
- **CTA:** "Let's discuss your product." → Contact page.

**SEO keywords:** freelance UX consultant, SaaS UX designer, product design consultant, UX design for software companies

---

### About `/about/`

**Purpose:** Build trust through personality and credentials. This is the page that converts "interested" into "I want to work with this person."

**Approach:** Personal + professional blend. Tell your story — why you went solo, your philosophy on design, what drives you. Weave in credentials naturally (agency background, enterprise consulting, technical breadth). Include a good photo.

#### Content to cover

- Your story: How you got here, why you work the way you do
- Professional background: Agency experience, enterprise UX consulting, freelance practice
- Design philosophy: What you believe about good design, how you approach problems
- Technical breadth: The "knowing code makes me a better designer" angle
- The Freelance Dance podcast: Light mention — shows you're active in the community, have opinions, and aren't just heads-down client work
- Personal interests: Optional but humanizing. Gulf Coast life, hobbies, whatever feels authentic
- Contact CTA at the bottom

**What to avoid:** Dry resume format. Long lists of tools/skills. Corporate bio voice. This page should feel like meeting you, not reading a LinkedIn profile.

---

### Contact `/contact/`

**Purpose:** Make it easy to start a conversation. Remove friction.

**Include:**

- Contact form: Name, email, brief project description, budget range (optional dropdown), how they found you
- Discovery call booking: Calendly or similar embed/link
- Email address: For people who prefer direct email
- Response time expectation: "I typically respond within 24 hours" — sets expectations and signals professionalism
- Social links: LinkedIn, GitHub, Dribbble (if active)

---

## Phased Rollout Plan

### Phase 1 — Foundation (Launch Fast)

Get the core site live with enough depth to be credible. Don't wait for perfection.

- Homepage with personal intro, selected work, services teaser
- Work page with project grid + minimum viable project detail pages
- Services hub + both service sub-pages (Web Design, UX Consulting)
- About page
- Contact page with form + discovery call link
- Global footer with CTA and social links

### Phase 2 — Trust & Lead Capture

Deepen credibility and add a lower-commitment conversion path.

- Upgrade project pages to full case studies (reach out to clients for metrics)
- Gather and add named client testimonials throughout the site
- Create UX audit template as free downloadable resource (email capture)
- Add process detail page or expanded process sections
- Optional: client logo bar on homepage (once you have permission)

### Phase 3 — Content Engine

Build organic traffic and authority through content.

- Launch Notes/Writing section with 1–2 seed posts
- Ongoing: 1–2 posts/month, buyer-focused (not designer-focused)
- Starter topics: "Freelancer vs Agency," "How much does a website redesign cost," "Signs your SaaS has UX debt"
- LinkedIn repurposing of blog content
- SEO optimization: target local + service terms
- Podcast revival (if/when ready) with dedicated integration

---

## Messaging Guidelines

### Voice & Tone

- First person, conversational, warm
- Confident but not salesy — let the work and experience speak
- Write like you're talking to someone at a coffee shop, not pitching from a stage
- Specific over generic — "I help SaaS teams reduce churn through better onboarding UX" beats "I create user-centered digital experiences"
- No buzzwords: avoid "innovative," "cutting-edge," "pixel-perfect," "seamless"

### Language Shifts

Reframe design terminology into business language on client-facing pages:

| Instead of... | Say... |
| --- | --- |
| UX audit | Find out what's costing you customers |
| Wireframes and prototypes | A clear plan before any design work begins |
| Responsive design | Your site will look great on any device |
| Design system | Consistent, scalable design your team can build on |
| User research | Understanding what your customers actually need |
| Information architecture | Organizing your site so visitors find what they need |
| Portfolio screenshots | Stories about business outcomes |

### SEO Keyword Strategy

Target these keyword clusters across page titles, meta descriptions, headings, and body copy:

| Cluster | Keywords | Target Page |
| --- | --- | --- |
| Local web design | web designer Florida Gulf Coast, website designer 30A, custom website design FL | `/services/web-design/` |
| Web design services | freelance web designer, custom website design, small business website designer | `/services/web-design/` |
| Website redesign | website redesign cost, website redesign process, when to redesign your website | Blog (Phase 3) |
| UX consulting | freelance UX consultant, SaaS UX designer, product design consultant | `/services/ux-consulting/` |
| Freelancer vs agency | freelancer vs agency website, freelance designer vs agency cost | Blog (Phase 3) |

---

## Next Steps

1. **Review this brief** — flag anything that feels off, missing, or that you'd reframe
2. **Write the About page first** — it's the hardest content and informs the tone of everything else
3. **Inventory existing projects** — decide which go on the site and what context you can provide for each
4. **Draft pricing ranges** — for both web design and UX consulting service pages
5. **Start building Phase 1 pages** — scaffold routes and layouts in the Astro repo
6. **Reach out to past clients** — request metrics and permission to feature their projects as case studies (Phase 2)
