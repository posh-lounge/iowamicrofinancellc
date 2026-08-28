# IA Micro Lending — Website

A modern, fully responsive Next.js 14 website for **IA Micro Lending** (Des Moines, Iowa), rebuilt from the original GoDaddy site with a fintech-app-inspired UI: bold color blocks, card-based layout, and an interactive loan estimator — the kind of polish you'd expect from a mobile banking or mobile-money app, tuned for a local micro lender.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with a custom design-token theme
- **Poppins** (via `next/font/google`) as the sole typeface, weights 300–800
- **lucide-react** for icons
- No backend / database required — the contact form is client-side only and ready to be wired to your API route, email service, or CRM of choice

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx          Root layout, Poppins font, Navbar/Footer
  page.tsx             Home page (hero, loan estimator, products, steps, testimonials, CTA)
  what-we-do/page.tsx   Loan products in detail + what you need to apply
  contact/page.tsx     Contact info, hours, embedded map, contact form
  globals.css          Design tokens & base styles
components/
  Navbar.tsx           Sticky nav with mobile menu
  Footer.tsx            Site footer with contact/hours
  LoanCalculator.tsx    Interactive "Loan Estimator" — the site's signature UI element
  ContactForm.tsx       Client-side contact form
  SectionHeading.tsx    Reusable section heading
```

## Design system

| Token            | Hex       | Use                              |
|-------------------|-----------|-----------------------------------|
| `teal-deep`        | `#0C7967` | Primary brand color, CTAs         |
| `teal-midnight`     | `#072420` | Dark sections, footer             |
| `gold-sunrise`      | `#F3A93E` | Accent, highlights on dark bg     |
| `cloud`             | `#F7F5EF` | Page background                   |
| `ink`               | `#10201D` | Primary text                      |

Font scale, radii, and shadows are defined in `tailwind.config.ts`.

## Next steps before going live

1. **Wire the contact form** — `components/ContactForm.tsx` currently simulates a submission. Point it at an API route, [Resend](https://resend.com), [Formspree](https://formspree.io), or your CRM.
2. **Swap in real photography** — the current build is deliberately photo-free (icon + gradient driven) so it renders anywhere with zero dependencies. Drop images into `public/` and reference them with `next/image` where you'd like added warmth (e.g. the hero or testimonials).
3. **Confirm licensing/compliance copy** — loan ranges, rates, and terms in this build are illustrative placeholders based on the original site's content. Replace with your actual, compliant lending disclosures before launch.
4. **Set the production domain** — update `metadataBase` in `app/layout.tsx` if the domain changes.
5. **Deploy** — this project deploys cleanly to [Vercel](https://vercel.com) (recommended for Next.js), Netlify, or any Node hosting that supports Next.js 14.

## Build

```bash
npm run build
npm start
```
