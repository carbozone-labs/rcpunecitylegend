"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

/** Dark (teal) and light (pearl) themes. The choice is remembered on this device. */
export function ThemeToggle() {
  const [light, setLight] = useState(false);
  useEffect(() => setLight(document.documentElement.dataset.theme === "light"), []);
  const toggle = () => {
    const next = light ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
    setLight(!light);
  };
  return (
    <button type="button" onClick={toggle} aria-label={light ? "Switch to dark theme" : "Switch to light theme"} className="glass inline-flex size-11 items-center justify-center rounded-full text-ivory transition-colors duration-base hover:text-saffron">
      {light ? <Moon aria-hidden className="size-5" /> : <Sun aria-hidden className="size-5" />}
    </button>
  );
}
