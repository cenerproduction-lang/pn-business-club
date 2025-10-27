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

## 🎨 Design principi

- **Minimalan i čist dizajn**
- **Grid-based layout**
- **Maksimalna širina: 6xl container**
- **Rounded corners: rounded-2xl**
- **Soft shadows**
- **Suptilne animacije** (fade/slide sa Framer Motion)

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
