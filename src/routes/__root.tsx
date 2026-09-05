import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { AppShell } from "@/components/layout/AppShell";
import appCss from "../styles.css?url";

const APP_NAME = "BizOn Classroom — KT330H";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Kế hoạch triển khai BizOn Bật Nghiệp 2026 cho học phần KT330H Khởi sự doanh nghiệp, NH 2026–2027 HK1.",
      },
      { name: "theme-color", content: "#165a4c" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
      },
    ],
  }),
  component: () => {
    const body = (
      <>
        <PreviewHostBridge />
        <AuthProvider>
          <AppShell>
            <Outlet />
          </AppShell>
          <Toaster position="bottom-right" duration={2500} closeButton />
        </AuthProvider>
        <Scripts />
      </>
    );

    // Static-SPA export (see src/entry-static.tsx): index.html already
    // supplies <html>/<head>/<body>, so mount straight into #root instead of
    // re-emitting a nested document shell.
    if (import.meta.env.VITE_STATIC_SPA === "true") return body;

    return (
      <html lang="vi" className="antialiased" suppressHydrationWarning>
        <head>
          <HeadContent />
        </head>
        <body>{body}</body>
      </html>
    );
  },
});
