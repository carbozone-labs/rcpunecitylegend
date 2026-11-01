/**
 * PARTNERS. The only place partner content lives (sponsors, venue partners, collaborations, supporters).
 * The Partners page, the Home preview and the checks all read from this one list.
 *
 * To add a partner: put the logo in /public/images/partners/ (or any /public path), then add ONE record below.
 * It appears automatically in its category on /partners. Use each organisation once only.
 *
 *   {
 *     id: "official-name",                         // lowercase-hyphenated, unique
 *     name: "Official Name",                       // exactly as the partner writes it
 *     category: "sponsor",                         // "sponsor" | "venue" | "collaboration" | "supporting"
 *     logo: { src: "/images/partners/official-name.webp", width: 600, height: 300 },  // real pixel size
 *     photo: { src: "…", width: 1600, height: 1000 },   // optional (venues)
 *     website: "https://…",                        // optional
 *     description: "One short line.",              // optional
 *     order: 10,                                   // optional, smaller shows first
 *     active: true,                                // optional, set false to hide without deleting
 *   }
 *
 * Do not add anyone who has not approved being listed. Logos are shown as supplied: never recoloured or cropped.
 */
export type PartnerCategory = "sponsor" | "venue" | "collaboration" | "supporting";
export type PartnerImage = { src: string; width: number; height: number };
export type Partner = {
  id: string;
  name: string;
  category: PartnerCategory;
  logo?: PartnerImage;
  photo?: PartnerImage;
  website?: string;
  description?: string;
  order?: number;
  active?: boolean;
};

/** Sponsorship year shown beside the sponsors. */
export const sponsorsYear = "2026–27";

export const partnerCategories: { id: PartnerCategory; anchor: string; title: string; intro: string; empty: string }[] = [
  { id: "sponsor", anchor: "sponsors", title: "Our Sponsors", intro: `The brands standing with the LEGENDS movement in ${sponsorsYear}.`, empty: "Our sponsors will be announced here." },
  { id: "venue", anchor: "venue-partners", title: "Venue Partners", intro: "The venues that host our events and bring our ideas to life.", empty: "Our venue partners will be announced here." },
  { id: "collaboration", anchor: "collaboration-partners", title: "Collaboration Partners", intro: "Clubs and organisations we create and grow with.", empty: "Our collaboration partners will be announced here once they are confirmed." },
  { id: "supporting", anchor: "supporting-partners", title: "Supporting Partners", intro: "Institutions and well-wishers who support our journey.", empty: "Our supporting partners will be announced here once they are confirmed." },
];

const records: Partner[] = [
  // Sponsors 2026–27 (names as written by the club)
  { id: "just-in-time", name: "Just In Time", category: "sponsor", order: 10, logo: { src: "/images/sponsors/just-in-time.webp", width: 900, height: 224 } },
  { id: "laddli-paithani", name: "Laddli Paithani", category: "sponsor", order: 20, logo: { src: "/images/sponsors/laddli-paithani.webp", width: 900, height: 231 } },
  { id: "sucreve", name: "Sucreve", category: "sponsor", order: 30, logo: { src: "/images/sponsors/sucreve.webp", width: 700, height: 379 } },
  { id: "shree-radhe-pearls", name: "Shree Radhe Pearls", category: "sponsor", order: 40, logo: { src: "/images/sponsors/shree-radhe-pearls.webp", width: 640, height: 637 } },
  // Venue sponsors
  { id: "dwellion-300", name: "Dwellion 300", category: "venue", order: 10, logo: { src: "/images/venues/dwellion-300.webp", width: 700, height: 516 } },
  { id: "anushree-banquet-hall", name: "Anushree Banquet Hall", category: "venue", order: 20, logo: { src: "/images/venues/anushree-banquet-hall.webp", width: 640, height: 637 } },
];

const sorted = (list: Partner[]) => list.map((p, i) => ({ p, i })).sort((a, b) => (a.p.order ?? 1000) - (b.p.order ?? 1000) || a.i - b.i).map(({ p }) => p);

/** Every partner that is switched on. */
export const activePartners: Partner[] = sorted(records.filter((p) => p.active !== false));
export const partnersIn = (category: PartnerCategory) => activePartners.filter((p) => p.category === category);
