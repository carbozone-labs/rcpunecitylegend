"use client";

import { ArrowUp } from "lucide-react";

export function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
      className="glass inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold text-ivory transition-colors duration-base hover:text-saffron"
    >
      Back to top <ArrowUp aria-hidden className="size-4" />
    </button>
  );
}
