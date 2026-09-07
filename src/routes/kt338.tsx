import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { KT338_INFO, KT338_WEEKS, LINKS } from "@/lib/plan-data";

export const Route = createFileRoute("/kt338")({ component: Kt338Page });

function Kt338Page() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          {KT338_INFO.code} · HK1 2026–2027 · rất sơ bộ, sẽ điều chỉnh thêm
        </p>
        <h1 className="text-3xl font-semibold text-ink">KT338 — Đầu tư quốc tế</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Trang riêng cho lớp KT338, tách khỏi mô hình 2 Mùa × 6 vòng của KT330H — học phần này chỉ
          có một buổi thực hành duy nhất, chơi game <b>Hộ Chiếu Thương Hiệu</b> (Brand Passport).
          Dữ liệu dưới đây chỉ gồm những gì đã xác nhận qua TKB cán bộ chính thức của Thầy Phan Anh
          Tú — các tuần khác chưa có thông tin.
        </p>
      </header>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-4">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Giảng viên</p>
          <p className="mt-1 text-sm font-medium text-ink">{KT338_INFO.gv}</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Trợ giảng</p>
          <p className="mt-1 text-sm font-medium text-ink">{KT338_INFO.ta}</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Lớp</p>
          <p className="mt-1 text-sm font-medium text-ink">
            {KT338_INFO.code} · Nhóm {KT338_INFO.nhom} · {KT338_INFO.students} SV
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Lịch học hằng tuần</p>
          <p className="mt-1 text-sm font-medium text-ink">
            {KT338_INFO.meetings.first.day} &amp; {KT338_INFO.meetings.second.day} ·{" "}
            {KT338_INFO.meetings.first.room}
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ink">Những mốc đã xác nhận</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {KT338_WEEKS.map((w) => (
            <article key={w.week} className="rounded-xl border border-border bg-card p-5 shadow-soft">
              <div className="flex items-center gap-2">
                <Badge variant={w.kind === "exam" ? "warn" : "default"}>Tuần {w.week}</Badge>
                <span className="text-xs text-muted-foreground">{w.date}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink">{w.content}</p>
              {w.room ? (
                <p className="mt-1 text-xs text-muted-foreground">Phòng: {w.room}</p>
              ) : null}
            </article>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Chưa có thông tin cho các tuần còn lại (nội dung lý thuyết, CLO, rubric riêng cho KT338) —
          sẽ cập nhật khi Hương gửi thêm số tuần cụ thể từ TKB.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ink">Game: Hộ Chiếu Thương Hiệu</h2>
        <div className="rounded-xl border border-border bg-card p-5">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <i>Brand Passport: From Vietnam to the World</i> — mô phỏng chiến lược quốc tế hoá 6 quý:
            đưa một thương hiệu Việt từ thị trấn Vàm Thịnh ra sáu thị trường giả tưởng, ra quyết định
            trong sương mù thông tin, cân bằng lợi nhuận – uy tín – năng lực – thích ứng – bền vững.
            Game gốc của hệ sinh thái BizOn, tách biệt với BizOn Bật Nghiệp dùng cho KT330H.
          </p>
          <a
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            href={LINKS.brandPassport}
            target="_blank"
            rel="noreferrer"
          >
            Vào game Hộ Chiếu Thương Hiệu →
          </a>
        </div>
      </section>
    </div>
  );
}
