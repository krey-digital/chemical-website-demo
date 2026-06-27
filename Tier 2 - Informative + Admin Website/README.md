# ChemCorp Industries — Tier 2: Informative + Admin Website

A professional, dynamic website for a chemical business built with **Next.js 16**, **Convex**, and **Tailwind CSS**. This tier adds a Convex backend, real-time database, and a full admin panel on top of the public-facing informative site.

---

## 🎯 Project Overview

This is a **Tier 2 Informative + Admin Website** — a server-rendered, database-backed site that allows administrators to manage products, certifications, SDS documents, and customer inquiries in real time, while presenting a polished public storefront.

### Key Features

- ✅ Dynamic product pages with slug-based routing (SSR)
- ✅ Convex real-time database (products, inquiries, SDS, certifications)
- ✅ Admin panel with password-protected access (Convex Auth)
- ✅ Product management — create, edit, publish/draft, delete
- ✅ Inquiry tracking system with status management
- ✅ SDS (Safety Data Sheet) file uploads and management
- ✅ Certification management with badges
- ✅ Bulk product import via JSON with history tracking
- ✅ File storage via Convex `_storage`
- ✅ GHS hazard pictogram and signal word support
- ✅ Fully responsive design (mobile-first)
- ✅ SEO optimized with proper meta tags
- ✅ TypeScript for end-to-end type safety
- ✅ WhatsApp integration for instant messaging
- ✅ Email notifications via Resend

---

## 📁 Project Structure

```
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Homepage
│   ├── about/                   # About page
│   ├── products/                # Products listing & [slug] detail pages
│   ├── certifications/          # Certifications showcase
│   ├── contact/                 # Contact form (Resend)
│   ├── privacy-policy/          # Privacy Policy
│   ├── terms/                   # Terms of Service
│   └── admin/                   # Admin panel (auth-protected)
│       ├── page.tsx             # Admin dashboard
│       ├── products/            # Product CRUD management
│       ├── inquiries/           # Inquiry management
│       ├── import-history/      # Bulk import history
│       └── login/               # Admin login
├── components/                  # Reusable React components
│   ├── home/                   # Homepage sections
│   ├── layout/                 # Navbar, Footer
│   ├── products/               # Product cards, detail views
│   └── forms/                  # Contact & inquiry forms
├── content/                     # Static content fallbacks
│   ├── products.ts             # Static product data (seed reference)
│   ├── certifications.ts       # Certification metadata
│   ├── clients.ts              # Client logos
│   ├── testimonials.ts         # Customer testimonials
│   └── company.ts              # Company information
├── convex/                      # Convex backend
│   ├── schema.ts               # Database schema
│   ├── products.ts             # Product queries & mutations
│   ├── inquiries.ts            # Inquiry queries & mutations
│   ├── certifications.ts       # Certification queries & mutations
│   ├── sds.ts                  # SDS file management
│   ├── importHistory.ts        # Import audit log
│   ├── files.ts                # File upload helpers
│   └── auth.ts                 # Convex Auth configuration
├── lib/                         # Utility functions
├── public/                      # Static assets
└── PRODUCTS_EXAMPLE.json        # Reference JSON for bulk import
```

---

## 🗄️ Database Schema (Convex)

| Table | Description |
|---|---|
| `products` | Full product catalog with GHS data, packaging, purity, SDS |
| `inquiries` | Customer contact/quote requests with status tracking |
| `certifications` | Company certifications (ISO, GMP, etc.) |
| `sds` | Safety Data Sheet records linked to `_storage` |
| `importHistory` | Audit log of bulk product import jobs |

### Product Fields
- **Core:** `name`, `slug`, `casNumber`, `unNumber`, `category`, `grade`
- **Content:** `description`, `applications[]`, `purityMin/Max`
- **Packaging:** `packagingOptions[]` → `{ size, unit: KG|L|ML|G|MT }`
- **Safety:** `ghsSignalWord` (DANGER/WARNING), `ghsPictograms[]`
- **Files:** `images[]` → `{ fileId, isPrimary }`, `sdsFileId`, `sdsVersion`, `sdsIssuedAt`
- **Status:** `isPublished`, `isDraft`, `createdAt`, `updatedAt`

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm
- A [Convex](https://convex.dev) account (free tier is sufficient)

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Copy environment file
cp .env.local.example .env.local
```

### Environment Variables

Configure `.env.local`:

```env
# Convex (required)
CONVEX_DEPLOYMENT=dev:your-deployment-name
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud

# Convex Auth secret (required for admin login)
CONVEX_AUTH_SECRET=your-auth-secret-here

# Email via Resend (optional — for contact form)
RESEND_API_KEY=re_xxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@yourdomain.com
RESEND_TO_EMAIL=admin@yourdomain.com

# Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# WhatsApp (optional)
NEXT_PUBLIC_WHATSAPP_NUMBER=919999999999

# Maps (optional)
NEXT_PUBLIC_MAPS_EMBED_URL=https://maps.google.com/...
```

### Convex Setup

```bash
# Push schema and functions to Convex cloud
npx convex dev
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the public site.  
Open [http://localhost:3000/admin](http://localhost:3000/admin) for the admin panel.

### Production Build

```bash
npm run build
npm run start
```

---

## 📄 Pages

### Public Routes

| Route | Description |
|---|---|
| `/` | Homepage — hero, product categories, certifications, testimonials |
| `/about` | Company story, mission, team, facility |
| `/products` | Product catalog with category and grade filtering |
| `/products/[slug]` | Individual product detail page (SSR) |
| `/certifications` | ISO/GMP certification showcase |
| `/contact` | Contact form, business hours, location map |
| `/privacy-policy` | Privacy policy |
| `/terms` | Terms of service |

### Admin Routes (Auth-Protected)

| Route | Description |
|---|---|
| `/admin` | Dashboard overview with key metrics |
| `/admin/login` | Admin authentication |
| `/admin/products` | Product list with publish/draft toggle |
| `/admin/products/new` | Create new product |
| `/admin/products/[id]` | Edit existing product |
| `/admin/inquiries` | View and manage customer inquiries |
| `/admin/import-history` | View bulk JSON import audit log |

---

## 🔧 Configuration

### Admin Access

The admin panel is protected via **Convex Auth**. On first setup:
1. Deploy Convex functions: `npx convex dev`
2. Create an admin user through the Convex dashboard or a seeding script
3. Navigate to `/admin/login` and sign in

### Resend Email Setup

1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Verify your sending domain
4. Set `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_TO_EMAIL` in `.env.local`

### Bulk Product Import

Use `PRODUCTS_EXAMPLE.json` as the reference format. Upload via the admin import tool or directly through the Convex dashboard. Import history is automatically tracked.

---

## 🎨 Design System

- **Colors:** Slate primary (900–50), Amber accent (400–600)
- **Font:** System font stack (performance-optimized)
- **Components:** ShadCN UI + Radix UI primitives
- **Animations:** `tw-animate-css` for smooth transitions
- **Icons:** Lucide React

---

## 🚢 Deployment

### Vercel + Convex (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add all environment variables
4. Deploy — Convex backend auto-scales independently

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables in Netlify dashboard
4. Install the [Netlify Next.js plugin](https://docs.netlify.com/integrations/frameworks/next-js/)

> **Note:** Convex cloud is always the backend regardless of frontend host.

---

## 🧪 Testing

```bash
# Run all tests
npm test

# Watch mode
npm test -- --watch
```

---

## 🔒 Security

- Admin routes protected by Convex Auth session tokens
- Environment variables for all secrets (never committed)
- HTTPS enforced in production
- No sensitive data exposed client-side

---

## 📚 Documentation

- [AGENTS.md](./AGENTS.md) — AI agent development guidelines
- [PRODUCTS_EXAMPLE.json](./PRODUCTS_EXAMPLE.json) — Product import format reference
- [.env.local.example](./.env.local.example) — Full environment variable reference

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) — React framework
- [Convex](https://convex.dev/) — Real-time backend
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [ShadCN UI](https://ui.shadcn.com/) — Component library
- [Resend](https://resend.com/) — Email delivery
- [Lucide React](https://lucide.dev/) — Icon library

---

**Built with ❤️ for ChemCorp Industries**
