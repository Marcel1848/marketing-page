import type { Metadata } from "next";
import { faq, appCta, site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { PageHeroImage } from "@/components/ui/page-hero-image";
import { FaqAccordion } from "@/components/sections/faq-accordion";

export const metadata: Metadata = {
  title: { absolute: faq.title },
  description: faq.metaDescription,
};

export default function FaqPage() {
  return (
    <>
      <Container className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <PageHeroImage src={faq.image.src} alt={faq.image.alt} />
          <h1 className="mt-8 font-serif text-[2rem] leading-tight tracking-tight text-balance">
            {faq.headline}
          </h1>
          <div className="mt-10">
            <FaqAccordion />
          </div>
          <div className="mt-12 flex justify-center">
            <ButtonLink href={site.appUrl} target="_blank">{appCta}</ButtonLink>
          </div>
        </div>
      </Container>
    </>
  );
}
