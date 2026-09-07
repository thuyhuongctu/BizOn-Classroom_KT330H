import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import {
  CLOS,
  PEER_ITEMS,
  PILOT_THRESHOLDS,
  PITCH_TIMING,
  RUBRIC_COURSE,
  RUBRIC_COURSE_CAVEAT,
  RUBRIC_TEAM,
  SESSION_RUBRIC,
  SURVEYS,
  WEEKS,
} from "@/lib/plan-data";

export const Route = createFileRoute("/danh-gia")({ component: GradePage });

function GradePage() {
  const total = RUBRIC_COURSE.reduce((n, r) => n + r.weight, 0);
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Kịch bản BizOn hiệu chỉnh bản v1 · Mục VII
        </p>
        <h1 className="text-3xl font-semibold text-ink">Đánh giá — rubric 7 phần (tổng {total}%)</h1>
        <p className="max-w-2xl rounded-xl border border-amber-300/60 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900 dark:bg-amber-950/20 dark:text-amber-200">
          ⚠️ {RUBRIC_COURSE_CAVEAT}
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
        <h2 className="text-xl font-semibold text-ink">Giải phẫu pitch 7 phút theo vai — Đại hội Cổ đông</h2>
        <p className="text-sm text-muted-foreground">
          Kỷ luật thời gian: quá giờ 30 giây trừ ngay 5 điểm, đồng hồ reo và phần trình bày bị ngắt.
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
            Chấm chi tiết hơn khi cần minh chứng theo tiêu chí (ngoài rubric 7 phần ở trên). Từ bộ
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
        <h2 className="text-xl font-semibold text-ink">Phiếu đồng đẳng — tuần 9–10</h2>
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
