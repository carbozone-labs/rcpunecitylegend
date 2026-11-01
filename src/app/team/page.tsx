import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { LeadershipCard } from "@/components/shared/LeadershipCard";
import { EventCard } from "@/components/events/EventCard";
import { events } from "@/data/events";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { joinHref } from "@/data/club";
import { clubRole, currentBoard, currentYear, latestRole, people, requirePerson, rolesFor } from "@/data/leadership";

export const metadata: Metadata = pageMeta({
  title: "Meet the Legends",
  description: "The 2026–2027 Core & Board of Directors and the past presidents and secretaries of the Rotaract Club of Pune City Legends.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <PageHero lines={["The people behind", "the purpose."]} intro="Meet the people who contribute to the LEGENDS journey." next="current-board" motif="logo-left" />

      <section id="current-board" aria-labelledby="board-title" className="section-y">
        <Container>
          <SectionHeading id="board-title" title={`Core & Board of Directors ${currentYear.replace("–", "–\u2060")}`} intro="The people leading the club this year." />
          <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {currentBoard.map(({ slug, role }, i) => (
              <Reveal as="li" key={slug} delay={(i % 4) * 0.08}>
                <LeadershipCard person={requirePerson(slug)} role={role} year={currentYear} current={i < 2} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>


      <section id="members" aria-labelledby="members-title" className="section-y">
        <Container>
          <SectionHeading id="members-title" title="Past leaders" intro="Those who led the club before the current board. Open a profile for their documented roles." />
          <ul className="mt-14 grid grid-cols-1 gap-6 xs:grid-cols-2 lg:grid-cols-4">
            {people.filter((p) => !currentBoard.some((b) => b.slug === p.slug) && rolesFor(p.slug).length).map((p, i) => {
              const r = latestRole(p.slug);
              return (
                <Reveal as="li" key={p.slug} delay={(i % 4) * 0.08}>
                  <LeadershipCard person={p} role={clubRole(r.role)} year={r.year} current={r.year === currentYear} />
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      <section id="memories" aria-labelledby="memories-title" className="section-y bg-charcoal">
        <Container>
          <SectionHeading id="memories-title" title="Events and memories" intro="The club's events and moments, together in one place." />
          <ul className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((e, i) => (
              <Reveal as="li" key={e.slug} delay={(i % 3) * 0.08}>
                <EventCard event={e} shape="wide" hideYear />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <CTASection
        title="Walk the journey. Join the movement."
        actions={[
          { label: "Explore Our Journey", href: "/journey" },
          { label: "Join the Movement", href: joinHref, variant: "secondary" },
        ]}
      />
    </>
  );
}
