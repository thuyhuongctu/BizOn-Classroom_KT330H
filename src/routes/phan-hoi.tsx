import { createFileRoute } from "@tanstack/react-router";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CLASSES, CYCLES, RATINGS, ratingLabel } from "@/lib/plan-data";
import { CycleBrief } from "@/components/CycleBrief";
import { buildCycleReport, buildFullReport } from "@/lib/report";
import {
  discKey,
  feedbackKey,
  getFeedback,
  usePlanStore,
} from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/phan-hoi")({ component: PhanHoiPage });

function PhanHoiPage() {
  const classKey = usePlanStore((s) => s.classKey);
  const teams = usePlanStore((s) => s.teams[s.classKey]);
  const feedbacks = usePlanStore((s) => s.feedbacks);
  const disc = usePlanStore((s) => s.disc);
  const setFeedback = usePlanStore((s) => s.setFeedback);
  const bumpDisc = usePlanStore((s) => s.bumpDisc);
  const [round, setRound] = useState(1);
  const [openId, setOpenId] = useState(teams[0]?.id ?? "");
  const klass = CLASSES[classKey];
  const cycle = CYCLES[round - 1]!;

  function copyCycle() {
    void navigator.clipboard.writeText(
      buildCycleReport({ classKey, round, teams, feedbacks, disc }),
    );
    toast.success("Đã sao chép báo cáo chu kỳ");
  }

  function copyFull() {
    void navigator.clipboard.writeText(buildFullReport({ classKey, teams, feedbacks, disc }));
    toast.success("Đã sao chép báo cáo cả học phần");
  }

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          {klass.code} · mẫu ACT đã dùng cho KT301H
        </p>
        <h1 className="text-3xl font-semibold text-ink">Phản hồi nhóm theo chu kỳ</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Cùng khung Điểm mạnh / Cần cải / Khái niệm / Kết luận. Điểm nhóm /20; discussion cộng dồn
          theo thành viên. GV chốt tay thành 10 / 40 / 50 — không cộng máy.
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

      <section className="rounded-xl border border-border bg-card p-5 shadow-soft">
        <CycleBrief cycle={cycle} />
      </section>

      <div className="overflow-x-auto rounded-xl border border-border bg-card">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className="bg-muted/70 text-[11px] uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-3 py-2 font-medium">Đội</th>
              {CYCLES.map((c) => (
                <th key={c.n} className="px-2 py-2 text-center font-medium">
                  C{c.n}
                </th>
              ))}
              <th className="px-3 py-2 text-right font-medium">TB</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((t) => {
              const scores = CYCLES.map((c) => feedbacks[feedbackKey(t.id, c.n)]?.score ?? 0);
              const marked = scores.filter((s) => s > 0);
              const avg = marked.length ? marked.reduce((a, b) => a + b, 0) / marked.length : 0;
              return (
                <tr key={t.id} className="border-t border-border">
                  <td className="px-3 py-2 font-medium">{t.name}</td>
                  {scores.map((s, i) => (
                    <td
                      key={CYCLES[i]!.n}
                      className={cn(
                        "px-2 py-2 text-center tabular-nums",
                        i === round - 1 && "bg-accent/50",
                      )}
                    >
                      {s ? s.toFixed(1) : "—"}
                    </td>
                  ))}
                  <td className="px-3 py-2 text-right tabular-nums">{avg ? avg.toFixed(1) : "—"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="space-y-3">
        {teams.map((t) => {
          const key = feedbackKey(t.id, round);
          const fb = getFeedback(feedbacks, key);
          const open = openId === t.id;
          return (
            <article key={t.id} className="rounded-xl border border-border bg-card shadow-soft">
              <button
                type="button"
                onClick={() => setOpenId(open ? "" : t.id)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
              >
                <span className="font-medium text-ink">
                  {t.id} · {t.name}
                </span>
                <Badge variant={fb.score ? "default" : "outline"}>
                  {fb.score ? `${ratingLabel(fb.score)} ${fb.score.toFixed(1)}` : "Chưa chấm"}
                </Badge>
              </button>
              {open ? (
                <div className="space-y-4 border-t border-border px-4 py-4">
                  <div className="flex flex-wrap gap-1.5">
                    {RATINGS.map((r) => (
                      <button
                        key={r.score}
                        type="button"
                        onClick={() => setFeedback(key, { score: r.score })}
                        className={cn(
                          "rounded-full border px-3 py-1 text-xs font-medium",
                          fb.score === r.score
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-background",
                        )}
                      >
                        {r.label} {r.score.toFixed(1)}
                      </button>
                    ))}
                  </div>
                  <label className="block">
                    <span className="text-xs font-medium">Điểm mạnh</span>
                    <textarea
                      value={fb.strengths}
                      onChange={(e) => setFeedback(key, { strengths: e.target.value })}
                      rows={2}
                      placeholder="Nice slides · Good layout · Analytical tools used"
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium">Cần cải</span>
                    <textarea
                      value={fb.improve}
                      onChange={(e) => setFeedback(key, { improve: e.target.value })}
                      rows={2}
                      placeholder="Do not read the materials when presenting · Strengthen Q&A"
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium">Khái niệm bắt được</span>
                    <textarea
                      value={fb.concepts}
                      onChange={(e) => setFeedback(key, { concepts: e.target.value })}
                      rows={2}
                      placeholder="EOU · working capital · co giãn giá"
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  </label>
                  <div>
                    <p className="text-xs font-medium">Discussion — cộng khi phát biểu debrief</p>
                    <ul className="mt-2 divide-y divide-border rounded-lg border border-border">
                      {t.members.map((m, i) => {
                        const dk = discKey(classKey, t.id, i);
                        const n = disc[dk] ?? 0;
                        return (
                          <li key={dk} className="flex items-center gap-2 px-3 py-2">
                            <span className="w-16 text-[11px] uppercase tracking-wider text-muted-foreground">
                              {m.role}
                            </span>
                            <span className="min-w-0 flex-1 truncate text-sm">
                              {m.name || "Chưa gán tên"}
                            </span>
                            <button
                              type="button"
                              className="flex size-10 items-center justify-center rounded-md border border-border"
                              onClick={() => bumpDisc(dk, -1)}
                              aria-label="Giảm"
                            >
                              <Minus className="size-3.5" />
                            </button>
                            <span className="w-8 text-center text-sm tabular-nums">{n}</span>
                            <button
                              type="button"
                              className="flex size-10 items-center justify-center rounded-md border border-border"
                              onClick={() => bumpDisc(dk, 1)}
                              aria-label="Tăng"
                            >
                              <Plus className="size-3.5" />
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-2 no-print">
        <Button type="button" onClick={copyCycle}>
          Sao chép báo cáo chu kỳ {round}
        </Button>
        <Button type="button" variant="outline" onClick={copyFull}>
          Sao chép cả 6 chu kỳ
        </Button>
        <Button type="button" variant="ghost" onClick={() => window.print()}>
          In
        </Button>
      </div>
    </div>
  );
}
