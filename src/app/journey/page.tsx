import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { JourneyTimelineSection } from "@/components/sections/JourneyTimelineSection";
import { ImpactStats } from "@/components/sections/ImpactStats";

export const metadata: Metadata = pageMeta({
  title: "Our Journey",
  description: "The leadership journey of the Rotaract Club of Pune City Legends, from its charter on 8 August 2024 to 2026–2027.",
  path: "/journey",
});

export default function JourneyPage() {
  return (
    <>
      <PageHero lines={["Built by people.", "United by purpose."]} intro="Explore the leadership journey of LEGENDS." next="timeline" />
      <JourneyTimelineSection />

      <ImpactStats title="The numbers so far" />

      <CTASection
        title="Keep exploring."
        actions={[
          { label: "Meet the Legends", href: "/team" },
          { label: "Our Story", href: "/our-story", variant: "secondary" },
          { label: "Explore Events", href: "/events", variant: "secondary" },
        ]}
      />
    </>
  );
}
