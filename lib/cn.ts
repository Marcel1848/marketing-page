/**
 * Minimaler Klassen-Merger. Bewusst ohne Abhaengigkeit auf clsx/tailwind-merge -
 * bei Bedarf spaeter ersetzen.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
