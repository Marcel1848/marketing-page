import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section
      title="Seite nicht gefunden"
      subtitle="Die aufgerufene Seite existiert nicht oder wurde verschoben."
    >
      <div className="flex justify-center">
        <ButtonLink href="/" size="lg">
          Zurueck zur Startseite
        </ButtonLink>
      </div>
    </Section>
  );
}
