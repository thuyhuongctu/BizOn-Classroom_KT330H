import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { assetUrl } from "@/lib/asset-url";
import { getTrack } from "@/lib/music";
import { useMusicStore } from "@/lib/music-store";
import { formatClock } from "@/lib/utils";

export function PlayerDock() {
  const trackId = useMusicStore((s) => s.trackId);
  const playing = useMusicStore((s) => s.playing);
  const currentTime = useMusicStore((s) => s.currentTime);
  const duration = useMusicStore((s) => s.duration);
  const volume = useMusicStore((s) => s.volume);
  const play = useMusicStore((s) => s.play);
  const pause = useMusicStore((s) => s.pause);
  const next = useMusicStore((s) => s.next);
  const prev = useMusicStore((s) => s.prev);
  const seek = useMusicStore((s) => s.seek);
  const setVolume = useMusicStore((s) => s.setVolume);
  const track = getTrack(trackId);
  const total = duration || track.duration;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 backdrop-blur md:left-[16.5rem]">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-3 py-2.5 sm:px-5">
        <img
          src={assetUrl(track.art)}
          alt=""
          className="size-11 shrink-0 rounded-lg object-contain object-bottom outline outline-1 -outline-offset-1 outline-black/10 sm:size-12"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            <p className="truncate text-sm font-medium text-ink">{track.title}</p>
            <p className="hidden truncate text-[11px] text-muted-foreground sm:block">{track.version}</p>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <input
              type="range"
              min={0}
              max={total || 1}
              step={0.25}
              value={Math.min(currentTime, total || 0)}
              aria-label="Tua bài hát"
              className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-sunken"
              onChange={(e) => seek(Number(e.target.value))}
            />
            <span className="hidden w-16 shrink-0 text-right text-[11px] tabular-nums text-muted-foreground sm:inline">
              {formatClock(currentTime)}/{formatClock(total)}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            className="hidden size-10 items-center justify-center rounded-md text-foreground/80 hover:bg-accent sm:inline-flex"
            onClick={prev}
            aria-label="Bài trước"
          >
            <SkipBack className="size-4" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-ink"
            onClick={() => (playing ? pause() : play())}
            aria-label={playing ? "Tạm dừng" : "Phát"}
          >
            {playing ? (
              <Pause className="size-4" strokeWidth={1.75} />
            ) : (
              <Play className="size-4 translate-x-px" strokeWidth={1.75} />
            )}
          </button>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md text-foreground/80 hover:bg-accent"
            onClick={next}
            aria-label="Bài tiếp"
          >
            <SkipForward className="size-4" strokeWidth={1.75} />
          </button>
          <label className="ml-1 hidden items-center gap-1.5 sm:flex">
            <Volume2 className="size-4 text-muted-foreground" strokeWidth={1.75} />
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              aria-label="Âm lượng"
              className="h-1.5 w-16 cursor-pointer appearance-none rounded-full bg-sunken"
              onChange={(e) => setVolume(Number(e.target.value))}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
