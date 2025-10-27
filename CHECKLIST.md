# ✅ Accessibility & SEO Checklist

## SEO Metadata

### Root Layout (`src/app/layout.tsx`)
- ✅ `title` - Glavni naslov
- ✅ `description` - Opis sajta
- ✅ `keywords` - Ključne riječi
- ✅ `openGraph` - Open Graph tags za social sharing
  - title, description, type, locale, siteName
- ✅ `twitter` - Twitter Card metadata
- ✅ `lang="sr"` na html tagu

### Apply Page Layout (`src/app/apply/layout.tsx`)
- ✅ Poseban metadata za apply stranicu
- ✅ OpenGraph optimizovan za aplikacionu formu

## Accessibility (A11y)

### Semantic HTML
- ✅ `<header>` za sticky navigaciju
- ✅ `<nav>` sa `aria-label="Glavna navigacija"` za desktop meni
- ✅ `<nav>` sa `aria-label="Mobilna navigacija"` za mobilni meni
- ✅ `<main>` wrapper oko glavnog sadržaja
- ✅ `<section>` za sve sekcije sa proper ID-ovima
- ✅ `<footer>` za footer

### Heading Hierarchy
- ✅ `<h1>` - Hero naslov (jedan po stranici)
- ✅ `<h2>` - Naslovi sekcija (ValueProps, Tiers, HowItWorks, itd.)
- ✅ `<h3>` - Podnaslovi kartica i komponenti
- ✅ `<h4>` - Footer naslovi

### ARIA Labels
- ✅ `aria-label="Glavna navigacija"` na desktop nav
- ✅ `aria-label="Mobilna navigacija"` na mobilni nav
- ✅ `aria-label="Otvori meni"` na hamburger dugme
- ✅ `aria-expanded={mobileMenuOpen}` na mobilni meni toggle
- ✅ `aria-label` na svim social ikonama (Facebook, Instagram, LinkedIn, Email)

### Form Accessibility
- ✅ `<Label>` povezan sa svakim input poljem (`htmlFor` + `id`)
- ✅ `required` atributi na obaveznim poljima
- ✅ Vizuelni indikatori (*) za obavezna polja
- ✅ Semantic `<form>` element
- ✅ Proper `type` atributi (text, email)

### Keyboard Navigation
- ✅ Svi elementi fokusabilni
- ✅ Focus states sa `ring-offset` i `ring-2`
- ✅ Logičan tab order
- ✅ Smooth scroll sa `scroll-smooth` klasom

### Visual Accessibility
- ✅ Dovoljan kontrast između teksta i pozadine
- ✅ Focus indicators na svim interaktivnim elementima
- ✅ Hover states za sve linkove i dugmad
- ✅ Loading stanja jasno označena (spinner + tekst)
- ✅ Success stanja jasno prikazana (ikona + poruka)

## Technical Implementation

### Component Architecture
- ✅ Server Components kao default
- ✅ Client Components samo gdje je potrebno ('use client')
  - Header (interaktivnost menija)
  - Hero (Framer Motion animacije)
  - Apply form (useState hooks)

### Styling
- ✅ Tailwind CSS sa shadcn/ui
- ✅ Grid-based layouts
- ✅ `max-w-6xl` container na svim sekcijama
- ✅ `rounded-2xl` na karticama
- ✅ Soft shadows
- ✅ Responsive breakpoints (md:, lg:)

### Animations
- ✅ Framer Motion suptilne animacije
- ✅ Fade-in effects
- ✅ Slide-up effects
- ✅ Stagger children animacije
- ✅ Smooth scroll behavior

### Navigation
- ✅ Sticky header
- ✅ Smooth scroll to anchor links
- ✅ Funkcionalni CTA dugmad
- ✅ In-page anchors: #value, #tiers, #how, #featured, #partners
- ✅ Routing to /apply with query params

## Testiranje

### Manuelno testiranje
- [ ] Testiraj sa screen reader-om (VoiceOver/NVDA)
- [ ] Navigiraj samo tastaturom (Tab, Enter, Space)
- [ ] Testiraj na različitim screen size-ovima
- [ ] Proveri kontrast sa aXe DevTools ili Lighthouse
- [ ] Testiraj forme sa različitim input-ima

### Automated Testing
- [ ] Lighthouse Accessibility score (target: 90+)
- [ ] axe DevTools scan
- [ ] WAVE evaluation tool
- [ ] HTML validator

## Preostalo za produkciju

- [ ] Dodati prave slike sa `alt` tekstovima
- [ ] Implementirati Skip to Content link
- [ ] Dodati Error boundaries
- [ ] Implementirati error states u formi
- [ ] Dodati CAPTCHA za spam zaštitu
- [ ] Implementirati proper focus trapping u modalima (ako se dodaju)
