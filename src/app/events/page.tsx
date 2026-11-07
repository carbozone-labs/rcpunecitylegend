import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { UpcomingEvents } from "@/components/events/UpcomingEvents";
import { EventArchive } from "@/components/events/EventArchive";
import { joinHref } from "@/data/club";

export const metadata: Metadata = pageMeta({
  title: "Events",
  description: "The event archive of the Rotaract Club of Pune City Legends: photo galleries from every event, plus upcoming announcements.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      <PageHero lines={["Every Event", "Leaves a Legacy."]} intro="From service drives to ceremonies, the moments that shape the LEGENDS journey, recorded here as they happened." next="archive" />
      <EventArchive />
      <UpcomingEvents />
      <CTASection title="Be part of what comes next." actions={[{ label: "Join the Movement", href: joinHref }]} />
    </>
  );
}
