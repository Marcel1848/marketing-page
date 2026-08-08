import { features } from "@/content/site";
import { Section } from "@/components/ui/section";

export function Features() {
  return (
    <Section
      id="funktionen"
      eyebrow="Funktionen"
      title="Was ihr damit erreicht"
      subtitle="Drei bis sechs Punkte, die den Nutzen aus Kundensicht beschreiben."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl bg-card p-8 ring-1 ring-black/5"
          >
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="mt-3 text-ink-muted">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
