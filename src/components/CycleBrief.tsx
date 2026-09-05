import type { Cycle } from "@/lib/plan-data";
import { cn } from "@/lib/utils";

export function CycleBrief({
  cycle,
  compact = false,
  className,
}: {
  cycle: Cycle;
  compact?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
        Vòng {cycle.n} · tuần {cycle.week} · {cycle.zone}
      </p>
      <p className="font-medium text-ink">
        {cycle.city}
        <span className="font-normal text-muted-foreground"> — {cycle.event}</span>
      </p>
      <p className="text-xs tabular-nums text-terracotta">
        {cycle.eventId} · {cycle.engine}
      </p>
      {compact ? (
        <p className="text-xs leading-relaxed text-muted-foreground">
          <span className="font-medium text-foreground">Mở rộng. </span>
          {cycle.expand}
        </p>
      ) : (
        <>
          <p className="text-sm leading-relaxed">{cycle.goal}</p>
          <p className="text-sm text-terracotta">Bẫy: {cycle.trap}</p>
          <p className="text-sm text-muted-foreground">Thu: {cycle.evidence}</p>
          <p className="rounded-lg bg-muted/60 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
            <span className="font-medium text-ink">Mở rộng. </span>
            {cycle.expand}
          </p>
        </>
      )}
    </div>
  );
}
