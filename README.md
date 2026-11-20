# Ivy Bowers — Portfolio

My personal portfolio site, built with React, TypeScript, and Vite.

**Live site:** [ibowers27.github.io](https://ibowers27.github.io)

## Features

- Light and dark themes that follow the system setting until a theme is chosen
- Project cards with video previews that play on hover (or when scrolled into view on mobile) and open larger on click
- Responsive layout for desktop, tablet, and mobile
- Respects reduced-motion settings for all animations
- Automatic deployment to GitHub Pages with GitHub Actions

## Tech stack

React · TypeScript · Vite · CSS · GitHub Actions · GitHub Pages

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Project structure

```
src/
  components/   UI sections (Hero, About, Projects, Experience, Skills, Contact)
  data/         Site content: projects, experience, and skills
  hooks/        useTheme (light/dark theme logic)
public/         Resume, favicon, and project preview clips
```

Every push to `main` builds the site and deploys it to GitHub Pages.
