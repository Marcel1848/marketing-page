import Link from "next/link";
import { footerLinks, nav, site } from "@/content/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-surface-subtle">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <p className="text-lg font-bold tracking-tight">{site.name}</p>
          <p className="mt-2 text-sm text-ink-muted">{site.tagline}</p>
          <a
            href={`mailto:${site.contactEmail}`}
            className="mt-4 inline-block text-sm text-brand-700 hover:underline"
          >
            {site.contactEmail}
          </a>
        </div>

        <div className="flex gap-16">
          <nav aria-label="Seiten">
            <p className="text-sm font-semibold">Seite</p>
            <ul className="mt-3 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-muted hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Rechtliches">
            <p className="text-sm font-semibold">Rechtliches</p>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-muted hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>

      <Container className="border-t border-black/5 py-6">
        <p className="text-xs text-ink-muted">
          &copy; {new Date().getFullYear()} {site.name}. Alle Rechte vorbehalten.
        </p>
      </Container>
    </footer>
  );
}
