# Codyssey — Main Website

A modern, responsive marketing website built with Next.js and TypeScript. This repository contains the main frontend site for Codyssey, powered by Next.js (App Router), TypeScript, Tailwind CSS and configured with ESLint and PostCSS. The site is deployed to Vercel: https://codyssey-main-website-live.vercel.app

> Repository: MANYA-SHUKLA/codyssey-main-website-live

## Table of contents
- [About](#about)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Environment variables](#environment-variables)
- [Project structure](#project-structure)
- [Code quality & formatting](#code-quality--formatting)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License & credits](#license--credits)
- [Contact](#contact)

## About
This is the main landing/marketing website for Codyssey. It uses the Next.js App Router and TypeScript to create a fast, SEO-friendly and accessible frontend. Tailwind CSS + PostCSS provides utility-first styling while ESLint enforces code quality.

## Features
- Next.js (App Router) with TypeScript
- Responsive, accessible UI built with Tailwind CSS
- Static and dynamic pages supported
- Configured ESLint for linting
- PostCSS and Tailwind configuration
- Ready for deployment to Vercel

## Tech stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- PostCSS
- ESLint
- Vercel (deployment)

## Prerequisites
- Node.js 18+ (or the LTS recommended for your environment)
- npm (or yarn / pnpm)

## Getting started

1. Clone the repository
   git clone https://github.com/MANYA-SHUKLA/codyssey-main-website-live.git
   cd codyssey-main-website-live

2. Install dependencies
   npm install

3. Run the dev server
   npm run dev

4. Open http://localhost:3000 in your browser.

Notes:
- The project uses the Next.js App directory (`/app`). If you add pages in the `/pages` directory, verify routing expectations.
- If you prefer yarn or pnpm:
  - yarn install
  - pnpm install

## Available scripts
These are the typical scripts used in Next + TypeScript projects. Use `npm run` to list scripts available in package.json.

- npm run dev — start development server (localhost:3000)
- npm run build — build for production
- npm run start — start production server after build
- npm run lint — run ESLint
- npm run format — (if configured) run Prettier / formatting

If a script name differs in package.json, use the exact command listed there.

## Environment variables
If the site requires runtime environment variables (API keys, analytics, etc.), add them to a `.env.local` file in the project root. Example:

NEXT_PUBLIC_API_BASE_URL=https://api.example.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id

Restart the dev server after adding or changing environment variables.

## Project structure (top-level)
- app/ — Next.js App Router source (pages, layouts, components)
- public/ — static assets (images, icons, robots.txt)
- .gitignore
- next.config.ts — Next.js configuration
- postcss.config.mjs — PostCSS / Tailwind config entry
- eslint.config.mjs — ESLint configuration
- tsconfig.json — TypeScript configuration
- package.json / package-lock.json — dependencies & scripts



## Code quality & formatting
- ESLint is configured to help find and fix problems. Run:
  npm run lint

- If Prettier or formatting is used in the project, run the configured format script or integrate with your editor.

## Deployment
This project is ready to deploy to Vercel and already has a live deployment at:
https://codyssey-main-website-live.vercel.app

To deploy:
- Connect the GitHub repository to Vercel and select the main branch.
- Provide any required environment variables in the Vercel dashboard.
- Vercel will automatically run build and deploy.

## Contributing
Contributions are welcome. Suggested steps:
1. Fork the repo and create a feature branch: git checkout -b feature/your-feature
2. Implement and test your changes locally
3. Lint and format your changes
4. Open a pull request with a clear description of changes

Be sure to follow existing code style and commit message conventions.

## License & credits
No license file is included in this repository. 

Credits:
- Built with Next.js, TypeScript and Tailwind CSS.

## Contact
Repository owner: MANYA-SHUKLA  
Repo URL: https://github.com/MANYA-SHUKLA/codyssey-main-website-live
