import type { ReactNode } from "react";
import { assetUrl } from "@/lib/asset-url";

/** Full-bleed dark hero band, styled after Google DeepMind's homepage:
 * minimal, dramatic, a slow gradient drift — distinct from the lighter
 * card-based design used through the rest of the app. */
export function DeepMindHero({
  eyebrow,
  title,
  lede,
  actions,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  actions?: ReactNode;
}) {
  return (
    <section
      data-tour="hero"
      className="dm-hero -mx-4 rounded-none px-4 py-12 sm:-mx-8 sm:rounded-3xl sm:px-10 sm:py-16 md:mx-0"
    >
      <div className="dm-hero__bg" aria-hidden="true" />
      <img className="dm-hero__map" src={assetUrl("/illustrations/arena-vietnam-map-v2.webp")} alt="" aria-hidden="true" />
      <div className="relative max-w-2xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/65">{eyebrow}</p>
        <h1 className="mt-3 text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-[2.75rem]">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/76">{lede}</p>
        {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}
