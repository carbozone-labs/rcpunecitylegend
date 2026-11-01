import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { PartnerGroup } from "@/components/partners/PartnerGroup";
import { PartnerJumpNav } from "@/components/partners/PartnerJumpNav";
import { CollaborationStats } from "@/components/collaborations/CollaborationStats";
import { WhyCollaborate } from "@/components/collaborations/WhyCollaborate";
import { joinHref } from "@/data/club";

export const metadata: Metadata = pageMeta({
  title: "Our Partners",
  description: "The sponsors, venue partners, collaborators and supporters of the Rotaract Club of Pune City Legends.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <>
      <PageHero
        lines={["Our", "Partners."]}
        intro="Great journeys are never built alone. We are grateful to the organisations, brands, and people who support the LEGENDS movement."
        next="partner-groups"
        motif="network"
      />
      <PartnerJumpNav />
      <PartnerGroup category="sponsor" />
      <PartnerGroup category="venue" tint />
      <PartnerGroup category="collaboration" />
      <CollaborationStats />
      <PartnerGroup category="supporting" tint />
      <WhyCollaborate />
      <CTASection
        title="Let’s create something meaningful together."
        intro="Interested in partnering with LEGENDS as a sponsor, a venue, or a collaborator? Start a conversation."
        actions={[
          { label: "Become a Partner", href: "/contact" },
          { label: "Join the Movement", href: joinHref, variant: "secondary" },
        ]}
      />
    </>
  );
}
