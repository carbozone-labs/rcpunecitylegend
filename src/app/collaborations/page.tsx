import type { Metadata } from "next";
import Link from "next/link";
import { RedirectToPartners } from "@/components/layout/RedirectToPartners";
import { Container } from "@/components/ui/Container";
import { basePath } from "@/lib/site";

// Collaborations now live on the unified Partners page. This route stays so old links and bookmarks still work.
export const metadata: Metadata = {
  title: "Collaborations",
  alternates: { canonical: "/partners" },
  robots: { index: false, follow: true },
};

export default function CollaborationsRedirect() {
  return (
    <section className="section-y min-h-[60svh] pt-40">
      <meta httpEquiv="refresh" content={`0; url=${basePath}/partners/#collaboration-partners`} />
      <RedirectToPartners />
      <Container className="text-center">
        <h1 className="font-display text-4xl">Collaborations have moved.</h1>
        <p className="mx-auto mt-4 max-w-md text-ivory/84">All our partners and collaborations are now on one page.</p>
        <p className="mt-8"><Link href="/partners/#collaboration-partners" className="font-semibold text-saffron underline underline-offset-4">Go to Our Partners</Link></p>
      </Container>
    </section>
  );
}
