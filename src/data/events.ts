import type { EventRecord } from "@/types";

/**
 * EVENT RECORDS. The only place event content lives.
 *
 * The club has not yet supplied official event details, so this list is intentionally EMPTY and no event
 * has been invented. While it is empty the Events page shows the "Something exciting is coming" state.
 *
 * Adding an event is one record. The page sorts it by its `status`:
 *   "upcoming"  -> appears in Upcoming Events (the first / `featured` one becomes the headline event)
 *   "completed" -> appears in the Past Events archive (search and filters switch on automatically)
 *   "cancelled" -> appears in Upcoming Events, clearly marked as cancelled
 *
 * Only `slug`, `title` and `status` are required. Every other field is optional and is shown only when you provide it.
 *
 * Example (copy, fill in with VERIFIED details only, and delete the comment markers):
 *
 *   {
 *     slug: "official-event-name",                 // lowercase-hyphenated, unique; becomes /events/official-event-name
 *     title: "Official Event Name",
 *     status: "upcoming",                          // "upcoming" | "completed" | "cancelled"
 *     date: "2026-12-14",                          // ISO date
 *     time: "6:00 PM onwards",
 *     venue: "Official venue name",
 *     category: "Category the club confirms",
 *     shortDescription: "One or two lines for the card.",
 *     description: "Full description for the event page.",
 *     coverImage: { src: "/images/events/official-event-name/cover.jpg", alt: "…", width: 1600, height: 1000 },
 *     gallery: [{ src: "/images/events/official-event-name/01.jpg", alt: "…", width: 1600, height: 1067 }],
 *     registrationLink: "https://…",               // official link only
 *     year: "2026–2027",                           // academic year (archive filter)
 *   }
 */
const records: EventRecord[] = [];

const byDateAsc = (a: EventRecord, b: EventRecord) => (a.date && b.date ? (a.date < b.date ? -1 : a.date > b.date ? 1 : 0) : a.date ? -1 : b.date ? 1 : 0);
const byDateDesc = (a: EventRecord, b: EventRecord) => (a.date && b.date ? (a.date < b.date ? 1 : a.date > b.date ? -1 : 0) : a.date ? -1 : b.date ? 1 : 0);

export const events: EventRecord[] = records;

/** Upcoming events, soonest first (events without a confirmed date go last). */
export const upcomingEvents = records.filter((e) => e.status === "upcoming").sort(byDateAsc);
export const cancelledEvents = records.filter((e) => e.status === "cancelled").sort(byDateAsc);
/** Completed events, newest first. This is the archive. */
export const pastEvents = records.filter((e) => e.status === "completed").sort(byDateDesc);

export const getEvent = (slug: string) => records.find((e) => e.slug === slug);
/** The headline upcoming event: the one marked `featured`, otherwise the soonest. */
export const getFeaturedUpcoming = () => upcomingEvents.find((e) => e.featured) ?? upcomingEvents[0];

export const eventCategories = [...new Set(pastEvents.map((e) => e.category).filter((c): c is string => !!c))].sort();
export const eventYears = [...new Set(pastEvents.map((e) => e.year).filter((y): y is string => !!y))].sort().reverse();

/** Same status and category first, then the rest. Never includes the current event. */
export function getRelatedEvents(slug: string, count = 3): EventRecord[] {
  const current = getEvent(slug);
  const others = records.filter((e) => e.slug !== slug);
  const score = (e: EventRecord) => (current && e.status === current.status ? 2 : 0) + (current?.category && e.category === current.category ? 1 : 0);
  return [...others].sort((a, b) => score(b) - score(a)).slice(0, count);
}

/** Previous and next event in the combined timeline (newest first). */
export function getAdjacentEvents(slug: string) {
  const ordered = [...upcomingEvents, ...cancelledEvents, ...pastEvents];
  const i = ordered.findIndex((e) => e.slug === slug);
  return { previous: i >= 0 ? ordered[i + 1] : undefined, next: i > 0 ? ordered[i - 1] : undefined };
}
