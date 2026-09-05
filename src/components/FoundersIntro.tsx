import { assetUrl } from "@/lib/asset-url";

const FOUNDERS = [
  {
    name: "Lumina",
    role: "Cố vấn AI học tập",
    art: "/characters/lumina-ao-dai-wave.webp",
    quote: "Je m'appelle Hương — hỏi, chất vấn, phản tư. Engine vẫn do đội quyết.",
    alt: "Lumina, nhân vật đất sét áo dài trắng, vẫy chào",
  },
  {
    name: "PGS.TS. Phan Anh Tú",
    role: "Đồng sáng lập · Cố vấn học thuật",
    art: "/characters/anh-tu-stand.webp",
    quote: "Biến tri thức thành quyết định. Biến ý tưởng thành doanh nghiệp.",
    alt: "Thầy Phan Anh Tú đứng riêng, áo dài kem, không đeo dây chuyền",
  },
] as const;

export function FoundersIntro() {
  return (
    <section className="space-y-4">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-terracotta">
          Giới thiệu mở lớp
        </p>
        <h2 className="mt-1 text-xl font-semibold text-ink">Cố vấn học thuật và cố vấn AI</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {FOUNDERS.map((p) => (
          <article key={p.name} className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
            <div className="flex h-64 items-end justify-center bg-sunken px-4 pt-6 sm:h-72">
              <img
                src={assetUrl(p.art)}
                alt={p.alt}
                className="h-full w-auto max-w-[11rem] object-contain object-bottom"
              />
            </div>
            <div className="space-y-1.5 p-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-terracotta">{p.role}</p>
              <h3 className="text-base font-semibold leading-snug text-ink">{p.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">«{p.quote}»</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
