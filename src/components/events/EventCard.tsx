import Link from "next/link";
import { ArrowUpRight, Images } from "lucide-react";
import type { EventRecord } from "@/types";
import { formatDate } from "@/lib/utils";
import { StatusBadge } from "./StatusBadge";
import { CoverImage } from "./CoverImage";

export type CardShape = "wide" | "tall" | "square" | "photo";
const aspects: Record<CardShape, string> = { wide: "aspect-[16/10]", tall: "aspect-[4/5]", square: "aspect-square", photo: "aspect-[4/3]" };

export function EventCard({ event, shape = "square", sizes = "(min-width:1024px) 33vw, 100vw", hideYear }: { event: EventRecord; shape?: CardShape; sizes?: string; hideYear?: boolean }) {
  const meta = [event.date ? formatDate(event.date) : hideYear ? undefined : event.year, event.time, event.category].filter(Boolean).join(" · ");
  return (
    <article className="group">
      <Link href={`/events/${event.slug}`} className="block">
        <div className="relative overflow-hidden border hairline transition-colors duration-base group-hover:border-saffron/70">
          <CoverImage image={event.coverImage} sizes={sizes} aspect={aspects[shape]} imgClassName="transition-transform duration-slow ease-cinematic group-hover:scale-105" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-transparent to-transparent" />
          {event.status !== "completed" && <StatusBadge status={event.status} className="absolute left-4 top-4" />}
          {event.gallery && event.gallery.length > 0 && (
            <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 border border-ivory/25 bg-obsidian/70 px-2.5 py-1 text-xs text-ivory/90 backdrop-blur-sm">
              <Images aria-hidden className="size-3.5" /> {event.gallery.length} {event.gallery.length === 1 ? "photo" : "photos"}
            </span>
          )}
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            {meta && <p className="text-xs text-sky">{meta}</p>}
            <h3 className="mt-1 font-display text-2xl leading-tight sm:text-3xl transition-colors duration-base group-hover:text-saffron">{event.title}</h3>
            {event.shortDescription && <p className="mt-2 line-clamp-2 max-w-md text-sm text-ivory/78">{event.shortDescription}</p>}
            {event.venue && <p className="mt-1 text-sm text-ivory/74">{event.venue}</p>}
            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-saffron">
              Explore Event <ArrowUpRight aria-hidden className="size-4 transition-transform duration-base group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
