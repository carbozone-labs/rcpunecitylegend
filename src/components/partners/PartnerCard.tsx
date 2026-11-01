import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Partner } from "@/data/partners";

/**
 * One partner. The logo sits, undistorted (object-contain), on a white plate so every original logo stays legible
 * in both themes. Cards share one size. A venue with a photograph shows the photo and a small logo chip.
 */
export function PartnerCard({ partner }: { partner: Partner }) {
  const { name, logo, photo, website, description } = partner;
  return (
    <div className="group border hairline h-full p-2.5 sm:p-3">
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
        {photo ? (
          <>
            <Image src={photo.src} alt={`${name} venue`} fill sizes="(min-width:1024px) 22vw, 45vw" className="object-cover transition-transform duration-slow ease-cinematic group-hover:scale-105" />
            {logo && (
              <span className="absolute bottom-2 left-2 rounded-xl bg-white p-1.5 shadow">
                <Image src={logo.src} alt={`${name} logo`} width={logo.width} height={logo.height} className="h-10 w-auto object-contain" />
              </span>
            )}
          </>
        ) : logo ? (
          <Image src={logo.src} alt={`${name} logo`} fill sizes="(min-width:1024px) 22vw, 45vw" className="object-contain p-5 transition-transform duration-slow ease-cinematic group-hover:scale-105 sm:p-8" />
        ) : (
          <span className="grid size-full place-items-center px-4 text-center font-display text-2xl text-[#0b2554]">{name}</span>
        )}
        {website && <a href={website} target="_blank" rel="noopener noreferrer" aria-label={`${name} website (opens in a new tab)`} className="absolute inset-0 rounded-2xl" />}
      </div>
      <div className="px-2 pb-1.5 pt-3 text-center">
        <p className="font-medium text-ivory/94">{name}</p>
        {description && <p className="mt-1 text-sm text-ivory/78">{description}</p>}
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-saffron underline-offset-4 hover:underline">
            Visit website <ArrowUpRight aria-hidden className="size-4" /><span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </div>
    </div>
  );
}
