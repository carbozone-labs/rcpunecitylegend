import type { EventRecord } from "@/types";

/**
 * EVENT RECORDS. The only place event content lives.
 *
 * No event details have been invented: dates, venues and chief guests appear only when the club confirms them.
 * The records below carry the event name, a category, a description of what the photographs show, and the photo gallery.
 * Add `date`, `venue` and `year` to a record once they are verified. Record order = display order for undated events.
 *
 * Adding an event is one record. The page sorts it by its `status`:
 *   "upcoming"  -> appears in Upcoming Events (the first / `featured` one becomes the headline event)
 *   "completed" -> appears in the Past Events archive (search and filters switch on automatically)
 *   "cancelled" -> appears in Upcoming Events, clearly marked as cancelled
 *
 * Only `slug`, `title` and `status` are required. Every other field is optional and is shown only when you provide it.
 *
 * Example (copy, fill in with VERIFIED details only, and delete the comment markers):
 *
 *   {
 *     slug: "official-event-name",                 // lowercase-hyphenated, unique; becomes /events/official-event-name
 *     title: "Official Event Name",
 *     status: "upcoming",                          // "upcoming" | "completed" | "cancelled"
 *     date: "2026-12-14",                          // ISO date
 *     time: "6:00 PM onwards",
 *     venue: "Official venue name",
 *     category: "Category the club confirms",
 *     shortDescription: "One or two lines for the card.",
 *     description: "Full description for the event page.",
 *     coverImage: { src: "/images/events/official-event-name/cover.jpg", alt: "…", width: 1600, height: 1000 },
 *     gallery: [{ src: "/images/events/official-event-name/01.jpg", alt: "…", width: 1600, height: 1067 }],
 *     registrationLink: "https://…",               // official link only
 *     year: "2026–2027",                           // academic year (archive filter)
 *   }
 */
const records: EventRecord[] = [
  {
    slug: "club-assembly",
    title: "Club Assembly",
    status: "completed",
    category: "Club Activities",
    shortDescription: "Members of the Rotaract Club of Pune City Legends gather for a Club Assembly: presentations, an exchange of mementos and a group portrait.",
    description: "Photographs from the Club Assembly of the Rotaract Club of Pune City Legends. Members present to the group in front of a screen, mementos are exchanged across the table, and the assembly closes with a group portrait beneath the club banner.",
    coverImage: { src: "/images/events/club-assembly/club-assembly-07.webp", thumb: "/images/events/club-assembly/club-assembly-07-thumb.webp", alt: "Members of the Rotaract Club of Pune City Legends pose together on a sofa beneath the club banner at the Club Assembly.", width: 1280, height: 960, focus: "50% 40%" },
    gallery: [
      { src: "/images/events/club-assembly/club-assembly-01.webp", thumb: "/images/events/club-assembly/club-assembly-01-thumb.webp", alt: "A club member speaks to the assembly beside a wall-mounted screen while office-bearers sit at the table.", width: 2400, height: 1800 },
      { src: "/images/events/club-assembly/club-assembly-02.webp", thumb: "/images/events/club-assembly/club-assembly-02-thumb.webp", alt: "A member presents to the assembly in front of a screen, with a club certificate and a pen on the table before her.", width: 1800, height: 2400 },
      { src: "/images/events/club-assembly/club-assembly-03.webp", thumb: "/images/events/club-assembly/club-assembly-03-thumb.webp", alt: "A member gestures towards a presentation slide on the screen during the Club Assembly.", width: 1800, height: 2400 },
      { src: "/images/events/club-assembly/club-assembly-04.webp", thumb: "/images/events/club-assembly/club-assembly-04-thumb.webp", alt: "A member presents beside a screen showing a slide titled International Food Festival while two office-bearers listen.", width: 2400, height: 1800 },
      { src: "/images/events/club-assembly/club-assembly-05.webp", thumb: "/images/events/club-assembly/club-assembly-05-thumb.webp", alt: "Two members hold a red cloth-wrapped gift between them as a third member looks on at the Club Assembly.", width: 2400, height: 1800 },
      { src: "/images/events/club-assembly/club-assembly-06.webp", thumb: "/images/events/club-assembly/club-assembly-06-thumb.webp", alt: "Members exchange a red-wrapped memento across the table, with the club certificate and a brass bell in front.", width: 2400, height: 1800 },
      { src: "/images/events/club-assembly/club-assembly-07.webp", thumb: "/images/events/club-assembly/club-assembly-07-thumb.webp", alt: "Members of the Rotaract Club of Pune City Legends pose together on a sofa beneath the club banner at the Club Assembly.", width: 1280, height: 960, focus: "50% 40%" },
    ],
  },
  {
    slug: "smash-rally-vibe",
    title: "Smash, Rally, Vibe",
    status: "completed",
    category: "Fellowship & Recreation",
    shortDescription: "A badminton session on an indoor court with club members: rallies, smashes and group selfies.",
    description: "Photographs from Smash, Rally, Vibe, a badminton session played by members of the Rotaract Club of Pune City Legends on an indoor court. The gallery follows the rallies and smashes, a group selfie, and the Rotaract bell, gavel and medals laid out on a table.",
    coverImage: { src: "/images/events/smash-rally-vibe/smash-rally-vibe-04.webp", thumb: "/images/events/smash-rally-vibe/smash-rally-vibe-04-thumb.webp", alt: "Five club members lean into a group selfie on the badminton court, holding their rackets.", width: 2400, height: 1350, focus: "50% 35%" },
    gallery: [
      { src: "/images/events/smash-rally-vibe/smash-rally-vibe-01.webp", thumb: "/images/events/smash-rally-vibe/smash-rally-vibe-01-thumb.webp", alt: "Two club members stand on opposite sides of a green badminton court, rackets in hand, ready to play.", width: 960, height: 1280 },
      { src: "/images/events/smash-rally-vibe/smash-rally-vibe-02.webp", thumb: "/images/events/smash-rally-vibe/smash-rally-vibe-02-thumb.webp", alt: "A player leaps with his racket raised to hit a shuttlecock on the indoor court.", width: 960, height: 1280 },
      { src: "/images/events/smash-rally-vibe/smash-rally-vibe-03.webp", thumb: "/images/events/smash-rally-vibe/smash-rally-vibe-03-thumb.webp", alt: "A phone screenshot of a badminton rally in progress, with players on both sides of the net.", width: 900, height: 1600 },
      { src: "/images/events/smash-rally-vibe/smash-rally-vibe-04.webp", thumb: "/images/events/smash-rally-vibe/smash-rally-vibe-04-thumb.webp", alt: "Five club members lean into a group selfie on the badminton court, holding their rackets.", width: 2400, height: 1350, focus: "50% 35%" },
      { src: "/images/events/smash-rally-vibe/smash-rally-vibe-05.webp", thumb: "/images/events/smash-rally-vibe/smash-rally-vibe-05-thumb.webp", alt: "A Rotaract bell, a gavel and medals with yellow and navy ribbons arranged on a table beside the court.", width: 1800, height: 2400 },
    ],
  },
  {
    slug: "sugandh-1-o",
    title: "Sugandh 1.O",
    status: "completed",
    category: "Community Service",
    shortDescription: "Marigold flowers collected in bags, and the incense sticks made from them, with club members taking part.",
    description: "Photographs from Sugandh 1.O. Bags of marigold flowers are gathered at a roadside collection point, club members pose with the collection, and the gallery ends with trays of incense sticks and the bottles and tools used to make them.",
    coverImage: { src: "/images/events/sugandh-1-o/sugandh-1-o-03.webp", thumb: "/images/events/sugandh-1-o/sugandh-1-o-03-thumb.webp", alt: "A group of club members and volunteers pose behind bags of collected marigold flowers beneath a banyan tree.", width: 1280, height: 960, focus: "50% 40%" },
    gallery: [
      { src: "/images/events/sugandh-1-o/sugandh-1-o-01.webp", thumb: "/images/events/sugandh-1-o/sugandh-1-o-01-thumb.webp", alt: "Colourful bags filled with orange and yellow marigold flowers piled beside a wall and a banyan tree.", width: 960, height: 1280 },
      { src: "/images/events/sugandh-1-o/sugandh-1-o-02.webp", thumb: "/images/events/sugandh-1-o/sugandh-1-o-02-thumb.webp", alt: "Club members and local volunteers stand close together on a street, handing around a small brass bell.", width: 1800, height: 2400 },
      { src: "/images/events/sugandh-1-o/sugandh-1-o-03.webp", thumb: "/images/events/sugandh-1-o/sugandh-1-o-03-thumb.webp", alt: "A group of club members and volunteers pose behind bags of collected marigold flowers beneath a banyan tree.", width: 1280, height: 960, focus: "50% 40%" },
      { src: "/images/events/sugandh-1-o/sugandh-1-o-04.webp", thumb: "/images/events/sugandh-1-o/sugandh-1-o-04-thumb.webp", alt: "Bundles of incense sticks arranged in a green tray on a table, next to dark glass bottles and sacks.", width: 2400, height: 2400 },
    ],
  },
  {
    slug: "club-installation",
    title: "Club Installation",
    status: "completed",
    category: "Club Activities",
    shortDescription: "The Rotaract Club of Pune City Legends installation, with mementos presented on stage and members gathered in a decorated hall.",
    description: "Photographs from the Club Installation of the Rotaract Club of Pune City Legends. Members in traditional attire present and receive mementos on a stage draped in gold and white, and the gallery closes with group portraits of the board, guests and members in the hall.",
    coverImage: { src: "/images/events/club-installation/club-installation-07.webp", thumb: "/images/events/club-installation/club-installation-07-thumb.webp", alt: "A large group of members and guests in festive attire pose together in the installation hall.", width: 2400, height: 1350, focus: "50% 45%" },
    gallery: [
      { src: "/images/events/club-installation/club-installation-01.webp", thumb: "/images/events/club-installation/club-installation-01-thumb.webp", alt: "A guest in a pink saree presents a memento to a member in a purple saree on the decorated installation stage.", width: 1800, height: 2400 },
      { src: "/images/events/club-installation/club-installation-02.webp", thumb: "/images/events/club-installation/club-installation-02-thumb.webp", alt: "A member in a maroon saree receives a memento from a guest in a black T-shirt in the hall.", width: 1800, height: 2400 },
      { src: "/images/events/club-installation/club-installation-03.webp", thumb: "/images/events/club-installation/club-installation-03-thumb.webp", alt: "A member wearing a yellow and blue collar accepts a memento from a young man, with a small idol on a shelf behind.", width: 1800, height: 2400 },
      { src: "/images/events/club-installation/club-installation-04.webp", thumb: "/images/events/club-installation/club-installation-04-thumb.webp", alt: "A guest hands a memento to a member in a purple saree on the stage while two members stand beside them.", width: 1800, height: 2400 },
      { src: "/images/events/club-installation/club-installation-05.webp", thumb: "/images/events/club-installation/club-installation-05-thumb.webp", alt: "A member in a saree and a guest in white shirt and trousers exchange a memento at the stage table.", width: 1800, height: 2400 },
      { src: "/images/events/club-installation/club-installation-06.webp", thumb: "/images/events/club-installation/club-installation-06-thumb.webp", alt: "Five members and guests stand in a row on the stage in front of the Rotaract Club of Pune City Legends banner.", width: 1800, height: 2400 },
      { src: "/images/events/club-installation/club-installation-07.webp", thumb: "/images/events/club-installation/club-installation-07-thumb.webp", alt: "A large group of members and guests in festive attire pose together in the installation hall.", width: 2400, height: 1350, focus: "50% 45%" },
      { src: "/images/events/club-installation/club-installation-08.webp", thumb: "/images/events/club-installation/club-installation-08-thumb.webp", alt: "Members in colourful traditional dress stand in rows across the hall beneath the ceiling lights.", width: 2400, height: 1350 },
      { src: "/images/events/club-installation/club-installation-09.webp", thumb: "/images/events/club-installation/club-installation-09-thumb.webp", alt: "A big group of members and guests sits and stands together for a group photograph in the hall.", width: 2400, height: 1800 },
      { src: "/images/events/club-installation/club-installation-10.webp", thumb: "/images/events/club-installation/club-installation-10-thumb.webp", alt: "Members in sarees and kurtas line up on the stage in front of the club banner.", width: 1280, height: 960 },
    ],
  },
  {
    slug: "samayati-4-o",
    title: "Samayati 4.O",
    status: "completed",
    category: "Fellowship & Recreation",
    shortDescription: "Club members together at a decorated festival stage, outside a temple and at a hillside viewpoint.",
    description: "Photographs from Samayati 4.O, with members of the Rotaract Club of Pune City Legends together at an ornately decorated stage, in front of a white temple, at a hillside viewpoint and in group portraits outdoors.",
    coverImage: { src: "/images/events/samayati-4-o/samayati-4-o-02.webp", thumb: "/images/events/samayati-4-o/samayati-4-o-02-thumb.webp", alt: "A group of members and guests stand in front of a decorated stage with an idol under bright lights.", width: 2400, height: 1800, focus: "50% 45%" },
    gallery: [
      { src: "/images/events/samayati-4-o/samayati-4-o-01.webp", thumb: "/images/events/samayati-4-o/samayati-4-o-01-thumb.webp", alt: "Five club members pose together beneath a carved, peach-coloured arch with a lit building behind them.", width: 1800, height: 2400 },
      { src: "/images/events/samayati-4-o/samayati-4-o-02.webp", thumb: "/images/events/samayati-4-o/samayati-4-o-02-thumb.webp", alt: "A group of members and guests stand in front of a decorated stage with an idol under bright lights.", width: 2400, height: 1800, focus: "50% 45%" },
      { src: "/images/events/samayati-4-o/samayati-4-o-03.webp", thumb: "/images/events/samayati-4-o/samayati-4-o-03-thumb.webp", alt: "Club members pose on a crowded street in front of a white temple with a tall spire.", width: 1090, height: 2400 },
      { src: "/images/events/samayati-4-o/samayati-4-o-04.webp", thumb: "/images/events/samayati-4-o/samayati-4-o-04-thumb.webp", alt: "A cheerful group selfie of club members taken at a hillside viewpoint with the city behind them.", width: 2400, height: 1800 },
      { src: "/images/events/samayati-4-o/samayati-4-o-05.webp", thumb: "/images/events/samayati-4-o/samayati-4-o-05-thumb.webp", alt: "Ten club members stand in a line along a low wall at a viewpoint under a hazy sky.", width: 2400, height: 1800 },
      { src: "/images/events/samayati-4-o/samayati-4-o-06.webp", thumb: "/images/events/samayati-4-o/samayati-4-o-06-thumb.webp", alt: "A group of club members stand together on a tree-lined lane in daylight.", width: 1554, height: 1560 },
    ],
  },
  {
    slug: "mahadaan-12-o",
    title: "Mahadaan 12.O",
    status: "completed",
    category: "Community Service",
    shortDescription: "Club members gathered together for Mahadaan 12.O.",
    description: "A photograph from Mahadaan 12.O, showing members of the Rotaract Club of Pune City Legends gathered together in a room.",
    coverImage: { src: "/images/events/mahadaan-12-o/mahadaan-12-o-01.webp", thumb: "/images/events/mahadaan-12-o/mahadaan-12-o-01-thumb.webp", alt: "A group of club members stand together in a room with a sofa and a small table in front of them.", width: 1280, height: 720, focus: "50% 40%" },
    gallery: [
      { src: "/images/events/mahadaan-12-o/mahadaan-12-o-01.webp", thumb: "/images/events/mahadaan-12-o/mahadaan-12-o-01-thumb.webp", alt: "A group of club members stand together in a room with a sofa and a small table in front of them.", width: 1280, height: 720, focus: "50% 40%" },
    ],
  },
  {
    slug: "moasic-art",
    title: "Moasic Art",
    status: "completed",
    category: "Workshops & Creativity",
    shortDescription: "A hands-on art session in which members decorate small tiles and show off their finished pieces.",
    description: "Photographs from Moasic Art, a hands-on art session of the Rotaract Club of Pune City Legends. Members hold up the small decorated tiles they made, from a close view of the finished pieces to a group pose in the room.",
    coverImage: { src: "/images/events/moasic-art/moasic-art-02.webp", thumb: "/images/events/moasic-art/moasic-art-02-thumb.webp", alt: "Four members smile and hold up their finished decorated tiles in a classroom-style room.", width: 1872, height: 2400, focus: "50% 30%" },
    gallery: [
      { src: "/images/events/moasic-art/moasic-art-01.webp", thumb: "/images/events/moasic-art/moasic-art-01-thumb.webp", alt: "Hands hold up four small square tiles decorated with beads and pearls in different patterns.", width: 960, height: 1280 },
      { src: "/images/events/moasic-art/moasic-art-02.webp", thumb: "/images/events/moasic-art/moasic-art-02-thumb.webp", alt: "Four members smile and hold up their finished decorated tiles in a classroom-style room.", width: 1872, height: 2400, focus: "50% 30%" },
    ],
  },
  {
    slug: "diwali-celebration",
    title: "Diwali Celebration",
    status: "completed",
    category: "Culture & Festivals",
    shortDescription: "Club members celebrate Diwali together with festive lights, flower garlands and snacks.",
    description: "Photographs from the Diwali Celebration of the Rotaract Club of Pune City Legends. Members gather in a room lit with fairy lights and decorated with marigold garlands and rangoli, with snacks and cups set out on the table.",
    coverImage: { src: "/images/events/diwali-celebration/diwali-celebration-01.webp", thumb: "/images/events/diwali-celebration/diwali-celebration-01-thumb.webp", alt: "A large group of club members pose happily in a room decorated with fairy lights and marigold garlands.", width: 2400, height: 1800, focus: "50% 40%" },
    gallery: [
      { src: "/images/events/diwali-celebration/diwali-celebration-01.webp", thumb: "/images/events/diwali-celebration/diwali-celebration-01-thumb.webp", alt: "A large group of club members pose happily in a room decorated with fairy lights and marigold garlands.", width: 2400, height: 1800, focus: "50% 40%" },
      { src: "/images/events/diwali-celebration/diwali-celebration-02.webp", thumb: "/images/events/diwali-celebration/diwali-celebration-02-thumb.webp", alt: "A member wearing a club collar stands beside a young man in a white shirt, with festive snacks on a shelf behind them.", width: 2400, height: 1350 },
      { src: "/images/events/diwali-celebration/diwali-celebration-03.webp", thumb: "/images/events/diwali-celebration/diwali-celebration-03-thumb.webp", alt: "Club members crowd together and smile for a group photo, with snacks and red cups on the table beside them.", width: 2400, height: 1800 },
    ],
  },
  {
    slug: "dhanya-sangrahan-2-o",
    title: "Dhanya Sangrahan 2.O",
    status: "completed",
    category: "Community Service",
    shortDescription: "Sacks of collected grain loaded for transport, and grain being carried to a village.",
    description: "Photographs from Dhanya Sangrahan 2.O. A truck is packed with sacks of collected grain, and in a second photograph the grain is carried through a muddy village lane to the people it is meant for.",
    coverImage: { src: "/images/events/dhanya-sangrahan-2-o/dhanya-sangrahan-2-o-01.webp", thumb: "/images/events/dhanya-sangrahan-2-o/dhanya-sangrahan-2-o-01-thumb.webp", alt: "The inside of a truck loaded with white and yellow sacks of collected grain.", width: 1280, height: 960 },
    gallery: [
      { src: "/images/events/dhanya-sangrahan-2-o/dhanya-sangrahan-2-o-01.webp", thumb: "/images/events/dhanya-sangrahan-2-o/dhanya-sangrahan-2-o-01-thumb.webp", alt: "The inside of a truck loaded with white and yellow sacks of collected grain.", width: 1280, height: 960 },
      { src: "/images/events/dhanya-sangrahan-2-o/dhanya-sangrahan-2-o-02.webp", thumb: "/images/events/dhanya-sangrahan-2-o/dhanya-sangrahan-2-o-02-thumb.webp", alt: "A volunteer and children walk along a wet village lane in front of a thatched-roof house, carrying sacks of grain.", width: 1800, height: 2400 },
    ],
  },
  {
    slug: "anokhi-wari-3-o",
    title: "Anokhi Wari 3.O",
    status: "completed",
    category: "Culture & Festivals",
    shortDescription: "Performers in traditional white attire and caps on an open platform at night.",
    description: "A photograph from Anokhi Wari 3.O, showing performers in traditional white attire and caps singing and playing on an open platform under the night sky.",
    coverImage: { src: "/images/events/anokhi-wari-3-o/anokhi-wari-3-o-01.webp", thumb: "/images/events/anokhi-wari-3-o/anokhi-wari-3-o-01-thumb.webp", alt: "Performers in white clothes and caps stand on an open platform at night, one singing and others playing instruments.", width: 1800, height: 2400, focus: "50% 40%" },
    gallery: [
      { src: "/images/events/anokhi-wari-3-o/anokhi-wari-3-o-01.webp", thumb: "/images/events/anokhi-wari-3-o/anokhi-wari-3-o-01-thumb.webp", alt: "Performers in white clothes and caps stand on an open platform at night, one singing and others playing instruments.", width: 1800, height: 2400, focus: "50% 40%" },
    ],
  },
  {
    slug: "dandiya",
    title: "Dandiya",
    status: "completed",
    category: "Culture & Festivals",
    shortDescription: "Members in festive traditional dress at the club's Dandiya night.",
    description: "Photographs from the Dandiya night of the Rotaract Club of Pune City Legends. Members dress in colourful traditional outfits and pose together, in front of a vibrant backdrop and in a large group under festive bunting.",
    coverImage: { src: "/images/events/dandiya/dandiya-01.webp", thumb: "/images/events/dandiya/dandiya-01-thumb.webp", alt: "A large group of members in colourful traditional dress pose together in front of festive bunting and stage lights.", width: 2400, height: 1800, focus: "50% 45%" },
    gallery: [
      { src: "/images/events/dandiya/dandiya-01.webp", thumb: "/images/events/dandiya/dandiya-01-thumb.webp", alt: "A large group of members in colourful traditional dress pose together in front of festive bunting and stage lights.", width: 2400, height: 1800, focus: "50% 45%" },
      { src: "/images/events/dandiya/dandiya-02.webp", thumb: "/images/events/dandiya/dandiya-02-thumb.webp", alt: "Eight members in traditional outfits stand in a row in front of a bright patterned backdrop.", width: 1600, height: 900 },
    ],
  },
  {
    slug: "gajsanskruti-10-o",
    title: "Gajsanskruti 10.O",
    status: "completed",
    category: "Community Service",
    shortDescription: "A very large group of volunteers on the street, and a team standing with green collection bags.",
    description: "Photographs from Gajsanskruti 10.O. A very large group of volunteers poses together on a city street, and a smaller team stands with green bags at a market corner.",
    coverImage: { src: "/images/events/gajsanskruti-10-o/gajsanskruti-10-o-01.webp", thumb: "/images/events/gajsanskruti-10-o/gajsanskruti-10-o-01-thumb.webp", alt: "A very large group of volunteers sits and stands together on a city street, beneath trees and shop signs.", width: 2400, height: 1351, focus: "50% 45%" },
    gallery: [
      { src: "/images/events/gajsanskruti-10-o/gajsanskruti-10-o-01.webp", thumb: "/images/events/gajsanskruti-10-o/gajsanskruti-10-o-01-thumb.webp", alt: "A very large group of volunteers sits and stands together on a city street, beneath trees and shop signs.", width: 2400, height: 1351, focus: "50% 45%" },
      { src: "/images/events/gajsanskruti-10-o/gajsanskruti-10-o-02.webp", thumb: "/images/events/gajsanskruti-10-o/gajsanskruti-10-o-02-thumb.webp", alt: "A team of volunteers in masks and gloves stand beside green bags on a market street.", width: 1040, height: 694 },
    ],
  },
  {
    slug: "morning-momenta",
    title: "Morning Momenta",
    status: "completed",
    category: "Fellowship & Recreation",
    shortDescription: "Members of the club share a table of food and drinks at a morning get-together.",
    description: "Photographs from Morning Momenta. Members of the Rotaract Club of Pune City Legends sit along a long wooden table at an outdoor cafe, with plates of food, drinks and a rose laid out on the table.",
    coverImage: { src: "/images/events/morning-momenta/morning-momenta-02.webp", thumb: "/images/events/morning-momenta/morning-momenta-02-thumb.webp", alt: "Club members sit along a long wooden table at an outdoor cafe and smile at the camera.", width: 2400, height: 1800 },
    gallery: [
      { src: "/images/events/morning-momenta/morning-momenta-01.webp", thumb: "/images/events/morning-momenta/morning-momenta-01-thumb.webp", alt: "A long wooden table set with a plate of food, small bowls, a glass of a white drink and a pink rose.", width: 960, height: 1280 },
      { src: "/images/events/morning-momenta/morning-momenta-02.webp", thumb: "/images/events/morning-momenta/morning-momenta-02-thumb.webp", alt: "Club members sit along a long wooden table at an outdoor cafe and smile at the camera.", width: 2400, height: 1800 },
    ],
  },
  {
    slug: "installation-ceremony-2025-26",
    title: "Installation Ceremony 2025–26",
    status: "completed",
    year: "2025–2026",
    category: "Club Activities",
    shortDescription: "The installation of the Rotaract Club of Pune City Legends board for Rotary Year 2025–26.",
    description:
      "The Rotaract Club of Pune City Legends held the installation of its board for Rotary Year 2025–26. The stage banner carries the club name, the Rotary Year and the club's Rotaract District 3131 identity, and the board was seated together with guests and the outgoing leadership.",
    coverImage: {
      src: "/images/events/installation-ceremony-2025-26/cover.webp",
      alt: "The Rotaract Club of Pune City Legends board and guests seated behind the table at the Installation Ceremony for Rotary Year 2025–26, under the club banner.",
      width: 2000,
      height: 1125,
    },
    gallery: [
      {
        src: "/images/events/installation-ceremony-2025-26/cover.webp",
        alt: "The board and guests of the Installation Ceremony 2025–26 pose together on stage beneath the club banner.",
        width: 2000,
        height: 1125,
      },
    ],
  },
];

const byDateAsc = (a: EventRecord, b: EventRecord) => (a.date && b.date ? (a.date < b.date ? -1 : a.date > b.date ? 1 : 0) : a.date ? -1 : b.date ? 1 : 0);
const byDateDesc = (a: EventRecord, b: EventRecord) => (a.date && b.date ? (a.date < b.date ? 1 : a.date > b.date ? -1 : 0) : a.date ? -1 : b.date ? 1 : 0);

export const events: EventRecord[] = records;

/** Upcoming events, soonest first (events without a confirmed date go last). */
export const upcomingEvents = records.filter((e) => e.status === "upcoming").sort(byDateAsc);
export const cancelledEvents = records.filter((e) => e.status === "cancelled").sort(byDateAsc);
/** Completed events, newest first. This is the archive. */
export const pastEvents = records.filter((e) => e.status === "completed").sort(byDateDesc);

export const getEvent = (slug: string) => records.find((e) => e.slug === slug);
/** The headline upcoming event: the one marked `featured`, otherwise the soonest. */
export const getFeaturedUpcoming = () => upcomingEvents.find((e) => e.featured) ?? upcomingEvents[0];

export const eventCategories = [...new Set(pastEvents.map((e) => e.category).filter((c): c is string => !!c))].sort();
export const eventYears = [...new Set(pastEvents.map((e) => e.year).filter((y): y is string => !!y))].sort().reverse();

/** Same status and category first, then the rest. Never includes the current event. */
export function getRelatedEvents(slug: string, count = 3): EventRecord[] {
  const current = getEvent(slug);
  const others = records.filter((e) => e.slug !== slug);
  const score = (e: EventRecord) => (current && e.status === current.status ? 2 : 0) + (current?.category && e.category === current.category ? 1 : 0);
  return [...others].sort((a, b) => score(b) - score(a)).slice(0, count);
}

/** Previous and next event in the combined timeline (newest first). */
export function getAdjacentEvents(slug: string) {
  const ordered = [...upcomingEvents, ...cancelledEvents, ...pastEvents];
  const i = ordered.findIndex((e) => e.slug === slug);
  return { previous: i >= 0 ? ordered[i + 1] : undefined, next: i > 0 ? ordered[i - 1] : undefined };
}
