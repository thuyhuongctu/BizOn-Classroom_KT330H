import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import {
  CLOS,
  MVP_REQUIREMENTS,
  PASTOR,
  PEER_ITEMS,
  PILOT_THRESHOLDS,
  PITCH_MUST_KNOW_FIGURES,
  PITCH_QA_MINUTES,
  PITCH_SELF_ASSESS_MINUTES,
  PITCH_TIMING,
  PRE_PITCH_CHECKLIST,
  PRESENTATION_GUIDELINES,
  RECOMMENDED_RESOURCES,
  RUBRIC_COURSE,
  RUBRIC_GAME_BREAKDOWN,
  RUBRIC_TEAM,
  SESSION_RUBRIC,
  SURVEYS,
  USER_TESTING_GUIDE,
  USER_TESTING_REPORT_STRUCTURE,
  WEEKS,
} from "@/lib/plan-data";

export const Route = createFileRoute("/danh-gia")({ component: GradePage });

function GradePage() {
  const total = RUBRIC_COURSE.reduce((n, r) => n + r.weight, 0);
  const gameSum = RUBRIC_GAME_BREAKDOWN.reduce((n, r) => n + r.pct, 0);
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Đề cương chính thức · PGS.TS. Phan Anh Tú · ban hành 14/9/2026
        </p>
        <h1 className="text-3xl font-semibold text-ink">Đánh giá 8 cấu phần (tổng {total}%)</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          10% thảo luận/chuyên cần · 15% giải đấu BizOn + 5% ôn tập EnQuiz · 20% Dự án khởi nghiệp
          (Lean Canvas 5% + MVP 5% + Pitch deck &amp; Demo Day 7% + Portfolio 3%) · 50% thi cuối kỳ.
          Đây là cơ cấu chính thức mục 6 đề cương — thay thế cơ cấu 10/20/20/50 trước đó.
        </p>
      </header>

      <section className="grid gap-3 md:grid-cols-2">
        {RUBRIC_COURSE.map((r) => (
          <article key={r.id} className="rounded-xl border border-border bg-card p-5 shadow-soft">
            <p className="font-display text-4xl font-semibold tabular-nums text-primary">{r.weight}%</p>
            <h2 className="mt-2 font-medium text-ink">{r.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.note}</p>
            <p className="mt-3 text-xs text-faint">{r.clos}</p>
          </article>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ink">Chi tiết bên trong 15% điểm BizOn</h2>
        <p className="text-sm text-muted-foreground">
          3 mốc của mô hình 2 Mùa × 6 vòng + BizOn Grand Final, quy đổi để tổng đúng {gameSum}/15.
        </p>
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/70 text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Thành phần</th>
                <th className="px-4 py-3 font-medium">%</th>
                <th className="hidden px-4 py-3 font-medium md:table-cell">Căn cứ</th>
              </tr>
            </thead>
            <tbody>
              {RUBRIC_GAME_BREAKDOWN.map((r) => (
                <tr key={r.id} className="border-t border-border align-top">
                  <td className="px-4 py-3 font-medium">{r.name}</td>
                  <td className="px-4 py-3 tabular-nums">{r.pct}</td>
                  <td className="hidden px-4 py-3 text-muted-foreground md:table-cell">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ink">Giải phẫu bài gọi vốn 7 phút theo vai — Đại hội Cổ đông</h2>
        <p className="text-sm text-muted-foreground">
          Sau 7 phút trình bày: 8 phút Hội đồng đầu tư và lớp chất vấn, rồi 3 phút tự đánh giá nóng. Kỷ
          luật thời gian: quá giờ 30 giây trừ ngay 5 điểm, đồng hồ reo và phần trình bày bị ngắt.
        </p>
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/70 text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Thời lượng</th>
                <th className="px-4 py-3 font-medium">Vai</th>
                <th className="px-4 py-3 font-medium">Nội dung</th>
              </tr>
            </thead>
            <tbody>
              {PITCH_TIMING.map((p, i) => (
                <tr key={i} className="border-t border-border align-top">
                  <td className="px-4 py-3 tabular-nums">{p.seconds}s</td>
                  <td className="px-4 py-3 font-medium">{p.role}</td>
                  <td className="px-4 py-3 text-muted-foreground">{p.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground">
          Sau 7 phút trình bày: {PITCH_QA_MINUTES} phút Hội đồng đầu tư và lớp chất vấn, rồi{" "}
          {PITCH_SELF_ASSESS_MINUTES} phút tự đánh giá nóng trước khi công bố mức cấp vốn. Mọi thành
          viên đội phải thuộc lòng: {PITCH_MUST_KNOW_FIGURES.join(", ").toLowerCase()}.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ink">Khung PASTOR</h2>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {PASTOR.map((p) => (
            <div key={p.letter} className="rounded-xl border border-border bg-card p-4">
              <p className="text-2xl font-display font-semibold text-primary">
                {p.letter} <span className="text-sm font-normal text-muted-foreground">{p.word}</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{p.vi}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ink">Checklist 12 mục trước khi lên bục gọi vốn</h2>
        <ol className="grid gap-2 sm:grid-cols-2">
          {PRE_PITCH_CHECKLIST.map((item, i) => (
            <li key={i} className="flex gap-2 rounded-lg border border-border bg-card p-3 text-sm">
              <span className="font-medium tabular-nums text-primary">{i + 1}.</span>
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ink">Phụ lục A — Rubric chấm nhanh một buổi chơi (thang 10)</h2>
        <p className="text-sm text-muted-foreground">
          GV/trợ giảng chấm ngay trong buổi bằng bảng xếp hạng cuối vòng và Nhật ký đội, không cần chờ
          SV nộp bài riêng.
        </p>
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/70 text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Tiêu chí</th>
                <th className="px-4 py-3 font-medium">Trọng số</th>
                <th className="hidden px-4 py-3 font-medium md:table-cell">Căn cứ</th>
              </tr>
            </thead>
            <tbody>
              {SESSION_RUBRIC.map((r) => (
                <tr key={r.criterion} className="border-t border-border align-top">
                  <td className="px-4 py-3 font-medium">{r.criterion}</td>
                  <td className="px-4 py-3 tabular-nums">{r.weight}%</td>
                  <td className="hidden px-4 py-3 text-muted-foreground md:table-cell">{r.evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <div>
          <h2 className="text-xl font-semibold text-ink">Rubric đội &amp; cá nhân — 4 mức</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Chấm chi tiết hơn khi cần minh chứng theo tiêu chí (ngoài rubric 8 cấu phần ở trên). Từ bộ
            hồ sơ triển khai BizOn Bật Nghiệp 2026.
          </p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full min-w-[880px] text-left text-sm">
            <thead className="bg-muted/70 text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-3 py-2 font-medium">Tiêu chí</th>
                <th className="px-3 py-2 font-medium">Trọng số</th>
                <th className="px-3 py-2 font-medium">4 · Xuất sắc</th>
                <th className="px-3 py-2 font-medium">3 · Tốt</th>
                <th className="px-3 py-2 font-medium">2 · Đạt</th>
                <th className="px-3 py-2 font-medium">1 · Chưa đạt</th>
                <th className="px-3 py-2 font-medium">Minh chứng</th>
              </tr>
            </thead>
            <tbody>
              {RUBRIC_TEAM.map((r) => (
                <tr key={r.criterion} className="border-t border-border align-top">
                  <td className="px-3 py-2 font-medium">{r.criterion}</td>
                  <td className="px-3 py-2 tabular-nums">{r.weight}%</td>
                  <td className="px-3 py-2 text-muted-foreground">{r.l4}</td>
                  <td className="px-3 py-2 text-muted-foreground">{r.l3}</td>
                  <td className="px-3 py-2 text-muted-foreground">{r.l2}</td>
                  <td className="px-3 py-2 text-muted-foreground">{r.l1}</td>
                  <td className="px-3 py-2 text-xs text-faint">{r.evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ink">Ma trận CLO × tuần</h2>
        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          <table className="min-w-[720px] w-full text-left text-xs">
            <thead className="bg-muted/70 text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-3 py-2 font-medium">CLO</th>
                {WEEKS.map((w) => (
                  <th key={w.week} className="px-1 py-2 text-center font-medium">
                    {w.week}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CLOS.map((c) => (
                <tr key={c.id} className="border-t border-border">
                  <td className="px-3 py-2">
                    <span className="font-medium">{c.id}</span>
                    <span className="ml-2 hidden text-muted-foreground lg:inline">{c.text}</span>
                  </td>
                  {WEEKS.map((w) => (
                    <td key={w.week} className="px-1 py-2 text-center">
                      {w.clos.includes(c.id) ? (
                        <span className="inline-block size-2 rounded-full bg-primary" />
                      ) : (
                        <span className="inline-block size-2 rounded-full bg-border" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2">
          {CLOS.map((c) => (
            <li key={c.id} className="flex gap-2 text-sm">
              <Badge variant="soft">{c.id}</Badge>
              <span>
                <span className="text-muted-foreground">{c.kind} · </span>
                {c.text}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ink">Phụ lục 1 — Yêu cầu MVP</h2>
        <p className="text-sm text-muted-foreground">{MVP_REQUIREMENTS.intro}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-4">
            <p className="font-medium text-ink">Định dạng chấp nhận</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              {MVP_REQUIREMENTS.formats.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <p className="font-medium text-ink">Yêu cầu bắt buộc</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              {MVP_REQUIREMENTS.requirements.map((r) => (
                <li key={r}>• {r}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ink">Phụ lục 2 — Tổ chức kiểm thử người dùng</h2>
        <p className="text-sm text-muted-foreground">Cỡ mẫu: {USER_TESTING_GUIDE.sampleSize}</p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          {USER_TESTING_GUIDE.methods.map((m) => (
            <li key={m}>• {m}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ink">Phụ lục 3 — Cấu trúc báo cáo kiểm thử người dùng (5–7 trang)</h2>
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/70 text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Phần</th>
                <th className="px-4 py-3 font-medium">Độ dài</th>
                <th className="hidden px-4 py-3 font-medium md:table-cell">Nội dung</th>
              </tr>
            </thead>
            <tbody>
              {USER_TESTING_REPORT_STRUCTURE.map((s) => (
                <tr key={s.section} className="border-t border-border align-top">
                  <td className="px-4 py-3 font-medium">{s.section}</td>
                  <td className="px-4 py-3 tabular-nums text-muted-foreground">{s.length}</td>
                  <td className="hidden px-4 py-3 text-muted-foreground md:table-cell">{s.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ink">Thuyết trình case study nhóm</h2>
        <p className="text-sm text-muted-foreground">{PRESENTATION_GUIDELINES.prep}</p>
        <p className="text-sm text-muted-foreground">{PRESENTATION_GUIDELINES.timing}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ink">Tài liệu tham khảo</h2>
        <ul className="space-y-1 text-sm text-muted-foreground">
          {RECOMMENDED_RESOURCES.map((r) => (
            <li key={r}>• {r}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ink">Mẫu phản hồi nhóm</h2>
        <p className="text-sm text-muted-foreground">
          Cùng cấu trúc đã dùng cho ACT: điểm mạnh / cần cải / khái niệm bắt được / kết luận. Chấm nhóm
          cho phiếu + nhật ký; discussion cá nhân tách riêng. Ghi trực tiếp ở trang Phản hồi.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { t: "Điểm mạnh", d: "Slide/phiếu rõ, dùng đúng công cụ (SWOT, EOU, 4P, CVP), không đọc tài liệu." },
            { t: "Cần cải", d: "Đào sâu nội dung, Q&A, tiếng Anh nói nếu CLC, không tối ưu theo thanh dự báo." },
            { t: "Khái niệm", d: "Ghi đúng 1–2 thuật ngữ tuần đó: EOU, hard/soft, co giãn, working capital." },
            { t: "Kết luận", d: "Quite good 19 · Good 19.5 · Very good 19.7 · Excellent 20 — hoặc thang 10." },
          ].map((x) => (
            <div key={x.t} className="rounded-xl border border-border bg-card p-4">
              <p className="font-medium">{x.t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ink">Khảo sát T0 / T1 / T2 — Likert 1–5</h2>
        <p className="text-sm text-muted-foreground">
          T0 và T2 dùng cùng mã ẩn danh để ghép cặp. T1 tối đa 5 phút, không làm gián đoạn vòng chơi.
          Từ chối nghiên cứu không ảnh hưởng điểm.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          {SURVEYS.map((s) => (
            <article key={s.id} className="rounded-xl border border-border bg-card p-5">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                {s.id} · {s.minutes} phút
              </p>
              <h3 className="mt-1 font-medium text-ink">{s.when}</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-4 text-sm text-muted-foreground">
                {s.items.map((it) => (
                  <li key={it} className="leading-relaxed">
                    {it}
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ink">Phiếu đồng đẳng — tuần 9</h2>
        <p className="text-sm text-muted-foreground">
          Mỗi thành viên chấm những người còn lại trong đội (4 hoặc 5, tuỳ đội có CDO), thang 1–5.
          Không chấm mình. GV đối chiếu với discussion đã ghi suốt 12 vòng, 2 Mùa.
        </p>
        <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
          {PEER_ITEMS.map((p) => (
            <li key={p.id} className="px-4 py-3 text-sm">
              {p.label}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-ink">Ngưỡng khả thi — không phải ngưỡng hiệu quả</h2>
        <div className="mt-3 overflow-hidden rounded-xl border border-border bg-card">
          <table className="w-full text-left text-sm">
            <tbody>
              {PILOT_THRESHOLDS.map((p) => (
                <tr key={p.metric} className="border-t border-border first:border-0">
                  <td className="px-4 py-3">{p.metric}</td>
                  <td className="px-4 py-3 text-right font-medium tabular-nums">{p.threshold}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
