import Image from "next/image";

/** Bild als oberer horizontaler Rand der Seite - volle Breite, kein Container. */
export function PageHeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[3/1] w-full overflow-hidden">
      <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover" />
    </div>
  );
}
