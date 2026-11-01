import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { partnersIn, sponsorsYear } from "@/data/partners";

/** Compact Home preview: sponsor logos only, with a link to the full Partners page. */
export function PartnersPreview() {
  const sponsors = partnersIn("sponsor");
  if (sponsors.length === 0) return null;
  return (
    <section id="sponsors" aria-labelledby="sponsors-title" className="section-y">
      <Container>
        <SectionHeading id="sponsors-title" title={`Our Proud Sponsors ${sponsorsYear.replace("–", "–\u2060")}`} intro="Thank you to the brands standing with the club this year." />
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          {sponsors.map((s, i) => (
            <Reveal as="li" key={s.id} delay={(i % 4) * 0.07} className="border hairline p-2">
              <div className="relative aspect-[3/2] rounded-xl bg-white">
                {s.logo && <Image src={s.logo.src} alt={s.name} fill sizes="(min-width:640px) 22vw, 45vw" className="object-contain p-4" />}
              </div>
            </Reveal>
          ))}
        </ul>
        <div className="mt-10"><Button href="/partners">View All Partners</Button></div>
      </Container>
    </section>
  );
}
