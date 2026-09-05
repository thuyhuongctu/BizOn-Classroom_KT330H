import { createFileRoute } from "@tanstack/react-router";
import { Pause, Play, RotateCcw, SkipBack, SkipForward } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CYCLE_STEPS, CYCLES, ENGINE, SOCRATIC } from "@/lib/plan-data";
import { CycleBrief } from "@/components/CycleBrief";
import { usePlanStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dieu-hanh")({ component: DieuHanhPage });

function useElapsed() {
  const running = usePlanStore((s) => s.timerRunning);
  const startedAt = usePlanStore((s) => s.timerStartedAt);
  const base = usePlanStore((s) => s.timerElapsed);
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setNow(Date.now()), 250);
    return () => window.clearInterval(id);
  }, [running]);
  return base + (running && startedAt ? now - startedAt : 0);
}

function fmt(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}

function DieuHanhPage() {
  const step = usePlanStore((s) => s.timerStep);
  const running = usePlanStore((s) => s.timerRunning);
  const startTimer = usePlanStore((s) => s.startTimer);
  const pauseTimer = usePlanStore((s) => s.pauseTimer);
  const resetTimer = usePlanStore((s) => s.resetTimer);
  const setTimerStep = usePlanStore((s) => s.setTimerStep);
  const elapsed = useElapsed();
  const current = CYCLE_STEPS[step] ?? CYCLE_STEPS[0]!;
  const budget = current.minutes * 60 * 1000;
  const remain = Math.max(0, budget - elapsed);
  const warn = remain <= 5 * 60 * 1000 && remain > 0;
  const over = elapsed >= budget;
  const [round, setRound] = useState(1);
  const cycle = CYCLES[round - 1];

  const totalMin = CYCLE_STEPS.reduce((a, s) => a + s.minutes, 0);

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Một chu kỳ · {totalMin} phút · 3 tiết
        </p>
        <h1 className="text-3xl font-semibold text-ink">Điều hành buổi thực hành</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Bật đồng hồ trên lớp. Cảnh báo 5 phút trước khi hết bước Commit thì khóa vòng trên màn hình
          Giảng viên — đội nhận ERR_ROUND_LOCKED, không sửa được quyết định.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {CYCLES.map((c) => (
          <button
            key={c.n}
            type="button"
            onClick={() => setRound(c.n)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-medium",
              round === c.n
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card",
            )}
          >
            C{c.n} {c.city}
          </button>
        ))}
      </div>
      {cycle ? (
        <div className="rounded-xl border border-border bg-card p-5 shadow-soft">
          <CycleBrief cycle={cycle} />
        </div>
      ) : null}

      <section className="rounded-xl border border-border bg-card p-5 shadow-soft sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
              Bước {step + 1} / {CYCLE_STEPS.length}
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-ink">{current.label}</h2>
            <p className="text-sm text-muted-foreground">Định mức {current.minutes} phút</p>
          </div>
          <p
            className={cn(
              "font-display text-5xl font-semibold tabular-nums tracking-tight sm:text-6xl",
              over ? "text-destructive" : warn ? "text-terracotta" : "text-ink",
            )}
          >
            {fmt(remain)}
          </p>
        </div>
        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-muted">
          <div
            className={cn("h-full rounded-full transition-[width] duration-200", over ? "bg-destructive" : "bg-primary")}
            style={{ width: `${Math.min(100, (elapsed / budget) * 100)}%` }}
          />
        </div>
        {warn || over ? (
          <p className="mt-3 text-sm font-medium text-terracotta">
            {over
              ? "Hết giờ bước này. Nếu đang Commit — khóa vòng ngay."
              : "Còn dưới 5 phút. Nhắc đội chốt và chuẩn bị khóa vòng."}
          </p>
        ) : null}
        <div className="mt-5 flex flex-wrap gap-2">
          {running ? (
            <Button type="button" onClick={pauseTimer} variant="secondary">
              <Pause /> Tạm dừng
            </Button>
          ) : (
            <Button type="button" onClick={startTimer}>
              <Play /> Chạy
            </Button>
          )}
          <Button
            type="button"
            variant="outline"
            onClick={() => setTimerStep(Math.max(0, step - 1))}
            disabled={step <= 0}
          >
            <SkipBack /> Trước
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => setTimerStep(Math.min(CYCLE_STEPS.length - 1, step + 1))}
            disabled={step >= CYCLE_STEPS.length - 1}
          >
            <SkipForward /> Bước sau
          </Button>
          <Button type="button" variant="ghost" onClick={resetTimer}>
            <RotateCcw /> Về briefing
          </Button>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <div className="rounded-lg bg-muted/60 p-4">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Giảng viên</p>
            <p className="mt-1 text-sm leading-relaxed">{current.gv}</p>
          </div>
          <div className="rounded-lg bg-muted/60 p-4">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Sinh viên</p>
            <p className="mt-1 text-sm leading-relaxed">{current.sv}</p>
          </div>
        </div>
      </section>

      <ol className="grid gap-2 sm:grid-cols-2">
        {CYCLE_STEPS.map((s, i) => (
          <li key={s.id}>
            <button
              type="button"
              onClick={() => setTimerStep(i)}
              className={cn(
                "flex w-full items-start gap-3 rounded-xl border p-3 text-left",
                i === step ? "border-primary bg-accent" : "border-border bg-card hover:bg-accent/50",
              )}
            >
              <span className="tabular-nums text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <span className="flex-1">
                <span className="block text-sm font-medium">{s.label}</span>
                <span className="text-xs text-muted-foreground">{s.minutes} phút</span>
              </span>
            </button>
          </li>
        ))}
      </ol>

      <section className="grid gap-3 md:grid-cols-2">
        <article className="rounded-xl border border-border bg-card p-5">
          <h3 className="font-medium text-ink">Giới hạn kỹ thuật mỗi vòng</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Nếu–Thì: tối đa {ENGINE.whatIf} lượt. Ghi kịch bản bị loại.</li>
            <li>Lumina: tối đa {ENGINE.lumina} câu. Đánh giá, không sao chép.</li>
            <li>Commit một lần. Khóa vòng = ERR_ROUND_LOCKED.</li>
            <li>Cấp vốn chỉ khi có lý do sư phạm, ghi nhật ký, cùng điều kiện cho mọi đội liên quan.</li>
            <li>Đối thủ AI jitter {ENGINE.aiJitter}.</li>
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-faint">{ENGINE.share}</p>
        </article>
        <article className="rounded-xl border border-border bg-card p-5">
          <h3 className="font-medium text-ink">Câu hỏi Socratic — không ra đáp án</h3>
          <ul className="mt-3 space-y-2">
            {SOCRATIC.map((q) => (
              <li key={q} className="text-sm leading-relaxed">
                {q}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <p className="text-sm text-muted-foreground">
        Chu trình cấm: kéo thanh trượt → xem dự báo → chọn phương án điểm cao nhất. Chu trình bắt buộc:
        dữ liệu → giả định → quyết định → kết quả → giải thích → điều chỉnh.
      </p>
    </div>
  );
}
