import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CLASSES,
  CONSENT_FORM,
  CYCLES,
  DEBRIEF4,
  PEER_ASSESSMENT_NOTE,
  PITCH_GUIDE,
  REFLECTION_PROMPTS,
  TEAM_CHARTER_FIELDS,
  TICKET_FIELDS,
} from "@/lib/plan-data";
import { getTicket, usePlanStore, type Ticket } from "@/lib/store";

export const Route = createFileRoute("/ho-so")({ component: HoSoPage });

function HoSoPage() {
  const classKey = usePlanStore((s) => s.classKey);
  const teams = usePlanStore((s) => s.teams[s.classKey]);
  const tickets = usePlanStore((s) => s.tickets);
  const setTicket = usePlanStore((s) => s.setTicket);
  const resetTicket = usePlanStore((s) => s.resetTicket);
  const [teamId, setTeamId] = useState(teams[0]?.id ?? "");
  const [round, setRound] = useState(1);
  const key = `${teamId}-R${round}`;
  const ticket = getTicket(tickets, key);
  const klass = CLASSES[classKey];

  useEffect(() => {
    if (!teams.some((t) => t.id === teamId)) {
      setTeamId(teams[0]?.id ?? "");
    }
  }, [classKey, teams, teamId]);

  const filled = useMemo(() => {
    const before = TICKET_FIELDS.filter((f) => f.phase === "before");
    const n = before.filter((f) => ticket[f.key as keyof Ticket]).length;
    return { n, d: before.length };
  }, [ticket]);

  function copyTicket() {
    const lines = [
      `${klass.classId} · ${teamId} · Chu kỳ ${round}`,
      ...TICKET_FIELDS.map((f) => `${f.label}: ${ticket[f.key as keyof Ticket] || "—"}`),
    ];
    void navigator.clipboard.writeText(lines.join("\n"));
    toast.success("Đã sao chép phiếu");
  }

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Công cụ lớp · lưu trên máy này
        </p>
        <h1 className="text-3xl font-semibold text-ink">Phiếu quyết định và debrief</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Trước commit: giả định và dự báo. Sau kết quả: sai lệch và bài học. SEC có thể gõ trực tiếp
          hoặc sao chép ra giấy. Dữ liệu chỉ nằm trên trình duyệt giảng viên / máy đội.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {teams.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTeamId(t.id)}
            className={`rounded-full border px-3 py-1 text-xs font-medium ${
              teamId === t.id ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"
            }`}
          >
            {t.id.replace(`${classKey}-`, "")} {t.name}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {CYCLES.map((c) => (
          <button
            key={c.n}
            type="button"
            onClick={() => setRound(c.n)}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
              round === c.n ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"
            }`}
          >
            C{c.n} {c.city}
          </button>
        ))}
        <Badge variant="soft">
          Trước commit {filled.n}/{filled.d}
        </Badge>
      </div>
      {CYCLES[round - 1] ? (
        <p className="text-sm text-muted-foreground">
          {CYCLES[round - 1]!.event} · {CYCLES[round - 1]!.engine}
          <span className="mt-1 block text-xs">Mở rộng: {CYCLES[round - 1]!.expand}</span>
        </p>
      ) : null}

      <section className="space-y-6 rounded-xl border border-border bg-card p-5 shadow-soft">
        <div>
          <h2 className="font-medium text-ink">Trước khi CEO khóa</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {TICKET_FIELDS.filter((f) => f.phase === "before").map((f) => (
              <label key={f.key} className="block">
                <span className="text-xs font-medium">{f.label}</span>
                {f.hint ? <span className="ml-2 text-[11px] text-muted-foreground">{f.hint}</span> : null}
                <input
                  value={ticket[f.key as keyof Ticket]}
                  onChange={(e) => setTicket(key, { [f.key]: e.target.value })}
                  className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                />
              </label>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-medium text-ink">Sau khi có kết quả</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {TICKET_FIELDS.filter((f) => f.phase === "after").map((f) => (
              <label key={f.key} className="block sm:col-span-1">
                <span className="text-xs font-medium">{f.label}</span>
                {f.hint ? <span className="ml-2 text-[11px] text-muted-foreground">{f.hint}</span> : null}
                <textarea
                  value={ticket[f.key as keyof Ticket]}
                  onChange={(e) => setTicket(key, { [f.key]: e.target.value })}
                  rows={2}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </label>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 no-print">
          <Button type="button" onClick={copyTicket}>
            Sao chép phiếu
          </Button>
          <Button type="button" variant="outline" onClick={() => window.print()}>
            In
          </Button>
          <Button type="button" variant="ghost" onClick={() => resetTicket(key)}>
            Xóa phiếu này
          </Button>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ink">Bốn câu debrief — sau mỗi chu kỳ</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {DEBRIEF4.map((d) => (
            <article key={d.q} className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{d.q}</p>
              <p className="mt-2 text-sm leading-relaxed">{d.a}</p>
            </article>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Sau mỗi hai chu kỳ (tuần 4 và tuần 6), kéo debrief lên 20 phút và bắt buộc một khái niệm
          textbook — simulation không tự tạo phản tư nếu thiếu can thiệp sư phạm.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ink">Team Charter — lập ngay tuần 1</h2>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Đội thống nhất và ký trước khi vào vòng 1. In hoặc chép ra giấy — mỗi thành viên giữ 1 bản.
        </p>
        <ul className="grid gap-2 rounded-xl border border-border bg-card p-5 sm:grid-cols-2">
          {TEAM_CHARTER_FIELDS.map((f) => (
            <li key={f} className="text-sm leading-relaxed">
              <span className="text-muted-foreground">▢</span> {f}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ink">Reflection cá nhân — sau chu kỳ 2, 4, 6</h2>
        <p className="max-w-2xl text-sm text-muted-foreground">150–250 từ mỗi lần, nộp riêng từng SV.</p>
        <ol className="list-decimal space-y-2 rounded-xl border border-border bg-card p-5 pl-9 text-sm leading-relaxed">
          {REFLECTION_PROMPTS.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ol>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-border bg-card p-5">
          <h2 className="font-medium text-ink">Peer assessment</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{PEER_ASSESSMENT_NOTE}</p>
        </article>
        <article className="rounded-xl border border-border bg-card p-5">
          <h2 className="font-medium text-ink">Thuyết trình Dự án khởi nghiệp — tuần 9</h2>
          <p className="mt-1 text-sm font-medium text-ink">{PITCH_GUIDE.format}</p>
          <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted-foreground">
            {PITCH_GUIDE.points.map((p) => (
              <li key={p}>· {p}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="space-y-3 rounded-xl border border-border bg-card p-5">
        <div>
          <h2 className="font-medium text-ink">Phiếu thông tin & đồng thuận nghiên cứu — mẫu tham khảo</h2>
          <p className="mt-1 text-xs italic text-muted-foreground">
            Chỉ áp dụng nếu lớp có thu thập dữ liệu nghiên cứu — không bắt buộc để chơi game. Mẫu cần
            được đơn vị đạo đức nghiên cứu của cơ sở rà soát trước khi dùng thật.
          </p>
        </div>
        <p className="text-sm font-medium text-ink">{CONSENT_FORM.title}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{CONSENT_FORM.purpose}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Dữ liệu thu thập</p>
            <ul className="mt-1 space-y-1 text-sm leading-relaxed">
              {CONSENT_FORM.dataCollected.map((d) => (
                <li key={d}>· {d}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Tự nguyện</p>
              <p className="mt-1 text-sm leading-relaxed">{CONSENT_FORM.voluntary}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Bảo mật</p>
              <p className="mt-1 text-sm leading-relaxed">{CONSENT_FORM.confidentiality}</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Xác nhận đồng ý</p>
          <ul className="mt-1 grid gap-1 text-sm sm:grid-cols-2">
            {CONSENT_FORM.consentItems.map((c) => (
              <li key={c}>☐ {c}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
