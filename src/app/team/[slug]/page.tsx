import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image from "@/components/ui/SiteImage";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { boardRole, clubRole, currentYear, getPerson, people, rolesFor } from "@/data/leadership";
import { initials } from "@/lib/utils";

type Params = { slug: string };

/** Past roles plus the current board role, oldest first. */
function profileRoles(slug: string) {
  const list = rolesFor(slug).map((r) => ({ label: clubRole(r.role), year: r.year }));
  const current = boardRole(slug);
  if (current && !list.some((r) => r.year === currentYear)) list.push({ label: current, year: currentYear });
  return list;
}

export const dynamicParams = false;
export const generateStaticParams = () => people.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) return { title: "Member not found" };
  const r = profileRoles(slug).at(-1)!;
  return pageMeta({ title: person.name, description: `${person.name}, ${r.label} ${r.year}, Rotaract Club of Pune City Legends.`, path: `/team/${person.slug}` });
}

export default async function MemberPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) notFound();

  const roles = profileRoles(slug);
  const latest = roles[roles.length - 1];
  const hasExtra = Boolean(person.bio) || Boolean(person.contributions?.length);

  return (
    <article className="pb-24 pt-32 sm:pt-40">
      <Container>
<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Meet the Legends", href: "/team" }, { label: person.name }]} />

        <div className="mt-8 grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <Reveal>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden border hairline bg-charcoal lg:max-w-none">
              {person.photo ? (
                <Image src={person.photo} alt={`Portrait of ${person.name}`} fill priority sizes="(min-width:1024px) 30vw, 90vw" className="object-cover" />
              ) : (
                <div aria-hidden className="absolute inset-0 grid place-items-center">
                  <span className="avatar-ring grid aspect-square w-48 place-items-center rounded-full font-display text-6xl leading-none text-ivory">{initials(person.name)}</span>
                </div>
              )}
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-sm text-sky">{latest.label} · {latest.year}</p>
              <h1 className="text-display mt-4 text-[clamp(2.18rem,5.6vw,4.55rem)]">{person.name}</h1>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-12 text-sm font-medium text-ivory/78">Roles at the club</h2>
              <ul className="mt-4 divide-y divide-gold/20 border-y border-gold/20">
                {roles.map((r) => (
                  <li key={`${r.year}-${r.label}`} className="flex items-baseline justify-between gap-4 py-4">
                    <span className="font-display text-2xl uppercase tracking-wide">{r.label}</span>
                    <span className="text-ivory/84">{r.year}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {person.bio && (
              <Reveal delay={0.15}>
                <h2 className="mt-12 text-sm font-medium text-ivory/78">Biography</h2>
                <p className="mt-4 max-w-prose text-lg leading-relaxed text-ivory/90">{person.bio}</p>
              </Reveal>
            )}
            {person.contributions && person.contributions.length > 0 && (
              <Reveal delay={0.2}>
                <h2 className="mt-12 text-sm font-medium text-ivory/78">Contributions</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-ivory/90">
                  {person.contributions.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </Reveal>
            )}
            {!hasExtra && (
              <p className="mt-10 max-w-prose text-sm text-ivory/74">A biography and verified contributions will appear here once they are supplied and approved.</p>
            )}

            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <Button href="/team">Back to team</Button>
              <Button href="/journey" variant="secondary">Explore Our Journey</Button>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
