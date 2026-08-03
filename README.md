# Pooja Sharma — Portfolio (Nuxt.js)

A single scrolling page: Hero → About → Skills → Projects → Experience → Contact,
with a sticky nav that jumps to each section.

## Run it locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build for deployment
```bash
npm run generate
```
This outputs a static site in `.output/public` — deploy it to Netlify, Vercel, or GitHub Pages.

## Things to fill in before you publish
- `pages/index.vue` — `projects` array already points at your real repos (Buyer Project, Food); update descriptions/highlights if either project has changed.
- `public/` — drop your real `resume.pdf` here so the Download PDF button works.
- `pages/index.vue` — `contact` section: confirm your email and add your real LinkedIn URL (GitHub is already set).

## Structure
- `components/HeroVisual.vue` — the decorative browser-mockup illustration on the hero
- `components/ProjectCard.vue`, `SkillTag.vue` — reusable cards/tags
- `components/TheNavbar.vue`, `TheFooter.vue` — site chrome, nav links scroll to section IDs
- `pages/index.vue` — the whole site, one page, one file
- `assets/css/main.css` — design tokens (colors, type, spacing)
