import { hero, site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="kontakt" className="py-20 sm:py-28">
      <Container>
        <div className="rounded-3xl bg-brand-700 px-8 py-16 text-center text-white sm:px-16">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Bereit loszulegen?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-100 text-pretty">
            Kurzer Schlusssatz mit klarer Handlungsaufforderung. Ein CTA, nicht drei.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink
              href={hero.primaryCta.href}
              variant="secondary"
              size="lg"
            >
              {hero.primaryCta.label}
            </ButtonLink>
            <a
              href={`mailto:${site.contactEmail}`}
              className="text-sm text-brand-100 underline-offset-4 hover:underline"
            >
              Oder schreib uns direkt
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
