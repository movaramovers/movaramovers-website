# Movara Movers Website

# Movara Movers — Website Build Prompt (Next.js)

## Project Overview
Build a professional, modern moving-company website for **Movara Movers**, a UAE-based moving and relocation company operating out of Sharjah. The site should feel premium, trustworthy, and conversion-focused — similar in structure and polish to https://idealmoversme.com/, but with a cleaner, more modern design (Ideal Movers is an old WordPress/Elementor site — we want something faster, more minimal, and mobile-first).

**Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, Framer Motion for subtle animations. Must be static-export compatible for Netlify free hosting (no server-side API routes unless using a form service like Formspree/Web3Forms for the contact form).

**Domain:** movaramovers.com

---

## Brand Details

- **Name:** Movara Movers
- **Taglines:** "We Move, You Relax!" and "Moving Forward, Delivering Trust"
- **Brand colors:** Navy blue (#0B1E3D approx) + Gold/Amber (#F5A623 approx) as primary palette — matches the logo and flyer. Use white/light-gray backgrounds for contrast sections.
- **Logo concept:** House roofline icon + "MOVARA" wordmark with the "A" in gold, "MOVERS" in navy below it. (Client will supply final logo files — use a placeholder text logo styled this way until then.)
- **Coverage area:** All over UAE — Dubai, Sharjah, Abu Dhabi, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain
- **Base location:** Sharjah, UAE

## Contact Info (use exactly as given)
- **Sales Manager – Abbas:** +971 055 905 7949 (Call/WhatsApp)
- **Sales Manager – Yaseen:** +971 052 537 1781 (Call/WhatsApp)
- **Email:** info@movaramovers.com
- **Website:** www.movaramovers.com
- **Location:** Sharjah, UAE

## Services to Feature
1. Home Shifting
2. Office Shifting / Office Moving
3. Packing & Unpacking
4. Transportation
5. Dismantle & Assemble
6. Safe & Secure Delivery
7. International Moving
8. Domestic Moving
9. Relocation Services
10. Vehicle Shipping
11. Small Parcel Service
12. Storage Solutions

## Value Props / Trust Badges
- Fast & Efficient
- Safe & Secure
- Experienced Team
- Affordable Prices
- "We Care For Your Belongings"
- On Time
- Reliable

---

## Site Structure & Sections

### 1. Header (Sticky)
- Logo (left)
- Nav: Home / About / Services (dropdown with all services) / Coverage Areas / Contact
- Right side: Phone number + prominent "Get a Free Quote" CTA button (gold)
- Mobile: hamburger menu, click-to-call icon visible

### 2. Hero Section
- Full-width background image/video of moving truck + team (use a professional stock moving photo, or a placeholder with instructions to swap client's own truck/team photos later)
- Headline: "Professional Moving & Shifting Services" 
- Subheadline: "Safe, On Time, Reliable — Home, Office, Villa & Apartment Moves All Over UAE"
- Two CTAs: "Get Free Quote" (primary, gold) + "Call / WhatsApp Now" (secondary, opens WhatsApp chat with Abbas's number pre-filled with a greeting message)
- Trust badge row beneath: Safe / On Time / Reliable icons

### 3. About Section
- Short company story (2-3 paragraphs) — "Movara Movers is a trusted moving and relocation company serving UAE..." — position as reliable, experienced, customer-first. Keep it honest/generic since this is a newer company (don't fabricate years of operation or project counts — leave placeholders marked clearly for client to fill in real numbers).
- Image collage or single strong photo alongside text

### 4. Services Grid Section
- Section title: "Our Services"
- Responsive grid (3 columns desktop, 1-2 mobile) of all 12 services listed above, each with an icon, short title, and 1-line description
- Each card links to a dedicated service detail section/anchor or modal (keep it single-page unless client wants multi-page later)

### 5. Why Choose Us Section
- 4-column icon + text layout: Fast & Efficient / Safe & Secure / Experienced Team / Affordable Prices
- Optionally add a stats counter row (Projects Completed, Happy Clients, Years in UAE, Cities Covered) — use placeholder numbers clearly marked `[CLIENT TO CONFIRM]` in code comments so nothing fake goes live

### 6. Coverage Area Section
- "All Over UAE" heading with UAE flag icon
- List/map graphic showing: Dubai, Sharjah, Abu Dhabi, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain
- Embed a Google Map centered on Sharjah

### 7. How It Works / Process Section (optional but recommended, not on reference site — adds professionalism)
- 4 simple steps: Request a Quote → Free Site Survey → Packing & Moving Day → Safe Delivery & Setup

### 8. Testimonials Section
- Placeholder testimonial cards (3) with star ratings — clearly marked as placeholder content for client to replace with real reviews later

### 9. Get a Quote / Contact Form Section
- Form fields: Name, Phone, Email, Moving From, Moving To, Service Type (dropdown), Preferred Date, Message
- Use a static-friendly form handler (Formspree, Web3Forms, or EmailJS) since this will be a static Netlify export — send submissions to info@movaramovers.com
- Below form: direct Call/WhatsApp buttons for both Abbas and Yaseen

### 10. Footer
- Logo + tagline
- Quick Links (Home, About, Services, Contact)
- Services list (linked to anchors)
- Contact block: both phone numbers (click-to-call), email, Sharjah location
- Social icons (placeholder links — Facebook, Instagram, LinkedIn)
- Small embedded Google Map
- Copyright line: "© 2026 Movara Movers. All rights reserved."

### 11. Floating WhatsApp Button
- Fixed bottom-right, all pages, opens WhatsApp chat with Abbas's number and a pre-filled message: "Hello, I would like to get a moving quote."

---

## Design Direction
- Modern, spacious layout — avoid the dated/cluttered WordPress feel of the reference site
- Strong use of navy + gold matching the brand, generous white space, rounded cards with soft shadows
- Smooth scroll-triggered fade/slide-in animations (Framer Motion) on section entry — keep subtle, not distracting
- Fully responsive: mobile-first, test at 375px, 768px, 1024px, 1440px
- Fast image loading via Next.js `<Image />` component with proper sizing/lazy-loading
- Sticky header shrinks slightly on scroll

## Technical Requirements
- Next.js App Router, TypeScript, Tailwind CSS
- Configure for **static export** (`output: 'export'` in next.config) so it deploys cleanly to Netlify's free tier — flag if any feature (like the contact form) needs an external API and can't be pure static
- SEO: proper meta title/description per page, Open Graph tags, favicon, sitemap.xml, robots.txt
- Meta description: "Movara Movers offers professional home, office, and international moving services all over UAE — Dubai, Sharjah, Abu Dhabi, Ajman, RAK, Fujairah, Umm Al Quwain. Safe, on-time, and reliable relocation."
- Accessible: proper alt text on images, semantic HTML, good color contrast
- Clean component structure: `components/Header.tsx`, `Hero.tsx`, `About.tsx`, `Services.tsx`, `WhyChooseUs.tsx`, `Coverage.tsx`, `Testimonials.tsx`, `QuoteForm.tsx`, `Footer.tsx`, `WhatsAppButton.tsx`
- Use placeholder/stock images for now but structure the code so swapping in client's real photos (from the flyer/truck photos) later is a one-line change

## Important — Flag, Don't Guess
- If any content (years in business, number of completed moves, real testimonials, real team photos) isn't provided, use clearly marked placeholder text/comments (`{/* TODO: client to confirm exact years in operation */}`) rather than inventing numbers.
- Don't silently change the phone numbers, email, or service list — use exactly what's specified above.
- If a feature can't work in static export (e.g., server-side form handling), explicitly note it and use a static-compatible workaround (Formspree/Web3Forms) instead of silently switching the whole project off static export.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://movara-moves-forward.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9b134f06-3a8b-4c39-9629-6b45a194b817).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
