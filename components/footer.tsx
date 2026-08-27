import Link from "next/link";
import { footerLinks, site } from "@/content/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-surface-subtle">
      <Container className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-sans text-xs text-ink-muted">
          &copy; {new Date().getFullYear()} {site.copyrightHolder}
        </p>

        <nav aria-label="Rechtliches">
          <ul className="flex gap-6">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-sans text-xs text-ink-muted hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
