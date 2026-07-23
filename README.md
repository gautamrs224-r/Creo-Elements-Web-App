## Stack

- **React 18** (Vite) — plain JavaScript, no TypeScript
- **React Router DOM** — client-side routing
- **Tailwind CSS** (v3, classic `tailwind.config.js`)
- **GSAP** (+ ScrollTrigger) — all animations, replacing Framer Motion
- **React Icons** — replacing `lucide-react`

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  assets/            Images (service icons, hero photo, road background)
  animations/         GSAP animation factories (e.g. the scroll-driven hero)
  components/
    layout/           TopBar, BottomNav, Footer, PageHero, ScrollToTop
  data/               Plain JS data: services, testimonials, clients, etc.
  hooks/              useFadeUpOnMount, useScrollReveal (GSAP helpers)
  pages/              One file per route (Home, About, WhatWeDo, ...)
  sections/home/      Homepage-only sections (Hero, About, Expertise, ...)
  styles/index.css    Tailwind entry + the site's custom utility classes
  App.jsx             Route definitions
  main.jsx            App entry point
```