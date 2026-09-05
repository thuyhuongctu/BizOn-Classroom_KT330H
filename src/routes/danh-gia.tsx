import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import {
  CLOS,
  PEER_ITEMS,
  PILOT_THRESHOLDS,
  RUBRIC_COURSE,
  RUBRIC_PROCESS,
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
        <h1 className="text-3xl font-semibold text-ink">Đánh giá khớp 10 / 40 / 50</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Không invent rubric mới cho học phần. Game chiếm một phần của 40% quá trình — cùng chỗ với
          báo cáo nhóm / đồ án hiện nay. Thi cuối kỳ 50% giữ nguyên; câu thi có thể lấy tình huống từ
          6 vòng.
        </p>
      </header>

      <section className="grid gap-3 md:grid-cols-3">
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
        <h2 className="text-xl font-semibold text-ink">Phân rã 40% quá trình</h2>
        <p className="text-sm text-muted-foreground">
          Gợi ý tương tự cách chấm ACT của học phần định lượng (điểm nhóm + discussion cá nhân). Có thể
          gom thành 20% game + 20% plan/pitch nếu muốn đơn giản hơn.
        </p>
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/70 text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Thành phần</th>
                <th className="px-4 py-3 font-medium">% học phần</th>
                <th className="hidden px-4 py-3 font-medium md:table-cell">Nội dung</th>
              </tr>
            </thead>
            <tbody>
              {RUBRIC_PROCESS.map((r) => (
                <tr key={r.name} className="border-t border-border align-top">
                  <td className="px-4 py-3 font-medium">{r.name}</td>
                  <td className="px-4 py-3 tabular-nums">{r.pct}</td>
                  <td className="hidden px-4 py-3 text-muted-foreground md:table-cell">{r.detail}</td>
                </tr>
              ))}
              <tr className="border-t border-border bg-muted/40">
                <td className="px-4 py-3 font-medium">Tổng quá trình</td>
                <td className="px-4 py-3 tabular-nums font-medium">40</td>
                <td className="hidden px-4 py-3 text-muted-foreground md:table-cell">
                  Discussion 10% nằm ngoài bảng này, đúng đề cương.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

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
        <h2 className="text-xl font-semibold text-ink">Phiếu đồng đẳng — tuần 12</h2>
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
