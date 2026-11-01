import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

// Each line is anchored in documented club wording (theme meaning and manifesto).
const points = [
  { text: "Learn from one another.", source: "From our theme" },
  { text: "With patience and understanding.", source: "From our theme" },
  { text: "Grow together.", source: "From our theme" },
  { text: "Teamwork builds Legends.", source: "From our manifesto" },
];

export function WhyCollaborate() {
  return (
    <section id="why" aria-labelledby="why-title" className="section-y">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <Reveal>
            <h2 id="why-title" className="text-display text-[clamp(2.03rem,4.55vw,3.85rem)]">
              Better connections. <span className="text-saffron">Greater possibilities.</span>
            </h2>
            <p className="mt-8 max-w-prose text-lg leading-relaxed text-ivory/84">
              LEGENDS believes progress is shared. Working alongside other clubs is one way the club puts its theme into practice.
            </p>
          </Reveal>
          <ol className="relative space-y-10 border-l border-gold/30 pl-8">
            {points.map((p, i) => (
              <Reveal as="li" key={p.text} delay={i * 0.1} className="relative">
                <span aria-hidden className="absolute -left-[2.45rem] top-3 size-3 rounded-full bg-saffron" />
                <p className="font-display text-[clamp(1.48rem,3.08vw,2.27rem)] uppercase leading-none">{p.text}</p>
                <p className="mt-2 text-sm text-ivory/74">{p.source}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
