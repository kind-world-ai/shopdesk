# AgenticVani

Professional business management tools for Indian SMBs — salons, construction firms, and shops.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Forms**: React Hook Form + Zod validation
- **Payments**: Razorpay Standard Checkout
- **Icons**: Lucide React
- **Language**: TypeScript

## Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with all marketing sections |
| `/salon` | Salon CRM landing page |
| `/construction` | Construction CRM landing page |
| `/shop` | Product catalog grid |
| `/shop/[slug]` | Product detail pages |
| `/checkout/[slug]` | Checkout with Razorpay integration |
| `/checkout/success` | Post-payment thank-you page |

### Product Slugs

- `salon-crm` — AgenticVani CRM (₹999)
- `construction-crm` — AgenticVani Lite (Free)
- `agenticvani-pro` — AgenticVani Pro (₹2,999)
- `custom-setup` — Custom Setup (₹9,999)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Razorpay Setup

1. Get your API keys from [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Replace the placeholder key in `lib/razorpay.ts`:
   ```ts
   const RAZORPAY_KEY_ID = "rzp_test_XXXXXXXXXXXXX"; // Replace with your key
   ```

## Deploy to Netlify

This project includes `netlify.toml` for seamless deployment.

1. Push to GitHub
2. Connect repo in [Netlify Dashboard](https://app.netlify.com/)
3. Netlify auto-detects Next.js — no extra config needed
4. Install the Next.js plugin if prompted: `@netlify/plugin-nextjs`

### Required: Install Netlify Next.js Plugin

```bash
npm install -D @netlify/plugin-nextjs
```

Or add it from the Netlify UI under **Site Settings → Build & Deploy → Plugins**.

## Project Structure

```
shopdesk/
├── app/
│   ├── layout.tsx              # Root layout (Navbar, Footer, BottomCTA)
│   ├── page.tsx                # Homepage
│   ├── shop/
│   │   ├── page.tsx            # Product catalog
│   │   └── [slug]/page.tsx     # Product detail
│   ├── checkout/
│   │   ├── [slug]/page.tsx     # Checkout + Razorpay
│   │   └── success/page.tsx    # Thank-you page
│   ├── salon/page.tsx
│   ├── construction/page.tsx
│   └── sitemap.ts
├── components/
│   ├── navigation/             # Navbar, BottomCTA
│   ├── sections/               # All marketing sections
│   ├── cards/                  # ProductCard
│   ├── ui/                     # Button
│   └── seo/                    # JSON-LD schemas
├── lib/
│   ├── products.ts             # Product data (single source of truth)
│   └── razorpay.ts             # Razorpay checkout helper
└── netlify.toml                # Netlify deployment config
```

## License

Private — All rights reserved.
