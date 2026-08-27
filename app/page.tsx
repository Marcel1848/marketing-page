import type { Metadata } from "next";
import { startseite, appCta, site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { PageHeroImage } from "@/components/ui/page-hero-image";

export const metadata: Metadata = {
  title: { absolute: startseite.title },
  description: startseite.metaDescription,
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  description: site.description,
  url: site.appUrl,
  image: `${site.url}${startseite.image.src}`,
  applicationCategory: "MusicApplication",
  operatingSystem: "Web",
  inLanguage: site.locale,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "CHF",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema).replace(/</g, "\\u003c"),
        }}
      />
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
