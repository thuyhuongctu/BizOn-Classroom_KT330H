import { i as __toESM } from "../_runtime.mjs";
import { T as cn, a as CYCLES, l as ENGINE, o as CYCLE_STEPS, x as SOCRATIC } from "./plan-data-Ce0Wq5F4.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as SkipBack, d as Play, f as Pause, l as RotateCcw, s as SkipForward } from "../_libs/lucide-react.mjs";
import { f as Button, o as usePlanStore } from "./router-CGwAJjME.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dieu-hanh-Dr1osJDm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useElapsed() {
	const running = usePlanStore((s) => s.timerRunning);
	const startedAt = usePlanStore((s) => s.timerStartedAt);
	const base = usePlanStore((s) => s.timerElapsed);
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	(0, import_react.useEffect)(() => {
		if (!running) return;
		const id = window.setInterval(() => setNow(Date.now()), 250);
		return () => window.clearInterval(id);
	}, [running]);
	return base + (running && startedAt ? now - startedAt : 0);
}
function fmt(ms) {
	const s = Math.max(0, Math.floor(ms / 1e3));
	const m = Math.floor(s / 60);
	const r = s % 60;
	return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
function DieuHanhPage() {
	const step = usePlanStore((s) => s.timerStep);
	const running = usePlanStore((s) => s.timerRunning);
	const startTimer = usePlanStore((s) => s.startTimer);
	const pauseTimer = usePlanStore((s) => s.pauseTimer);
	const resetTimer = usePlanStore((s) => s.resetTimer);
	const setTimerStep = usePlanStore((s) => s.setTimerStep);
	const elapsed = useElapsed();
	const current = CYCLE_STEPS[step] ?? CYCLE_STEPS[0];
	const budget = current.minutes * 60 * 1e3;
	const remain = Math.max(0, budget - elapsed);
	const warn = remain <= 3e5 && remain > 0;
	const over = elapsed >= budget;
	const [round, setRound] = (0, import_react.useState)(1);
	const cycle = CYCLES[round - 1];
	const totalMin = CYCLE_STEPS.reduce((a, s) => a + s.minutes, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground",
						children: [
							"Một chu kỳ · ",
							totalMin,
							" phút · 3 tiết"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-semibold text-ink",
						children: "Điều hành buổi thực hành"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-2xl text-sm text-muted-foreground",
						children: "Bật đồng hồ trên lớp. Cảnh báo 5 phút trước khi hết bước Commit thì khóa vòng trên màn hình Giảng viên — đội nhận ERR_ROUND_LOCKED, không sửa được quyết định."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: CYCLES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setRound(c.n),
					className: cn("rounded-full border px-3 py-1.5 text-xs font-medium", round === c.n ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"),
					children: [
						"C",
						c.n,
						" ",
						c.title
					]
				}, c.n))
			}),
			cycle ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "rounded-lg bg-accent/70 px-4 py-3 text-sm text-ink",
				children: [
					"Tuần ",
					cycle.week,
					" · ",
					cycle.flag,
					". ",
					cycle.goal
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-card p-5 shadow-soft sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground",
								children: [
									"Bước ",
									step + 1,
									" / ",
									CYCLE_STEPS.length
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 text-2xl font-semibold text-ink",
								children: current.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									"Định mức ",
									current.minutes,
									" phút"
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("font-display text-5xl font-semibold tabular-nums tracking-tight sm:text-6xl", over ? "text-destructive" : warn ? "text-terracotta" : "text-ink"),
							children: fmt(remain)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 h-1.5 overflow-hidden rounded-full bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("h-full rounded-full transition-[width] duration-200", over ? "bg-destructive" : "bg-primary"),
							style: { width: `${Math.min(100, elapsed / budget * 100)}%` }
						})
					}),
					warn || over ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm font-medium text-terracotta",
						children: over ? "Hết giờ bước này. Nếu đang Commit — khóa vòng ngay." : "Còn dưới 5 phút. Nhắc đội chốt và chuẩn bị khóa vòng."
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap gap-2",
						children: [
							running ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								onClick: pauseTimer,
								variant: "secondary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {}), " Tạm dừng"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								onClick: startTimer,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {}), " Chạy"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "outline",
								onClick: () => setTimerStep(Math.max(0, step - 1)),
								disabled: step <= 0,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipBack, {}), " Trước"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "outline",
								onClick: () => setTimerStep(Math.min(CYCLE_STEPS.length - 1, step + 1)),
								disabled: step >= CYCLE_STEPS.length - 1,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipForward, {}), " Bước sau"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "ghost",
								onClick: resetTimer,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {}), " Về briefing"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-3 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-muted/60 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground",
								children: "Giảng viên"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed",
								children: current.gv
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-muted/60 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground",
								children: "Sinh viên"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed",
								children: current.sv
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid gap-2 sm:grid-cols-2",
				children: CYCLE_STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setTimerStep(i),
					className: cn("flex w-full items-start gap-3 rounded-xl border p-3 text-left", i === step ? "border-primary bg-accent" : "border-border bg-card hover:bg-accent/50"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums text-xs text-muted-foreground",
						children: String(i + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm font-medium",
							children: s.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted-foreground",
							children: [s.minutes, " phút"]
						})]
					})]
				}) }, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-border bg-card p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium text-ink",
							children: "Giới hạn kỹ thuật mỗi vòng"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 space-y-2 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Nếu–Thì: tối đa ",
									ENGINE.whatIf,
									" lượt. Ghi kịch bản bị loại."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Lumina: tối đa ",
									ENGINE.lumina,
									" câu. Đánh giá, không sao chép."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Commit một lần. Khóa vòng = ERR_ROUND_LOCKED." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Cấp vốn chỉ khi có lý do sư phạm, ghi nhật ký, cùng điều kiện cho mọi đội liên quan." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Đối thủ AI jitter ",
									ENGINE.aiJitter,
									"."
								] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs leading-relaxed text-faint",
							children: ENGINE.share
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-border bg-card p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium text-ink",
						children: "Câu hỏi Socratic — không ra đáp án"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: SOCRATIC.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-sm leading-relaxed",
							children: q
						}, q))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Chu trình cấm: kéo thanh trượt → xem dự báo → chọn phương án điểm cao nhất. Chu trình bắt buộc: dữ liệu → giả định → quyết định → kết quả → giải thích → điều chỉnh."
			})
		]
	});
}
//#endregion
export { DieuHanhPage as component };
