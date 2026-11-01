/**
 * The official Legends Manifesto, from "Legends Website Work.docx". Wording is unchanged
 * (only straight apostrophes are typeset as curly ones).
 */
export const manifestoStatements = {
  leadership: "We believe that leadership isn’t a title.",
  service: "That service doesn’t need an audience.",
  learning: "That mistakes are lessons, not endings.",
  teamwork: "That patience builds people, consistency builds trust, and teamwork builds Legends.",
  showingUp: "We don’t need to be perfect. We need to keep showing up.",
  closing: "We are Legends. And we’re just getting started.",
} as const;

/** The longer manifesto text, supplied by the club in "Add in Website.docx". Wording is unchanged. */
export const manifestoFull: { makesALegend: { heading: string; paragraphs: string[] }; callToEveryLegend: { heading: string; paragraphs: string[] } } = {
  makesALegend: { heading: "What makes a Legend?", paragraphs: [
  "A Legend is not defined by a title, a position, or recognition. A Legend is defined by values, actions, and the impact left behind.",
  "At Rotaract Club of Pune City Legends, we believe that greatness is built with patience, strengthened by discipline, and carried forward through purpose. We believe in respecting our roots, celebrating our cultural heritage, and creating a future that makes our community proud.",
  "We stand for Service over Recognition, Unity over Individuality, Action over Words, and Values over Positions.",
  "We believe every member has the power to create change, every initiative has the potential to inspire, and every small step contributes to something greater.",
  "We choose patience when the journey is difficult, courage when challenges arise, humility when we succeed, and commitment when responsibility calls.",
  "We are here not merely to conduct events, but to create experiences; not merely to hold positions, but to build leaders; not merely to be part of a club, but to build a family that stands together."
] },
  callToEveryLegend: { heading: "A call to every Legend", paragraphs: [
  "A club becomes legendary only when its members choose to act like Legends.",
  "So, step forward. Take responsibility. Bring ideas to the table. Turn those ideas into action. Support your fellow members, show up when it matters, and contribute even when no one is watching.",
  "Do not wait for the President to remind you, for someone else to take the lead, or for an opportunity to come to you. Be the person who creates the opportunity. Your position is a responsibility, your membership is a commitment, and your contribution is what gives this club its strength.",
  "We do not need members who are present only on paper. We need members who are present in action, united in purpose, and committed to building something bigger than themselves.",
  "Our ambition is not to become Legends overnight. It is to work consistently, serve meaningfully, honour our culture, and build an identity that lasts beyond our time.",
  "The question is not whether RC Pune City Legends can become extraordinary. The question is: What are YOU doing to make it extraordinary?",
  "The legacy we dream of will not be built by one person. It will be built by every member who chooses to contribute, every leader who chooses to take initiative, and every Legend who refuses to stand on the sidelines."
] },
};
