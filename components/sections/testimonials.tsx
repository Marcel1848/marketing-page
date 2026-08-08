import { testimonials } from "@/content/site";
import { Section } from "@/components/ui/section";

export function Testimonials() {
  return (
    <Section
      eyebrow="Stimmen"
      title="Was Kundinnen und Kunden sagen"
      subtitle="Zitate erst veroeffentlichen, wenn die Freigabe schriftlich vorliegt."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Index als key: Die Liste ist statisch und wird nicht umsortiert,
            und Namen sind nicht zwingend eindeutig. */}
        {testimonials.map((testimonial, index) => (
          <figure key={index} className="rounded-2xl bg-card p-8 ring-1 ring-black/5">
            <blockquote className="text-lg text-pretty">
              &bdquo;{testimonial.quote}&ldquo;
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="font-semibold">{testimonial.author}</span>
              <span className="text-ink-muted"> - {testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
