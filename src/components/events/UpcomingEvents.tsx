import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cancelledEvents, getFeaturedUpcoming, upcomingEvents } from "@/data/events";
import { formatDate } from "@/lib/utils";
import { ComingSoon } from "./ComingSoon";
import { CoverImage } from "./CoverImage";
import { EventCard } from "./EventCard";
import { StatusBadge } from "./StatusBadge";

/** Primary section of the Events page. Fed entirely by src/data/events.ts (status "upcoming" / "cancelled"). */
export function UpcomingEvents() {
  const featured = getFeaturedUpcoming();
  const rest = upcomingEvents.filter((e) => e !== featured);
  const none = upcomingEvents.length === 0;
  return (
    <section id="upcoming" aria-labelledby="upcoming-title" className="section-y">
      <Container>
        <SectionHeading id="upcoming-title" title="Upcoming Events" intro={none ? "The next chapter of the LEGENDS journey is being written." : "Mark your calendar. These are the moments we are building next."} />

        <div className="mt-14 space-y-14">
          {none && <ComingSoon />}

          {featured && (
            <div className="grid items-stretch gap-6 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <CoverImage image={featured.coverImage} aspect="aspect-[4/3] lg:aspect-[16/11]" sizes="(min-width:1024px) 58vw, 100vw" className="rounded-[1.4rem]" />
              </Reveal>
              <Reveal delay={0.1} className="border hairline flex flex-col justify-center p-7 sm:p-10 lg:col-span-5">
                <StatusBadge status="upcoming" className="self-start" />
                <h3 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.1]">{featured.title}</h3>
                <ul className="mt-5 space-y-2 text-ivory/88">
                  {featured.date && <li className="flex items-center gap-2"><CalendarDays aria-hidden className="size-4 text-sky" />{formatDate(featured.date)}</li>}
                  {featured.time && <li className="flex items-center gap-2"><Clock aria-hidden className="size-4 text-sky" />{featured.time}</li>}
                  {featured.venue && <li className="flex items-center gap-2"><MapPin aria-hidden className="size-4 text-sky" />{featured.venue}</li>}
                </ul>
                {featured.shortDescription && <p className="mt-5 max-w-prose text-ivory/84">{featured.shortDescription}</p>}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={`/events/${featured.slug}`}>View details</Button>
                  {featured.registrationLink && <Button href={featured.registrationLink} external variant="secondary">Register</Button>}
                </div>
              </Reveal>
            </div>
          )}

          {rest.length > 0 && (
            <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((e, i) => (
                <Reveal as="li" key={e.slug} delay={(i % 3) * 0.08}><EventCard event={e} shape="wide" sizes="(min-width:1024px) 30vw, 100vw" /></Reveal>
              ))}
            </ul>
          )}

          {cancelledEvents.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-ivory/78">Cancelled</h3>
              <ul className="mt-5 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {cancelledEvents.map((e) => <li key={e.slug}><EventCard event={e} shape="wide" sizes="(min-width:1024px) 30vw, 100vw" /></li>)}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
