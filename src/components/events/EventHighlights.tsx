import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pastEvents } from "@/data/events";
import { formatDate } from "@/lib/utils";
import { CoverImage } from "./CoverImage";

/** Large featured cards for the newest completed events that have a real cover photograph. Hidden when there are none. */
export function EventHighlights() {
  const picks = pastEvents.filter((e) => e.coverImage).slice(0, 3);
  if (picks.length === 0) return null;
  return (
    <section id="highlights" aria-labelledby="highlights-title" className="section-y border-t hairline">
      <Container>
        <SectionHeading id="highlights-title" title="Event Highlights" intro="Moments from the LEGENDS journey." />
        <ul className="mt-14 grid gap-8">
          {picks.map((e, i) => {
            const meta = [e.date ? formatDate(e.date) : e.year, e.category].filter(Boolean).join(" · ");
            return (
              <Reveal as="li" key={e.slug} delay={i * 0.08}>
                <Link href={`/events/${e.slug}`} className="group grid overflow-hidden border hairline transition-colors duration-base hover:border-saffron/70 lg:grid-cols-12">
                  <div className="relative overflow-hidden lg:col-span-8">
                    <CoverImage image={e.coverImage} aspect="aspect-[16/10] lg:aspect-[16/9]" sizes="(min-width:1024px) 66vw, 100vw" priority={i === 0} imgClassName="transition-transform duration-slow ease-cinematic group-hover:scale-105" />
                  </div>
                  <div className="flex flex-col justify-center gap-4 p-7 sm:p-10 lg:col-span-4">
                    {meta && <p className="text-xs text-sky">{meta}</p>}
                    <h3 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.1] transition-colors duration-base group-hover:text-saffron">{e.title}</h3>
                    {e.shortDescription && <p className="text-ivory/84">{e.shortDescription}</p>}
                    <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-saffron">
                      View event <ArrowUpRight aria-hidden className="size-4 transition-transform duration-base group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
