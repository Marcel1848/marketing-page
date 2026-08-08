import { hero } from "@/content/site";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Dekorativer Hintergrund-Verlauf */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-[32rem] bg-gradient-to-b from-brand-50 to-transparent"
      />

      <Container className="relative py-24 text-center sm:py-32">
        {hero.eyebrow && (
          <p className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-800">
            {hero.eyebrow}
          </p>
        )}

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-6xl">
          {hero.headline}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted text-pretty sm:text-xl">
          {hero.subline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={hero.primaryCta.href} size="lg">
            {hero.primaryCta.label}
          </ButtonLink>
          <ButtonLink href={hero.secondaryCta.href} variant="secondary" size="lg">
            {hero.secondaryCta.label}
          </ButtonLink>
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-muted">
          {hero.proofPoints.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-500" />
              {point}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
