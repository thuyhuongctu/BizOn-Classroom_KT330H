import { useState, type FormEvent, type ReactNode } from "react";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gateEnabled, hasUnlockedThisSession, tryUnlock } from "@/lib/classroom-gate";

export function ClassroomGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(() => hasUnlockedThisSession());
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(false);

  if (!gateEnabled() || unlocked) return <>{children}</>;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setChecking(true);
    setError(false);
    const ok = await tryUnlock(password);
    setChecking(false);
    if (ok) setUnlocked(true);
    else setError(true);
  }

  return (
    <div className="grid min-h-dvh place-items-center bg-background px-4 text-foreground">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-xs space-y-4 rounded-xl border border-border bg-card p-6 shadow-soft"
      >
        <div className="flex items-center gap-2 text-ink">
          <Lock className="size-5" strokeWidth={1.75} />
          <h1 className="font-display text-lg font-semibold">BizOn Classroom</h1>
        </div>
        <p className="text-sm text-muted-foreground">
          Công cụ dành cho giảng viên — nhập mật khẩu để tiếp tục.
        </p>
        <input
          type="password"
          autoFocus
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(false);
          }}
          placeholder="Mật khẩu"
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
        />
        {error ? <p className="text-sm text-destructive">Sai mật khẩu, thử lại.</p> : null}
        <Button type="submit" disabled={checking || password.length === 0} className="w-full">
          {checking ? "Đang kiểm tra…" : "Vào"}
        </Button>
      </form>
    </div>
  );
}
