import { cn } from "@/lib/utils";

export function CharacterPair({
  className,
  height = "h-24",
}: {
  className?: string;
  height?: string;
}) {
  return (
    <div className={cn("grid grid-cols-2 gap-3", className)}>
      <div className="flex items-end justify-center rounded-lg bg-sunken px-1 pt-2">
        <img
          src="/characters/lumina-ao-dai-wave.webp"
          alt="Lumina"
          className={cn("w-full object-contain object-bottom", height)}
        />
      </div>
      <div className="flex items-end justify-center rounded-lg bg-sunken px-1 pt-2">
        <img
          src="/characters/anh-tu-stand.webp"
          alt="PGS.TS. Phan Anh Tú"
          className={cn("w-full object-contain object-bottom", height)}
        />
      </div>
    </div>
  );
}
