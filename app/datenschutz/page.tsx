import type { Metadata } from "next";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <Section title="Datenschutzerklaerung">
      <div className="mx-auto max-w-3xl space-y-4 text-ink-muted">
        <p>
          Platzhalter. Vor dem Livegang durch eine gepruefte
          Datenschutzerklaerung ersetzen (DSG / DSGVO). Sobald Analytics,
          Formulare oder externe Dienste eingebunden sind, muessen diese hier
          aufgefuehrt werden.
        </p>
      </div>
    </Section>
  );
}
