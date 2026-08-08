import { faqs } from "@/content/site";
import { Section } from "@/components/ui/section";

export function Faq() {
  return (
    <Section id="faq" eyebrow="FAQ" title="Haeufige Fragen">
      <div className="mx-auto max-w-3xl divide-y divide-black/5">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
              {faq.question}
              <svg
                viewBox="0 0 24 24"
                className="size-5 shrink-0 text-ink-muted transition-transform group-open:rotate-45"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
            </summary>
            <p className="mt-3 text-ink-muted text-pretty">{faq.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
