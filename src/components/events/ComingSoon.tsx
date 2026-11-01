import Image from "next/image";
import { CalendarClock, MapPin, Ticket } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { club, joinHref } from "@/data/club";
import { cn } from "@/lib/utils";

/**
 * "Something exciting is coming": the Upcoming Events state while no official event has been announced.
 * Purely decorative graphics (rings, dots, logo glow). It shows no dates, venues, names or links that are not real.
 */
export function ComingSoon({ compact }: { compact?: boolean }) {
  const social = club.contact.socials[0];
  const stay = social ? { href: social.href, external: true } : { href: "/contact", external: false };
  return (
    <Reveal>
      <div className="border hairline relative isolate overflow-hidden">
        <div aria-hidden className="event-dots absolute inset-0 -z-10" />
        <div className={cn("grid items-center gap-10", compact ? "p-7 sm:p-10 lg:grid-cols-[1.4fr_0.6fr]" : "p-8 sm:p-12 lg:grid-cols-[1.15fr_0.85fr] lg:p-16")}>
          <div>
            <p className="text-sm font-medium text-sky">Upcoming events</p>
            <h3 className={cn("font-display leading-[1.08]", compact ? "mt-3 text-3xl sm:text-4xl" : "mt-4 text-[clamp(2.1rem,5vw,3.8rem)]")}>
              Something exciting <span className="text-shimmer">is coming.</span>
            </h3>
            <p className="mt-5 max-w-prose text-lg leading-relaxed text-ivory/86">
              Event details coming soon. Announcements for our upcoming events will be published here soon.
            </p>
            {!compact && (
              <ul className="mt-7 flex flex-wrap gap-3 text-sm text-ivory/86">
                {[{ Icon: CalendarClock, t: "Dates" }, { Icon: MapPin, t: "Venues" }, { Icon: Ticket, t: "Registration" }].map(({ Icon, t }) => (
                  <li key={t} className="glass inline-flex items-center gap-2 rounded-full px-4 py-2">
                    <Icon aria-hidden className="size-4 text-sky" /> {t} <span className="text-ivory/65">· announced soon</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={stay.href} external={stay.external}>Stay Connected</Button>
              {!compact && <Button href={joinHref} variant="secondary">Join the Movement</Button>}
            </div>
          </div>

          <div aria-hidden className={cn("relative mx-auto aspect-square w-full", compact ? "max-w-[12rem]" : "max-w-sm")}>
            <span className="ring-pulse" style={{ "--i": "0%", "--d": "0s" } as React.CSSProperties} />
            <span className="ring-pulse" style={{ "--i": "11%", "--d": "1.2s" } as React.CSSProperties} />
            <span className="ring-pulse" style={{ "--i": "22%", "--d": "2.4s" } as React.CSSProperties} />
            <span className="spark" style={{ left: "12%", top: "18%", "--d": "0s" } as React.CSSProperties} />
            <span className="spark" style={{ left: "84%", top: "30%", "--d": "1.6s" } as React.CSSProperties} />
            <span className="spark" style={{ left: "70%", top: "86%", "--d": "3.1s" } as React.CSSProperties} />
            <div className="absolute inset-[30%] rounded-full shadow-[0_0_80px_8px_rgb(242_192_104/0.35)]">
              <Image src="/images/logo/legends-logo-sm.webp" alt="" width={160} height={160} className="size-full rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
