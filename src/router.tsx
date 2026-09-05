import { createHashHistory, createRouter } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

// Static-SPA export (see src/entry-static.tsx) uses hash-based routing:
// deployed at a static-host subpath (GitHub Pages) with no server able to
// rewrite a deep link like /BizOn/kt330h/lich back to index.html, every
// "route" instead lives after a "#" on the one real file
// (/BizOn/kt330h/#/lich) so direct links and refreshes always resolve.
const isStaticSpa = import.meta.env.VITE_STATIC_SPA === "true";

export function getRouter() {
  return createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    ...(isStaticSpa
      ? { history: createHashHistory() }
      : { basepath: import.meta.env.VITE_BASE_PATH || undefined }),
  });
}
