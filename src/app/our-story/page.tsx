import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { guidingPhilosophy, missionPoints, storyParagraphs, storyTagline, vision } from "@/data/story";
import { ClubJourney } from "@/components/sections/ClubJourney";

export const metadata: Metadata = pageMeta({
  title: "Our Story",
  description: "The story of the Rotaract Club of Pune City Legends: how the club started and the people who have led it.",
  path: "/our-story",
});

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        lines={["The Story of", "RC Pune City Legends"]}
        intro={storyTagline}
        next="club-journey"
      />

      <section id="club-journey" aria-labelledby="journey-title" className="section-y">
        <Container>
          <SectionHeading id="journey-title" title="Club Journey Started From" intro="Only verified dates are shown. More milestones will be added as the club confirms them." />
          <ClubJourney />
        </Container>
      </section>

      <section id="our-story" aria-labelledby="story-title" className="section-y">
        <Container>
          <SectionHeading id="story-title" title="Our Story" intro={storyTagline} />
          <div className="mt-14 max-w-prose space-y-6 text-lg leading-relaxed text-ivory/88">
            {storyParagraphs.map((p, i) => (
              <Reveal key={i} delay={Math.min(i, 3) * 0.05}>
                <p className={i === storyParagraphs.length - 1 ? "font-display text-2xl leading-snug text-ivory sm:text-3xl" : undefined}>{p}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="vision-mission" aria-labelledby="vm-title" className="section-y bg-charcoal">
        <Container>
          <h2 id="vm-title" className="sr-only">Vision and mission</h2>
          <Reveal>
            <h3 className="font-display text-4xl sm:text-5xl">Our Vision</h3>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-ivory/92">{vision}</p>
          </Reveal>
          <Reveal>
            <h3 className="mt-20 font-display text-4xl sm:text-5xl">Our Mission</h3>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {missionPoints.map((m, i) => (
              <Reveal as="li" key={m.lead} delay={(i % 3) * 0.07} className="border hairline p-6">
                <p className="font-display text-2xl leading-tight text-saffron">{m.lead}</p>
                <p className="mt-3 text-ivory/86">{m.text}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section id="philosophy" aria-labelledby="phil-title" className="section-y">
        <Container>
          <Reveal>
            <p id="phil-title" className="text-sm font-medium text-sky">Our Guiding Philosophy</p>
            <blockquote className="mt-4 max-w-4xl font-display text-[clamp(1.6rem,4vw,3rem)] leading-[1.15]">“{guidingPhilosophy}”</blockquote>
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="Discover the journey. Become part of the story."
        actions={[
          { label: "Explore Our Journey", href: "/journey" },
          { label: "Meet the Legends", href: "/team", variant: "secondary" },
        ]}
      />
    </>
  );
}
