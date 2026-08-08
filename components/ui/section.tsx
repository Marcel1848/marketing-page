import { Container } from "./container";
import { cn } from "@/lib/cn";

/**
 * Sektions-Rahmen mit einheitlichem vertikalem Rhythmus und optionalem Kopfbereich.
 * `id` wird fuer die Anker-Navigation im Header gebraucht.
 */
export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  className,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      <Container>
        {(eyebrow || title || subtitle) && (
          <div className="mx-auto max-w-2xl text-center">
            {eyebrow && (
              <p className="text-sm font-semibold tracking-wide text-brand-600 uppercase">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-ink-muted text-pretty">{subtitle}</p>
            )}
          </div>
        )}
        <div className={cn(eyebrow || title || subtitle ? "mt-14" : undefined)}>
          {children}
        </div>
      </Container>
    </section>
  );
}
