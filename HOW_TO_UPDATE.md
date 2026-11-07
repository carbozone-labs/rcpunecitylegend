# How to update events and partners

Everything is data-driven. You only edit two files; the pages update by themselves.

## Add an event: `src/data/events.ts`

Add one record to the `records` list. Only `slug`, `title` and `status` are required; every other field is optional and is
shown only when you fill it in. Use verified details only.

```ts
{
  slug: "official-event-name",        // lowercase-hyphenated, unique. The page becomes /events/official-event-name
  title: "Official Event Name",
  status: "upcoming",                 // "upcoming" | "completed" | "cancelled"
  date: "2026-12-14",                 // YYYY-MM-DD
  time: "6:00 PM onwards",
  venue: "Official venue name",
  category: "Category the club confirms",
  shortDescription: "One or two lines for the cards.",
  description: "Full description for the event page.",
  coverImage: { src: "/images/events/official-event-name/cover.jpg", alt: "Describe the photo", width: 1600, height: 1000 },
  gallery: [{ src: "/images/events/official-event-name/01.jpg", alt: "Describe the photo", width: 1600, height: 1067 }],
  registrationLink: "https://…",      // official link, upcoming events only
  year: "2026–2027",                  // academic year, used by the archive filter
  featured: true,                     // optional: makes it the headline upcoming event
}
```

* `status: "upcoming"` shows it in **Upcoming Events** (and on the Home page). The soonest event, or the one marked `featured`, becomes the large headline card.
* When the event is over, change `status` to `"completed"`: it moves to **Past Events**, and the archive's search and filters switch on automatically.
* `status: "cancelled"` keeps it visible in Upcoming Events with a clear "Cancelled" label.
* Photos go in `public/images/events/<slug>/`. Give the real width and height of each photo.
* While the list is empty, the Events page shows the "Something exciting is coming" state. Nothing is invented.

## Add a partner: `src/data/partners.ts`

1. Put the logo in `public/images/partners/` (a transparent or white-background logo works best; never recolour or crop it).
2. Add one record to `records`:

```ts
{
  id: "official-name",                // lowercase-hyphenated, unique
  name: "Official Name",              // exactly as the partner writes it
  category: "sponsor",                // "sponsor" | "venue" | "collaboration" | "supporting"
  logo: { src: "/images/partners/official-name.webp", width: 600, height: 300 },   // real pixel size
  website: "https://…",               // optional
  description: "One short line.",     // optional
  order: 10,                          // optional: smaller numbers show first
  active: true,                       // optional: false hides it without deleting
}
```

It appears in its category on `/partners`. Sponsors also appear in the Home preview. Use each organisation once only.
A partner that belongs to more than one category should be listed once, in the category that fits best.

## Check your work

```
npm run check:content   # finds missing images, duplicate partners, incomplete completed events, bad links
npm run build           # production build
```


## Event photographs: how the 47-photo import is organised

* `archive/event-photos-original/<event-slug>/` holds every supplied photograph untouched (including `Dandiya.HEIC`). It is NOT part of the website.
* `archive/event-photos-manifest.csv` / `.json` map each original file to its web copies (source, pixel size, SHA-256 prefix, output paths, which photo is the cover).
* `public/images/events/<event-slug>/<slug>-NN.webp` is the web copy (long edge up to 2400 px, WebP quality 90, sRGB) used by the hero and the full-screen viewer.
  `<slug>-NN-thumb.webp` (960 px) is used in cards and gallery grids. Both share the same aspect ratio. HEIC was converted to WebP.
* In `src/data/events.ts` each photo has `src`, `thumb`, `alt`, `width`, `height` and an optional `focus` (CSS object-position, keeps faces in frame when cropped).
* To add a photo: put the web copy and thumb in the event's folder, then add it to that event's `gallery`. Run `npm run check:content`.
* After a build, `npm run audit:event-photos` re-verifies the whole import (originals archived, web copies valid, every photo in its record and in its built page).
* Dates, venues and academic years are deliberately empty until the club confirms them. Add `date: "YYYY-MM-DD"`, `venue` and `year` to a record when known.
