# Coding Agent Prompt: Ritwij Ghosh Personal Portfolio (GitHub Pages)

## Overview

Build a single-page static portfolio website for **Ritwij Ghosh**, a CS student at Georgia Tech (Intelligence & Devices, GPA 3.9, graduating December 2027), AI/ML researcher, and incoming Software Engineering Intern at Synopsys. The site will be hosted on **GitHub Pages** — pure HTML, CSS, and vanilla JavaScript only. No frameworks, no build step, no Node.js required.

**Primary audience:** Technical and finance recruiters scanning quickly. Everything must hook in under 3 seconds.

**Reference site for layout/structure inspiration:** https://gauri-sharmaa.github.io/ — clean, minimal, single-page scroll with sticky nav. Match the structural clarity but NOT the visual aesthetic (ours is much darker and more distinct).

---

## Technical Constraints

- **Single file:** Everything in one `index.html` with `<style>` and `<script>` tags inline. No external files except Google Fonts.
- **Static only:** No backend, no build tools, no npm. Must work by opening `index.html` directly in a browser and on GitHub Pages.
- **Google Fonts only** for typography (loaded via `<link>` tag).
- **No JavaScript libraries** — vanilla JS only.
- **Responsive** down to 375px mobile width.
- **Smooth scroll** between sections.
- **Reduced motion** respected via `@media (prefers-reduced-motion: reduce)`.

---

## Visual Design System

### Aesthetic
"Galaxy meets terminal" — deep space background, teal/green accent, elongated serif display type. Think Perplexity AI's dark UI crossed with a cosmological observatory interface. The background should feel like deep space: not flat black, but a rich dark navy-black with subtle depth.

### Color Palette
```
--bg-primary:     #080B14   /* deep space navy-black */
--bg-secondary:   #0D1117   /* slightly lighter for cards/sections */
--bg-card:        #111827   /* card backgrounds */
--accent:         #2DD4BF   /* teal-green primary accent (Tailwind teal-400 equivalent) */
--accent-dim:     #0F766E   /* dimmer teal for borders, subtle highlights */
--text-primary:   #F1F5F9   /* near-white body text */
--text-secondary: #94A3B8   /* slate-400 equivalent for secondary text */
--text-muted:     #475569   /* muted labels, metadata */
--border:         #1E293B   /* subtle card/section borders */
```

### Typography
- **Display / Hero font:** `Playfair Display` (Google Fonts) — serif, elongated, elegant. Used for the hero name and section headings. Weight 700.
- **Body font:** `Inter` (Google Fonts) — clean sans-serif for all body copy, nav, and metadata. Weights 400, 500, 600.
- **Monospace accent:** `JetBrains Mono` (Google Fonts) — used sparingly for tech tags, skill labels, inline code-like decorations.

**Type scale:**
```
hero-name:     clamp(3rem, 8vw, 6rem)  — Playfair Display 700
hero-tagline:  clamp(1rem, 2.5vw, 1.25rem) — Inter 400, text-secondary
section-title: clamp(1.75rem, 4vw, 2.5rem) — Playfair Display 700
card-title:    1.125rem — Inter 600
body:          1rem — Inter 400
small/meta:    0.875rem — Inter 400, text-muted
tag:           0.75rem — JetBrains Mono, uppercase, letter-spacing: 0.05em
```

### Signature Design Element
**Animated teal gradient underline on the hero name** — on page load, a thin teal line draws from left to right under "Ritwij Ghosh" using a CSS animation (`scaleX` from 0 to 1). This is the single most memorable moment on the page. Keep everything else quiet.

### Motion Philosophy
- Page load: hero text fades in with a slight upward translate (200ms delay, 600ms duration).
- Scroll: sections fade in as they enter the viewport (IntersectionObserver, `opacity: 0` → `opacity: 1`, `translateY(20px)` → `translateY(0)`, 500ms ease-out).
- Hover: cards get a subtle `border-color` shift to `--accent-dim` and a `translateY(-2px)` lift (150ms).
- Nav links: teal underline on hover.
- **No parallax, no heavy animations. Subtle and fast.**

---

## Site Structure

Single `index.html`. Four sections navigated via sticky navbar: **Home**, **About**, **Projects**, **Contact**.

---

## Section 1: Navbar

Sticky top navbar. On scroll down past 50px, add a subtle `backdrop-filter: blur(12px)` and a bottom border `1px solid var(--border)` that fades in via CSS transition.

**Left:** Name — `Ritwij Ghosh` in Inter 600, teal color, links back to `#home`.

**Right:** Nav links — `About`, `Projects`, `Contact` — Inter 500, text-secondary. On hover, teal color. Active section link gets teal color (updated via IntersectionObserver + JS).

**Mobile:** Hamburger menu (☰) that toggles a full-width dropdown with the same links stacked vertically, dark background.

---

## Section 2: Hero / Landing (`#home`)

Full viewport height (`100vh`). Vertically centered content.

**Layout (centered, max-width 800px, left-aligned on desktop, centered on mobile):**

```
[subtle eyebrow label in JetBrains Mono, teal, small]
CS @ Georgia Tech · Graduating December 2027

[hero name — Playfair Display, huge]
Ritwij Ghosh
[animated teal underline draws on load]

[tagline — Inter, text-secondary]
Computer Science @ Georgia Tech | AI / ML Developer & Researcher

[two CTA buttons]
[View Projects →]  [Contact Me]
```

**Background:** The `--bg-primary` base with a very subtle radial gradient in the top-right — a barely-visible bloom of teal at 3% opacity (`radial-gradient(ellipse at 80% 20%, rgba(45, 212, 191, 0.06), transparent 60%)`). This creates the "galaxy" depth without being distracting.

**Scroll indicator:** A small animated chevron/arrow at the very bottom center of the hero, pointing down, with a gentle bounce animation.

**Featured project previews (below the CTA buttons, ~80px gap):**

Two minimal horizontal cards side by side (stack on mobile), teasing the two hero projects:

**Card 1 — Winston AI**
- Tag: `FULL-STACK · AGENTIC`
- Title: Winston AI: Agentic Travel Butler
- One-line: "Chat-first AI concierge with 8 MCP servers for autonomous trip planning & booking"
- Links to #projects section

**Card 2 — SimpliEarn**
- Tag: `NLP · QUANT FINANCE`
- Title: SimpliEarn
- One-line: "LLM pipeline for earnings call sentiment — generated 116% returns trading straddle options"
- Links to #projects section

Cards: dark background (`--bg-card`), `1px solid var(--border)`, subtle teal left-border accent (`3px solid var(--accent)`), hover lift effect.

---

## Section 3: About (`#about`)

**Layout:** Two-column on desktop (60/40 split), single column on mobile.

**Left column — Bio:**

Section title: `About Me` (Playfair Display)

Three professional paragraphs:

> I'm a Computer Science student at Georgia Institute of Technology (Intelligence & Devices thread, GPA 3.9), expected to graduate in December 2027. My work sits at the intersection of AI/ML systems and full-stack product engineering — from training segmentation models for manufacturing defect detection to building agentic travel concierge apps powered by orchestrated MCP servers.

> Currently, I'm a Research Intern at Georgia Tech's AI in Manufacturing Pilot Facility (AIMFP), where I co-authored a paper on CV-driven melt pool monitoring in laser powder bed fusion. I'm also an incoming Software Engineering Intern at Synopsys this summer. At Georgia Tech's Big Data Big Impact club, I led a cross-functional team building SimpliEarn — a full-stack earnings call intelligence platform that generated 116% returns algorithmically trading straddle options using FinBERT sentiment signals.

> Outside of work, I'm a former member of Brazil's national Tchoukball team, an avid home cook, and a Harry Potter enthusiast. I speak English, Portuguese, Spanish, Bengali, and conversational Japanese.

**Right column — Skills grid:**

Section sub-label: `SKILLS` (JetBrains Mono, teal, small, uppercase)

Four skill category rows, each with a label and teal-tinted pill tags:

```
AI / ML         [TensorFlow] [PyTorch] [Keras] [OpenCV] [U-Net] [CNNs] [Scikit-learn] [XGBoost] [MCP] [Agent Orchestration]
Full-Stack      [FastAPI] [React] [Django] [Supabase] [PostgreSQL] [Docker] [GCP] [Azure] [REST APIs]
Data & Viz      [Pandas] [NumPy] [Matplotlib] [Plotly] [Napari] [Neo4j] [NetworkX] [Tableau]
Languages       [Python] [Java] [C] [SQL] [R] [Assembly]
```

Tags: `JetBrains Mono`, 0.75rem, `--bg-secondary` background, `1px solid var(--accent-dim)` border, teal text, `4px` border-radius.

---

## Section 4: Projects (`#projects`)

Section title: `Projects` (Playfair Display)
Section sub-label above: `SELECTED WORK` (JetBrains Mono, teal, small, uppercase)

**Four project cards, in this order:**

---

### Card 1 — Winston AI: Agentic Travel Butler
**Tags:** `EXPO / REACT NATIVE` `FASTAPI` `SUPABASE` `MCP`
**Title:** Winston AI: Agentic Travel Butler
**Description:**
Built a chat-first AI travel concierge mobile app for end-to-end itinerary planning and booking. Architected an agentic system with 8 production MCP servers behind a custom orchestration gateway — enabling fully autonomous multi-step trip planning, booking, and export with no human-in-the-loop. Designed a normalized itinerary schema enforced end-to-end across LLM outputs, FastAPI routes, and Postgres/Supabase persistence.
**Highlight stat:** `8 MCP servers · Fully autonomous booking pipeline`

---

### Card 2 — AIMFP: CV-Driven Melt Pool Monitoring
**Tags:** `TENSORFLOW` `KERAS` `U-NET` `COMPUTER VISION` `RESEARCH`
**Title:** Qualification of In-Situ Melt Pool Monitoring in LPBF
**Description:**
Co-authored a published paper on computer vision-driven defect monitoring in laser powder bed fusion manufacturing. Trained U-Net/CNN segmentation models on high-resolution melt pool images to detect layer-wise defects (IoU/F1 evaluation). Built a reproducible CV pipeline with augmentation, custom loss functions, and a Napari-based 3D CAD viewer that cut expert review time by 65%.
**Highlight stat:** `65% reduction in expert review time · Co-authored paper`

---

### Card 3 — SimpliEarn: Earnings Call Intelligence
**Tags:** `FINBERT` `FASTAPI` `SUPABASE` `GCP` `NLP`
**Title:** SimpliEarn
**Description:**
Built a full-stack earnings call intelligence platform using FinBERT sentiment analysis and LLM-based extraction (FAISS embeddings, Chain-of-Thought prompting). Optimized the end-to-end LLM pipeline to cut latency by 42% and API costs by 28%. Algorithmically traded straddle options using extracted sentiment signals — generating 116% returns.
**Highlight stat:** `116% returns · 42% latency reduction · 28% API cost savings`

---

### Card 4 — AI Agent for Investment Banking Research
**Tags:** `LANGCHAIN` `LANGGRAPH` `NEO4J` `YFINANCE`
**Title:** AI Investment Banking Research Agent
**Description:**
Built a LangChain/LangGraph agent that scans portfolio holdings via yfinance and NewsAPI, ranks relevance and impact to the user's portfolio, and sends alerts on material deltas. Implemented a research loop writing to a continuously updated knowledge graph (Neo4j/NetworkX) keyed by tickers and industries, with LLM summarization to generate research briefs.
**Highlight stat:** `Neo4j knowledge graph · Multi-source signal aggregation`

---

**Card layout:**
- Full-width cards stacked vertically (not a grid — one per row for readability)
- `--bg-card` background, `1px solid var(--border)` border, `8px` border-radius
- On hover: border becomes `1px solid var(--accent-dim)`, card lifts `translateY(-2px)`
- Left side: tag pills + title + description
- Right side (desktop): highlight stat in a small teal-bordered callout box, JetBrains Mono font
- On mobile: stack vertically, stat box below description

---

## Section 5: Contact (`#contact`)

Centered layout, max-width 600px.

Section title: `Get In Touch` (Playfair Display)

Short paragraph:
> I'm always open to research collaborations, internship opportunities, and interesting projects. The best way to reach me is by email.

**Three icon + link rows:**

```
✉  ritwij.ghosh@gmail.com          → mailto:ritwij.ghosh@gmail.com
🔗  linkedin.com/in/ritwij-ghosh    → https://linkedin.com/in/ritwij-ghosh
⌥  github.com/ritwij-ghosh          → https://github.com/ritwij-ghosh
```

Use SVG icons (inline, simple) rather than emoji. Each row: icon in teal + label in Inter + the link text in text-secondary. On hover, the whole row gets teal color. Spacing: `20px` gap between rows.

**Footer** (below contact, full-width):
```
© 2026 Ritwij Ghosh · Built with HTML, CSS & JS
```
Inter 400, text-muted, centered, small. Add `16px` padding top/bottom.

---

## JavaScript Behavior

1. **Active nav highlighting:** IntersectionObserver watches each section. When a section is ≥ 40% in view, its corresponding nav link gets the active teal style.

2. **Scroll-triggered fade-in:** All `.fade-in` elements start `opacity: 0; transform: translateY(20px)`. IntersectionObserver triggers `opacity: 1; transform: translateY(0)` with a 500ms ease-out transition when they enter the viewport. Add `fade-in` class to: section titles, project cards, about paragraphs, skill rows, contact links.

3. **Navbar blur on scroll:** On `window.scroll`, if `scrollY > 50`, add class `scrolled` to `<nav>`. CSS handles the backdrop-filter and border.

4. **Hero underline animation:** CSS only. `@keyframes drawLine { from { transform: scaleX(0) } to { transform: scaleX(1) } }`. Applied to a `::after` pseudo-element on the h1, `transform-origin: left`. Delay 800ms, duration 600ms, ease-out. Only plays once on load.

5. **Mobile hamburger:** Toggle a `nav-open` class on the nav. CSS shows/hides the mobile menu.

6. **Smooth scroll:** `html { scroll-behavior: smooth; }` CSS only.

---

## Content Accuracy Notes

Use exactly these details from the resume — do not invent or approximate:

- **GPA:** 3.9/4.0
- **Graduation:** December 2027
- **Synopsys role:** Incoming Software Engineering Intern, June–August 2026
- **AIMFP role:** Research Intern – Computer Vision, June 2025–Present
- **Paper title:** "Qualification of In-Situ Melt Pool Monitoring in Laser Powder Bed Fusion"
- **SimpliEarn returns:** 116%
- **Latency reduction:** 42%, API cost reduction: 28%
- **Expert review time reduction:** 65%
- **MCP servers count:** 8
- **Email:** ritwij.ghosh@gmail.com
- **LinkedIn:** linkedin.com/in/ritwij-ghosh
- **GitHub:** github.com/ritwij-ghosh
- **Hackathon:** 1st Place @ Microsoft JITO Hackathon (JainVerse — NOT included as a project card but can be mentioned in About or a small "Also" section at the bottom of Projects if desired)
- **Competitions line (optional small text at bottom of Projects):** `1st Place @ Microsoft JITO Hackathon · Runner Up @ TartanHacks · IMC Prosperity 4`

---

## Quality Checklist Before Finishing

- [ ] All four sections present and reachable via nav
- [ ] Sticky nav works, active link updates on scroll
- [ ] Hero underline animation fires once on load
- [ ] Scroll fade-in works on all major content blocks
- [ ] Mobile hamburger menu works
- [ ] All links (email, LinkedIn, GitHub) are correct and open properly
- [ ] No Lorem Ipsum anywhere — all real content from above
- [ ] Cards have hover states
- [ ] Site looks good at 375px, 768px, and 1280px
- [ ] Background gradient visible but subtle
- [ ] Google Fonts load correctly (Playfair Display, Inter, JetBrains Mono)
- [ ] `prefers-reduced-motion` media query disables all transitions/animations

---

## Output

A single `index.html` file. Everything — HTML structure, `<style>` block, `<script>` block — in one file. Ready to push to a GitHub repo and enable GitHub Pages with zero additional configuration.
