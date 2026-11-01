"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, CalendarDays, Handshake, House, UserPlus, Users } from "lucide-react";
import { joinHref } from "@/data/club";
import { cn } from "@/lib/utils";

const items = [
  { label: "Home", href: "/", Icon: House },
  { label: "Story", href: "/our-story", Icon: BookOpen },
  { label: "Legends", href: "/team", Icon: Users },
  { label: "Events", href: "/events", Icon: CalendarDays },
  { label: "Partners", href: "/partners", Icon: Handshake },
  { label: "Join", href: joinHref, Icon: UserPlus },
];

/** App-style quick navigation for phones. Hidden from tablets upwards, where the full navbar is shown. */
export function MobileDock() {
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  return (
    <nav aria-label="Quick navigation" className="fixed inset-x-3 z-40 md:hidden" style={{ bottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
      <ul className="glass flex items-center justify-between rounded-full p-1.5">
        {items.map(({ label, href, Icon }) => {
          const active = isActive(href);
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-full text-[0.64rem] font-semibold transition-colors duration-base",
                  active ? "bg-saffron/20 text-saffron" : "text-ivory/80 hover:text-saffron",
                )}
              >
                <Icon aria-hidden className="size-5" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
