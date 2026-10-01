# Tejas — Personal Portfolio Plan

## Product scope
Create a responsive personal portfolio for Tejas (@tejasvswipe) using the supplied Resume Google Doc plus public GitHub projects. The site presents Tejas as an independent AI/software builder, researcher working on gravitation theory and the de Broglie hypothesis, and human-rights activist.

## Design direction
- **Design movement:** editorial neo-brutalism softened with modern developer-portfolio polish.
- **Core principles:** clear hierarchy, expressive but readable type, visible proof of work, and warm human context.
- **Color philosophy:** deep ink-blue gives the site focus and technical credibility; light pink adds optimism and a memorable personal signature; ice blue, lavender, and warm cream create supporting layers without flattening the contrast.
- **Layout paradigm:** asymmetrical editorial sections with offset cards, oversized numbered markers, a diagonal hero accent, and a horizontal project rail rather than a centered card grid.
- **Signature elements:** pink underline strokes, rounded blue index tabs, and small orbit/constellation dots referencing research and systems thinking.
- **Interaction philosophy:** links feel like invitations to explore; cards lift subtly, filters are direct, and motion is used only to reinforce hierarchy.
- **Animation:** gentle float for orbit dots, staggered reveal for sections, hover translate on project cards, and respect `prefers-reduced-motion`.
- **Typography system:** Space Grotesk for display headings and IBM Plex Sans for body/UI, with mono labels for metadata.
- **Brand essence:** “Ideas that move from theory to useful tools” for collaborators, builders, feminists, and curious people. Personality: curious, direct, constructive.
- **Brand voice:** concise, thoughtful, lightly irreverent. Example lines: “Building at the edge of theory and useful software.” / “Make something that leaves the world a little better.”
- **Wordmark/logo:** a compact “T/” monogram inside a rounded blue index tab, paired with the Tejas wordmark.
- **Signature brand color:** premium cobalt `#3B5FBD`, paired with deep navy `#1F2B58` and blush `#F1C7D8`.

## Content architecture
- Hero: name, positioning, research + builder + activist identity, CTAs to projects and GitHub.
- About: short biography, current focus, and working areas.
- Selected work: Food Cop AI, ReVolt AI, tidy-up, and ReVolt AI variants; each with concise description, tech tags, and GitHub link.
- Skills: technical, AI/ML, product/startup, research/creative.
- Proof: awards, education, and language highlights from the resume.
- Contact: email/social placeholders only when available; otherwise GitHub CTA and a simple collaboration prompt.

## Project structure
- `src/` — React application source.
- `src/App.*` — page composition and portfolio content.
- `src/styles.*` — theme tokens, responsive layout, animations, accessibility.
- `public/manus-routes.json` — route manifest for the single-page homepage.
- `app.config.ts` — platform logo metadata.

## Implementation notes
- Use a lightweight Vite + React setup with no server/database because the site is a static portfolio.
- Keep all content in local typed data; external project links point to public GitHub URLs.
- Add responsive mobile navigation, semantic landmarks, focus-visible states, and reduced-motion support.
- Use a text-only logo/monogram rather than an unapproved portrait or generated likeness.
