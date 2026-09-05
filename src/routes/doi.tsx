import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CLASSES, ENGINE, ROLES } from "@/lib/plan-data";
import { LEGACY_DISTRICT_NAME, usePlanStore } from "@/lib/store";
import { cn, formatVnd } from "@/lib/utils";

export const Route = createFileRoute("/doi")({ component: DoiPage });

function DoiPage() {
  const classKey = usePlanStore((s) => s.classKey);
  const teams = usePlanStore((s) => s.teams[s.classKey]);
  const setMember = usePlanStore((s) => s.setMember);
  const setTeamName = usePlanStore((s) => s.setTeamName);
  const rotateRoles = usePlanStore((s) => s.rotateRoles);
  const resetTeams = usePlanStore((s) => s.resetTeams);
  const capital = usePlanStore((s) => s.startingCapital);
  const setCapital = usePlanStore((s) => s.setCapital);
  const gameSlot = usePlanStore((s) => s.gameSlot);
  const setGameSlot = usePlanStore((s) => s.setGameSlot);
  const klass = CLASSES[classKey];
  const staleNames = teams.some((t) => LEGACY_DISTRICT_NAME.test(t.name));

  function exportMd() {
    const lines = [
      `# ${klass.code} · ${klass.classId}`,
      `Vốn khởi điểm (cấp qua tab Giảng viên): ${formatVnd(capital)}`,
      "",
      ...teams.flatMap((t) => [
        `## ${t.id} · ${t.name}`,
        ...t.members.map((m) => `- ${m.role}: ${m.name || "…"}`),
        "",
      ]),
    ];
    void navigator.clipboard.writeText(lines.join("\n"));
    toast.success("Đã sao chép danh sách đội");
  }

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          {klass.code} · {klass.students} SV
        </p>
        <h1 className="text-3xl font-semibold text-ink">Tổ chức đội và năm vai trò</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          {klass.leftover}. Một máy / đội — hai đội một trình duyệt sẽ ghi đè save. Vai giữ ổn định
          tuần 1–4 (chu kỳ 1–2), luân chuyển từ chu kỳ 3. Tên mặc định là Đội 1–n — không dùng tên quận.
        </p>
      </header>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-4">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Class ID</p>
          <p className="mt-1 font-medium">{klass.classId}</p>
          <p className="mt-2 text-xs text-muted-foreground">SV nhập khi vào game.html</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Vốn khởi điểm / đội</p>
          <label className="mt-1 block">
            <span className="sr-only">Vốn khởi điểm</span>
            <input
              type="number"
              step={10_000_000}
              min={100_000_000}
              value={capital}
              onChange={(e) => setCapital(Number(e.target.value) || 0)}
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm tabular-nums"
            />
          </label>
          <p className="mt-2 text-xs text-muted-foreground">
            Game mở với tiền mặt {formatVnd(ENGINE.cashStart)}. Cấp {formatVnd(capital)} giống nhau qua
            tab Giảng viên; mọi giao dịch có lý do.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Buổi game</p>
          <div className="mt-2 grid grid-cols-2 gap-1 rounded-lg bg-muted p-1">
            {(["second", "first"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setGameSlot(s)}
                className={cn(
                  "rounded-md px-2 py-2 text-xs font-medium",
                  gameSlot === s ? "bg-card text-ink shadow-soft" : "text-muted-foreground",
                )}
              >
                {s === "second" ? klass.meetings.second.day : klass.meetings.first.day}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Mặc định buổi 2. F1 nên giữ Thứ Năm — Thứ Ba cắt trưa không đủ 150 phút liền.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Tham số engine</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Giá tham chiếu {ENGINE.priceRef.toLocaleString("vi-VN")}₫ · giá vốn{" "}
            {ENGINE.unitCost.toLocaleString("vi-VN")}₫ · tổng cầu {ENGINE.baseMarket.toLocaleString("vi-VN")} sp ·
            lãi vay {ENGINE.rate * 100}%/vòng · Nếu–Thì {ENGINE.whatIf} · Lumina {ENGINE.lumina} câu.
          </p>
        </div>
      </section>

      <div className="flex flex-wrap gap-2 no-print">
        <Button type="button" onClick={() => rotateRoles(classKey)} variant="secondary">
          Luân chuyển vai (mọi đội)
        </Button>
        <Button type="button" onClick={exportMd} variant="outline">
          Sao chép danh sách
        </Button>
        <Button type="button" onClick={() => resetTeams(classKey)} variant="ghost">
          Đặt lại tên đội
        </Button>
      </div>

      {staleNames ? (
        <p className="rounded-lg border border-terracotta/40 bg-accent/70 px-4 py-3 text-sm text-ink">
          Tên quận (Ninh Kiều, Thốt Nốt…) không có trong game. Bấm Đặt lại tên đội để về Đội 1–n.
        </p>
      ) : null}

      <div className="grid gap-3">
        {teams.map((t) => (
          <article key={t.id} className="rounded-xl border border-border bg-card p-4 shadow-soft">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <Badge>{t.id}</Badge>
              <input
                value={t.name}
                onChange={(e) => setTeamName(classKey, t.id, e.target.value)}
                className="h-9 min-w-0 flex-1 rounded-md border border-input bg-background px-3 text-sm font-medium"
                aria-label={`Tên ${t.id}`}
              />
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {t.members.map((m, i) => (
                <label key={`${t.id}-${m.role}-${i}`} className="block">
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{m.role}</span>
                  <input
                    value={m.name}
                    placeholder="Họ tên"
                    onChange={(e) => setMember(classKey, t.id, i, e.target.value)}
                    className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                  />
                </label>
              ))}
            </div>
          </article>
        ))}
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ink">Thẻ vai trò — in và phát tuần 1</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {ROLES.map((r) => (
            <article key={r.id} className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-medium text-ink">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{r.job}</p>
              <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">Minh chứng</p>
              <p className="mt-1 text-sm text-muted-foreground">{r.evidence}</p>
              <p className="mt-3 rounded-lg bg-accent/70 p-3 text-sm text-ink">{r.ask}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
