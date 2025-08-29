# Feature Showcase – Vite + React + Tailwind v4 (JavaScript)

A responsive feature showcase section based on the provided UI:
- Right-side feature list is clickable and highlights the active item with a blue indicator
- Left/right arrows switch features
- Center iPhone image, left title and bullets update with the active feature
- Section becomes sticky when it enters view; scrolling auto-switches features (1 → 5), then normal scrolling resumes
- Mobile-friendly (single-column stack)

## Tech
- Vite
- React 18 (JavaScript only – no TypeScript)
- Tailwind CSS v4 (no tailwind.config.js or postcss.config.js)

## How Tailwind is used
- Tailwind v4 is imported only inside `src/components/feature-showcase.css` with `@import "tailwindcss";`.
- There is no `tailwind.config.js`, `postcss.config.js`, or global `index.css`.
- Only the `FeatureShowcase` component uses Tailwind utility classes.

## Run Locally
```bash
npm install
npm run dev
# open http://localhost:5173
```

## Build & Preview
```bash
npm run build
npm run preview
```

## Implementation Notes
- The container height is `features.length * 100vh`. An inner panel uses `position: sticky; top: 0; height: 100vh`.
- Scroll progress through the container is mapped to an index (0…4). Clicks/arrows call `scrollToFeature(index)` which scrolls to the correct slice so the scroll-driven state stays in sync.
- Image for Feature 1 uses the provided Source URL exactly: `https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-2nLyzFcMZr68pX9BBu4AEo8bYstT8h.png`.

## Deploy (Vercel)
- Framework preset: Vite
- Build command: `vite build`
- Output directory: `dist`


**Git Clone**
```bash
https://github.com/vishnuu5/MERN-task-preva-care.git
```


**Deployment Demo**
### Demo Task
[Click-Demo](https://mern-task-preva-care.vercel.app)