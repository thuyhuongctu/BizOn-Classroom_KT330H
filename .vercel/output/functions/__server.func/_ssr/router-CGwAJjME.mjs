import { i as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { E as formatClock, T as cn, d as F2_TEAMS, r as CLASSES, u as F1_TEAMS } from "./plan-data-Ce0Wq5F4.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createFileRoute, b as useRouter, d as HeadContent, f as useRouterState, g as lazyRouteComponent, h as Outlet, m as createRouter, u as Scripts, v as createRootRoute, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as LayoutDashboard, a as Timer, b as ClipboardList, c as SkipBack, d as Play, f as Pause, g as Menu, h as MessageSquareText, i as TriangleAlert, n as Volume2, o as SquareCheckBig, p as Music2, r as Users, s as SkipForward, t as X, v as Flag, x as BookOpen } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CGwAJjME.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,opacity,transform] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-ink",
			secondary: "bg-secondary text-secondary-foreground hover:bg-sunken",
			outline: "border border-border bg-card hover:bg-accent",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			terracotta: "bg-terracotta text-primary-foreground hover:opacity-90"
		},
		size: {
			default: "h-10 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-11 px-5",
			icon: "size-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
/** Tuyển tập Bật Nghiệp lấy từ kho nhạc BizOn — bài gắn sao là mặc định. */
var TRACKS = [
	{
		id: "bat-nghiep-co-loi",
		title: "Bật Nghiệp",
		version: "Bản thu có lời",
		src: "/audio/bat-nghiep-co-loi.mp3",
		duration: 203,
		durationLabel: "3:23",
		use: "Mở đầu buổi. Ca khúc chủ đề game, gắn sao trong kho nhạc, nhạc nền chào lớp.",
		art: "/characters/lumina-ao-dai.webp",
		featured: true,
		album: "Bật Nghiệp"
	},
	{
		id: "bat-nghiep",
		title: "Bật Nghiệp",
		version: "Instrumental",
		src: "/audio/bat-nghiep.mp3",
		duration: 80,
		durationLabel: "1:20",
		use: "Xen giữa các vòng — bản không lời, không át thảo luận đội.",
		art: "/characters/lumina-ao-dai-present.webp",
		album: "Bật Nghiệp"
	},
	{
		id: "huong-on-return",
		title: "Hương on Return",
		version: "Bài hát chính của hệ sinh thái",
		src: "/audio/huong-on-return.mp3",
		duration: 150,
		durationLabel: "2:30",
		use: "Nhạc nền khi đội phân tích và chạy Nếu–Thì. Đúng bản game đang phát.",
		art: "/characters/lumina-nghe-nhac.webp",
		album: "Hương on Return"
	},
	{
		id: "mekong-sunfire-2",
		title: "Bật Nghiệp",
		version: "Remix Mekong Sunfire 2",
		src: "/audio/bat-nghiep-mekong-sunfire-2.mp3",
		duration: 203,
		durationLabel: "3:23",
		use: "Cao trào pitch / tổng kết. Kho nhạc ghi «đề xuất nghe».",
		art: "/characters/lumina-ao-dai-cheer.webp",
		album: "Bật Nghiệp"
	},
	{
		id: "bizon-theme",
		title: "BizOn Theme",
		version: "Instrumental",
		src: "/audio/bizon-theme.mp3",
		duration: 181,
		durationLabel: "3:01",
		use: "Nền chung khi phát phiếu, debrief, checklist — không lời.",
		art: "/characters/lumina-dj.webp",
		album: "BizOn Theme"
	}
];
var FEATURED_ID = "bat-nghiep-co-loi";
function getTrack(id) {
	return TRACKS.find((t) => t.id === id) ?? TRACKS[0];
}
var CHORUS = [
	"Bật lên như đất sét gặp bàn tay,",
	"Sáu vòng thị trường khốc liệt, cờ ta cắm mỗi ngày.",
	"Từ Miền Tây ra tới Thủ đô,",
	"Hóa Rồng cùng đất nước — giấc mơ không còn mơ hồ."
];
function audioEl() {
	if (typeof window === "undefined") return null;
	const w = window;
	if (!w.__bizonAudio) {
		const el = new Audio();
		el.preload = "metadata";
		w.__bizonAudio = el;
	}
	return w.__bizonAudio;
}
var bound = false;
function bindAudio(get, set) {
	if (bound) return;
	const el = audioEl();
	if (!el) return;
	bound = true;
	el.addEventListener("timeupdate", () => {
		set({
			currentTime: el.currentTime,
			duration: el.duration || get().duration
		});
	});
	el.addEventListener("loadedmetadata", () => {
		set({ duration: el.duration || getTrack(get().trackId).duration });
	});
	el.addEventListener("ended", () => {
		get().next();
	});
}
function start(id, volume, set) {
	const track = getTrack(id);
	const el = audioEl();
	set({
		trackId: track.id,
		playing: true,
		currentTime: 0
	});
	if (!el) return;
	const abs = new URL(track.src, window.location.origin).href;
	if (el.src !== abs) el.src = track.src;
	el.volume = volume;
	el.play().catch(() => set({ playing: false }));
}
var useMusicStore = create((set, get) => ({
	trackId: FEATURED_ID,
	playing: false,
	currentTime: 0,
	duration: 0,
	volume: .85,
	play: (id) => {
		bindAudio(get, set);
		const nextId = id ?? get().trackId;
		const el = audioEl();
		if (nextId === get().trackId && el && el.src && !el.ended) {
			el.volume = get().volume;
			set({ playing: true });
			el.play().catch(() => set({ playing: false }));
			return;
		}
		start(nextId, get().volume, set);
	},
	pause: () => {
		audioEl()?.pause();
		set({ playing: false });
	},
	toggle: (id) => {
		const { trackId, playing, play, pause } = get();
		if (id && id !== trackId) {
			play(id);
			return;
		}
		if (playing) pause();
		else play(id);
	},
	setTrack: (id) => get().play(id),
	seek: (t) => {
		const el = audioEl();
		if (el) el.currentTime = t;
		set({ currentTime: t });
	},
	setVolume: (volume) => {
		const v = Math.min(1, Math.max(0, volume));
		const el = audioEl();
		if (el) el.volume = v;
		set({ volume: v });
	},
	next: () => {
		const i = TRACKS.findIndex((t) => t.id === get().trackId);
		get().play(TRACKS[(i + 1) % TRACKS.length].id);
	},
	prev: () => {
		const i = TRACKS.findIndex((t) => t.id === get().trackId);
		get().play(TRACKS[(i - 1 + TRACKS.length) % TRACKS.length].id);
	}
}));
function PlayerDock() {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 backdrop-blur md:left-[16.5rem]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-5xl items-center gap-3 px-3 py-2.5 sm:px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: track.art,
					alt: "",
					className: "size-11 shrink-0 rounded-lg object-contain object-bottom outline outline-1 -outline-offset-1 outline-black/10 sm:size-12"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-medium text-ink",
							children: track.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hidden truncate text-[11px] text-muted-foreground sm:block",
							children: track.version
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 0,
							max: total || 1,
							step: .25,
							value: Math.min(currentTime, total || 0),
							"aria-label": "Tua bài hát",
							className: "h-1.5 w-full cursor-pointer appearance-none rounded-full bg-sunken",
							onChange: (e) => seek(Number(e.target.value))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden w-16 shrink-0 text-right text-[11px] tabular-nums text-muted-foreground sm:inline",
							children: [
								formatClock(currentTime),
								"/",
								formatClock(total)
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-0.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "hidden size-10 items-center justify-center rounded-md text-foreground/80 hover:bg-accent sm:inline-flex",
							onClick: prev,
							"aria-label": "Bài trước",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipBack, {
								className: "size-4",
								strokeWidth: 1.75
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-ink",
							onClick: () => playing ? pause() : play(),
							"aria-label": playing ? "Tạm dừng" : "Phát",
							children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {
								className: "size-4",
								strokeWidth: 1.75
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
								className: "size-4 translate-x-px",
								strokeWidth: 1.75
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-10 items-center justify-center rounded-md text-foreground/80 hover:bg-accent",
							onClick: next,
							"aria-label": "Bài tiếp",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipForward, {
								className: "size-4",
								strokeWidth: 1.75
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "ml-1 hidden items-center gap-1.5 sm:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {
								className: "size-4 text-muted-foreground",
								strokeWidth: 1.75
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: 0,
								max: 1,
								step: .01,
								value: volume,
								"aria-label": "Âm lượng",
								className: "h-1.5 w-16 cursor-pointer appearance-none rounded-full bg-sunken",
								onChange: (e) => setVolume(Number(e.target.value))
							})]
						})
					]
				})
			]
		})
	});
}
function CharacterPair({ className, height = "h-24" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("grid grid-cols-2 gap-3", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-end justify-center rounded-lg bg-sunken px-1 pt-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/characters/lumina-ao-dai-wave.webp",
				alt: "Lumina",
				className: cn("w-full object-contain object-bottom", height)
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-end justify-center rounded-lg bg-sunken px-1 pt-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/characters/anh-tu-stand.webp",
				alt: "PGS.TS. Phan Anh Tú",
				className: cn("w-full object-contain object-bottom", height)
			})
		})]
	});
}
var emptyTicket = () => ({
	goal: "",
	price: "",
	marketing: "",
	qty: "",
	staff: "",
	train: "",
	loan: "",
	rd: "",
	assumption: "",
	forecastShare: "",
	forecastProfit: "",
	forecastCash: "",
	risk: "",
	dissent: "",
	finalCall: "",
	actual: "",
	gap: "",
	cause: "",
	good: "",
	miss: "",
	next: "",
	lumina: ""
});
var emptyFeedback = () => ({
	strengths: "",
	improve: "",
	concepts: "",
	score: 0
});
function seedToTeams(seeds) {
	return seeds.map((s) => ({
		id: s.id,
		name: s.name,
		members: s.roles.map((role) => ({
			name: "",
			role
		}))
	}));
}
var usePlanStore = create()(persist((set, get) => ({
	classKey: "F1",
	gameSlot: "second",
	startingCapital: 25e7,
	teams: {
		F1: seedToTeams(F1_TEAMS),
		F2: seedToTeams(F2_TEAMS)
	},
	checks: {},
	tickets: {},
	feedbacks: {},
	disc: {},
	timerRunning: false,
	timerStep: 0,
	timerStartedAt: null,
	timerElapsed: 0,
	setClass: (classKey) => set({ classKey }),
	setGameSlot: (gameSlot) => set({ gameSlot }),
	setCapital: (startingCapital) => set({ startingCapital }),
	setMember: (classKey, teamId, index, name) => set((s) => ({ teams: {
		...s.teams,
		[classKey]: s.teams[classKey].map((t) => t.id !== teamId ? t : {
			...t,
			members: t.members.map((m, i) => i === index ? {
				...m,
				name
			} : m)
		})
	} })),
	setTeamName: (classKey, teamId, name) => set((s) => ({ teams: {
		...s.teams,
		[classKey]: s.teams[classKey].map((t) => t.id === teamId ? {
			...t,
			name
		} : t)
	} })),
	rotateRoles: (classKey) => set((s) => ({ teams: {
		...s.teams,
		[classKey]: s.teams[classKey].map((t) => ({
			...t,
			members: t.members.map((m, i, arr) => ({
				name: m.name,
				role: arr[(i + 1) % arr.length].role
			}))
		}))
	} })),
	resetTeams: (classKey) => set((s) => ({ teams: {
		...s.teams,
		[classKey]: seedToTeams(classKey === "F1" ? F1_TEAMS : F2_TEAMS)
	} })),
	toggleCheck: (id) => set((s) => ({ checks: {
		...s.checks,
		[id]: !s.checks[id]
	} })),
	setTicket: (key, patch) => set((s) => ({ tickets: {
		...s.tickets,
		[key]: {
			...s.tickets[key] ?? emptyTicket(),
			...patch
		}
	} })),
	resetTicket: (key) => set((s) => ({ tickets: {
		...s.tickets,
		[key]: emptyTicket()
	} })),
	setFeedback: (key, patch) => set((s) => ({ feedbacks: {
		...s.feedbacks,
		[key]: {
			...s.feedbacks[key] ?? emptyFeedback(),
			...patch
		}
	} })),
	setDisc: (key, n) => set((s) => ({ disc: {
		...s.disc,
		[key]: n
	} })),
	bumpDisc: (key, delta) => set((s) => ({ disc: {
		...s.disc,
		[key]: Math.max(0, (s.disc[key] ?? 0) + delta)
	} })),
	setTimerStep: (timerStep) => set({
		timerStep,
		timerElapsed: 0,
		timerStartedAt: get().timerRunning ? Date.now() : null
	}),
	startTimer: () => set({
		timerRunning: true,
		timerStartedAt: Date.now()
	}),
	pauseTimer: () => set((s) => ({
		timerRunning: false,
		timerElapsed: s.timerElapsed + (s.timerStartedAt ? Date.now() - s.timerStartedAt : 0),
		timerStartedAt: null
	})),
	resetTimer: () => set({
		timerRunning: false,
		timerStep: 0,
		timerStartedAt: null,
		timerElapsed: 0
	})
}), {
	name: "bizon-kt330h-plan",
	skipHydration: true,
	partialize: (s) => ({
		classKey: s.classKey,
		gameSlot: s.gameSlot,
		startingCapital: s.startingCapital,
		teams: s.teams,
		checks: s.checks,
		tickets: s.tickets,
		feedbacks: s.feedbacks,
		disc: s.disc
	})
}));
function getTicket(tickets, key) {
	return tickets[key] ?? emptyTicket();
}
function getFeedback(feedbacks, key) {
	return feedbacks[key] ?? emptyFeedback();
}
function discKey(classKey, teamId, index) {
	return `${classKey}:${teamId}:${index}`;
}
function feedbackKey(teamId, round) {
	return `${teamId}-R${round}`;
}
var NAV = [
	{
		to: "/",
		label: "Tổng quan",
		icon: LayoutDashboard
	},
	{
		to: "/lich",
		label: "12 tuần",
		icon: BookOpen
	},
	{
		to: "/giai-dieu",
		label: "Giai điệu",
		icon: Music2
	},
	{
		to: "/doi",
		label: "Lớp & đội",
		icon: Users
	},
	{
		to: "/dieu-hanh",
		label: "Điều hành",
		icon: Timer
	},
	{
		to: "/ho-so",
		label: "Phiếu & debrief",
		icon: ClipboardList
	},
	{
		to: "/phan-hoi",
		label: "Phản hồi",
		icon: MessageSquareText
	},
	{
		to: "/danh-gia",
		label: "Đánh giá",
		icon: Flag
	},
	{
		to: "/checklist",
		label: "Checklist",
		icon: SquareCheckBig
	}
];
function AppShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const classKey = usePlanStore((s) => s.classKey);
	const setClass = usePlanStore((s) => s.setClass);
	const [open, setOpen] = (0, import_react.useState)(false);
	const klass = CLASSES[classKey];
	(0, import_react.useEffect)(() => {
		usePlanStore.persist.rehydrate();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "fixed inset-y-0 left-0 z-30 hidden w-[16.5rem] flex-col border-r border-border bg-card md:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-5 pb-4 pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground",
								children: "KT330H · HK1 2026–2027"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-1 font-display text-lg font-semibold leading-tight text-ink",
								children: "BizOn Classroom"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Kế hoạch triển khai · HK1 07/9–20/12"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-5 pb-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CharacterPair, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-1 flex-col gap-0.5 overflow-y-auto px-3",
						children: NAV.map((item) => {
							const active = pathname === item.to;
							const Icon = item.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: cn("flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors", active ? "bg-primary text-primary-foreground" : "text-foreground/80 hover:bg-accent"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-4 shrink-0",
									strokeWidth: 1.75
								}), item.label]
							}, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-[11px] uppercase tracking-wider text-muted-foreground",
								children: "Lớp đang xem"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-1 rounded-lg bg-muted p-1",
								children: ["F1", "F2"].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setClass(k),
									className: cn("rounded-md px-2 py-1.5 text-xs font-medium", classKey === k ? "bg-card text-ink shadow-soft" : "text-muted-foreground"),
									children: CLASSES[k].code
								}, k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-[11px] leading-relaxed text-muted-foreground",
								children: [
									klass.students,
									" SV · ",
									klass.teams,
									" đội · ",
									klass.classId
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-20 flex items-center justify-between border-b border-border bg-card/90 px-4 py-3 backdrop-blur md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] uppercase tracking-[0.14em] text-muted-foreground",
					children: "KT330H"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "BizOn Classroom"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "icon",
					onClick: () => setOpen((v) => !v),
					"aria-label": "Menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-40 bg-ink/40 md:hidden",
				onClick: () => setOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 top-0 max-h-dvh overflow-y-auto border-b border-border bg-card p-4 pt-16",
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground",
									children: "KT330H · HK1 2026–2027"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-1 font-display text-lg font-semibold text-ink",
									children: "BizOn Classroom"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "Kế hoạch triển khai · HK1 07/9–20/12"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CharacterPair, {
							className: "mb-4",
							height: "h-28"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 grid grid-cols-2 gap-1 rounded-lg bg-muted p-1",
							children: ["F1", "F2"].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setClass(k),
								className: cn("rounded-md px-2 py-2 text-xs font-medium", classKey === k ? "bg-card shadow-soft" : "text-muted-foreground"),
								children: CLASSES[k].code
							}, k))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "grid gap-1",
							children: NAV.map((item) => {
								const Icon = item.icon;
								const active = pathname === item.to;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: item.to,
									onClick: () => setOpen(false),
									className: cn("flex items-center gap-2 rounded-md px-3 py-2.5 text-sm", active ? "bg-primary text-primary-foreground" : "hover:bg-accent"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), item.label]
								}, item.to);
							})
						})
					]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:pl-[16.5rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "mx-auto w-full max-w-5xl px-4 py-8 pb-32 md:px-8 md:py-10 md:pb-32",
					children
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerDock, {})]
			})
		]
	});
}
var styles_default = "/assets/styles-CaUh-4Vl.css";
var APP_NAME = "BizOn Classroom — KT330H";
var Route$9 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Kế hoạch triển khai BizOn Bật Nghiệp 2026 cho học phần KT330H Khởi sự doanh nghiệp, NH 2026–2027 HK1."
			},
			{
				name: "theme-color",
				content: "#165a4c"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "vi",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "bottom-right",
				duration: 2500,
				closeButton: true
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$8 = () => import("./routes-NzENpssC.mjs");
var Route$8 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./checklist-xLLzq55j.mjs");
var Route$7 = createFileRoute("/checklist")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./danh-gia-BTs4aHS_.mjs");
var Route$6 = createFileRoute("/danh-gia")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./dieu-hanh-Dr1osJDm.mjs");
var Route$5 = createFileRoute("/dieu-hanh")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./doi-D0KZQvi5.mjs");
var Route$4 = createFileRoute("/doi")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./giai-dieu-BpX4kUoF.mjs");
var Route$3 = createFileRoute("/giai-dieu")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./ho-so-DqAfr9n1.mjs");
var Route$2 = createFileRoute("/ho-so")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./lich-tKnYy6kQ.mjs");
var Route$1 = createFileRoute("/lich")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./phan-hoi-DLXuASas.mjs");
var Route = createFileRoute("/phan-hoi")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	ChecklistRoute: Route$7.update({
		id: "/checklist",
		path: "/checklist",
		getParentRoute: () => Route$9
	}),
	DanhGiaRoute: Route$6.update({
		id: "/danh-gia",
		path: "/danh-gia",
		getParentRoute: () => Route$9
	}),
	DieuHanhRoute: Route$5.update({
		id: "/dieu-hanh",
		path: "/dieu-hanh",
		getParentRoute: () => Route$9
	}),
	DoiRoute: Route$4.update({
		id: "/doi",
		path: "/doi",
		getParentRoute: () => Route$9
	}),
	GiaiDieuRoute: Route$3.update({
		id: "/giai-dieu",
		path: "/giai-dieu",
		getParentRoute: () => Route$9
	}),
	HoSoRoute: Route$2.update({
		id: "/ho-so",
		path: "/ho-so",
		getParentRoute: () => Route$9
	}),
	LichRoute: Route$1.update({
		id: "/lich",
		path: "/lich",
		getParentRoute: () => Route$9
	}),
	PhanHoiRoute: Route.update({
		id: "/phan-hoi",
		path: "/phan-hoi",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { getTicket as a, CHORUS as c, getTrack as d, Button as f, getFeedback as i, FEATURED_ID as l, discKey as n, usePlanStore as o, feedbackKey as r, useMusicStore as s, router_exports as t, TRACKS as u };
