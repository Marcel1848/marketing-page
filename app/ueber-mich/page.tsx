import type { Metadata } from "next";
import { ueberMich, appCta, site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { PageHeroImage } from "@/components/ui/page-hero-image";

export const metadata: Metadata = {
  title: { absolute: ueberMich.title },
  description: ueberMich.metaDescription,
  openGraph: {
    title: ueberMich.title,
    description: ueberMich.metaDescription,
    images: [{ url: ueberMich.image.src, alt: ueberMich.image.alt }],
  },
  twitter: {
    title: ueberMich.title,
    description: ueberMich.metaDescription,
    images: [ueberMich.image.src],
  },
};

export default function UeberMichPage() {
  return (
    <>
      <Container className="pt-8 pb-16 sm:pb-24">
        <div className="mx-auto max-w-3xl">
          <PageHeroImage src={ueberMich.image.src} alt={ueberMich.image.alt} />
          <h1 className="mt-8 font-serif text-[2rem] leading-tight tracking-tight text-balance">
            {ueberMich.headline}
          </h1>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-ink-muted text-pretty">
            {ueberMich.paragraphs.map((paragraph) => (
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
