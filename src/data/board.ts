import type { Leader } from "@/types";
import { clubRole, currentBoard, currentYear, getPerson, latestRole, people, rolesFor } from "./leadership";

/** Preview list, derived from the leadership data (no duplicated names). Current board first, then past presidents and secretaries. */
export const board: Leader[] = [
  ...currentBoard.map((b) => ({ slug: b.slug, name: getPerson(b.slug)!.name, role: b.role, years: currentYear })),
  ...people
    .filter((p) => !currentBoard.some((b) => b.slug === p.slug) && rolesFor(p.slug).length)
    .map((p) => { const r = latestRole(p.slug); return { slug: p.slug, name: p.name, role: clubRole(r.role), years: r.year }; }),
];
