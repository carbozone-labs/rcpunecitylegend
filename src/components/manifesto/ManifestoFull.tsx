import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { manifestoFull } from "@/data/manifesto";

/** The club's full manifesto text, in two readable blocks. */
export function ManifestoFull() {
  const blocks = [manifestoFull.makesALegend, manifestoFull.callToEveryLegend];
  return (
    <section aria-label="The full manifesto" className="section-y">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {blocks.map((b, bi) => (
            <Reveal key={b.heading} delay={bi * 0.1} className="border hairline p-7 sm:p-10">
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">{b.heading}</h2>
              <div className="mt-6 space-y-5 leading-relaxed text-ivory/88">
                {b.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
