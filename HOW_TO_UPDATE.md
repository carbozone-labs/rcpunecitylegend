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
