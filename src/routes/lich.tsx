import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fmtRange, sessionDates, teachingWeekOf } from "@/lib/calendar";
import { BACKUP_CASES, CLASSES, CYCLES, OUTLINE_NOTE, WEEKS, type WeekPlan } from "@/lib/plan-data";
import { CycleBrief } from "@/components/CycleBrief";
import { buildWeekScript } from "@/lib/report";
import { usePlanStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/lich")({ component: LichPage });

const KIND: Record<WeekPlan["cycleKind"], "outline" | "default" | "soft" | "warn"> = {
  prep: "outline",
  play: "default",
  harvest: "soft",
  close: "warn",
};

function LichPage() {
  const classKey = usePlanStore((s) => s.classKey);
  const klass = CLASSES[classKey];
  const now = teachingWeekOf();
  const [open, setOpen] = useState(now === 0 ? 1 : Math.min(Math.max(now, 1), 11));
  const week = WEEKS.find((w) => w.week === open) ?? WEEKS[0]!;
  const cycles = CYCLES.filter((c) => c.week === week.week);
  const dates = sessionDates(week.week, klass);
  const backup = BACKUP_CASES.find((b) => b.week === week.week);

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          {klass.code} · 11 tuần theo TKB · {fmtRange(week.week)}
        </p>
        <h1 className="text-3xl font-semibold text-ink">Lịch 11 tuần · 2 Mùa × 6 vòng, Đại hội Cổ đông tuần 9–10</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Tuần 2–4 và 6–8 chạy đúng bản đồ Cần Thơ → Hà Nội và 6 biến cố engine, hai lượt (Mùa 1 rồi Mùa
          2) với vai trò đổi ở tuần 5. Tuần 9–10 là Đại hội Cổ đông pitch xin vốn; tuần 11 là Vòng Chung
          kết + Tổng kết.
        </p>
        <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground">{OUTLINE_NOTE}</p>
      </header>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-4">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
            Buổi 1 · {klass.meetings.first.day}
          </p>
          <p className="mt-1 font-medium">
            {dates.first.label} · tiết {klass.meetings.first.periods} · {klass.meetings.first.room}
          </p>
          <p className="text-sm text-muted-foreground">{klass.meetings.first.time}</p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{klass.meetings.first.note}</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
            Buổi 2 · {klass.meetings.second.day}
          </p>
          <p className="mt-1 font-medium">
            {dates.second.label} · tiết {klass.meetings.second.periods} · {klass.meetings.second.room}
          </p>
          <p className="text-sm text-muted-foreground">{klass.meetings.second.time}</p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{klass.meetings.second.note}</p>
        </div>
      </div>

      <ol className="grid grid-cols-3 gap-2 sm:grid-cols-6">
        {WEEKS.map((w) => (
          <li key={w.week}>
            <button
              type="button"
              onClick={() => setOpen(w.week)}
              className={cn(
                "flex w-full flex-col items-start rounded-xl border p-3 text-left transition-colors",
                open === w.week
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:bg-accent",
              )}
            >
              <span className="text-[11px] opacity-80">Tuần {w.week}</span>
              <span className="mt-1 text-xs font-medium leading-snug">{w.cycle}</span>
            </button>
          </li>
        ))}
      </ol>

      <article className="rounded-xl border border-border bg-card p-5 shadow-soft sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
              Tuần {week.week} · {fmtRange(week.week)} · {week.hours}
            </p>
            <h2 className="mt-1 text-xl font-semibold text-ink">{week.chapter}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{week.textbook}</p>
          </div>
          <Badge variant={KIND[week.cycleKind]}>{week.cycle}</Badge>
        </div>

        {cycles.length ? (
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {cycles.map((c) => (
              <div key={`${c.season}-${c.n}`} className="rounded-lg bg-accent/70 p-4">
                <p className="mb-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                  {c.buoi === "first" ? `Buổi A · ${klass.meetings.first.day}` : `Buổi B · ${klass.meetings.second.day}`}
                </p>
                <CycleBrief cycle={c} compact />
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Block title={`Buổi A · ${klass.meetings.first.day}`} body={week.theory} />
          <Block title={`Buổi B · ${klass.meetings.second.day}`} body={week.practice} />
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {week.clos.map((c) => (
            <Badge key={c} variant="soft">
              {c}
            </Badge>
          ))}
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <ul className="space-y-2">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Giảng viên</p>
            {week.gv.map((g) => (
              <li key={g} className="text-sm leading-relaxed">
                {g}
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Sinh viên</p>
            {week.sv.map((g) => (
              <li key={g} className="text-sm leading-relaxed">
                {g}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 rounded-lg bg-muted/60 p-4">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Câu debrief neo chương</p>
          <p className="mt-1 text-sm font-medium text-ink">{week.debrief}</p>
        </div>

        {backup ? (
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Plan B nếu game/wifi sập: {backup.unit} — {backup.cases} (CLO {backup.clos}).
          </p>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2 no-print">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              void navigator.clipboard.writeText(buildWeekScript(klass, week.week));
              toast.success("Đã sao chép kịch bản tuần " + week.week);
            }}
          >
            Sao chép kịch bản tuần
          </Button>
          <Button type="button" variant="ghost" onClick={() => window.print()}>
            In
          </Button>
        </div>
      </article>
    </div>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg bg-muted/50 p-4">
      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{title}</p>
      <p className="mt-1 text-sm leading-relaxed">{body}</p>
    </div>
  );
}
