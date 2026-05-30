# Chitwan Jungle Tours

Official website for **Chitwan Jungle Tours**, built with **Next.js (App Router)** and **Tailwind CSS**.

## Overview

This project powers a tourism website for jungle safari experiences in Chitwan, Nepal.  
It includes package pages, itinerary details, a gallery, and a contact flow.

## Tech Stack

- Next.js 15
- React 18.x
- Tailwind CSS
- Radix UI components
- Embla Carousel / Swiper
- Vercel Analytics

## Main Routes

- `/` – Home page
- `/plans` – Tour plans and packages
- `/plans/[id]` – Package detail page
- `/itinerary` – Itinerary information
- `/gallery` – Photo gallery
- `/contact` – Contact and inquiry form

## Project Structure

```text
.
├── public/                 # Static assets (images, videos, icons)
├── src/
│   ├── app/                # Next.js App Router pages and route files
│   ├── components/         # Reusable UI and layout components
│   └── lib/                # Shared utilities
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` – start development server
- `npm run build` – create production build
- `npm run start` – run production server
- `npm run lint` – run lint command (`next lint`)

## Notes

- Path aliases are configured in `jsconfig.json`:
  - `@/*` → `src/*`
  - `assets/*` → `public/assets/*`
- This app currently uses Google Fonts via `next/font/google` in `src/app/layout.js`, which requires network access during build.

## Deployment

The project is configured for standalone Next.js output in `next.config.mjs`:

```js
const nextConfig = {
  output: "standalone",
};

export default nextConfig;
```