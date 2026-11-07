import Image from "@/components/ui/SiteImage";
import { Sparkles } from "lucide-react";
import type { EventPhoto } from "@/types";
import { cn } from "@/lib/utils";

type Props = {
  image?: EventPhoto;
  sizes: string;
  priority?: boolean;
  /** Tailwind aspect class for the frame, e.g. aspect-[4/5] */
  aspect: string;
  className?: string;
  imgClassName?: string;
};

/** Frame with a fixed aspect ratio (no layout shift). Shows a branded abstract graphic (never a fake photo) when there is no photograph. */
export function CoverImage({ image, sizes, priority, aspect, className, imgClassName }: Props) {
  return (
    <div className={cn("relative overflow-hidden bg-charcoal", aspect, className)}>
      {image ? (
        <>
          <Image src={priority ? image.src : (image.thumb ?? image.src)} alt={image.alt} fill sizes={sizes} priority={priority} loading={priority ? undefined : "lazy"} style={image.focus ? { objectPosition: image.focus } : undefined} className={cn("object-cover", imgClassName)} />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky/15 via-transparent to-obsidian/30" />
        </>
      ) : (
        <div aria-hidden className="event-art relative flex size-full items-center justify-center">
          <div className="relative h-[78%] max-h-56 aspect-square">
            <span className="ring-pulse" style={{ "--i": "0%", "--d": "0s" } as React.CSSProperties} />
            <span className="ring-pulse" style={{ "--i": "16%", "--d": "1.4s" } as React.CSSProperties} />
          </div>
          <Sparkles className="absolute size-8 text-sky/80" />
        </div>
      )}
    </div>
  );
}
