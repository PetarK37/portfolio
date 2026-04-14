# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site for a full-stack developer. Single-page React app with animated sections (Hero, About, Skills, Experience, Projects, Contact), dark/light theme, particle background, and smooth scroll navigation.

**Live site:** www.petarkomordzic.com (GitHub Pages)

## Commands

- `npm run dev` — Start Vite dev server (host: 0.0.0.0)
- `npm run build` — TypeScript check + Vite production build
- `npm run lint` — ESLint across all files
- `npm run preview` — Preview production build locally
- `npm run deploy` — Build + deploy to GitHub Pages via gh-pages

## Architecture

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS 3

**Entry flow:** `main.tsx` → `App.tsx` (particle background + theme provider) → `MainSection.tsx` (composes all sections)

**Key directories:**
- `src/components/layout/` — Page sections (HeroSection, AboutSection, etc.) and navigation (DesktopNavbar, MobileNavbar)
- `src/components/ui/` — Reusable UI elements (ThemeToggle, DownloadButton)
- `src/context/ThemeContext.tsx` — Light/dark mode via React Context, persisted to localStorage
- `src/hooks/` — `UseActiveSection` (tracks visible section for nav highlighting), `UseIsVisible` (Intersection Observer wrapper)
- `src/utils/constants.tsx` — All data: skills array (icons, colors), NAV_ITEMS
- `src/utils/helper.ts` — Utility functions (shuffleArray for skill display)

**Styling:** Tailwind with CSS custom properties for theming. Dark mode uses class-based toggling. Color palette defined in `src/assets/styles/index.css` and extended in `tailwind.config.js`.

**Animation libraries:** Framer Motion (section animations), react-type-animation (typing effect), react-scroll (smooth scrolling), tsparticles (background particles).

**Icons:** @iconify/react with skill-icons collection.

## Deployment

GitHub Pages via `gh-pages` package. Custom domain configured in `public/CNAME`. Build output goes to `dist/`. SEO meta tags (OpenGraph, Twitter Card) are in `index.html`.
