import { Play } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { assetUrl } from "@/lib/asset-url";
import { useT } from "@/lib/i18n";
import { FEATURED_ID, getTrack } from "@/lib/music";
import { useMusicStore } from "@/lib/music-store";

export function LuminaStage() {
  const play = useMusicStore((s) => s.play);
  const featured = getTrack(FEATURED_ID);
  const t = useT();

  return (
    <section className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
      <div className="relative aspect-[16/10] bg-sunken sm:aspect-[16/8]">
        <img
          src={assetUrl("/characters/lumina-workshop.jpg")}
          alt={t(
            "Lumina, cố vấn AI đất sét 3D của BizOn Bật Nghiệp, trong xưởng bên sông",
            "Lumina, BizOn Bật Nghiệp's 3D clay-render AI advisor, in a riverside workshop",
          )}
          className="absolute inset-0 h-full w-full object-cover object-[50%_22%] outline outline-1 -outline-offset-1 outline-black/10"
        />
        <video
          className="absolute inset-0 h-full w-full object-cover object-[50%_22%]"
          autoPlay
          muted
          loop
          playsInline
          poster={assetUrl("/characters/lumina-workshop.jpg")}
          aria-hidden
        >
          <source src={assetUrl("/video/lumina-loop.mp4")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        <p className="absolute bottom-3 left-4 right-4 text-xs text-primary-foreground">
          {t("Tạo hình Lumina — cố vấn AI của BizOn Bật Nghiệp", "Lumina's character art — BizOn Bật Nghiệp's AI advisor")}
        </p>
      </div>
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-6">
        <div className="max-w-xl space-y-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-terracotta">
            {t("Kho nhạc · tuyển tập Bật Nghiệp", "Soundtrack · Bật Nghiệp collection")}
          </p>
          <h2 className="font-display text-2xl font-semibold leading-tight text-ink">
            «{featured.title}» · {featured.version}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{featured.use}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <Button type="button" onClick={() => play(FEATURED_ID)}>
            <Play className="translate-x-px" />
            {t("Phát anthem mở lớp", "Play the opening anthem")}
          </Button>
          <Button asChild variant="outline">
            <Link to="/giai-dieu">{t("Xem tuyển tập", "View collection")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
