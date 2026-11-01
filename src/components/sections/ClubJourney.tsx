"use client";

import { motion, useInView, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { requirePerson, terms } from "@/data/leadership";
import { cn } from "@/lib/utils";

const items = [
  { when: "8 August 2024", title: "Club chartered", text: "The day the Rotaract Club of Pune City Legends was chartered." },
  ...terms.map((t, i) => ({
    when: t.year,
    title: i === terms.length - 1 ? "Current leadership" : "Leadership",
    text: `President ${requirePerson(t.president).name}; Secretary ${requirePerson(t.secretary).name}.`,
  })),
];

function Item({ when, title, text }: (typeof items)[number]) {
  const ref = useRef<HTMLLIElement>(null);
  const lit = useInView(ref, { once: true, margin: "-35% 0px -35% 0px" });
  return (
    <li ref={ref} className="relative pb-12 last:pb-0">
      <span
        aria-hidden
        className={cn(
          "absolute -left-[2.3rem] top-2 size-3 rounded-full border-2 transition-all duration-slow sm:-left-[3.3rem]",
          lit ? "scale-125 border-saffron bg-saffron shadow-[0_0_18px_4px_rgb(242_192_104/0.55)]" : "border-sky/50 bg-obsidian",
        )}
      />
      <p className="text-sm font-medium text-sky">{when}</p>
      <h3 className="mt-1 font-display text-3xl leading-tight sm:text-5xl">{title}</h3>
      <p className="mt-3 max-w-prose text-ivory/84">{text}</p>
    </li>
  );
}

/** Chronological timeline whose glowing line fills as the reader scrolls. Content is always visible; only the glow animates. */
export function ClubJourney() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  return (
    <ol ref={ref} className="relative ml-1 mt-14 pl-8 sm:pl-12">
      <span aria-hidden className="absolute bottom-0 left-0 top-0 w-0.5 rounded-full bg-ivory/15" />
      <motion.span
        aria-hidden
        style={{ scaleY: reduce ? 1 : fill }}
        className="absolute bottom-0 left-0 top-0 w-0.5 origin-top rounded-full bg-gradient-to-b from-sky to-saffron shadow-[0_0_14px_2px_rgb(125_178_242/0.55)]"
      />
      {items.map((it) => <Item key={it.when} {...it} />)}
    </ol>
  );
}
