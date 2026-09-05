/**
 * Resolve a root-absolute public asset path (e.g. "/characters/foo.webp")
 * against Vite's configured `base` (import.meta.env.BASE_URL).
 *
 * Vite only base-prefixes URLs it processes itself (index.html tags,
 * imported assets, CSS url()) — a literal string like `src="/characters/x"`
 * in JSX is left untouched, which breaks when the app is deployed under a
 * subpath (e.g. GitHub Pages at /BizOn/kt330h/) instead of domain root.
 */
export function assetUrl(path: string): string {
  if (!path.startsWith("/")) return path;
  const base = import.meta.env.BASE_URL || "/";
  return base.replace(/\/$/, "") + path;
}
