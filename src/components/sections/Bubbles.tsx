// Decorative rising bubbles for the hero. Fixed values (no randomness) so server and client markup match.
const bubbles = [
  { l: 6, s: 14, d: 17, t: 0 }, { l: 14, s: 26, d: 22, t: 4 }, { l: 24, s: 10, d: 15, t: 8 },
  { l: 36, s: 34, d: 26, t: 2 }, { l: 47, s: 12, d: 18, t: 11 }, { l: 58, s: 22, d: 21, t: 6 },
  { l: 68, s: 9, d: 14, t: 13 }, { l: 77, s: 30, d: 25, t: 1 }, { l: 86, s: 16, d: 19, t: 9 },
  { l: 93, s: 24, d: 23, t: 5 },
];

export function Bubbles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {bubbles.map((b, i) => (
        <span key={i} className="bubble" style={{ left: `${b.l}%`, width: b.s, height: b.s, animationDuration: `${b.d}s`, animationDelay: `-${b.t}s` }} />
      ))}
    </div>
  );
}
