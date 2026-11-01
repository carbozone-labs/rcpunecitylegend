import { Handshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { partnerCategories, partnersIn, type PartnerCategory } from "@/data/partners";
import { cn } from "@/lib/utils";
import { PartnerCard } from "./PartnerCard";

/** One category of the Partners page. Fills itself from src/data/partners.ts; shows an empty state when there is no partner yet. */
export function PartnerGroup({ category, tint }: { category: PartnerCategory; tint?: boolean }) {
  const meta = partnerCategories.find((c) => c.id === category)!;
  const list = partnersIn(category);
  return (
    <section id={meta.anchor} aria-labelledby={`${meta.anchor}-title`} className={cn("section-y scroll-mt-20", tint && "bg-charcoal")}>
      <Container>
        <SectionHeading id={`${meta.anchor}-title`} title={meta.title} intro={meta.intro} />
        {list.length === 0 ? (
          <Reveal>
            <div role="status" className="border hairline mt-12 flex flex-col items-start gap-5 p-8 sm:flex-row sm:items-center sm:p-10">
              <span className="avatar-ring grid size-16 shrink-0 place-items-center rounded-full"><Handshake aria-hidden className="size-7 text-sky" /></span>
              <p className="max-w-prose text-lg text-ivory/86">{meta.empty}</p>
            </div>
          </Reveal>
        ) : (
          <ul className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {list.map((p, i) => (
              <Reveal as="li" key={p.id} delay={(i % 4) * 0.07}><PartnerCard partner={p} /></Reveal>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
