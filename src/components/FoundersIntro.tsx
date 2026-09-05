import { assetUrl } from "@/lib/asset-url";
import { useT } from "@/lib/i18n";

const FOUNDERS = [
  {
    name: "Lumina",
    role: "Cố vấn AI học tập",
    roleEn: "AI learning advisor",
    art: "/characters/lumina-ao-dai-wave.webp",
    quote: "Je m'appelle Hương — hỏi, chất vấn, phản tư. Engine vẫn do đội quyết.",
    quoteEn: "Je m'appelle Hương — I ask, I question, I reflect. The engine's decisions stay yours.",
    alt: "Lumina, nhân vật đất sét áo dài trắng, vẫy chào",
    altEn: "Lumina, a clay-render character in a white áo dài, waving",
  },
  {
    name: "PGS.TS. Phan Anh Tú",
    role: "Đồng sáng lập · Cố vấn học thuật",
    roleEn: "Co-founder · Academic advisor",
    art: "/characters/anh-tu-stand.webp",
    quote: "Biến tri thức thành quyết định. Biến ý tưởng thành doanh nghiệp.",
    quoteEn: "Turn knowledge into decisions. Turn ideas into a business.",
    alt: "Thầy Phan Anh Tú đứng riêng, áo dài kem, không đeo dây chuyền",
    altEn: "Prof. Phan Anh Tú standing alone in a cream áo dài, no necklace",
  },
] as const;

export function FoundersIntro() {
  const t = useT();
  return (
    <section className="space-y-4">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-terracotta">
          {t("Giới thiệu mở lớp", "Class-opening introduction")}
        </p>
        <h2 className="mt-1 text-xl font-semibold text-ink">
          {t("Cố vấn học thuật và cố vấn AI", "Academic advisor and AI advisor")}
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {FOUNDERS.map((p) => (
          <article key={p.name} className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
            <div className="flex h-64 items-end justify-center bg-sunken px-4 pt-6 sm:h-72">
              <img
                src={assetUrl(p.art)}
                alt={t(p.alt, p.altEn)}
                className="h-full w-auto max-w-[11rem] object-contain object-bottom"
              />
            </div>
            <div className="space-y-1.5 p-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-terracotta">
                {t(p.role, p.roleEn)}
              </p>
              <h3 className="text-base font-semibold leading-snug text-ink">{p.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">«{t(p.quote, p.quoteEn)}»</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
