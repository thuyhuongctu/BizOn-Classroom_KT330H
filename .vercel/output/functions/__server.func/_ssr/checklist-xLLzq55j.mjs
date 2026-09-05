import { T as cn, f as LINKS, n as CHECKS, r as CLASSES, w as WEEKS } from "./plan-data-Ce0Wq5F4.mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button, o as usePlanStore } from "./router-CGwAJjME.mjs";
import { i as sessionDates, n as fmtRange } from "./calendar-DogF0ykN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checklist-xLLzq55j.js
var import_jsx_runtime = require_jsx_runtime();
function CheckPage() {
	const checks = usePlanStore((s) => s.checks);
	const toggle = usePlanStore((s) => s.toggleCheck);
	const classKey = usePlanStore((s) => s.classKey);
	const klass = CLASSES[classKey];
	const total = CHECKS.reduce((n, g) => n + g.items.length, 0);
	const done = CHECKS.reduce((n, g) => n + g.items.filter((i) => checks[i.id]).length, 0);
	function exportPlan() {
		const lines = [
			`# Kế hoạch triển khai BizOn Bật Nghiệp — KT330H`,
			`${klass.code} · ${klass.classId} · ${klass.students} SV · ${klass.teams} đội`,
			`Lý thuyết: ${klass.meetings.first.day} tiết ${klass.meetings.first.periods} ${klass.meetings.first.room} · ${klass.meetings.first.time}`,
			`Thực hành: ${klass.meetings.second.day} tiết ${klass.meetings.second.periods} ${klass.meetings.second.room} · ${klass.meetings.second.time}`,
			`Lưu ý F1 Thứ Ba: ${CLASSES.F1.meetings.first.note}`,
			"",
			"## 12 tuần",
			...WEEKS.flatMap((w) => {
				const d = sessionDates(w.week, klass);
				return [
					`### Tuần ${w.week} · ${fmtRange(w.week)} · ${w.chapter} (${w.cycle})`,
					`LT: ${d.first.short} ${klass.meetings.first.room} — ${w.theory}`,
					`TH: ${d.second.short} ${klass.meetings.second.room} — ${w.practice}`,
					`CLO: ${w.clos.join(", ")}`,
					`Debrief: ${w.debrief}`,
					""
				];
			}),
			`Game: ${LINKS.game}`,
			`Sổ tay: ${LINKS.guide}`
		];
		navigator.clipboard.writeText(lines.join("\n"));
		toast.success("Đã sao chép kế hoạch 12 tuần");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground",
						children: "Vận hành trước khoa học"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-semibold text-ink",
						children: "Checklist triển khai"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "max-w-2xl text-sm text-muted-foreground",
						children: [
							done,
							"/",
							total,
							" mục. Ưu tiên cuối tuần này: chạy thử 6 vòng, Class ID, vốn, rubric, máy từng đội, báo F1 ở lại sau tiết 5 Thứ Ba. Nghiên cứu chỉ bật khi lớp chạy ổn."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-1.5 overflow-hidden rounded-full bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-primary transition-[width] duration-200",
							style: { width: `${done / total * 100}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						onClick: exportPlan,
						children: "Sao chép kế hoạch 12 tuần"
					})
				]
			}),
			CHECKS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold text-ink",
					children: g.group
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-border overflow-hidden rounded-xl border border-border bg-card",
					children: g.items.map((item) => {
						const on = Boolean(checks[item.id]);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => toggle(item.id),
							className: "flex w-full items-start gap-3 px-4 py-3 text-left hover:bg-accent/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border", on ? "border-primary bg-primary" : "border-border bg-background"),
								"aria-hidden": true,
								children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 12 12",
									className: "size-3 fill-none stroke-primary-foreground",
									strokeWidth: "2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 6.2 L4.8 9 L10 3.2" })
								}) : null
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("text-sm leading-relaxed", on && "text-muted-foreground"),
								children: item.label
							})]
						}) }, item.id);
					})
				})]
			}, g.group)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-card p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-medium text-ink",
						children: "Nghiên cứu — làm sau khi lớp chạy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: "T0 trước tuần 1 và T2 sau tuần 12 dùng cùng mã ẩn danh. T1 (sau vòng 3) tối đa 5 phút. Tách ba tệp: danh tính, master nghiên cứu, điểm. Từ chối nghiên cứu không ảnh hưởng điểm. Event log (đổi thanh, Nếu–Thì, Lumina, commit) là dữ liệu hành vi — không công bố log thô."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm",
						children: [
							"Game:",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "underline",
								href: LINKS.game,
								target: "_blank",
								rel: "noreferrer",
								children: LINKS.game
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm",
						children: [
							"Sổ tay GV:",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "underline",
								href: LINKS.guide,
								target: "_blank",
								rel: "noreferrer",
								children: "huong-dan-giang-vien.md"
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { CheckPage as component };
