import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { UpcomingEvents } from "@/components/events/UpcomingEvents";
import { EventArchive } from "@/components/events/EventArchive";
import { joinHref } from "@/data/club";

export const metadata: Metadata = pageMeta({
  title: "Events",
  description: "Upcoming events and the event archive of the Rotaract Club of Pune City Legends. Official announcements are published here.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      <PageHero lines={["Every event", "leaves a legacy."]} intro="Upcoming events, and the moments that shape the LEGENDS journey." next="upcoming" />
      <UpcomingEvents />
      <EventArchive />
      <CTASection title="Be part of what comes next." actions={[{ label: "Join the Movement", href: joinHref }]} />
    </>
  );
}
