import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Fancy scroll — phỏng theo FancyScrollView (github.com/setchi/FancyScrollView):
 * mỗi thẻ nhận một khoảng cách chuẩn hoá tới tâm khay (0 giữa, 1 ở rìa) rồi
 * tự co/mờ theo giá trị đó khi cuộn ngang, có snap. Bản gốc viết cho Unity;
 * ở đây đo bằng getBoundingClientRect() mỗi lần cuộn thay vì có sẵn hiệu ứng. */
export function FancyTrack({
  children,
  itemWidthPx,
  className,
}: {
  children: ReactNode;
  itemWidthPx: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = ref.current;
    if (!track) return;

    function update() {
      const rect = track!.getBoundingClientRect();
      if (!rect.width) return;
      const centerX = rect.left + rect.width / 2;
      Array.from(track!.children).forEach((child) => {
        const el = child as HTMLElement;
        const r = el.getBoundingClientRect();
        let dist = (r.left + r.width / 2 - centerX) / (rect.width / 2);
        dist = Math.max(-1, Math.min(1, dist));
        const a = Math.abs(dist);
        el.style.transform = `scale(${(1 - a * 0.22).toFixed(3)})`;
        el.style.opacity = `${(1 - a * 0.55).toFixed(3)}`;
      });
    }

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "flex gap-4 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className,
      )}
      style={{ scrollSnapType: "x mandatory", paddingInline: `calc(50% - ${itemWidthPx / 2}px)` }}
    >
      {children}
    </div>
  );
}

/** Thẻ con dùng trong FancyTrack — cố định bề rộng khớp itemWidthPx của khay. */
export function FancyItem({
  children,
  widthPx,
  className,
}: {
  children: ReactNode;
  widthPx: number;
  className?: string;
}) {
  return (
    <div
      className={cn("flex-none transition-[transform,opacity] duration-150 ease-out", className)}
      style={{ width: widthPx, scrollSnapAlign: "center" }}
    >
      {children}
    </div>
  );
}
