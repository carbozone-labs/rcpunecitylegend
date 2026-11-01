import { cn } from "@/lib/utils";
import type { EventStatus } from "@/types";

const label: Record<EventStatus, string> = { upcoming: "Upcoming", completed: "Completed", cancelled: "Cancelled" };

/** Small status pill. Gold for upcoming, muted for completed, red for cancelled. */
export function StatusBadge({ status, className }: { status: EventStatus; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-sm",
        status === "upcoming" && "border-saffron/60 bg-saffron/15 text-saffron",
        status === "completed" && "border-ivory/30 bg-obsidian/60 text-ivory/85",
        status === "cancelled" && "border-error/60 bg-error/10 text-error",
        className,
      )}
    >
      <span aria-hidden className={cn("size-1.5 rounded-full", status === "upcoming" && "bg-saffron", status === "completed" && "bg-ivory/70", status === "cancelled" && "bg-error")} />
      {label[status]}
    </span>
  );
}
