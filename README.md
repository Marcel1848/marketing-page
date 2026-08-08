# Marketing Page

Marketing-Page auf Basis von Next.js 15 (App Router), React 19, TypeScript und
Tailwind CSS 4. Deployment auf Vercel.

## Voraussetzungen

Node.js 20 oder neuer — https://nodejs.org

## Loslegen

```bash
npm install
npm run dev
```

Danach http://localhost:3000 öffnen.

## Skripte

| Befehl | Zweck |
| --- | --- |
| `npm run dev` | Dev-Server mit Hot Reload |
| `npm run build` | Produktions-Build |
| `npm run start` | Produktions-Build lokal ausliefern |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript ohne Ausgabe prüfen |

## Hinweis: OneDrive

Das Projekt liegt in einem OneDrive-synchronisierten Ordner. OneDrive versucht,
`node_modules` und `.next` mitzusynchronisieren — das bremst Builds drastisch
(gemessen: 12 Minuten statt Sekunden) und kann zu Dateikonflikten führen.

Abhilfe, in dieser Reihenfolge:

1. **Ordner aus der Synchronisierung nehmen:** OneDrive-Symbol in der Taskleiste →
   Einstellungen → Konto → „Ordner auswählen“ → diesen Projektordner abwählen.
2. **Oder das Projekt ausserhalb von OneDrive ablegen**, z. B. unter
   `C:\Users\<name>\dev\marketing-page`. Die Versionierung übernimmt Git, nicht
   OneDrive — ein Backup über die Cloud ist hier kein Gewinn.

## Inhalte pflegen

Alle Texte, Links, Preise und FAQ-Einträge stehen in
[content/site.ts](content/site.ts). Farben und Schrift werden über die
Design-Tokens im `@theme`-Block von [app/globals.css](app/globals.css) gesteuert.

## Deployment auf Vercel

1. Repository auf GitHub pushen
2. Auf vercel.com „New Project“ → Repository importieren
3. Framework-Preset: Next.js (wird automatisch erkannt)
4. Environment Variable `NEXT_PUBLIC_SITE_URL` auf die Produktions-URL setzen
5. Deploy

Jeder Push auf `main` löst ein Produktions-Deployment aus, jeder Pull Request
eine Preview.

## Offen vor dem Livegang

- Platzhaltertexte ersetzen
- Impressum und Datenschutzerklärung befüllen
- `app/icon.png` (Favicon) und `app/opengraph-image.png` (1200×630) ergänzen
