import { i as __toESM } from "../_runtime.mjs";
import { T as cn, a as CYCLES, m as OUTLINE_NOTE, r as CLASSES, t as BACKUP_CASES, w as WEEKS } from "./plan-data-Ce0Wq5F4.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button, o as usePlanStore } from "./router-CGwAJjME.mjs";
import { a as teachingWeekOf, i as sessionDates, n as fmtRange } from "./calendar-DogF0ykN.mjs";
import { t as Badge } from "./badge-q_iA9_1K.mjs";
import { r as buildWeekScript } from "./report-DBoUq7r3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lich-tKnYy6kQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KIND = {
	prep: "outline",
	play: "default",
	harvest: "soft",
	close: "warn"
};
function LichPage() {
	const classKey = usePlanStore((s) => s.classKey);
	const gameSlot = usePlanStore((s) => s.gameSlot);
	const setGameSlot = usePlanStore((s) => s.setGameSlot);
	const klass = CLASSES[classKey];
	const now = teachingWeekOf();
	const [open, setOpen] = (0, import_react.useState)(now === 0 ? 1 : Math.min(Math.max(now, 1), 12));
	const week = WEEKS.find((w) => w.week === open) ?? WEEKS[0];
	const theory = gameSlot === "second" ? klass.meetings.first : klass.meetings.second;
	const practice = gameSlot === "second" ? klass.meetings.second : klass.meetings.first;
	const cycle = CYCLES.find((c) => c.week === week.week);
	const dates = sessionDates(week.week, klass);
	const theoryDate = gameSlot === "second" ? dates.first : dates.second;
	const practiceDate = gameSlot === "second" ? dates.second : dates.first;
	const backup = BACKUP_CASES.find((b) => b.week === week.week);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground",
						children: [
							klass.code,
							" · 12 tuần theo TKB · ",
							fmtRange(week.week)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-semibold text-ink",
						children: "Lịch tích hợp Mariotti × 6 chu kỳ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-2xl text-sm text-muted-foreground",
						children: "Mỗi tuần một chương (hoặc cụm chương). Chu kỳ game chỉ chạy tuần 3–8 — đủ debrief, không đè lý thuyết. Tuần 9–12 dùng dữ liệu 6 vòng để viết plan và pitch."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-2xl text-xs leading-relaxed text-muted-foreground",
						children: OUTLINE_NOTE
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground",
					children: "Buổi game trong tuần"
				}), ["second", "first"].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setGameSlot(s),
					className: cn("rounded-full border px-3 py-1 text-xs font-medium", gameSlot === s ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"),
					children: s === "second" ? `Buổi 2 · ${klass.meetings.second.day}` : `Buổi 1 · ${klass.meetings.first.day}`
				}, s))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-wider text-muted-foreground",
							children: "Lý thuyết"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 font-medium",
							children: [
								theoryDate.label,
								" · tiết ",
								theory.periods,
								" · ",
								theory.room
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: theory.time
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs leading-relaxed text-muted-foreground",
							children: theory.note
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-wider text-muted-foreground",
							children: "Thực hành / BizOn"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 font-medium",
							children: [
								practiceDate.label,
								" · tiết ",
								practice.periods,
								" · ",
								practice.room
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [practice.time, " · 150 phút khi liền 3 tiết"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs leading-relaxed text-muted-foreground",
							children: practice.note
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid grid-cols-3 gap-2 sm:grid-cols-6",
				children: WEEKS.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setOpen(w.week),
					className: cn("flex w-full flex-col items-start rounded-xl border p-3 text-left transition-colors", open === w.week ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-accent"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[11px] opacity-80",
						children: ["Tuần ", w.week]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 text-xs font-medium leading-snug",
						children: w.cycle
					})]
				}) }, w.week))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl border border-border bg-card p-5 shadow-soft sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground",
								children: [
									"Tuần ",
									week.week,
									" · ",
									fmtRange(week.week),
									" · ",
									week.hours
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 text-xl font-semibold text-ink",
								children: week.chapter
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: week.textbook
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: KIND[week.cycleKind],
							children: week.cycle
						})]
					}),
					cycle ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 rounded-lg bg-accent/70 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-wider text-accent-foreground/70",
								children: cycle.flag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm font-medium text-ink",
								children: [
									cycle.title,
									" — ",
									cycle.goal
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: ["Bẫy: ", cycle.trap]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: ["Thu: ", cycle.evidence]
							})
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid gap-4 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							title: "Buổi lý thuyết",
							body: week.theory
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							title: "Buổi thực hành",
							body: week.practice
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-1.5",
						children: week.clos.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "soft",
							children: c
						}, c))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid gap-4 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground",
								children: "Giảng viên"
							}), week.gv.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-sm leading-relaxed",
								children: g
							}, g))]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground",
								children: "Sinh viên"
							}), week.sv.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-sm leading-relaxed",
								children: g
							}, g))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 rounded-lg bg-muted/60 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-wider text-muted-foreground",
							children: "Câu debrief neo chương"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-medium text-ink",
							children: week.debrief
						})]
					}),
					backup ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-xs leading-relaxed text-muted-foreground",
						children: [
							"Plan B nếu game/wifi sập: ",
							backup.unit,
							" — ",
							backup.cases,
							" (CLO ",
							backup.clos,
							")."
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap gap-2 no-print",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => {
								navigator.clipboard.writeText(buildWeekScript(klass, week.week));
								toast.success("Đã sao chép kịch bản tuần " + week.week);
							},
							children: "Sao chép kịch bản tuần"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							onClick: () => window.print(),
							children: "In"
						})]
					})
				]
			})
		]
	});
}
function Block({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-muted/50 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] uppercase tracking-wider text-muted-foreground",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm leading-relaxed",
			children: body
		})]
	});
}
//#endregion
export { LichPage as component };
