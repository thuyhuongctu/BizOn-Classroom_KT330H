import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Pause, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { assetUrl } from "@/lib/asset-url";
import { CHORUS, FEATURED_ID, TRACKS, getTrack } from "@/lib/music";
import { useMusicStore } from "@/lib/music-store";
import { LINKS } from "@/lib/plan-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/giai-dieu")({ component: GiaiDieu });

function GiaiDieu() {
  const trackId = useMusicStore((s) => s.trackId);
  const playing = useMusicStore((s) => s.playing);
  const toggle = useMusicStore((s) => s.toggle);
  const featured = getTrack(FEATURED_ID);

  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Tạo hình Lumina · Kho âm nhạc BizOn
        </p>
        <h1 className="max-w-3xl font-display text-[2.15rem] font-semibold leading-[1.15] text-ink sm:text-5xl">
          Bài mở lớp là «Bật Nghiệp» bản có lời — đúng ca khúc chủ đề game.
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground">
          Tạo hình lấy từ nhân vật đất sét 3D của Bật Nghiệp. Bài hát lấy từ tuyển tập cùng tên trong kho
          nhạc: gắn sao, 3:23, V-pop 112 BPM, dùng làm nhạc nền mở đầu trong game.
        </p>
      </header>

      <section className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
        <div className="grid md:grid-cols-2">
          <div className="bg-sunken">
            <video
              className="aspect-video w-full object-cover object-[50%_28%]"
              controls
              playsInline
              poster={assetUrl("/characters/lumina-workshop.jpg")}
              aria-label="MV Lumina chào lớp với anthem Bật Nghiệp"
            >
              <source src={assetUrl("/video/lumina-bat-nghiep.mp4")} type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-col justify-between gap-5 p-5 sm:p-6">
            <div className="space-y-3">
              <Badge variant="default">Chọn cho KT330H</Badge>
              <h2 className="text-xl font-semibold text-ink">
                {featured.title} · {featured.version}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{featured.use}</p>
              <p className="text-xs text-muted-foreground">
                Clip 20 giây ghép hai cảnh Lumina với đoạn điệp khúc. Bản đầy đủ 3:23 phát ở thanh nhạc dưới
                cùng.
              </p>
              <blockquote className="space-y-1 border-l-2 border-terracotta/50 pl-4 text-sm italic text-ink">
                {CHORUS.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </blockquote>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button type="button" onClick={() => toggle(FEATURED_ID)}>
                {playing && trackId === FEATURED_ID ? <Pause /> : <Play className="translate-x-px" />}
                {playing && trackId === FEATURED_ID ? "Tạm dừng" : "Phát bản đầy đủ"}
              </Button>
              <Button asChild variant="outline">
                <a href={LINKS.music} target="_blank" rel="noreferrer">
                  Mở kho nhạc gốc <ExternalLink />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-ink">Tuyển tập Bật Nghiệp — khi nào phát bài nào</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Cùng một tạo hình Lumina, năm bản từ kho nhạc. Mặc định là bản có lời; các bản còn lại đổi
            theo nhịp buổi, không át thảo luận.
          </p>
        </div>
        <ul className="grid gap-3">
          {TRACKS.map((t) => {
            const active = trackId === t.id;
            const isOn = active && playing;
            return (
              <li key={t.id}>
                <button
                  type="button"
                  onClick={() => toggle(t.id)}
                  className={cn(
                    "flex w-full items-center gap-4 rounded-xl border bg-card p-3 text-left shadow-soft transition-colors sm:p-4",
                    active ? "border-primary bg-accent/60" : "border-border hover:bg-accent/40",
                  )}
                >
                  <img
                    src={assetUrl(t.art)}
                    alt=""
                    className="size-16 shrink-0 rounded-lg object-contain object-bottom outline outline-1 -outline-offset-1 outline-black/10 sm:size-20"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="font-medium text-ink">{t.title}</span>
                      <span className="text-sm text-muted-foreground">{t.version}</span>
                      {t.featured ? <Badge variant="default">Mở lớp</Badge> : null}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{t.use}</span>
                    <span className="mt-1 block text-[11px] tabular-nums text-faint">{t.durationLabel}</span>
                  </span>
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {isOn ? <Pause className="size-4" /> : <Play className="size-4 translate-x-px" />}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
          <img
            src={assetUrl("/characters/lumina-mekong.jpg")}
            alt="Lumina vẫy chào trên bến sông đất sét"
            className="aspect-video w-full object-cover outline outline-1 -outline-offset-1 outline-black/10"
          />
          <figcaption className="p-4 text-sm text-muted-foreground">
            Cùng tạo hình áo dài trắng, hoa sen cài tóc — dùng khi chào lớp.
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
          <img
            src={assetUrl("/characters/giai-dieu-bizon.webp")}
            alt="Bìa tuyển tập Giai điệu BizOn"
            className="aspect-video w-full object-cover object-top outline outline-1 -outline-offset-1 outline-black/10"
          />
          <figcaption className="p-4 text-sm text-muted-foreground">
            Bìa «Giai điệu BizOn» từ kho nhạc — Lumina giữa vườn hoa đất sét.
          </figcaption>
        </figure>
      </section>
    </div>
  );
}
