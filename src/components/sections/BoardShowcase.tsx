import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { LeadershipCard } from "@/components/shared/LeadershipCard";
import { currentYear, getTerm, requirePerson } from "@/data/leadership";

/** Home: only the current year's President and Secretary. The full list lives on /team. */
export function BoardShowcase() {
  const term = getTerm(currentYear)!;
  const lead = [
    { person: requirePerson(term.president), role: "Club President" },
    { person: requirePerson(term.secretary), role: "Club Secretary" },
  ];
  return (
    <section id="legends" aria-labelledby="legends-title" className="section-y">
      <Container>
        <SectionHeading id="legends-title" title="Meet the Legends" intro={`The club's President and Secretary for ${currentYear}.`} />
        <ul className="mt-14 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {lead.map(({ person, role }, i) => (
            <Reveal as="li" key={person.slug} delay={i * 0.12}>
              <LeadershipCard person={person} role={role} year={currentYear} current />
            </Reveal>
          ))}
        </ul>
        <p className="mt-6 text-xs text-ivory/74">Portraits to be added.</p>
        <div className="mt-10"><Button href="/team" variant="secondary">Meet everyone</Button></div>
      </Container>
    </section>
  );
}
