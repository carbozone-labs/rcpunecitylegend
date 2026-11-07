#!/usr/bin/env node
/**
 * Content and asset check (no dependencies). Run: npm run check:content
 *  - every /images/... or /icons/... path referenced in src/ must exist in public/
 *  - event and leadership records must be internally consistent
 *  - events: valid status; completed events must be complete (name, description, cover, alt text). A missing date/year is only a warning: dates are never guessed
 *  - partners: unique ids and names (no organisation listed twice), valid category, logo file present, https links
 * Exits with code 1 if there are errors.
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { pathToFileURL } from "node:url";

const root = new URL("..", import.meta.url).pathname;
const errors = [];
const warnings = [];

// 1. Asset references
const walk = (dir) => readdirSync(dir).flatMap((f) => { const p = join(dir, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
const refs = new Map();
for (const file of walk(join(root, "src")).filter((f) => /\.(ts|tsx)$/.test(f))) {
  // Ignore comments, which contain documentation examples
  const text = readFileSync(file, "utf8").replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
  for (const m of text.matchAll(/["'`](\/(?:images|icons)\/[^"'`\s]+\.(?:png|jpe?g|webp|avif|svg|gif))["'`]/g)) {
    if (!refs.has(m[1])) refs.set(m[1], relative(root, file));
  }
}
for (const [path, file] of refs) if (!existsSync(join(root, "public", path))) errors.push(`Missing image: ${path} (referenced in ${file})`);

// 2. Records
const load = (p) => import(pathToFileURL(join(root, p)).href);
const { events } = await load("src/data/events.ts");
const { people, terms } = await load("src/data/leadership.ts");
const { activePartners, partnerCategories } = await load("src/data/partners.ts");

const dupes = (arr, what) => { const seen = new Set(); arr.forEach((x) => { if (seen.has(x)) errors.push(`Duplicate ${what}: ${x}`); seen.add(x); }); };
dupes(events.map((e) => e.slug), "event slug");
dupes(people.map((p) => p.slug), "person slug");
const slugOk = (s) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s);
events.forEach((e) => { if (!slugOk(e.slug)) errors.push(`Event slug is not lowercase-hyphenated: ${e.slug}`); });
terms.forEach((t) => [t.president, t.secretary].forEach((s) => { if (!people.some((p) => p.slug === s)) errors.push(`Term ${t.year} references unknown person: ${s}`); }));

const photoProblems = (ph, where) => {
  if (!ph.alt || ph.alt.trim().length < 5) errors.push(`${where}: photo needs meaningful alt text (${ph.src})`);
  if (!(ph.width > 0 && ph.height > 0)) errors.push(`${where}: photo needs width and height (${ph.src})`);
};
const STATUSES = ["upcoming", "completed", "cancelled"];
for (const e of events) {
  const where = `Event "${e.slug}"`;
  if (!e.title?.trim()) errors.push(`${where}: missing title`);
  if (!STATUSES.includes(e.status)) errors.push(`${where}: status must be one of ${STATUSES.join(", ")}`);
  if (e.date && !/^\d{4}-\d{2}-\d{2}$/.test(e.date)) errors.push(`${where}: date must be YYYY-MM-DD`);
  if (e.registrationLink && !/^https:\/\//.test(e.registrationLink)) errors.push(`${where}: registrationLink must start with https://`);
  if (e.registrationLink && e.status !== "upcoming") warnings.push(`${where}: registrationLink is ignored unless the event is upcoming`);
  if (e.coverImage) photoProblems(e.coverImage, where);
  e.gallery?.forEach((g) => photoProblems(g, where));
  if (e.status === "completed") {
    if (!e.date && !e.year) warnings.push(`${where}: no verified date or academic year yet (add one when the club confirms it)`);
    if (!(e.description || e.shortDescription)) errors.push(`${where}: a completed event needs a description`);
    if (!e.coverImage) errors.push(`${where}: a completed event needs a cover photograph`);
    if (!e.gallery?.length) warnings.push(`${where}: no gallery photographs yet`);
  }
}
// Partners: nobody listed twice, every record usable
const seenName = new Set();
const catIds = partnerCategories.map((c) => c.id);
dupes(activePartners.map((p) => p.id), "partner id");
for (const p of activePartners) {
  const where = `Partner "${p.id}"`;
  if (!slugOk(p.id)) errors.push(`${where}: id is not lowercase-hyphenated`);
  if (!p.name?.trim()) errors.push(`${where}: missing name`);
  const key = p.name?.trim().toLowerCase().replace(/[^a-z0-9]+/g, "");
  if (seenName.has(key)) errors.push(`${where}: the same organisation is listed twice (${p.name})`);
  seenName.add(key);
  if (!catIds.includes(p.category)) errors.push(`${where}: unknown category ${p.category}`);
  if (!p.logo && !p.photo) warnings.push(`${where}: no logo or photo, the card will show the name only`);
  for (const img of [p.logo, p.photo].filter(Boolean)) {
    if (!(img.width > 0 && img.height > 0)) errors.push(`${where}: logo/photo needs real width and height`);
    if (!existsSync(join(root, "public", img.src))) errors.push(`${where}: image not found: ${img.src}`);
  }
  if (p.website && !/^https:\/\//.test(p.website)) errors.push(`${where}: website must start with https://`);
}
for (const p of people) {
  if (p.photo && !existsSync(join(root, "public", p.photo))) errors.push(`Person "${p.slug}": photo not found: ${p.photo}`);
}

console.log(`Checked ${refs.size} image reference(s), ${events.length} event(s), ${activePartners.length} partner(s), ${people.length} people, ${terms.length} leadership year(s).`);
warnings.forEach((w) => console.log(`  warning: ${w}`));
errors.forEach((e) => console.log(`  ERROR:   ${e}`));
console.log(errors.length ? `\n${errors.length} error(s).` : "\nNo errors.");
process.exit(errors.length ? 1 : 0);
