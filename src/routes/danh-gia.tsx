import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import {
  CLOS,
  PEER_ITEMS,
  PILOT_THRESHOLDS,
  RUBRIC_COURSE,
  RUBRIC_PROCESS,
  RUBRIC_TEAM,
  SURVEYS,
  WEEKS,
} from "@/lib/plan-data";

export const Route = createFileRoute("/danh-gia")({ component: GradePage });

function GradePage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Đề cương §10 · thang 10, một chữ số thập phân
        </p>
        <h1 className="text-3xl font-semibold text-ink">Đánh giá khớp 10 / 20 / 20 / 50</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Thầy Phan Anh Tú chốt trực tiếp (Zalo): 10% thảo luận/chuyên cần, 20% điểm chơi mô phỏng
          BizOn Bật Nghiệp (quy đổi thẳng từ điểm App), 20% dự án khởi nghiệp (BMC + pitch tuần 9–10 —
          Hương tự quyết chi tiết chấm điểm), 50% thi cuối kỳ giữ nguyên theo quy định CTU (trắc
          nghiệm trên máy + câu hỏi mở).
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

      {(
        [
          {
            key: "game" as const,
            title: "Chi tiết 20% điểm game",
            note: "Thầy Phan Anh Tú chốt trực tiếp: điểm trên App (100%) quy đổi thành 20% điểm cuối kỳ. Chia theo 3 nội dung chính khi chơi 6 vòng: chơi tốt (hiệu quả), quyết định tốt (lập luận), phản tư tốt (nhật ký) — đã chốt, khớp đủ 20%.",
          },
          {
            key: "project" as const,
            title: "Chi tiết 20% dự án khởi nghiệp",
            note: "Thầy Phan Anh Tú giao Hương tự quyết chi tiết chấm điểm phần này (BMC + pitch tuần 9–10, project-based outcome). Trọng số nội bộ dưới đây là bản nháp cũ (tổng 16, chưa khớp 20) — chờ Hương chốt.",
          },
        ] as const
      ).map((g) => {
        const items = RUBRIC_PROCESS.filter((r) => r.group === g.key);
        const sum = items.reduce((n, r) => n + r.pct, 0);
        const done = sum === 20;
        return (
          <section key={g.key} className="space-y-3">
            <h2 className="text-xl font-semibold text-ink">{g.title}</h2>
            <p className="text-sm text-muted-foreground">{g.note}</p>
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/70 text-[11px] uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 font-medium">Thành phần</th>
                    <th className="px-4 py-3 font-medium">{done ? "%" : "% nháp"}</th>
                    <th className="hidden px-4 py-3 font-medium md:table-cell">Nội dung</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((r) => (
                    <tr key={r.name} className="border-t border-border align-top">
                      <td className="px-4 py-3 font-medium">{r.name}</td>
                      <td className="px-4 py-3 tabular-nums">{r.pct}</td>
                      <td className="hidden px-4 py-3 text-muted-foreground md:table-cell">{r.detail}</td>
                    </tr>
                  ))}
                  <tr className="border-t border-border bg-muted/40">
                    <td className="px-4 py-3 font-medium">
                      {done ? "Tổng — đã chốt" : `Tổng nháp (mục tiêu 20%)`}
                    </td>
                    <td className="px-4 py-3 tabular-nums font-medium">{sum}</td>
                    <td className="hidden px-4 py-3 text-muted-foreground md:table-cell">
                      Discussion 10% và {g.key === "game" ? "dự án khởi nghiệp 20%" : "game 20%"} nằm ngoài bảng này.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        );
      })}

      <section className="rounded-xl border border-border bg-card p-5">
        <h2 className="font-medium text-ink">Chỉ số kết quả game — công bố trước tuần 3</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Không chấm chỉ bằng lợi nhuận cuối. Gợi ý trọng số nội bộ (trong 8% hiệu quả): lãi lũy kế 30%
          · số cờ / thị phần vòng 25% · tiền mặt không âm các vòng 20% · thương hiệu 15% · hoàn thành
          nhiệm vụ / không phá sản 10%. Sổ tay GitHub (40/30/15/15) thiên về thắng cuộc; học phần này
          nâng nhật ký và lập luận lên, hạ xếp hạng xuống.
        </p>
      </section>

      <section className="space-y-3">
        <div>
          <h2 className="text-xl font-semibold text-ink">Rubric đội &amp; cá nhân — 4 mức</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Chấm chi tiết hơn khi cần minh chứng theo tiêu chí (ngoài rubric 10/20/20/50 của học phần). Từ
            bộ hồ sơ triển khai BizOn Bật Nghiệp 2026.
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
          Mỗi thành viên chấm 4 người còn lại, thang 1–5. Không chấm mình. GV đối chiếu với discussion
          đã ghi suốt 6 vòng.
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
