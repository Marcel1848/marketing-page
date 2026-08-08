import { pricing } from "@/content/site";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export function Pricing() {
  return (
    <Section
      id="preise"
      eyebrow="Preise"
      title="Transparente Preise"
      subtitle="Alle Preise exkl. MwSt. Monatlich kuendbar."
      className="bg-surface-subtle"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {pricing.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "flex flex-col rounded-2xl bg-white p-8",
              plan.highlighted
                ? "ring-2 ring-brand-600"
                : "ring-1 ring-black/5",
            )}
          >
            {plan.highlighted && (
              <p className="mb-4 inline-flex self-start rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-800">
                Empfohlen
              </p>
            )}

            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <p className="mt-1 text-sm text-ink-muted">{plan.description}</p>

            <p className="mt-6 flex items-baseline gap-2">
              <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
              {plan.interval && (
                <span className="text-sm text-ink-muted">{plan.interval}</span>
              )}
            </p>

            <ul className="mt-6 flex-1 space-y-3 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <svg
                    viewBox="0 0 20 20"
                    className="mt-0.5 size-4 shrink-0 text-brand-600"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0z" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <ButtonLink
              href={plan.cta.href}
              variant={plan.highlighted ? "primary" : "secondary"}
              size="lg"
              className="mt-8"
            >
              {plan.cta.label}
            </ButtonLink>
          </div>
        ))}
      </div>
    </Section>
  );
}
