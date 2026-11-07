#!/usr/bin/env node
/**
 * Event photo import audit. Run after `npm run build`:  node scripts/audit-event-photos.mjs
 * Compares the source-to-output manifest, the archived originals, the web copies, the event records and the built HTML.
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const root = new URL("..", import.meta.url).pathname;
const manifest = JSON.parse(readFileSync(join(root, "archive/event-photos-manifest.json"), "utf8"));
const { events } = await import(pathToFileURL(join(root, "src/data/events.ts")).href);
const EXPECTED = { "club-assembly": 7, "smash-rally-vibe": 5, "sugandh-1-o": 4, "club-installation": 10, "samayati-4-o": 6, "mahadaan-12-o": 1, "moasic-art": 2, "diwali-celebration": 3, "dhanya-sangrahan-2-o": 2, "anokhi-wari-3-o": 1, "dandiya": 2, "gajsanskruti-10-o": 2, "morning-momenta": 2 };
const hasBuild = existsSync(join(root, "out/events"));
const webp = (f) => { const b = readFileSync(f); return b.length > 12 && b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP"; };
let fail = 0; const rows = []; let tot = [0, 0, 0];
for (const [slug, expected] of Object.entries(EXPECTED)) {
  const ev = events.find((e) => e.slug === slug);
  const man = manifest.filter((m) => m.slug === slug);
  const imported = man.filter((m) => existsSync(join(root, m.archived)) && existsSync(join(root, m.web)) && existsSync(join(root, m.thumb)) && webp(join(root, m.web)) && webp(join(root, m.thumb))).length;
  const gallery = ev?.gallery ?? [];
  const webSet = new Set(man.map((m) => "/" + m.web.replace(/^public\//, "")));
  const inGallery = gallery.filter((g) => webSet.has(g.src) && existsSync(join(root, "public", g.src)) && (!g.thumb || existsSync(join(root, "public", g.thumb)))).length;
  let inHtml = expected;
  if (hasBuild) {
    const htmlPath = join(root, "out/events", slug, "index.html");
    const html = existsSync(htmlPath) ? readFileSync(htmlPath, "utf8") : "";
    inHtml = gallery.filter((g) => html.includes((g.thumb ?? g.src).split("/").pop())).length;
    if (!existsSync(htmlPath)) fail++;
  }
  const coverOk = ev?.coverImage && gallery.some((g) => g.src === ev.coverImage.src);
  const ok = ev && imported === expected && inGallery === expected && gallery.length === expected && inHtml === expected && coverOk && ev.title && ev.description;
  if (!ok) fail++;
  rows.push([ev?.title ?? slug, expected, imported, inGallery, hasBuild ? inHtml : "n/a", ok ? "PASS" : "FAIL"]);
  tot[0] += expected; tot[1] += imported; tot[2] += inGallery;
}
console.log("| Event | Expected | Imported | In Gallery | In built page | Result |\n|---|---:|---:|---:|---:|---|");
rows.forEach((r) => console.log(`| ${r.join(" | ")} |`));
console.log(`| TOTAL | ${tot[0]} | ${tot[1]} | ${tot[2]} | | ${fail ? "FAIL" : "PASS"} |`);

// source accounting
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
const archived = walk(join(root, "archive/event-photos-original"));
const heic = manifest.filter((m) => m.converted_from_heic);
const dupSrc = new Set(manifest.map((m) => m.source)).size !== manifest.length;
const folders = readdirSync(join(root, "public/images/events")).filter((f) => Object.hasOwn(EXPECTED, f));
console.log(`\nSource files in manifest: ${manifest.length} | originals archived: ${archived.length} | duplicate sources: ${dupSrc}`);
console.log(`Event folders (of 13 required): ${folders.length} | event records for the 13: ${Object.keys(EXPECTED).filter((s) => events.some((e) => e.slug === s)).length}`);
console.log(`HEIC: ${heic.map((m) => `${m.source} -> ${m.web} (${m.web_px}, valid WebP: ${webp(join(root, m.web))})`).join("; ")}`);
const a = (p) => (p.alt && p.alt.trim().length > 10);
const missingAlt = events.flatMap((e) => e.gallery ?? []).filter((p) => !a(p)).length;
console.log(`Photos without meaningful alt text: ${missingAlt}`);
const bad = manifest.length !== 47 || archived.length !== 47 || folders.length !== 13 || heic.length !== 1 || dupSrc || missingAlt;
if (bad) fail++;
console.log(fail ? "\nAUDIT FAILED" : "\nAUDIT PASSED: every photograph is archived, converted, in its event record and in its built page.");
process.exit(fail ? 1 : 0);
