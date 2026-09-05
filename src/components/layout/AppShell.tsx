import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookOpen,
  CheckSquare,
  ClipboardList,
  Flag,
  LayoutDashboard,
  Menu,
  MessageSquareText,
  Music2,
  Timer,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { PlayerDock } from "@/components/music/PlayerDock";
import { CharacterPair } from "@/components/CharacterPair";
import { CLASSES } from "@/lib/plan-data";
import { usePlanStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Tổng quan", icon: LayoutDashboard },
  { to: "/lich", label: "12 tuần", icon: BookOpen },
  { to: "/giai-dieu", label: "Giai điệu", icon: Music2 },
  { to: "/doi", label: "Lớp & đội", icon: Users },
  { to: "/dieu-hanh", label: "Điều hành", icon: Timer },
  { to: "/ho-so", label: "Phiếu & debrief", icon: ClipboardList },
  { to: "/phan-hoi", label: "Phản hồi", icon: MessageSquareText },
  { to: "/danh-gia", label: "Đánh giá", icon: Flag },
  { to: "/checklist", label: "Checklist", icon: CheckSquare },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const classKey = usePlanStore((s) => s.classKey);
  const setClass = usePlanStore((s) => s.setClass);
  const [open, setOpen] = useState(false);
  const klass = CLASSES[classKey];

  useEffect(() => {
    void usePlanStore.persist.rehydrate();
  }, []);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[16.5rem] flex-col border-r border-border bg-card md:flex">
        <div className="px-5 pb-4 pt-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            KT330H · HK1 2026–2027
          </p>
          <h1 className="mt-1 font-display text-lg font-semibold leading-tight text-ink">
            BizOn Classroom
          </h1>
          <p className="mt-1 text-xs text-muted-foreground">Kế hoạch triển khai · HK1 07/9–20/12</p>
        </div>
        <div className="px-5 pb-3">
          <CharacterPair />
        </div>
        <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3">
          {NAV.map((item) => {
            const active = pathname === item.to;
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/80 hover:bg-accent",
                )}
              >
                <Icon className="size-4 shrink-0" strokeWidth={1.75} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-border p-4">
          <p className="mb-2 text-[11px] uppercase tracking-wider text-muted-foreground">Lớp đang xem</p>
          <div className="grid grid-cols-2 gap-1 rounded-lg bg-muted p-1">
            {(["F1", "F2"] as const).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setClass(k)}
                className={cn(
                  "rounded-md px-2 py-1.5 text-xs font-medium",
                  classKey === k ? "bg-card text-ink shadow-soft" : "text-muted-foreground",
                )}
              >
                {CLASSES[k].code}
              </button>
            ))}
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
            {klass.students} SV · {klass.teams} đội · {klass.classId}
          </p>
        </div>
      </aside>

      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-card/90 px-4 py-3 backdrop-blur md:hidden">
        <div>
          <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">KT330H</p>
          <p className="text-sm font-semibold">BizOn Classroom</p>
        </div>
        <Button variant="outline" size="icon" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </Button>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 bg-ink/40 md:hidden" onClick={() => setOpen(false)}>
          <div
            className="absolute inset-x-0 top-0 max-h-dvh overflow-y-auto border-b border-border bg-card p-4 pt-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                KT330H · HK1 2026–2027
              </p>
              <h2 className="mt-1 font-display text-lg font-semibold text-ink">BizOn Classroom</h2>
              <p className="mt-1 text-xs text-muted-foreground">Kế hoạch triển khai · HK1 07/9–20/12</p>
            </div>
            <CharacterPair className="mb-4" height="h-28" />
            <div className="mb-3 grid grid-cols-2 gap-1 rounded-lg bg-muted p-1">
              {(["F1", "F2"] as const).map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setClass(k)}
                  className={cn(
                    "rounded-md px-2 py-2 text-xs font-medium",
                    classKey === k ? "bg-card shadow-soft" : "text-muted-foreground",
                  )}
                >
                  {CLASSES[k].code}
                </button>
              ))}
            </div>
            <nav className="grid gap-1">
              {NAV.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-3 py-2.5 text-sm",
                      active ? "bg-primary text-primary-foreground" : "hover:bg-accent",
                    )}
                  >
                    <Icon className="size-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      ) : null}

      <div className="md:pl-[16.5rem]">
        <main className="mx-auto w-full max-w-5xl px-4 py-8 pb-32 md:px-8 md:py-10 md:pb-32">
          {children}
        </main>
        <PlayerDock />
      </div>
    </div>
  );
}
