# Juan Camilo Herrera Salcedo — Portfolio

Personal portfolio built with React + Vite + Tailwind CSS + Framer Motion.

## Stack

- **React 18** — UI
- **Vite 5** — Build tool
- **Tailwind CSS 3** — Styling
- **Framer Motion 11** — Animations
- **React Icons 5** — Tech stack icons

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Adding Your Images

Place images in the `public/` folder at the project root:

| File | Used in |
|------|---------|
| `public/profile.png` | About section profile photo |
| `public/juego.png` | JS Mini Game project card |
| `public/proyecto-de-grado.png` | School Management project card |
| `public/lorelis-painting.png` | Lorelis Painting project card |

All images have gradient fallbacks — the site looks complete without them.

## Build for Production

```bash
npm run build
npm run preview
```

Output goes to `dist/`. Deploy to Vercel, Netlify, or GitHub Pages.

## Sections

1. **Navbar** — Sticky with backdrop-blur on scroll, mobile hamburger
2. **Hero** — Typing animation cycling through role titles, dot-grid background
3. **About** — Bio, profile image, floating badges
4. **Tech Stack** — Frontend icons grid + Automation cards with hover glow
5. **Metrics** — Animated counters (3,000+ leads, 6+ clients, etc.)
6. **Projects** — 5 glassmorphism cards with status badges and links
7. **Skills** — Animated progress bars for Frontend + Automation
8. **Footer** — Social links, built-with badge
