# CLAUDE.md

Anleitung für Claude Code in diesem Repository.

## Projekt

Marketing-Page für die App "Klassik entdecken" (CAS-Projekt): eigene Routen für
Startseite, Über mich, Klassische Musik? und FAQ, verlinkt über den Header.
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
  page.tsx           Startseite
  ueber-mich/        Seite "Über mich"
  klassische-musik/  Seite "Klassische Musik?"
  faq/               Seite "FAQ" (mit Accordion)
  globals.css        Tailwind-Import + Design-Tokens im @theme-Block
  sitemap.ts         Sitemap
  robots.ts          robots.txt
  impressum/         Rechtstext (Platzhalter)
  datenschutz/       Rechtstext (Platzhalter)
components/
  header.tsx         Sticky-Header, einzige Client-Komponente (Mobile-Menü)
  footer.tsx
  sections/          faq-accordion.tsx (Client-Komponente der FAQ-Seite)
  ui/                Wiederverwendbare Bausteine: Container, Section, ButtonLink,
                     PageHeroImage
content/site.ts      Sämtliche Texte, Links, Bilder, FAQ je Seite
lib/cn.ts            Klassen-Merger
```

Jede Inhaltsseite (Startseite, Über mich, Klassische Musik?, FAQ) ist eine eigene
Route unter `app/`, keine Sektion auf einer gemeinsamen Startseite. Der Header
verlinkt zwischen diesen Routen, nicht per Anker innerhalb einer Seite.

## Konventionen

**Inhalt gehört in `content/site.ts`, nicht in Komponenten.** Neue Texte, Preise
oder FAQ-Einträge dort ergänzen; Komponenten lesen nur daraus und mappen über die
Arrays. Das ist die wichtigste Regel in diesem Projekt.

**Server Components sind der Standard.** `"use client"` nur, wenn State oder
Browser-APIs zwingend nötig sind (aktuell einzig `components/header.tsx`).

**Farben und Fonts über die Tokens im `@theme`-Block** in `app/globals.css`.
Also `bg-surface`, `text-ink-muted`, `border-gold` statt `bg-blue-600` oder
Hex-Werte im JSX. Neue Farbe = neues Token, nicht Inline-Style.

Der Seitenhintergrund ist nachtblau (`--color-surface: #0b1f33`, PRD-Vorgabe
der App "Klassik entdecken"), abgesetzte Bereiche (z. B. Footer) nutzen die
etwas hellere `--color-surface-subtle`. Schrift ist creme (`--color-ink`,
gedämpft `--color-ink-muted`), Warmgold (`--color-gold`) ist die Schmuckfarbe
für Zierlinien, Links, Buttons und Fokus-Ring.

**Bei Farbänderungen den Kontrast nachrechnen.** Auf dem dunklen Nachtblau
erreichen viele Farbtöne die geforderten 4.5:1 nicht automatisch;
`--color-ink-muted` ist bereits mit > 7:1 darauf abgestimmt.

**Neue Seite anlegen:**
1. Inhalt als Export in `content/site.ts`
2. Route unter `app/<name>/page.tsx` anlegen, ggf. mit `PageHeroImage` und
   Komponenten aus `components/sections/`
3. Eintrag in `nav` (für den Header) und in `app/sitemap.ts` ergänzen

**Tailwind 4 hat keine `tailwind.config.js`.** Konfiguration läuft über
`@theme` in der CSS-Datei. Keine Config-Datei anlegen.

**Imports** über den Alias `@/` (z. B. `@/components/ui/section`), nicht relativ.

**Zugänglichkeit** ist Teil der Definition of Done: semantische Elemente,
`aria-label` bei Icon-Buttons, sichtbarer Fokus-Ring, dekorative Grafiken mit
`aria-hidden="true"`.

**Sprache:** Sämtliche UI-Texte auf Deutsch, `lang="de"`. Code, Variablennamen
und Kommentare ebenfalls, soweit sinnvoll.

## Änderungen veröffentlichen (Standardablauf)

**Jede fertig umgesetzte Änderung wird committet und auf `main` gepusht** — ohne
vorher nachzufragen. Der Push löst auf Vercel automatisch ein Produktions-Deployment
aus; damit ist jede Änderung unmittelbar online. Das ist der gewünschte
Regelablauf, nicht die Ausnahme.

Ablauf nach jeder abgeschlossenen Aufgabe:

```bash
npm run build && git add -A && git commit -m "<Beschreibung>" && git push
```

Dabei gilt:

1. **Der Build muss vorher fehlerfrei durchlaufen.** Ein kaputter Build wird nicht
   gepusht — er würde auf Vercel abbrechen und im schlimmsten Fall eine defekte
   Version live stellen.
2. **„Fertig umgesetzt" heisst verifiziert**, nicht Zwischenstand. Halbfertige oder
   ungetestete Arbeit bleibt lokal.
3. **Commit-Nachrichten auf Deutsch**, im Imperativ und inhaltlich (was und warum),
   nicht „Update" oder „Änderungen".
4. **`main` ist der Produktionszweig.** Es gibt keine Staging-Stufe — was gepusht
   wird, ist live.
5. **Keine Secrets committen.** `.env` und `.env*.local` stehen in `.gitignore`;
   echte Werte gehören in die Vercel-Projekteinstellungen.

Ausgenommen bleiben Aktionen, die sich nicht ohne Weiteres rückgängig machen
lassen: `git push --force`, das Umschreiben bereits gepushter Historie oder das
Löschen von Branches. Diese vorher abstimmen.

## Deployment

Vercel erkennt Next.js automatisch, kein zusätzliches Setup. `NEXT_PUBLIC_SITE_URL`
in den Vercel-Projekteinstellungen setzen (siehe `.env.example`) - ohne diese
Variable zeigen Open-Graph-Tags und Sitemap auf localhost.

Remote: `origin` → https://github.com/Marcel1848/marketing-page.git

## Vor dem Livegang

- `site.appUrl` in `content/site.ts` (aktuell Platzhalter `#app`) auf die echte
  URL der App "Klassik entdecken" setzen
- Impressum und Datenschutzerklärung mit echten Inhalten füllen
- Open-Graph-Bild unter `app/opengraph-image.png` (1200×630) ablegen
- Favicon als `app/icon.png` ablegen
