import Image from "next/image";

/** Bild so breit wie der Lauftext (max-w-3xl) - kein eigener Container, wird im Seiten-Layout platziert. */
export function PageHeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[3/1] w-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(min-width: 768px) 768px, 100vw"
        className="object-cover"
      />
    </div>
  );
}
