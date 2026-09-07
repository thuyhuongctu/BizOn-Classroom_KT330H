import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { CHECKS, CLASSES, LINKS, WEEKS } from "@/lib/plan-data";
import { fmtRange, sessionDates } from "@/lib/calendar";
import { usePlanStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/checklist")({ component: CheckPage });

function CheckPage() {
  const checks = usePlanStore((s) => s.checks);
  const toggle = usePlanStore((s) => s.toggleCheck);
  const classKey = usePlanStore((s) => s.classKey);
  const klass = CLASSES[classKey];
  const total = CHECKS.reduce((n, g) => n + g.items.length, 0);
  const done = CHECKS.reduce((n, g) => n + g.items.filter((i) => checks[i.id]).length, 0);

  function exportPlan() {
    const lines = [
      `# Kế hoạch triển khai BizOn Bật Nghiệp — KT330H`,
      `${klass.code} · ${klass.classId} · ${klass.students} SV · ${klass.teams} đội`,
      `Buổi A: ${klass.meetings.first.day} tiết ${klass.meetings.first.periods} ${klass.meetings.first.room} · ${klass.meetings.first.time}`,
      `Buổi B: ${klass.meetings.second.day} tiết ${klass.meetings.second.periods} ${klass.meetings.second.room} · ${klass.meetings.second.time}`,
      `Lưu ý F1 Thứ Ba: ${CLASSES.F1.meetings.first.note}`,
      "",
      "## 11 tuần",
      ...WEEKS.flatMap((w) => {
        const d = sessionDates(w.week, klass);
        return [
          `### Tuần ${w.week} · ${fmtRange(w.week)} · ${w.chapter} (${w.cycle})`,
          `Buổi A: ${d.first.short} ${klass.meetings.first.room} — ${w.theory}`,
          `Buổi B: ${d.second.short} ${klass.meetings.second.room} — ${w.practice}`,
          `CLO: ${w.clos.join(", ")}`,
          `Debrief: ${w.debrief}`,
          "",
        ];
      }),
      `Game: ${LINKS.game}`,
      `Sổ tay: ${LINKS.guide}`,
    ];
    void navigator.clipboard.writeText(lines.join("\n"));
    toast.success("Đã sao chép kế hoạch 11 tuần");
  }

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Vận hành trước khoa học
        </p>
        <h1 className="text-3xl font-semibold text-ink">Checklist triển khai</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          {done}/{total} mục. Ưu tiên cuối tuần này: chạy thử đủ 12 vòng (2 Mùa), Class ID, vốn, rubric
          10/20/20/50 (đã chốt), máy từng đội, xác nhận TKB chính thức v4 (F1 Thứ Ba 104/KT + Phòng máy
          3.20 – Nhà học ATL tiết 8; F2 phòng máy tính 1 cả 2 buổi). Nghiên cứu chỉ bật khi lớp chạy ổn.
        </p>
        <div className="h-1.5 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-200"
            style={{ width: `${(done / total) * 100}%` }}
          />
        </div>
        <Button type="button" variant="outline" onClick={exportPlan}>
          Sao chép kế hoạch 11 tuần
        </Button>
      </header>

      {CHECKS.map((g) => (
        <section key={g.group} className="space-y-2">
          <h2 className="text-lg font-semibold text-ink">{g.group}</h2>
          <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
            {g.items.map((item) => {
              const on = Boolean(checks[item.id]);
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    className="flex w-full items-start gap-3 px-4 py-3 text-left hover:bg-accent/40"
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border",
                        on ? "border-primary bg-primary" : "border-border bg-background",
                      )}
                      aria-hidden
                    >
                      {on ? (
                        <svg viewBox="0 0 12 12" className="size-3 fill-none stroke-primary-foreground" strokeWidth="2">
                          <path d="M2 6.2 L4.8 9 L10 3.2" />
                        </svg>
                      ) : null}
                    </span>
                    <span className={cn("text-sm leading-relaxed", on && "text-muted-foreground")}>
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <section className="rounded-xl border border-border bg-card p-5">
        <h2 className="font-medium text-ink">Nghiên cứu — làm sau khi lớp chạy</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          T0 trước tuần 1 và T2 sau pitch (tuần 9–10) dùng cùng mã ẩn danh. T1 (sau vòng 3) tối đa 5 phút. Tách ba
          tệp: danh tính, master nghiên cứu, điểm. Từ chối nghiên cứu không ảnh hưởng điểm. Event log
          (đổi thanh, Nếu–Thì, Lumina, commit) là dữ liệu hành vi — không công bố log thô.
        </p>
        <p className="mt-3 text-sm">
          Game:{" "}
          <a className="underline" href={LINKS.game} target="_blank" rel="noreferrer">
            {LINKS.game}
          </a>
        </p>
        <p className="text-sm">
          Sổ tay GV:{" "}
          <a className="underline" href={LINKS.guide} target="_blank" rel="noreferrer">
            huong-dan-giang-vien.md
          </a>
        </p>
      </section>
    </div>
  );
}
