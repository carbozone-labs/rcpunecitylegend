import { partnerCategories, partnersIn } from "@/data/partners";

/** Quick links to each category, with live counts. */
export function PartnerJumpNav() {
  return (
    <nav id="partner-groups" aria-label="Partner categories" className="border-b hairline py-5">
      <ul className="mx-auto flex max-w-content flex-wrap gap-3 gutter">
        {partnerCategories.map((c) => (
          <li key={c.id}>
            <a href={`#${c.anchor}`} className="glass inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold text-ivory transition-colors duration-base hover:text-saffron">
              {c.title}
              <span className="rounded-full bg-saffron/20 px-2 py-0.5 text-xs text-saffron">{partnersIn(c.id).length}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
