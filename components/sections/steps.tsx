import { steps } from "@/content/site";
import { Section } from "@/components/ui/section";

export function Steps() {
  return (
    <Section
      id="ablauf"
      eyebrow="Ablauf"
      title="In drei Schritten startklar"
      subtitle="Der Weg vom ersten Klick bis zum Ergebnis."
      className="bg-surface-subtle"
    >
      <ol className="grid gap-8 sm:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="relative">
            <span className="flex size-10 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
              {index + 1}
            </span>
            <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-ink-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
