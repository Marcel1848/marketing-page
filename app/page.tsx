import type { Metadata } from "next";
import { startseite, appCta, site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { PageHeroImage } from "@/components/ui/page-hero-image";

export const metadata: Metadata = {
  title: { absolute: startseite.title },
  description: startseite.metaDescription,
};

export default function HomePage() {
  return (
    <>
      <Container className="pt-8 pb-16 sm:pb-24">
        <div className="mx-auto max-w-3xl">
          <PageHeroImage src={startseite.image.src} alt={startseite.image.alt} />
          <h1 className="mt-8 font-serif text-[2rem] leading-tight tracking-tight text-balance">
            {startseite.headline}
          </h1>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-ink-muted text-pretty">
            {startseite.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <ButtonLink href={site.appUrl} target="_blank">{appCta}</ButtonLink>
          </div>
        </div>
      </Container>
    </>
  );
}
