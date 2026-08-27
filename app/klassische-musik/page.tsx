import type { Metadata } from "next";
import { klassischeMusik, appCta, site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { PageHeroImage } from "@/components/ui/page-hero-image";

export const metadata: Metadata = {
  title: { absolute: klassischeMusik.title },
  description: klassischeMusik.metaDescription,
};

export default function KlassischeMusikPage() {
  return (
    <>
      <PageHeroImage src={klassischeMusik.image.src} alt={klassischeMusik.image.alt} />
      <Container className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-[2rem] leading-tight tracking-tight text-balance">
            {klassischeMusik.headline}
          </h1>
          <p className="mt-8 text-base leading-relaxed text-ink-muted text-pretty">
            {klassischeMusik.intro}
          </p>

          <div className="mt-10 space-y-10">
            {klassischeMusik.epochs.map((epoch) => (
              <div key={epoch.title} className="border-t border-gold/30 pt-10">
                <h2 className="font-serif text-xl tracking-wide">{epoch.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-ink-muted text-pretty">
                  {epoch.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t border-gold/30 pt-10 text-base leading-relaxed text-ink-muted text-pretty">
            {klassischeMusik.outro}
          </p>

          <div className="mt-12 border-t border-gold/30 pt-12">
            <ButtonLink href={site.appUrl}>{appCta}</ButtonLink>
          </div>
        </div>
      </Container>
    </>
  );
}
