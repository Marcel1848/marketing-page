import type { Metadata } from "next";
import { impressum } from "@/content/site";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <Section title="Impressum">
      <div className="mx-auto max-w-3xl space-y-4 text-ink-muted">
        <p>{impressum.text}</p>
      </div>
    </Section>
  );
}
