import type { Metadata } from "next";
import { ueberMich, appCta, site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { PageHeroImage } from "@/components/ui/page-hero-image";

export const metadata: Metadata = {
  title: { absolute: ueberMich.title },
  description: ueberMich.metaDescription,
};

export default function UeberMichPage() {
  return (
    <>
      <PageHeroImage src={ueberMich.image.src} alt={ueberMich.image.alt} />
      <Container className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-[2rem] leading-tight tracking-tight text-balance">
            {ueberMich.headline}
          </h1>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-ink-muted text-pretty">
            {ueberMich.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-12 border-t border-gold/30 pt-12">
            <ButtonLink href={site.appUrl}>{appCta}</ButtonLink>
          </div>
        </div>
      </Container>
    </>
  );
}
