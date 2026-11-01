import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type Action = { label: string; href: string; variant?: "primary" | "secondary"; external?: boolean };

export function CTASection({ title, actions, note, intro }: { title: string; actions: Action[]; note?: string; intro?: string }) {
  return (
    <section aria-labelledby="cta-title" className="section-y relative overflow-hidden border-t hairline">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(55%_70%_at_50%_100%,rgb(242_192_104/0.2),transparent_70%)]" />
      <Container className="text-center">
        <Reveal>
          <h2 id="cta-title" className="text-display mx-auto max-w-5xl text-[clamp(1.87rem,5.25vw,4.2rem)]">{title}</h2>
        </Reveal>
        {intro && <Reveal delay={0.06}><p className="mx-auto mt-6 max-w-xl text-lg text-ivory/86">{intro}</p></Reveal>}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            {actions.map((a) => (
              <Button key={a.label} href={a.href} variant={a.variant} external={a.external}>{a.label}</Button>
            ))}
          </div>
        </Reveal>
        {note && <p className="mx-auto mt-8 max-w-md text-sm text-ivory/74">{note}</p>}
      </Container>
    </section>
  );
}
