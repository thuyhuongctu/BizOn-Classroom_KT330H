import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LuminaStage } from "@/components/music/LuminaStage";
import { FoundersIntro } from "@/components/FoundersIntro";
import { nextSession, teachingWeekOf, WEEK_CALENDAR } from "@/lib/calendar";
import { CLASSES, CYCLES, DIFFS, LINKS, OPTIONS, OUTLINE_NOTE } from "@/lib/plan-data";
import { usePlanStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const classKey = usePlanStore((s) => s.classKey);
  const klass = CLASSES[classKey];
  const weekNow = teachingWeekOf();
  const next = nextSession(classKey);
  const cal = WEEK_CALENDAR.find((w) => w.week === (weekNow === 0 ? 1 : Math.min(weekNow, 12)));

  return (
    <div className="space-y-12">
      <header className="space-y-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Ghi chú giảng dạy · Khoa Kinh tế · ĐH Cần Thơ
        </p>
        <h1 className="max-w-3xl font-display text-[2.15rem] font-semibold leading-[1.15] text-ink sm:text-5xl">
          Triển khai BizOn Bật Nghiệp đúng vào KT330H, không phải một game khởi nghiệp chung.
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground">
          Học phần Khởi sự doanh nghiệp, NH 2026–2027 HK1 (07/9–20/12). Sáu chu kỳ, năm vai trò, ba đối
          thủ AI, nhật ký SEC — thầy Phan Anh Tú dẫn học thuật, Lumina đồng hành trên từng vòng.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button asChild>
            <Link to="/lich">
              Xem lịch 12 tuần <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/checklist">Checklist trước thứ Hai</Link>
          </Button>
          <Button asChild variant="ghost">
            <a href={LINKS.game} target="_blank" rel="noreferrer">
              Mở game <ExternalLink />
            </a>
          </Button>
        </div>
      </header>

      <FoundersIntro />

      <LuminaStage />

      <section className="rounded-xl border border-terracotta/30 bg-card p-5 shadow-soft sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-terracotta">
              {weekNow === 0
                ? "Học kỳ bắt đầu thứ Hai 07/9"
                : weekNow > 12
                  ? "Hết 12 tuần giảng dạy"
                  : `Tuần giảng dạy ${weekNow} / 12`}
            </p>
            <h2 className="mt-1 text-xl font-semibold text-ink">
              {weekNow === 0
                ? "Còn weekend để chạy thử 6 vòng"
                : next
                  ? `Buổi tới · ${next.date.label}`
                  : "Hết buổi trên TKB"}
            </h2>
            {next ? (
              <p className="mt-1 text-sm text-muted-foreground">
                {klass.code} · tiết {next.meeting.periods} · {next.meeting.time} · {next.meeting.room}
                {next.week === 1 && next.slot === "first"
                  ? " — luật, CLO, chia đội. Chưa commit vòng tính điểm."
                  : next.week === 1
                    ? " — demo 1 vòng, kết quả không tính."
                    : ""}
              </p>
            ) : null}
          </div>
          <Badge variant={weekNow === 0 ? "warn" : "soft"}>
            {weekNow === 0 ? "Tuần 0 · chuẩn bị" : `Tuần ${Math.min(weekNow, 12)}`}
          </Badge>
        </div>
        {cal ? (
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <p className="rounded-lg bg-muted/70 px-3 py-2 text-sm">
              <span className="text-muted-foreground">F1 · </span>
              {cal.F1.first.short} {CLASSES.F1.meetings.first.room}
              {" · "}
              {cal.F1.second.short} {CLASSES.F1.meetings.second.room}
            </p>
            <p className="rounded-lg bg-muted/70 px-3 py-2 text-sm">
              <span className="text-muted-foreground">F2 · </span>
              {cal.F2.first.short} {CLASSES.F2.meetings.first.room}
              {" · "}
              {cal.F2.second.short} {CLASSES.F2.meetings.second.room}
            </p>
          </div>
        ) : null}
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          F1 Thứ Ba tiết 5–7 cắt nghỉ trưa (10:40–11:30 rồi 13:30–15:20, 104/KT) — không chạy một chu kỳ
          150 phút. Game mặc định: F1 Thứ Năm 103/KT, F2 Thứ Sáu 202/KT.
        </p>
      </section>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { k: "2 lớp CLC", v: `${CLASSES.F1.code} · ${CLASSES.F2.code}` },
          { k: "Sĩ số", v: `${CLASSES.F1.students + CLASSES.F2.students} sinh viên` },
          { k: "Đội", v: `${CLASSES.F1.teams + CLASSES.F2.teams} đội · 5 vai` },
          { k: "Lịch", v: "12 tuần · 6 chu kỳ" },
        ].map((s) => (
          <div key={s.k} className="rounded-xl border border-border bg-card p-4 shadow-soft">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.k}</p>
            <p className="mt-1 text-sm font-medium leading-snug">{s.v}</p>
          </div>
        ))}
      </section>

      <section className="rounded-xl border border-border bg-card p-5 shadow-soft sm:p-6">
        <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Lớp đang chọn</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-ink">
              {klass.code} · nhóm {klass.nhom}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {klass.students} SV · {klass.teams} đội · Class ID{" "}
              <span className="font-medium text-foreground">{klass.classId}</span>
            </p>
          </div>
          <Badge variant="soft">
            {klass.meetings.first.room} / {klass.meetings.second.room}
          </Badge>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <MeetingCard title="Buổi 1 trong tuần" m={klass.meetings.first} tag="Lý thuyết (mặc định)" />
          <MeetingCard title="Buổi 2 trong tuần" m={klass.meetings.second} tag="Game / thực hành (mặc định)" />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Đổi thứ tự buổi game ở trang Lớp & đội. Khuyến nghị: lý thuyết trước, game sau — cùng tuần với
          chương Mariotti.
        </p>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-ink">Lịch 12 tuần — ngày thật</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Tuần 1 = 07/9–13/9. Tuần 12 kết thúc 29/11. Thi trong khung đến 20/12.
          </p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-muted/70 text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-3 py-2 font-medium">Tuần</th>
                <th className="px-3 py-2 font-medium">Khung</th>
                <th className="px-3 py-2 font-medium">Chu kỳ</th>
                <th className="px-3 py-2 font-medium">{klass.code}</th>
              </tr>
            </thead>
            <tbody>
              {WEEK_CALENDAR.map((w) => {
                const cycle = CYCLES.find((c) => c.week === w.week);
                const dates = w[classKey];
                const active = (weekNow === 0 && w.week === 1) || weekNow === w.week;
                return (
                  <tr
                    key={w.week}
                    className={cn("border-t border-border", active && "bg-accent/50")}
                  >
                    <td className="px-3 py-2 font-medium tabular-nums">{w.week}</td>
                    <td className="px-3 py-2 text-muted-foreground">{w.range}</td>
                    <td className="px-3 py-2">
                      {cycle ? `C${cycle.n} ${cycle.city}` : w.week <= 2 ? "Chuẩn bị" : w.week === 12 ? "Pitch" : "Thu hoạch"}
                    </td>
                    <td className="px-3 py-2 text-muted-foreground">
                      {dates.first.short} · {dates.second.short}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-ink">Sáu vòng game · Cần Thơ đến Hà Nội</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Đúng bản đồ chinh phục và biến cố trong engine. Mariotti là lớp mở rộng sau khi chơi — không
            thay tên tỉnh hay sự kiện.
          </p>
          <ol className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
            {CYCLES.map((c, i) => (
              <li key={c.n} className="flex items-center gap-2">
                <span className="font-medium text-ink">{c.city}</span>
                {i < CYCLES.length - 1 ? <span className="text-muted-foreground">→</span> : null}
              </li>
            ))}
          </ol>
        </div>
        <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {CYCLES.map((c) => (
            <li key={c.n}>
              <Link
                to="/lich"
                className="block h-full rounded-xl border border-border bg-card p-4 shadow-soft transition-colors hover:bg-accent/50"
              >
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Vòng {c.n} · tuần {c.week} · {c.tag}
                </p>
                <p className="mt-1 font-medium text-ink">{c.city}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{c.event}</p>
                <p className="mt-2 text-xs tabular-nums text-terracotta">{c.engine}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">Mở rộng. </span>
                  {c.expand}
                </p>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-ink">Ba cách triển khai — chỉ một cái khớp TKB</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Kế hoạch nghiên cứu 4 buổi vẫn hữu ích như phương án dự phòng. Với 2 buổi × 3 tiết mỗi tuần,
            mô hình đúng là một chu kỳ / tuần có debrief.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {OPTIONS.map((o) => (
            <article
              key={o.id}
              className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-soft"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-medium">{o.title}</h3>
                <Badge variant={o.id === "A" ? "default" : o.id === "C" ? "warn" : "outline"}>
                  {o.badge}
                </Badge>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {o.points.map((p) => (
                  <li key={p} className="leading-relaxed">
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-ink">Đã chỉnh so với kế hoạch trước</h2>
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/70 text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Kế hoạch cũ</th>
                <th className="px-4 py-3 font-medium">Kế hoạch này</th>
                <th className="hidden px-4 py-3 font-medium md:table-cell">Lý do</th>
              </tr>
            </thead>
            <tbody>
              {DIFFS.map((d) => (
                <tr key={d.from} className="border-t border-border align-top">
                  <td className="px-4 py-3 text-muted-foreground">{d.from}</td>
                  <td className="px-4 py-3 font-medium">{d.to}</td>
                  <td className="hidden px-4 py-3 text-muted-foreground md:table-cell">{d.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground">{OUTLINE_NOTE}</p>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        <Note
          title="Không kéo thanh để thắng"
          body="Chu trình học: dữ liệu → giả định → quyết định → kết quả → giải thích → điều chỉnh. Nếu chỉ tối ưu dự báo tức thời, SV thắng game nhưng không chứng minh được CLO."
        />
        <Note
          title="AI không chấm điểm"
          body="Lumina giải thích, chất vấn, phản tư. Engine thị phần và P&L là xác định, tái lập được. Tối đa 3 câu / vòng; phải ghi dùng / bác bỏ."
        />
        <Note
          title="Nghiên cứu đi sau vận hành"
          body="Pilot đầu chỉ hỏi: game chạy ổn? hiểu luật? đúng giờ? log đủ? Chưa kết luận năng lực hay ý định khởi nghiệp."
        />
      </section>

      <p className="text-xs text-muted-foreground">
        Nguồn game:{" "}
        <a className="underline" href={LINKS.hub} target="_blank" rel="noreferrer">
          cổng BizOn
        </a>
        {" · "}
        <a className="underline" href={LINKS.game} target="_blank" rel="noreferrer">
          Bật Nghiệp 2026
        </a>
        {" · "}
        <a className="underline" href={LINKS.guide} target="_blank" rel="noreferrer">
          hướng dẫn giảng viên
        </a>
        {" · "}
        <a className="underline" href={LINKS.music} target="_blank" rel="noreferrer">
          kho nhạc
        </a>
        {" · "}
        <a className="underline" href={LINKS.team} target="_blank" rel="noreferrer">
          đội ngũ
        </a>
        . Đề cương KT330H (Mariotti 2016, 3 TC). TKB cán bộ NH 2026–2027 HK1.
      </p>
    </div>
  );
}

function MeetingCard({
  title,
  tag,
  m,
}: {
  title: string;
  tag: string;
  m: { day: string; periods: string; time: string; room: string; note: string };
}) {
  return (
    <div className="rounded-lg bg-muted/60 p-4">
      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{title}</p>
      <p className="mt-1 font-medium">
        {m.day} · tiết {m.periods}
      </p>
      <p className="text-sm text-muted-foreground">
        {m.time} · {m.room}
      </p>
      <p className="mt-2 text-xs text-primary">{tag}</p>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{m.note}</p>
    </div>
  );
}

function Note({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-xl border border-border bg-card p-5 shadow-soft">
      <h3 className="font-medium text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </article>
  );
}
