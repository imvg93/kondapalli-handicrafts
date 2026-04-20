# Kondapalli Handicrafts

Marketing site and product catalog for the Kondapalli Handicrafts artisan collective — hand-carved Nakashi wooden toys from Andhra Pradesh.

Built with React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion, and React Router.

## Pages

- `/` — Home (hero, stats, featured collection, craft process, heritage, artisan spotlight, commitments, press, testimonials, newsletter)
- `/collection` — Product grid with category filter, sort, wishlist, and pagination
- `/product/:slug` — Product detail with gallery, specs, trust badges, craft story, related products
- `/about` — About page with mission, timeline, values, stats, team, and contact cards
- `/contact` — Contact form, studio info, WhatsApp CTA, social links, live Google Map

## Local development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` (or the next free port).

## Scripts

| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server with HMR.  |
| `npm run build`   | Type-check and build for production. |
| `npm run preview` | Serve the production build locally.  |
| `npm run lint`    | Run ESLint across the project.       |

## Project structure

```
src/
├── components/         Shared UI (Navbar, Footer, ProductCard, Hero, etc.)
├── data/
│   └── products.ts     Single source of truth for the product catalog.
├── pages/              Route-level pages.
├── App.tsx             Router + layout shell.
├── main.tsx            React entry.
└── index.css           Tailwind v4 theme tokens and global styles.
```

## Tech stack

- **React 19** with **TypeScript**
- **Vite 8** (via `@vitejs/plugin-react`)
- **Tailwind CSS v4** (via `@tailwindcss/vite`) — Material 3 color tokens defined in `src/index.css`
- **Framer Motion** — scroll-triggered reveals, layout animations, drawer transitions
- **React Router v7** — client-side routing with scroll reset on navigation

## Notes

- Product imagery is currently loaded from external AI reference URLs and placeholder avatars. Swap these in `src/data/products.ts` and page-level image constants when real photography is ready.
- The Contact form is front-end only — wire it to your backend or an email service (Formspree, EmailJS, etc.) in `src/pages/Contact.tsx`.
- The Google Map uses the public embed URL with no API key. If you need custom styling or advanced features, migrate to the Google Maps Embed API with a key.
