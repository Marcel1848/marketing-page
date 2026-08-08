# CLAUDE.md

Anleitung für Claude Code in diesem Repository.

## Projekt

Marketing-Page (Single-Page mit Anker-Navigation) für ein CAS-Projekt.
Statisch gerendert, Deployment auf Vercel.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS 4 · ESLint

## Befehle

```bash
npm install       # Abhängigkeiten (einmalig)
npm run dev       # Dev-Server auf http://localhost:3000
npm run build     # Produktions-Build - vor jedem Push ausführen
npm run lint      # ESLint
npm run typecheck # tsc --noEmit
```

## Struktur

```
app/                 Routen (App Router)
  layout.tsx         Root-Layout: Metadaten, Font, Header/Footer, Skip-Link
  page.tsx           Startseite - reiht nur Sektionen aneinander
  globals.css        Tailwind-Import + Design-Tokens im @theme-Block
  sitemap.ts         Sitemap
  robots.ts          robots.txt
  impressum/         Rechtstext (Platzhalter)
  datenschutz/       Rechtstext (Platzhalter)
components/
  header.tsx         Sticky-Header, einzige Client-Komponente (Mobile-Menü)
  footer.tsx
  sections/          Je eine Datei pro Seitenabschnitt
  ui/                Wiederverwendbare Bausteine: Container, Section, ButtonLink
content/site.ts      Sämtliche Texte, Links, Preise, FAQ
lib/cn.ts            Klassen-Merger
```

## Konventionen

**Inhalt gehört in `content/site.ts`, nicht in Komponenten.** Neue Texte, Preise
oder FAQ-Einträge dort ergänzen; Komponenten lesen nur daraus und mappen über die
Arrays. Das ist die wichtigste Regel in diesem Projekt.

**Server Components sind der Standard.** `"use client"` nur, wenn State oder
Browser-APIs zwingend nötig sind (aktuell einzig `components/header.tsx`).

**Farben und Fonts über die Tokens im `@theme`-Block** in `app/globals.css`.
Also `bg-brand-600`, `text-ink-muted`, `bg-surface-subtle` statt `bg-blue-600`
oder Hex-Werte im JSX. Neue Farbe = neues Token, nicht Inline-Style.

**Neue Sektion anlegen:**
1. Inhalt als Export in `content/site.ts`
2. Komponente unter `components/sections/<name>.tsx`, gewrappt in `<Section>`
3. In `app/page.tsx` an der richtigen Stelle einhängen
4. Bei Anker-Navigation: `id` an `<Section>` setzen und Eintrag in `nav` ergänzen

**Tailwind 4 hat keine `tailwind.config.js`.** Konfiguration läuft über
`@theme` in der CSS-Datei. Keine Config-Datei anlegen.

**Imports** über den Alias `@/` (z. B. `@/components/ui/section`), nicht relativ.

**Zugänglichkeit** ist Teil der Definition of Done: semantische Elemente,
`aria-label` bei Icon-Buttons, sichtbarer Fokus-Ring, dekorative Grafiken mit
`aria-hidden="true"`.

**Sprache:** Sämtliche UI-Texte auf Deutsch, `lang="de"`. Code, Variablennamen
und Kommentare ebenfalls, soweit sinnvoll.

## Deployment

Vercel erkennt Next.js automatisch, kein zusätzliches Setup. `NEXT_PUBLIC_SITE_URL`
in den Vercel-Projekteinstellungen setzen (siehe `.env.example`) - ohne diese
Variable zeigen Open-Graph-Tags und Sitemap auf localhost.

## Vor dem Livegang

- Platzhaltertexte in `content/site.ts` ersetzen
- Impressum und Datenschutzerklärung mit echten Inhalten füllen
- Open-Graph-Bild unter `app/opengraph-image.png` (1200×630) ablegen
- Favicon als `app/icon.png` ablegen
- Testimonials nur mit schriftlicher Freigabe veröffentlichen
