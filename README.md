# PN Business Club

Ekskluzivna zajednica poslovnih lidera - moderna landing page sa Next.js App Router, shadcn/ui, Tailwind CSS i Framer Motion animacijama.

## 🚀 Tehnologije

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** komponente
- **Framer Motion** za animacije
- **Lucide React** za ikonice
- **Zustand** za state management

## 📁 Struktura projekta

```
pn-business-club/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── leads/
│   │   │       └── route.ts          # API endpoint za prijave
│   │   ├── apply/
│   │   │   └── page.tsx              # Forma za prijavu
│   │   ├── layout.tsx                # Root layout sa metadata
│   │   ├── page.tsx                  # Početna stranica
│   │   └── globals.css               # Globalni stilovi
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Header.tsx            # Sticky navigacija
│   │   │   ├── Hero.tsx              # Hero sekcija sa animacijama
│   │   │   ├── ValueProps.tsx        # Vrijednosti i beneficije
│   │   │   ├── Tiers.tsx             # Članarine (pricing)
│   │   │   ├── HowItWorks.tsx        # Proces prijave
│   │   │   ├── FeaturedMembers.tsx   # Istaknuti članovi
│   │   │   ├── Partners.tsx          # Partneri i popusti
│   │   │   ├── FinalCTA.tsx          # Završni poziv na akciju
│   │   │   └── Footer.tsx            # Footer
│   │   └── ui/                       # shadcn/ui komponente
│   └── lib/
│       └── utils.ts                  # Helper funkcije
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## 🛠️ Instalacija

```bash
# Instaliraj dependencies
npm install

# Pokreni development server
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000) u browseru.

## 🎯 Funkcionalnosti

### Glavna stranica
- **Header**: Sticky navigacija sa smooth scroll
- **Hero**: Animirana hero sekcija sa tri kartice
- **Value Props**: Grid prikaz beneficija
- **Tiers**: Tri nivoa članarina (Silver, Gold, Platinum)
- **How It Works**: 4-step proces
- **Featured Members**: Istaknuti članovi
- **Partners**: Partner beneficije
- **Final CTA**: Poziv na akciju
- **Footer**: Linkovi i kontakt info

### Apply stranica (`/apply`)
- Forma sa poljima: fullName, email, company, plan
- Pre-fill plan parametra iz URL-a (`?plan=gold`)
- POST na `/api/leads`
- Success state sa "Hvala" porukom

### API endpoint (`/api/leads`)
- Prima POST JSON payload
- Loguje podatke u konzolu
- Vraća `{ ok: true }`
- Stub za webhook/email integraciju

## 🎨 Design System & Components

### Color Palette

The application uses a premium, sophisticated color scheme:

**Light Mode:**
- **Primary (Navy/Ink)**: `hsl(220, 40%, 20%)` - Deep navy for headers, text, and primary elements
- **Gold (Accent)**: `hsl(43, 100%, 50%)` - Luxurious gold for CTAs and highlights
- **Background**: `hsl(0, 0%, 100%)` - Pure white
- **Secondary**: `hsl(220, 15%, 95%)` - Light gray for subtle backgrounds
- **Muted**: `hsl(220, 10%, 45%)` - Muted gray for secondary text

**Dark Mode:**
- **Primary (Gold)**: `hsl(43, 100%, 50%)` - Gold becomes primary in dark mode
- **Background**: `hsl(220, 40%, 8%)` - Deep dark blue-gray
- **Card**: `hsl(220, 35%, 12%)` - Slightly lighter for cards
- **Border**: `hsl(220, 30%, 18%)` - Subtle borders

### Typography

- **Headings**: Playfair Display (elegant serif font)
- **Body Text**: Inter (clean, modern sans-serif)
- **Font Sizes**: Responsive scale from text-sm to text-7xl
- **Line Heights**: 120% for headings, 150% for body text

### Spacing System

- Base unit: 8px (Tailwind's default)
- Container padding: Responsive (1rem mobile → 6rem desktop)
- Section padding: 5rem (py-20) → 8rem (py-32) on large screens
- Card padding: 1.5rem → 2rem
- Gap sizes: 1rem → 2rem between elements

### Component Patterns

**Cards:**
- Border radius: `rounded-2xl` (1rem)
- Shadows: `shadow-lg` → `shadow-2xl` on hover
- Border: 2px solid with subtle colors
- Hover effects: Scale (105%), shadow increase, border color shift

**Buttons:**
- Primary: Gold background with navy text
- Secondary: Outline style with hover effects
- Sizes: `sm`, `lg` with responsive padding
- Icon support: Lucide React icons

**Animations:**
- Framer Motion for all transitions
- Staggered children with 0.1-0.2s delay
- Fade + slide up pattern (y: 30 → 0)
- Scale animations for cards (0.9 → 1)
- Duration: 0.5-0.6s with easeOut easing

### Layout Structure

- Max width: `max-w-7xl` (80rem/1280px)
- Responsive grids: 1 col mobile → 2-3 cols desktop
- Flex for navigation and CTAs
- Sticky header with backdrop blur
- Full-bleed hero with background image + overlay

### Interactive Elements

- Smooth scroll behavior (`scroll-smooth`)
- Hover states on all clickable elements
- Active link indicators (underline animation)
- Mobile hamburger menu with slide-in
- Dark mode toggle with system preference detection

### Accessibility

- ARIA labels on all interactive elements
- Semantic HTML (nav, section, header, footer)
- Focus states with ring-2 ring-offset-2
- Color contrast ratios meet WCAG AA standards
- Keyboard navigation support

### Design Principles

- **Premium & Sophisticated**: Navy + Gold color scheme conveys exclusivity
- **Clean & Spacious**: Ample white space, clear hierarchy
- **Responsive & Fluid**: Mobile-first with graceful scaling
- **Animated & Engaging**: Subtle motion enhances UX without distraction
- **Consistent & Systematic**: Reusable patterns across all components

## 🔗 In-page anchori

- `#value` - ValueProps sekcija
- `#tiers` - Membership planovi
- `#how` - Kako funkcioniše
- `#featured` - Istaknuti članovi
- `#partners` - Partneri

## 📱 Responsive

Sajt je potpuno responsive sa breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start
```

Za deployment na Vercel:
```bash
vercel
```

## 📝 TODO

- [ ] Povezati sa stvarnom bazom podataka
- [ ] Dodati email notifikacije
- [ ] Implementirati webhook za CRM
- [ ] Dodati Google Analytics
- [ ] SEO optimizacija
- [ ] Dodati Open Graph tags

## 📄 Licenca

Private project - All rights reserved
