/**
 * Zentrale Inhalts- und Konfigurationsdatei der Marketing-Page.
 *
 * Texte, Links, Preise und FAQ hier pflegen - die Komponenten unter `components/`
 * lesen ausschliesslich aus dieser Datei. So bleibt Inhalt von Layout getrennt.
 */

export const site = {
  name: "Produktname",
  // Wird fuer Metadaten, Sitemap und Open Graph gebraucht.
  // In Vercel als NEXT_PUBLIC_SITE_URL setzen (siehe .env.example).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "de-CH",
  tagline: "Der Einzeiler, der in 5 Sekunden erklaert, was ihr macht.",
  description:
    "Kurzbeschreibung fuer Suchmaschinen und Social-Media-Vorschauen. 1-2 Saetze, max. rund 160 Zeichen.",
  contactEmail: "hallo@example.com",
} as const;

export const nav = [
  { label: "Funktionen", href: "#funktionen" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Preise", href: "#preise" },
  { label: "FAQ", href: "#faq" },
] as const;

export const hero = {
  eyebrow: "Neu: Platzhalter fuer eine Ankuendigung",
  headline: "Die Hauptaussage eurer Seite in einem Satz",
  subline:
    "Ein bis zwei Saetze, die das Versprechen konkretisieren: fuer wen, welches Problem, welches Ergebnis.",
  primaryCta: { label: "Kostenlos starten", href: "#preise" },
  secondaryCta: { label: "Wie es funktioniert", href: "#ablauf" },
  proofPoints: ["Ohne Kreditkarte", "In 5 Minuten startklar", "DSGVO-konform"],
} as const;

export const features = [
  {
    title: "Erster Nutzen",
    description:
      "Beschreibe den Nutzen aus Kundensicht, nicht das technische Feature. Was wird einfacher, schneller, guenstiger?",
  },
  {
    title: "Zweiter Nutzen",
    description:
      "Halte es konkret. Zahlen und Beispiele wirken staerker als Adjektive.",
  },
  {
    title: "Dritter Nutzen",
    description:
      "Drei bis sechs Punkte reichen. Mehr verwaessert die Aussage.",
  },
  {
    title: "Vierter Nutzen",
    description:
      "Wenn ein Punkt Erklaerung braucht, gehoert er vielleicht auf eine eigene Unterseite.",
  },
] as const;

export const steps = [
  {
    title: "Anmelden",
    description: "Was der erste Schritt ist und wie lange er dauert.",
  },
  {
    title: "Einrichten",
    description: "Der zweite Schritt, moeglichst ohne Fachjargon beschrieben.",
  },
  {
    title: "Loslegen",
    description: "Das Ergebnis, das die Nutzerin oder der Nutzer am Ende hat.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Platzhalter fuer ein echtes Zitat. Am besten mit konkretem Ergebnis statt allgemeinem Lob.",
    author: "Vorname Nachname",
    role: "Rolle, Firma",
  },
  {
    quote:
      "Zweites Zitat. Zitate erst veroeffentlichen, wenn die Freigabe vorliegt.",
    author: "Vorname Nachname",
    role: "Rolle, Firma",
  },
] as const;

export const pricing = [
  {
    name: "Start",
    price: "CHF 0",
    interval: "pro Monat",
    description: "Zum Ausprobieren.",
    features: ["Leistung eins", "Leistung zwei", "Leistung drei"],
    cta: { label: "Kostenlos starten", href: "#kontakt" },
    highlighted: false,
  },
  {
    name: "Pro",
    price: "CHF 29",
    interval: "pro Monat",
    description: "Fuer den produktiven Einsatz.",
    features: [
      "Alles aus Start",
      "Leistung vier",
      "Leistung fuenf",
      "Support innert 24 h",
    ],
    cta: { label: "Pro waehlen", href: "#kontakt" },
    highlighted: true,
  },
  {
    name: "Team",
    price: "Auf Anfrage",
    interval: "",
    description: "Fuer groessere Organisationen.",
    features: ["Alles aus Pro", "Individuelle Vertraege", "Onboarding"],
    cta: { label: "Kontakt aufnehmen", href: "#kontakt" },
    highlighted: false,
  },
] as const;

export const faqs = [
  {
    question: "Erste haeufige Frage?",
    answer:
      "Antwort in zwei bis drei Saetzen. FAQ eignet sich gut fuer Einwaende, die den Abschluss blockieren.",
  },
  {
    question: "Zweite haeufige Frage?",
    answer: "Antwort. Kurz halten, keine Marketingfloskeln.",
  },
  {
    question: "Was passiert mit meinen Daten?",
    answer:
      "Hier auf die Datenschutzerklaerung verweisen, sobald diese vorliegt.",
  },
] as const;

export const footerLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
] as const;
