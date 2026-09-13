# Deepak — Portfolio

Production-quality personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. Designed for deployment on GitHub Pages.

## Quick Start

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (includes the configured base path).

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

### 1. Configure base path

Edit **one value** in `vite.config.ts`:

```ts
const GITHUB_PAGES_BASE = '/Deepak-Portfolio/'
```

| Site type | Base path |
|-----------|-----------|
| `USERNAME.github.io` (user site) | `'/'` |
| `USERNAME.github.io/REPO` (project site) | `'/REPO/'` |

Also update the same path in `public/404.html` for SPA routing on GitHub Pages.

### 2. Enable GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set **Source** to **GitHub Actions**
4. Push to `main` — the workflow deploys automatically

### 3. Add your resume

Place your PDF at:

```
public/resume.pdf
```

The "Download Resume" button links to this file.

## Customize Content

All portfolio content lives in structured data files:

| File | Content |
|------|---------|
| `src/config/site.ts` | Name, links, email, image paths |
| `src/data/projects.ts` | Projects and case studies |
| `src/data/skills.ts` | Skill groups |
| `src/data/experience.ts` | Timeline entries |
| `src/data/achievements.ts` | Certifications & achievements |

Replace `// TODO:` placeholders with your real information.

## Images

- `public/images/portrait-hero.png` — Hero portrait
- `public/images/portrait-about.png` — About section portrait

Replace these with your own photos. Keep similar aspect ratios for best results.

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- React Router
- Lucide React icons
