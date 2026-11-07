import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { partnersIn, sponsorsYear, type Partner } from "@/data/partners";

function LogoGrid({ partners }: { partners: Partner[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
      {partners.map((s, i) => (
        <Reveal as="li" key={s.id} delay={(i % 4) * 0.07} className="border hairline p-2">
          <div className="relative aspect-[3/2] rounded-xl bg-white">
            {s.logo && <Image src={s.logo.src} alt={s.name} fill sizes="(min-width:640px) 22vw, 45vw" className="object-contain p-4" />}
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

/** Compact Home preview: sponsor and venue partner logos, with a link to the full Partners page. */
export function PartnersPreview() {
  const sponsors = partnersIn("sponsor");
  const venues = partnersIn("venue");
  if (sponsors.length === 0 && venues.length === 0) return null;
  return (
    <section id="sponsors" aria-labelledby="sponsors-title" className="section-y">
      <Container>
        {sponsors.length > 0 && (
          <>
            <SectionHeading id="sponsors-title" title={`Our Proud Sponsors ${sponsorsYear.replace("–", "–\u2060")}`} intro="Thank you to the brands standing with the club this year." />
            <div className="mt-12"><LogoGrid partners={sponsors} /></div>
          </>
        )}
        {venues.length > 0 && (
          <div id="venue-partners" className={sponsors.length > 0 ? "mt-20" : undefined}>
            <Reveal>
              <h3 id="venue-partners-title" className="font-display text-[clamp(1.6rem,3.4vw,2.6rem)] leading-tight text-ivory">Our Venue Partners</h3>
              <p className="mt-4 max-w-prose text-lg text-ivory/84">The venues that host our events and bring our ideas to life.</p>
            </Reveal>
            <div className="mt-10"><LogoGrid partners={venues} /></div>
          </div>
        )}
        <div className="mt-10"><Button href="/partners">View All Partners</Button></div>
      </Container>
    </section>
  );
}
