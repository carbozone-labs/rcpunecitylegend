"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Person } from "@/types";
import { cn, initials } from "@/lib/utils";

type Props = { person: Person; role: string; year: string; current?: boolean; className?: string };

/** Premium portrait card. Shows a consistent monogram until an approved photograph exists. */
export function LeadershipCard({ person, role, year, current, className }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.article whileHover={reduce ? undefined : { y: -6 }} transition={{ duration: 0.4 }} className={cn("group", className)}>
      <Link href={`/team/${person.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden border hairline bg-charcoal transition-colors duration-base group-hover:border-saffron/70">
          {person.photo ? (
            <Image src={person.photo} alt={`Portrait of ${person.name}`} fill sizes="(min-width:1024px) 25vw, 50vw" loading="lazy" className="object-cover transition-transform duration-slow ease-cinematic group-hover:scale-105" />
          ) : (
            <div aria-hidden className="absolute inset-0 grid place-items-center transition-transform duration-slow ease-cinematic group-hover:scale-110">
              <span className="avatar-ring grid aspect-square w-[46%] place-items-center rounded-full font-display text-[clamp(1.9rem,6vw,3rem)] leading-none text-ivory">{initials(person.name)}</span>
            </div>
          )}
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 via-[46%] to-transparent" />
          {current && <span className="absolute left-2 top-2 bg-saffron sm:left-4 sm:top-4 px-2 py-1 text-xs font-semibold text-obsidian">Current</span>}
          <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
            <h3 className="font-display text-base leading-tight sm:text-2xl">{person.name}</h3>
            <p className="mt-1 text-xs leading-snug text-sky sm:text-sm">{role}</p>
            <p className="mt-0.5 text-xs text-ivory/74">{year}</p>
            <span className="mt-2 inline-flex sm:mt-4 items-center gap-1 text-sm font-medium text-ivory/90 transition-colors group-hover:text-saffron">
              View Profile <ArrowUpRight aria-hidden className="size-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
