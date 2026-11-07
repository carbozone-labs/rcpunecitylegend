"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Archive, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { eventCategories, eventYears, pastEvents as events } from "@/data/events";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/animations";
import { EmptyState } from "./EmptyState";
import { EventCard } from "./EventCard";

function Pills({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  const all = ["", ...options];
  return (
    <fieldset className="min-w-0">
      <legend className="mb-2 text-xs text-ivory/74">{label}</legend>
      <div className="-mx-1 flex flex-nowrap gap-2 overflow-x-auto px-1 pb-1">
        {all.map((o) => (
          <button
            key={o || "all"}
            type="button"
            aria-pressed={value === o}
            onClick={() => onChange(o)}
            className={cn(
              "min-h-11 shrink-0 whitespace-nowrap border px-4 text-sm transition-colors duration-base",
              value === o ? "border-saffron bg-saffron text-obsidian" : "border-gold/35 text-ivory/90 hover:border-saffron hover:text-saffron",
            )}
          >
            {o || "All Events"}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

/** Past events: only verified, completed events from src/data/events.ts. */
export function EventArchive() {
  if (events.length === 0) {
    return (
      <section id="archive" aria-labelledby="archive-title" className="section-y border-t hairline bg-charcoal">
        <Container>
          <SectionHeading id="archive-title" title="Past Events" intro="Our event archive, built from verified moments." />
          <Reveal>
            <div role="status" className="border hairline mt-12 flex flex-col items-center px-6 py-16 text-center sm:py-20">
              <span className="avatar-ring grid size-20 place-items-center rounded-full"><Archive aria-hidden className="size-8 text-sky" /></span>
              <p className="mt-6 font-display text-3xl leading-tight sm:text-4xl">Our archive is waiting for its first story.</p>
              <p className="mx-auto mt-4 max-w-md text-ivory/84">Past events and their photographs will appear here once they are verified and published.</p>
            </div>
          </Reveal>
        </Container>
      </section>
    );
  }
  return <ArchiveBrowser />;
}

const photoCount = events.reduce((n, e) => n + (e.gallery?.length ?? 0), 0);

function ArchiveBrowser() {
  const reduce = useReducedMotion();
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");

  const results = useMemo(() => {
    const found = events.filter(
      (e) => (!category || e.category === category) && (!year || e.year === year),
    );
    return found;
  }, [category, year]);

  const active = Boolean(category || year);
  const clear = () => { setCategory(""); setYear(""); };

  return (
    <section id="archive" aria-labelledby="archive-title" className="section-y border-t hairline bg-charcoal">
      <Container>
        <SectionHeading id="archive-title" title="Event Archive" intro={`${events.length} events and ${photoCount} photographs from the LEGENDS journey. Filter by category to browse.`} />

        <div className="mt-12 space-y-6 border-y hairline py-8">
          <div className="grid gap-6">
            {eventCategories.length > 0 && <Pills label="Category" options={eventCategories} value={category} onChange={setCategory} />}
            {eventYears.length > 1 && <Pills label="Academic year" options={eventYears} value={year} onChange={setYear} />}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <p aria-live="polite" className="text-sm text-ivory/78">
              Showing {results.length} of {events.length} {events.length === 1 ? "event" : "events"}
            </p>
            {active && (
              <button type="button" onClick={clear} className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-saffron underline-offset-4 hover:underline">
                <X aria-hidden className="size-4" /> Clear filters
              </button>
            )}
          </div>
        </div>

        <div className="mt-12">
          {results.length === 0 ? (
            <EmptyState title="No events match">
              Try a different name, or clear the filters to see every event.
              <div className="mt-6"><button type="button" onClick={clear} className="min-h-11 border border-saffron px-6 text-saffron transition-colors hover:bg-saffron hover:text-obsidian">Clear filters</button></div>
            </EmptyState>
          ) : (
            <ul className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout" initial={false}>
                {results.map((e) => (
                  <motion.li
                    key={e.slug}
                    layout={!reduce}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    <EventCard event={e} shape="photo" sizes="(min-width:1024px) 31vw, (min-width:640px) 48vw, 100vw" />
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          )}
        </div>
      </Container>
    </section>
  );
}
