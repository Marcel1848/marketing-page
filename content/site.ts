/**
 * Zentrale Inhalts- und Konfigurationsdatei der Marketing-Page.
 *
 * Texte, Links und FAQ hier pflegen - die Komponenten unter `components/` und
 * `app/` lesen ausschliesslich aus dieser Datei. So bleibt Inhalt von Layout getrennt.
 */

export const site = {
  name: "Klassik entdecken",
  // Wird fuer Metadaten, Sitemap und Open Graph gebraucht.
  // In Vercel als NEXT_PUBLIC_SITE_URL setzen (siehe .env.example).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "de-CH",
  description:
    "Klassik entdecken waehlt per Zufallsprinzip ein Werk aus 400 bedeutenden Stuecken klassischer Musik zwischen 1600 und 2000.",
  // Platzhalter, bis die App-URL feststeht.
  appUrl: "#app",
  copyrightHolder: "Marcel Eberle",
} as const;

export const nav = [
  { label: "Startseite", href: "/" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Klassische Musik?", href: "/klassische-musik" },
  { label: "FAQ", href: "/faq" },
] as const;

export const appCta = "Zur App «Klassik entdecken»";

export const startseite = {
  title: "Klassik entdecken – 400 Werke, 400 Jahre",
  metaDescription:
    "Entdecke zufällig ausgewählte Meisterwerke der klassischen Musik von 1600 bis 2000 – mit der kostenlosen App Klassik entdecken.",
  image: {
    src: "/images/startseite.webp",
    alt: "Junge Frau mit Kopfhörern hört lächelnd Musik",
  },
  headline: "Klassik entdecken: 400 repräsentative und bedeutende Werke aus 400 Jahren",
  paragraphs: [
    "Es gibt mehr als bloss Bach, Mozart und Schubert. Lern neue und bisher unbekannte Werke der klassischen Musik kennen: mit der App «Klassik entdecken».",
    "Entdecke 400 repräsentative und bedeutende Werke aus 400 Jahren klassischer westlicher Musik zwischen 1600 und 2000. Freu dich auf Orchesterwerke, Konzerte, Kammermusik, Solomusik, geistliche und weltliche Vokalmusik, Oper sowie Ballett- und Bühnenmusik.",
    "Kennst du bereits „Missa Votiva“ von Jan Dismas Zelenka, Sinfonie c-Moll von Joseph Martin Kraus oder „D’un matin de Printemps“ von Lili Boulanger?",
    "Eben: Gib deinem musischen Ich mit dieser App neues Futter!",
  ],
} as const;

export const ueberMich = {
  title: "Über mich – Erfinder von Klassik entdecken",
  metaDescription:
    "Blockflöten- und Gitarrespieler, Online-Redaktor und Klassik-Liebhaber: Warum ich die App Klassik entdecken entwickelt habe.",
  image: {
    src: "/images/ueber-mich.webp",
    alt: "Blick in einen historischen Konzertsaal mit Orchester auf der Bühne",
  },
  headline: "Über mich",
  paragraphs: [
    "Ich bin ein Blockflöten- und Gitarre-spielender Online-Redaktor, der gern klassische Musik hört und schätzt.",
    "Auch ich kenne das Problem: Man hört sich immer wieder seine Lieblingswerke, das Altbekannte an und lernt kaum neue Werke kennen. Ausser du lässt dich von YouTube, Spotify und Co. inspirieren.",
    "Deshalb habe ich die App «Klassik entdecken» entwickelt, damit wir noch tiefer in die faszinierende Welt der klassischen Musik eintauchen und musikalisches Neuland betreten können.",
  ],
} as const;

export const klassischeMusik = {
  title: "Klassische Musik erklärt | Klassik entdecken",
  metaDescription:
    "Barock, Klassik, Romantik, Moderne: die vier grossen Epochen klassischer Musik von 1600 bis 2000 kurz erklärt.",
  image: {
    src: "/images/klassische-musik.webp",
    alt: "Nahaufnahme von Orchestermusikern beim Spielen der Geige",
  },
  headline: "Klassische Musik?",
  intro:
    "Klassik ist nicht gleich Klassik. Klassische Musik umfasst mehrere Jahrhunderte und sehr unterschiedliche Stile. Häufig wird sie in vier grosse Epochen eingeteilt:",
  epochs: [
    {
      title: "Barock (ca. 1600–1750)",
      text: "Barockmusik wirkt oft kunstvoll, klar gegliedert und reich verziert. Typisch sind starke rhythmische Muster und das Zusammenspiel verschiedener Melodielinien. Bedeutende Komponisten sind Johann Sebastian Bach, Antonio Vivaldi und Georg Friedrich Händel.",
    },
    {
      title: "Klassik (ca. 1750–1820)",
      text: "Die Klassik bevorzugt ausgewogene Formen, Klarheit und elegante Melodien. In dieser Zeit entwickelten sich etwa Sinfonie und Streichquartett weiter. Besonders bekannt sind Wolfgang Amadeus Mozart, Joseph Haydn und Ludwig van Beethoven.",
    },
    {
      title: "Romantik (ca. 1820–1900)",
      text: "In der Romantik werden persönlicher Ausdruck, Emotionen und Klangfarben wichtiger. Die Orchester werden grösser, die musikalischen Möglichkeiten vielfältiger. Bekannte Komponisten sind Frédéric Chopin, Johannes Brahms und Peter Tschaikowski.",
    },
    {
      title: "Moderne (ca. 1900–2000)",
      text: "Die Moderne umfasst sehr unterschiedliche Richtungen. Manche Komponisten brechen bewusst mit älteren Regeln, andere verbinden Tradition mit neuen Rhythmen und Klangwelten. Bedeutende Namen sind Igor Strawinsky, Claude Debussy, Dmitri Schostakowitsch und Philip Glass.",
    },
  ],
  outro:
    "Klassische Musik ist also kein einheitlicher Stil, sondern eine vielfältige musikalische Welt, die sich über Jahrhunderte ständig verändert hat.",
} as const;

export const faq = {
  title: "FAQ zu Klassik entdecken – Häufige Fragen",
  metaDescription:
    "Antworten auf häufige Fragen zur App Klassik entdecken: Kosten, Auswahl der 400 Werke und mehr.",
  image: {
    src: "/images/faq.webp",
    alt: "Nahaufnahme einer Geige auf handgeschriebenen Notenblättern",
  },
  headline: "FAQ",
  items: [
    {
      question: "Was kostet die App „Klassik entdecken“?",
      answer: "Nichts, sie ist gratis.",
    },
    {
      question: "Warum 400 Werke und nicht 500?",
      answer:
        "Als Eckpunkte wurden die Jahre 1600 und 2000 gewählt, um die Auswahl fassbar zu machen. 400 Jahre und 400 Werke ergeben damit durchschnittlich etwa ein Werk pro Jahr.",
    },
    {
      question: "Wer hat diese 400 Werke der klassischen Musik ausgesucht?",
      answer: "ChatGPT, im Modus High und via Deep Research.",
    },
  ],
} as const;

export const footerLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
] as const;
