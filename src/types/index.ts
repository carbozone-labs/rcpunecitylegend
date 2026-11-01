export type NavItem = { label: string; href: string; id: string };
export type Leader = { slug: string; name: string; role: string; years: string };
export type ClubYear = { years: string; president: string; secretary: string };
export type EventPhoto = {
  /** Path under /public, e.g. /images/events/<slug>/01.jpg */
  src: string;
  alt: string;
  /** Intrinsic pixel size. Needed to reserve space and avoid layout shift. */
  width: number;
  height: number;
  caption?: string;
};

export type EventStorySection = { heading?: string; paragraphs: string[] };

export type EventStatus = "upcoming" | "completed" | "cancelled";

/**
 * One club event. Only `slug`, `title` and `status` are required.
 * Every other field is optional and is rendered only when it is present.
 */
export type EventRecord = {
  slug: string;
  /** Official event name, exactly as the club writes it */
  title: string;
  /** Decides where the event appears: "upcoming" (Upcoming Events), "completed" (Past Events), "cancelled" */
  status: EventStatus;
  /** ISO date, YYYY-MM-DD. Never guess this. */
  date?: string;
  /** Free text, e.g. "6:00 PM onwards". Never guess this. */
  time?: string;
  venue?: string;
  /** Academic year, e.g. "2025–2026". Powers the year filter in the archive. */
  year?: string;
  category?: string;
  coverImage?: EventPhoto;
  shortDescription?: string;
  description?: string;
  story?: EventStorySection[];
  organizers?: string[];
  collaborators?: string[];
  objectives?: string[];
  activities?: string[];
  /** Verified participation only */
  participants?: string;
  outcomes?: string[];
  gallery?: EventPhoto[];
  /** Official registration URL (upcoming events only) */
  registrationLink?: string;
  /** Marks the headline upcoming event. If none is marked, the next upcoming event is used. */
  featured?: boolean;
};

export type Stat = { value: number; suffix: string; label: string };

export type Person = {
  slug: string;
  name: string;
  /** Only set when an approved photograph is supplied (path under /public) */
  photo?: string;
  bio?: string;
  contributions?: string[];
};
export type Role = "President" | "Secretary";
export type Term = { year: string; president: string; secretary: string };
