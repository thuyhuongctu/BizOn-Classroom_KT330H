import { Play } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { assetUrl } from "@/lib/asset-url";
import { FEATURED_ID, getTrack } from "@/lib/music";
import { useMusicStore } from "@/lib/music-store";

export function LuminaStage() {
  const play = useMusicStore((s) => s.play);
  const featured = getTrack(FEATURED_ID);

  return (
    <section className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
      <div className="relative aspect-[16/10] bg-sunken sm:aspect-[16/8]">
        <img
          src={assetUrl("/characters/lumina-workshop.jpg")}
          alt="Lumina, cố vấn AI đất sét 3D của BizOn Bật Nghiệp, trong xưởng bên sông"
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
          Tạo hình Lumina — cố vấn AI của BizOn Bật Nghiệp
        </p>
      </div>
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-6">
        <div className="max-w-xl space-y-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-terracotta">
            Kho nhạc · tuyển tập Bật Nghiệp
          </p>
          <h2 className="font-display text-2xl font-semibold leading-tight text-ink">
            «{featured.title}» · {featured.version}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{featured.use}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <Button type="button" onClick={() => play(FEATURED_ID)}>
            <Play className="translate-x-px" />
            Phát anthem mở lớp
          </Button>
          <Button asChild variant="outline">
            <Link to="/giai-dieu">Xem tuyển tập</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
