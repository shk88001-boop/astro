# Pathlight

A production-ready marketing site and checkout flow for "Pathlight", an invoicing and payments
product for independent consultants and small agencies. Built with [Astro](https://astro.build),
plain HTML/CSS/JS, and ready to deploy to Netlify with zero extra configuration.

## Pages

- `/` — Landing page (hero, features, benefits, testimonials, pricing, FAQ, final CTA)
- `/about` — Company story, mission & vision, timeline, team, stats
- `/services` — Service breakdown, process, pricing overview, FAQ
- `/checkout` — Validated payment form that posts to a configurable webhook
- `/thank-you` — Confirmation page shown after a successful submission

## Getting started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:4321`.

## Configuring the checkout webhook

The checkout form sends a POST request with `{ "email": string, "amount": number }` as JSON to a
webhook URL. That URL is configured in one place: `src/config/webhook.js`, which reads it from the
`PUBLIC_WEBHOOK_URL` environment variable.

1. Copy `.env.example` to `.env`.
2. Set `PUBLIC_WEBHOOK_URL` to your real endpoint.
3. Restart `npm run dev`.

If no environment variable is set, it falls back to `https://example.com/webhook` — replace this
before going live.

## Build

```bash
npm run build
```

Output is written to `dist/`. Preview the production build locally with `npm run preview`.

## Deploying to Netlify

This repo includes a `netlify.toml` with the build command and publish directory already set
(`npm run build` → `dist`), so you can connect the repository in Netlify and deploy with no extra
configuration.

To use a real webhook in production, add `PUBLIC_WEBHOOK_URL` under
**Site settings → Environment variables** in Netlify before deploying.

## Project structure

```
src/
├── components/   Header, Footer, cards, FAQ accordion, hero visual
├── config/       webhook.js — single source of truth for the webhook URL
├── layouts/      Layout.astro — shared header/footer + SEO meta tags
├── pages/        index, about, services, checkout, thank-you
└── styles/       global.css — design tokens and base styles
public/           favicon.svg, og-image.svg
```

## Notes

- All imagery is sourced from Unsplash as royalty-free placeholders; swap for real assets before
  launch.
- The checkout form validates email format and a positive amount client-side, disables the submit
  button while a request is in flight to prevent duplicate submissions, and redirects to
  `/thank-you` only after a successful webhook response.
