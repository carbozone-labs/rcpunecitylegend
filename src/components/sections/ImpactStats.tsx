import { CalendarDays, Handshake, Mail, UserCheck, Users } from "lucide-react";
import { statsVerified, stats } from "@/data/club";
import { Counter } from "@/components/ui/Counter";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [CalendarDays, Users, UserCheck, Mail, Handshake];

export function ImpactStats({ title }: { title?: string }) {
  return (
    <section aria-labelledby="stats-title" className="section-y">
      <Container>
        {title ? <SectionHeading id="stats-title" title={title} className="mb-14" /> : <h2 id="stats-title" className="sr-only">Club statistics, overall across three years</h2>}
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-5">
          {stats.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={s.label} delay={i * 0.07} className={i === 4 ? "col-span-2 lg:col-span-1" : ""}>
                <div className="border hairline flex h-full flex-col-reverse gap-4 p-5 sm:p-6">
                  <dt className="text-sm text-ivory/84">{s.label}</dt>
                  <dd className="flex items-end justify-between gap-3">
                    <span className="font-display text-[clamp(2.54rem,4.9vw,3.85rem)] leading-none text-ivory">
                      <Counter value={s.value} suffix={s.suffix} />
                    </span>
                    <Icon aria-hidden className="mb-1 size-7 shrink-0 text-sky" />
                  </dd>
                </div>
              </Reveal>
            );
          })}
        </dl>
        {!statsVerified && <p className="mt-12 text-xs text-ivory/74">Overall figures across three years, as provided by the club. Pending verification.</p>}
      </Container>
    </section>
  );
}
