# ChemCorp Industries — Tier 3: Advanced Platform

A full-featured B2B chemical commerce platform built with **Next.js 16**, **Convex**, and **Tailwind CSS**. This tier extends Tier 2 with a buyer portal, quote management, a rich-text blog, ERP integration hooks, SDS library, and advanced admin capabilities.

---

## 🎯 Project Overview

This is a **Tier 3 Advanced Platform** — a multi-role, real-time web application serving three audiences:

- **Public Visitors** — browse products, blog, certifications, submit quote requests
- **Registered Buyers** — dashboard, quote history, order tracking
- **Administrators** — full product, buyer, inquiry, quote, blog, SDS, and certification management

### Key Features

- ✅ Buyer registration and authenticated portal
- ✅ Quote request and approval workflow
- ✅ Rich-text blog with Tiptap editor (categories, slugs, cover images)
- ✅ Real-time Convex database (products, buyers, quotes, blog, SDS, certifications)
- ✅ Admin panel with dedicated management for 8+ entity types
- ✅ ERP integration module (erp.ts) for external system sync
- ✅ SDS (Safety Data Sheet) file library with search
- ✅ Certification management with badge display
- ✅ Bulk product import via JSON with audit history
- ✅ GHS hazard data (pictograms, signal words)
- ✅ Cookie consent (GDPR-ready via `react-cookie-consent`)
- ✅ Convex Auth for both admin and buyer authentication
- ✅ Email notifications via Resend
- ✅ Fully responsive design (mobile-first)
- ✅ SEO optimized with structured meta tags
- ✅ TypeScript end-to-end

---

## 📁 Project Structure

```
├── app/                             # Next.js App Router
│   ├── page.tsx                    # Root redirect / landing
│   ├── layout.tsx                  # Root layout (Convex provider, cookie consent)
│   ├── globals.css                 # Global styles
│   │
│   ├── (public)/                   # Public-facing pages (no auth required)
│   │   ├── page.tsx               # Homepage
│   │   ├── about/                 # About page
│   │   ├── products/              # Product catalog & [slug] detail
│   │   ├── certifications/        # Certification showcase
│   │   ├── contact/               # Contact form
│   │   ├── blog/                  # Blog listing page
│   │   ├── blog/[slug]/           # Individual blog post
│   │   └── quote/                 # Public quote request form
│   │
│   ├── (buyer)/                    # Buyer portal (auth required)
│   │   ├── layout.tsx             # Buyer layout with auth guard
│   │   ├── dashboard/             # Buyer dashboard
│   │   └── quotes/                # Buyer quote history & detail
│   │
│   └── admin/                      # Admin panel (auth required)
│       ├── page.tsx               # Admin dashboard overview
│       ├── layout.tsx             # Admin layout with auth guard
│       ├── login/                 # Admin login
│       ├── products/              # Product CRUD (list, new, [id] edit)
│       ├── buyers/                # Buyer management
│       ├── inquiries/             # Customer inquiry management
│       ├── quotes/                # Quote approval workflow
│       ├── blog/                  # Blog post management (Tiptap editor)
│       ├── certifications/        # Certification CRUD
│       ├── sds/                   # SDS document library management
│       └── import-history/        # Bulk import audit log
│
├── components/                      # Reusable React components
│   ├── home/                      # Homepage sections
│   ├── layout/                    # Navbar, Footer
│   ├── products/                  # Product cards, filters, detail view
│   ├── blog/                      # Blog card, editor wrapper
│   ├── buyer/                     # Buyer dashboard components
│   └── forms/                     # Contact, quote, inquiry forms
│
├── content/                         # Static content / seed data
│   ├── products.ts                # Product reference data
│   ├── certifications.ts          # Certification metadata
│   ├── clients.ts                 # Client logos
│   ├── testimonials.ts            # Customer testimonials
│   └── company.ts                 # Company information
│
├── convex/                          # Convex backend functions
│   ├── schema.ts                  # Full database schema (8 tables)
│   ├── products.ts                # Product queries, mutations, actions
│   ├── buyers.ts                  # Buyer registration & management
│   ├── quotes.ts                  # Quote lifecycle management
│   ├── inquiries.ts               # Inquiry management
│   ├── blog.ts                    # Blog post CRUD & publishing
│   ├── certifications.ts          # Certification CRUD
│   ├── sds.ts                     # SDS file management
│   ├── erp.ts                     # ERP integration hooks
│   ├── importHistory.ts           # Import audit log
│   ├── files.ts                   # File upload helpers
│   └── auth.ts                    # Convex Auth configuration
│
├── lib/                             # Utility functions & helpers
├── public/                          # Static assets
└── PRODUCTS_EXAMPLE.json            # Reference JSON for bulk import
```

---

## 🗄️ Database Schema (Convex)

| Table | Description |
|---|---|
| `products` | Full product catalog with GHS, packaging, purity, SDS links |
| `buyers` | Registered buyer accounts and company details |
| `quotes` | Quote requests with line items, status, and approval flow |
| `inquiries` | General customer contact/inquiry submissions |
| `blogPosts` | Rich-text blog content with categories, slugs, and cover images |
| `certifications` | Company certifications (ISO, GMP, etc.) |
| `sds` | SDS records linked to Convex `_storage` |
| `importHistory` | Audit trail for bulk product import jobs |

### Product Fields
- **Core:** `name`, `slug`, `casNumber`, `unNumber`, `category`, `grade`
- **Content:** `description`, `applications[]`, `purityMin/Max`
- **Packaging:** `packagingOptions[]` → `{ size, unit: KG|L|ML|G|MT }`
- **Safety (GHS):** `ghsSignalWord` (DANGER/WARNING), `ghsPictograms[]`
- **Files:** `images[]` → `{ fileId, isPrimary }`, `sdsFileId`, `sdsVersion`, `sdsIssuedAt`
- **Status:** `isPublished`, `isDraft`, `createdAt`, `updatedAt`

### Quote Workflow
```
draft → submitted → under_review → approved / rejected
```

### Blog Post Fields
- `title`, `slug`, `excerpt`, `content` (HTML from Tiptap)
- `category` (regulatory / market / application / company)
- `authorName`, `coverImageId`, `publishedAt`, `isPublished`

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

# Convex Auth secret (required — for admin + buyer login)
CONVEX_AUTH_SECRET=your-auth-secret-here

# Email via Resend (optional — for contact/quote notifications)
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
# Start Convex dev server (pushes schema + functions)
npx convex dev
```

### Development

```bash
npm run dev
```

| URL | Description |
|---|---|
| `http://localhost:3000` | Public website |
| `http://localhost:3000/admin` | Admin panel |
| `http://localhost:3000/dashboard` | Buyer portal (login required) |
| `http://localhost:3000/blog` | Blog listing |

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
| `/` | Homepage — hero, featured products, certifications, testimonials |
| `/about` | Company story, mission, team |
| `/products` | Product catalog with filtering |
| `/products/[slug]` | Product detail (SSR) |
| `/certifications` | Certification showcase |
| `/contact` | Contact form |
| `/blog` | Blog post listing with category filter |
| `/blog/[slug]` | Individual blog post |
| `/quote` | Public quote request form |

### Buyer Portal (Auth Required)

| Route | Description |
|---|---|
| `/dashboard` | Buyer dashboard with account overview |
| `/quotes` | Buyer's quote history and status |
| `/quotes/[id]` | Individual quote detail |

### Admin Routes (Auth Required)

| Route | Description |
|---|---|
| `/admin` | Dashboard with KPIs and recent activity |
| `/admin/login` | Admin authentication |
| `/admin/products` | Product list, publish/draft toggle, bulk import |
| `/admin/products/new` | Create new product |
| `/admin/products/[id]` | Edit product |
| `/admin/buyers` | View and manage registered buyers |
| `/admin/inquiries` | Customer inquiry management with status |
| `/admin/quotes` | Quote review and approval workflow |
| `/admin/blog` | Blog post list |
| `/admin/blog/new` | Create blog post with Tiptap rich-text editor |
| `/admin/blog/[id]` | Edit blog post |
| `/admin/certifications` | Certification CRUD |
| `/admin/sds` | SDS document library |
| `/admin/import-history` | Bulk import audit log |

---

## 🔧 Configuration

### Admin & Buyer Authentication

Both admin and buyer authentication are handled by **Convex Auth**:
1. Deploy Convex functions: `npx convex dev`
2. Set `CONVEX_AUTH_SECRET` in `.env.local`
3. Admin signs in at `/admin/login`; buyers register/log in at `/dashboard`

### Resend Email Setup

1. Sign up at [resend.com](https://resend.com)
2. Create an API key and verify your domain
3. Set `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_TO_EMAIL`

### Tiptap Blog Editor

The blog editor uses **Tiptap** with these extensions:
- `StarterKit` — headings, lists, bold, italic, code blocks
- `Link` — hyperlink support
- `Placeholder` — editor placeholder text

### ERP Integration

The `convex/erp.ts` module provides hooks for syncing product and order data with external ERP systems. Configure webhook endpoints or polling schedules as needed for your ERP provider.

### Bulk Product Import

Use `PRODUCTS_EXAMPLE.json` as the reference format. Import via the admin panel — all imports are logged in the `importHistory` table for auditing.

### Cookie Consent

GDPR cookie consent is managed by `react-cookie-consent`. Customize the banner text and cookie categories in the root `layout.tsx`.

---

## 🎨 Design System

- **Colors:** Slate primary (900–50), Amber accent (400–600)
- **Font:** System font stack (performance-optimized)
- **Components:** ShadCN UI + Radix UI (`@radix-ui/react-dialog`, `@radix-ui/react-select`)
- **Animations:** `tw-animate-css` for smooth transitions
- **Icons:** Lucide React
- **Editor:** Tiptap (rich-text blog content)

---

## 🚢 Deployment

### Vercel + Convex (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add all environment variables in the Vercel dashboard
4. Deploy — Convex backend auto-scales independently

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables in Netlify dashboard
4. Install the [Netlify Next.js plugin](https://docs.netlify.com/integrations/frameworks/next-js/)

> **Note:** The Convex cloud backend is always separate from the frontend host.

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

- Admin and buyer routes protected by Convex Auth session tokens
- All secrets in environment variables (never committed)
- HTTPS enforced in production
- Cookie consent for GDPR compliance
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
- [Tiptap](https://tiptap.dev/) — Rich-text editor
- [Resend](https://resend.com/) — Email delivery
- [Lucide React](https://lucide.dev/) — Icon library
- [react-cookie-consent](https://github.com/Mastermindzh/react-cookie-consent) — GDPR cookie banner

---

**Built with ❤️ for ChemCorp Industries**
