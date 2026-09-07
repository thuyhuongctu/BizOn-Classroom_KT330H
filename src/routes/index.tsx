import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DeepMindHero } from "@/components/DeepMindHero";
import { LuminaStage } from "@/components/music/LuminaStage";
import { LuminaTour } from "@/components/LuminaTour";
import { FoundersIntro } from "@/components/FoundersIntro";
import { useT } from "@/lib/i18n";
import { nextSession, teachingWeekOf, WEEK_CALENDAR } from "@/lib/calendar";
import { CLASSES, CYCLES, DIFFS, EXAM_INFO, LINKS, OPTIONS, OUTLINE_NOTE, TA_INFO } from "@/lib/plan-data";
import { usePlanStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const classKey = usePlanStore((s) => s.classKey);
  const klass = CLASSES[classKey];
  const weekNow = teachingWeekOf();
  const next = nextSession(classKey);
  const cal = WEEK_CALENDAR.find((w) => w.week === (weekNow === 0 ? 1 : Math.min(weekNow, 11)));
  const t = useT();

  return (
    <div className="space-y-12">
      <LuminaTour />
      <DeepMindHero
        eyebrow={t("Ghi chú giảng dạy · Khoa Kinh tế · ĐH Cần Thơ", "Teaching notes · Faculty of Economics · Can Tho University")}
        title={t(
          "Triển khai BizOn Bật Nghiệp đúng vào KT330H, không phải một game khởi nghiệp chung.",
          "Rolling out BizOn Bật Nghiệp inside KT330H itself — not a generic entrepreneurship game.",
        )}
        lede={t(
          "Học phần Khởi sự doanh nghiệp, NH 2026–2027 HK1 (07/9–20/12). Sáu chu kỳ, năm vai trò, ba đối thủ AI, nhật ký SEC — thầy Phan Anh Tú dẫn học thuật, Lumina đồng hành trên từng vòng.",
          "Entrepreneurship course, AY 2026–2027 Term 1 (Sep 7 – Dec 20). Six cycles, five roles, three AI rivals, an SEC decision log — Prof. Phan Anh Tú leads the academics, Lumina rides along every round.",
        )}
        actions={
          <>
            <Button asChild className="bg-white text-[#07080a] hover:bg-white/90">
              <Link to="/lich">
                {t("Xem lịch 11 tuần", "View the 11-week calendar")} <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
              <Link to="/checklist">{t("Checklist trước thứ Hai", "Monday prep checklist")}</Link>
            </Button>
            <Button asChild variant="ghost" className="text-white hover:bg-white/10">
              <a href={LINKS.game} target="_blank" rel="noreferrer">
                {t("Mở game", "Open the game")} <ExternalLink />
              </a>
            </Button>
          </>
        }
      />

      <FoundersIntro />

      <LuminaStage />

      <section data-tour="next-session" className="rounded-xl border border-terracotta/30 bg-card p-5 shadow-soft sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-terracotta">
              {weekNow === 0
                ? t("Học kỳ bắt đầu thứ Hai 07/9", "Term starts Monday, Sep 7")
                : weekNow > 11
                  ? t("Hết 11 tuần giảng dạy", "11 teaching weeks complete")
                  : t(`Tuần giảng dạy ${weekNow} / 11`, `Teaching week ${weekNow} / 11`)}
            </p>
            <h2 className="mt-1 text-xl font-semibold text-ink">
              {weekNow === 0
                ? t("Còn weekend để chạy thử đủ 12 vòng (2 Mùa)", "Weekend left to test-run all 12 rounds (2 seasons)")
                : next
                  ? t(`Buổi tới · ${next.date.label}`, `Next session · ${next.date.label}`)
                  : t("Hết buổi trên TKB", "No sessions left on the timetable")}
            </h2>
            {next ? (
              <p className="mt-1 text-sm text-muted-foreground">
                {klass.code} · {t("tiết", "periods")} {next.meeting.periods} · {next.meeting.time} ·{" "}
                {next.meeting.room}
                {next.week === 1 && next.slot === "first"
                  ? t(
                      " — luật, CLO, chia đội. Chưa commit vòng tính điểm.",
                      " — rules, CLOs, team assignment. No scored round committed yet.",
                    )
                  : next.week === 1
                    ? t(" — demo 1 vòng, kết quả không tính.", " — one demo round, result not counted.")
                    : ""}
              </p>
            ) : null}
          </div>
          <Badge variant={weekNow === 0 ? "warn" : "soft"}>
            {weekNow === 0
              ? t("Tuần 0 · chuẩn bị", "Week 0 · prep")
              : t(`Tuần ${Math.min(weekNow, 11)}`, `Week ${Math.min(weekNow, 11)}`)}
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
          {t(
            "TKB chính thức bản v4 (06/9/2026): cả 2 buổi/tuần đều gồm 2 tiết lý thuyết + 1 tiết phòng máy (tiết cuối). F1: Thứ Ba 104/KT + Phòng máy 3.20 – Nhà học ATL (khác cơ sở, giải lao chỉ 10 phút); Thứ Năm 103/KT + Phòng máy tính 2 – Trường Kinh tế. F2: Thứ Tư 105/KT + Phòng máy tính 1; Thứ Sáu 202/KT + Phòng máy tính 1 (cùng phòng máy 2 buổi). Thuyết trình Dự án khởi nghiệp gọn trong Tuần 9 buổi A (không dùng phòng máy); Tuần 9 buổi B – Tuần 11 buổi A dạy lý thuyết Chương 9–12.",
            "Official schedule v4 (06/9/2026): both weekly sessions include 2 periods of theory + 1 computer-lab period (the last one). F1: Tuesday in 104/KT + Computer Lab 3.20 at the ATL building (a different campus building, only a 10-minute break to get there); Thursday in 103/KT + Computer Lab 2 at the School of Economics. F2: Wednesday in 105/KT + Computer Lab 1; Friday in 202/KT + Computer Lab 1 (same lab both days). The Startup Project presentation is a single session in week 9 (no computer lab); week 9's second session through week 11's first session cover Chapters 9-12 lecture.",
          )}
        </p>
      </section>

      <section className="rounded-xl border border-amber-300/60 bg-amber-50 p-5 dark:bg-amber-950/20">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-amber-700">
          {t("Tuần 12 · dự trữ + thi cuối kỳ", "Week 12 · buffer + final exam")}
        </p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {CLASSES.F1.code}
            </p>
            <p className="mt-1 text-sm">
              <span className="font-medium">{t("Dự trữ: ", "Buffer: ")}</span>
              {EXAM_INFO.F1.buffer}
            </p>
            <p className="mt-1 text-sm">
              <span className="font-medium">{t("Thi: ", "Exam: ")}</span>
              {EXAM_INFO.F1.exam}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {CLASSES.F2.code}
            </p>
            <p className="mt-1 text-sm">
              <span className="font-medium">{t("Dự trữ: ", "Buffer: ")}</span>
              {EXAM_INFO.F2.buffer}
            </p>
            <p className="mt-1 text-sm">
              <span className="font-medium">{t("Thi: ", "Exam: ")}</span>
              {EXAM_INFO.F2.exam}
            </p>
            {EXAM_INFO.F2.examWarning ? (
              <p className="mt-2 rounded-lg bg-amber-100 p-2 text-xs font-semibold text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">
                ⚠️ {t(EXAM_INFO.F2.examWarning, EXAM_INFO.F2.examWarningEn ?? EXAM_INFO.F2.examWarning)}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          {t("Trợ giảng cấu phần thực hành", "Teaching assistant — practical component")}
        </p>
        <p className="mt-2 text-sm leading-relaxed">{t(TA_INFO.vi, TA_INFO.en)}</p>
      </section>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { k: t("2 lớp CLC", "2 honors classes"), v: `${CLASSES.F1.code} · ${CLASSES.F2.code}` },
          {
            k: t("Sĩ số", "Enrollment"),
            v: t(
              `${CLASSES.F1.students + CLASSES.F2.students} sinh viên`,
              `${CLASSES.F1.students + CLASSES.F2.students} students`,
            ),
          },
          {
            k: t("Đội", "Teams"),
            v: t(`${CLASSES.F1.teams + CLASSES.F2.teams} đội · 5–6 vai`, `${CLASSES.F1.teams + CLASSES.F2.teams} teams · 5–6 roles`),
          },
          { k: t("Lịch", "Calendar"), v: t("11 tuần · 2 Mùa × 6 vòng", "11 weeks · 2 seasons × 6 rounds") },
        ].map((s) => (
          <div key={s.k} className="rounded-xl border border-border bg-card p-4 shadow-soft">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.k}</p>
            <p className="mt-1 text-sm font-medium leading-snug">{s.v}</p>
          </div>
        ))}
      </section>

      <section className="rounded-xl border border-border bg-card p-5 shadow-soft sm:p-6">
        <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
          {t("Lớp đang chọn", "Selected class")}
        </p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-ink">
              {klass.code} · {t("nhóm", "group")} {klass.nhom}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(`${klass.students} SV · ${klass.teams} đội`, `${klass.students} students · ${klass.teams} teams`)} ·
              Class ID <span className="font-medium text-foreground">{klass.classId}</span>
            </p>
          </div>
          <Badge variant="soft">
            {klass.meetings.first.room} / {klass.meetings.second.room}
          </Badge>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <MeetingCard
            title={t("Buổi A trong tuần", "Weekly session A")}
            m={klass.meetings.first}
            tag={t("2 tiết lý thuyết + 1 tiết game", "2 theory periods + 1 game period")}
          />
          <MeetingCard
            title={t("Buổi B trong tuần", "Weekly session B")}
            m={klass.meetings.second}
            tag={t("2 tiết lý thuyết + 1 tiết game", "2 theory periods + 1 game period")}
          />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          {t(
            "Cả 2 buổi/tuần đều có cấu trúc như nhau — tiết game cuối mỗi buổi chơi 1 vòng riêng (2 vòng/tuần ở Tuần 2–4 và 6–8).",
            "Both weekly sessions share the same structure — each session's final game period plays its own round (2 rounds/week in weeks 2–4 and 6–8).",
          )}
        </p>
      </section>

      <section data-tour="calendar" className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-ink">{t("Lịch 11 tuần — ngày thật", "11-week calendar — real dates")}</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {t(
              "Tuần 1 = 07/9–13/9. Tuần 11 kết thúc 22/11. Thi trong khung đến 20/12.",
              "Week 1 = Sep 7–13. Week 11 ends Nov 22. Exams run through Dec 20.",
            )}
          </p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-muted/70 text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-3 py-2 font-medium">{t("Tuần", "Week")}</th>
                <th className="px-3 py-2 font-medium">{t("Khung", "Dates")}</th>
                <th className="px-3 py-2 font-medium">{t("Chu kỳ", "Cycle")}</th>
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
                      {cycle
                        ? `C${cycle.n} ${cycle.city}`
                        : w.week <= 2
                          ? t("Chuẩn bị", "Prep")
                          : w.week === 9 || w.week === 10
                            ? "Pitch"
                            : t("Thu hoạch", "Wrap-up")}
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

      <section data-tour="cycles" className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-ink">
            {t("2 Mùa × 6 vòng · Cần Thơ đến Hà Nội", "2 seasons × 6 rounds · Cần Thơ to Hà Nội")}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {t(
              "Mùa 2 lặp lại đúng bản đồ chinh phục và biến cố trong engine của Mùa 1 (vai trò đã đổi từ tuần 5) — không thay tên tỉnh hay sự kiện.",
              "Season 2 replays the exact same conquest map and engine events as Season 1 (roles rotated from week 5) — province names and events are never renamed.",
            )}
          </p>
          <ol className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
            {CYCLES.map((c, i) => (
              <li key={`${c.season}-${c.n}`} className="flex items-center gap-2">
                {i === 6 ? <span className="mr-1 text-[10px] uppercase text-muted-foreground">{t("Mùa 2:", "S2:")}</span> : null}
                <span className="font-medium text-ink">{c.city}</span>
                {i < CYCLES.length - 1 && i !== 5 ? <span className="text-muted-foreground">→</span> : null}
              </li>
            ))}
          </ol>
        </div>
        <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {CYCLES.map((c) => (
            <li key={`${c.season}-${c.n}`}>
              <Link
                to="/lich"
                className="block h-full rounded-xl border border-border bg-card p-4 shadow-soft transition-colors hover:bg-accent/50"
              >
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {t("Mùa", "Season")} {c.season} · {t("Vòng", "Round")} {c.n} · {t("tuần", "week")} {c.week} · {c.tag}
                </p>
                <p className="mt-1 font-medium text-ink">{c.city}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{c.event}</p>
                <p className="mt-2 text-xs tabular-nums text-terracotta">{c.engine}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">{t("Mở rộng. ", "Extension. ")}</span>
                  {c.expand}
                </p>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-ink">
            {t("Ba cách triển khai — chỉ một cái khớp TKB", "Three rollout options — only one fits the timetable")}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {t(
              "Kế hoạch nghiên cứu 4 buổi vẫn hữu ích như phương án dự phòng. Với 2 buổi × 3 tiết mỗi tuần, mô hình đúng là một chu kỳ / tuần có debrief.",
              "The 4-session research plan still works as a fallback. With 2 sessions × 3 periods a week, the right model is one cycle per week with a debrief.",
            )}
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
        <h2 className="text-xl font-semibold text-ink">{t("Đã chỉnh so với kế hoạch trước", "Changes from the earlier plan")}</h2>
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/70 text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">{t("Kế hoạch cũ", "Earlier plan")}</th>
                <th className="px-4 py-3 font-medium">{t("Kế hoạch này", "This plan")}</th>
                <th className="hidden px-4 py-3 font-medium md:table-cell">{t("Lý do", "Why")}</th>
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
          title={t("Không kéo thanh để thắng", "Don't just slide to win")}
          body={t(
            "Chu trình học: dữ liệu → giả định → quyết định → kết quả → giải thích → điều chỉnh. Nếu chỉ tối ưu dự báo tức thời, SV thắng game nhưng không chứng minh được CLO.",
            "Learning loop: data → assumption → decision → outcome → explanation → adjustment. Optimizing only for the instant forecast lets a team win the game without demonstrating the CLOs.",
          )}
        />
        <Note
          title={t("AI không chấm điểm", "AI doesn't grade")}
          body={t(
            "Lumina giải thích, chất vấn, phản tư. Engine thị phần và P&L là xác định, tái lập được. Tối đa 3 câu / vòng; phải ghi dùng / bác bỏ.",
            "Lumina explains, questions, and reflects. The market-share and P&L engine is deterministic and reproducible. Max 3 questions per round; every use or rejection must be logged.",
          )}
        />
        <Note
          title={t("Nghiên cứu đi sau vận hành", "Research follows operations")}
          body={t(
            "Pilot đầu chỉ hỏi: game chạy ổn? hiểu luật? đúng giờ? log đủ? Chưa kết luận năng lực hay ý định khởi nghiệp.",
            "The first pilot only asks: does the game run smoothly? are the rules clear? on schedule? is logging complete? It draws no conclusions yet about entrepreneurial competence or intent.",
          )}
        />
      </section>

      <p className="text-xs text-muted-foreground">
        {t("Nguồn game:", "Game source:")}{" "}
        <a className="underline" href={LINKS.hub} target="_blank" rel="noreferrer">
          {t("cổng BizOn", "BizOn hub")}
        </a>
        {" · "}
        <a className="underline" href={LINKS.game} target="_blank" rel="noreferrer">
          Bật Nghiệp 2026
        </a>
        {" · "}
        <a className="underline" href={LINKS.guide} target="_blank" rel="noreferrer">
          {t("hướng dẫn giảng viên", "instructor guide")}
        </a>
        {" · "}
        <a className="underline" href={LINKS.music} target="_blank" rel="noreferrer">
          {t("kho nhạc", "soundtrack")}
        </a>
        {" · "}
        <a className="underline" href={LINKS.team} target="_blank" rel="noreferrer">
          {t("đội ngũ", "team")}
        </a>
        {" · "}
        <a className="underline" href={LINKS.benPhuSa} target="_blank" rel="noreferrer">
          {t("Bến Phù Sa (khởi nghiệp hàng rong)", "Bến Phù Sa (street-vendor sim)")}
        </a>
        {t(
          ". Đề cương KT330H (Mariotti 2016, 3 TC). TKB cán bộ NH 2026–2027 HK1.",
          ". KT330H syllabus (Mariotti 2016, 3 credits). Staff timetable, AY 2026–2027 Term 1.",
        )}
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
  const t = useT();
  return (
    <div className="rounded-lg bg-muted/60 p-4">
      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{title}</p>
      <p className="mt-1 font-medium">
        {m.day} · {t("tiết", "periods")} {m.periods}
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
