import { i as __toESM } from "../_runtime.mjs";
import { O as ratingLabel, T as cn, _ as RATINGS, a as CYCLES, r as CLASSES } from "./plan-data-Ce0Wq5F4.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as Minus, u as Plus } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button, i as getFeedback, n as discKey, o as usePlanStore, r as feedbackKey } from "./router-CGwAJjME.mjs";
import { t as Badge } from "./badge-q_iA9_1K.mjs";
import { n as buildFullReport, t as buildCycleReport } from "./report-DBoUq7r3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/phan-hoi-DLXuASas.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PhanHoiPage() {
	const classKey = usePlanStore((s) => s.classKey);
	const teams = usePlanStore((s) => s.teams[s.classKey]);
	const feedbacks = usePlanStore((s) => s.feedbacks);
	const disc = usePlanStore((s) => s.disc);
	const setFeedback = usePlanStore((s) => s.setFeedback);
	const bumpDisc = usePlanStore((s) => s.bumpDisc);
	const [round, setRound] = (0, import_react.useState)(1);
	const [openId, setOpenId] = (0, import_react.useState)(teams[0]?.id ?? "");
	const klass = CLASSES[classKey];
	const cycle = CYCLES[round - 1];
	function copyCycle() {
		navigator.clipboard.writeText(buildCycleReport({
			classKey,
			round,
			teams,
			feedbacks,
			disc
		}));
		toast.success("Đã sao chép báo cáo chu kỳ");
	}
	function copyFull() {
		navigator.clipboard.writeText(buildFullReport({
			classKey,
			teams,
			feedbacks,
			disc
		}));
		toast.success("Đã sao chép báo cáo cả học phần");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground",
						children: [klass.code, " · mẫu ACT đã dùng cho KT301H"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-semibold text-ink",
						children: "Phản hồi nhóm theo chu kỳ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-2xl text-sm text-muted-foreground",
						children: "Cùng khung Điểm mạnh / Cần cải / Khái niệm / Kết luận. Điểm nhóm /20; discussion cộng dồn theo thành viên. GV chốt tay thành 10 / 40 / 50 — không cộng máy."
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-card p-5 shadow-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground",
								children: [
									"Tuần ",
									cycle.week,
									" · ",
									cycle.flag
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-1 text-xl font-semibold text-ink",
								children: [
									"Chu kỳ ",
									cycle.n,
									" · ",
									cycle.title
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: cycle.subtitle
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "soft",
							children: cycle.flag
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed",
						children: cycle.goal
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-terracotta",
						children: ["Bẫy: ", cycle.trap]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-xl border border-border bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[520px] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-muted/70 text-[11px] uppercase tracking-wider text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 font-medium",
								children: "Đội"
							}),
							CYCLES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("th", {
								className: "px-2 py-2 text-center font-medium",
								children: ["C", c.n]
							}, c.n)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 text-right font-medium",
								children: "TB"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: teams.map((t) => {
						const scores = CYCLES.map((c) => feedbacks[feedbackKey(t.id, c.n)]?.score ?? 0);
						const marked = scores.filter((s) => s > 0);
						const avg = marked.length ? marked.reduce((a, b) => a + b, 0) / marked.length : 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 font-medium",
									children: t.name
								}),
								scores.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: cn("px-2 py-2 text-center tabular-nums", i === round - 1 && "bg-accent/50"),
									children: s ? s.toFixed(1) : "—"
								}, CYCLES[i].n)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 text-right tabular-nums",
									children: avg ? avg.toFixed(1) : "—"
								})
							]
						}, t.id);
					}) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: teams.map((t) => {
					const key = feedbackKey(t.id, round);
					const fb = getFeedback(feedbacks, key);
					const open = openId === t.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-border bg-card shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpenId(open ? "" : t.id),
							className: "flex w-full items-center justify-between gap-3 px-4 py-3 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-medium text-ink",
								children: [
									t.id,
									" · ",
									t.name
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: fb.score ? "default" : "outline",
								children: fb.score ? `${ratingLabel(fb.score)} ${fb.score.toFixed(1)}` : "Chưa chấm"
							})]
						}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 border-t border-border px-4 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-1.5",
									children: RATINGS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setFeedback(key, { score: r.score }),
										className: cn("rounded-full border px-3 py-1 text-xs font-medium", fb.score === r.score ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background"),
										children: [
											r.label,
											" ",
											r.score.toFixed(1)
										]
									}, r.score))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium",
										children: "Điểm mạnh"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: fb.strengths,
										onChange: (e) => setFeedback(key, { strengths: e.target.value }),
										rows: 2,
										placeholder: "Nice slides · Good layout · Analytical tools used",
										className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium",
										children: "Cần cải"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: fb.improve,
										onChange: (e) => setFeedback(key, { improve: e.target.value }),
										rows: 2,
										placeholder: "Do not read the materials when presenting · Strengthen Q&A",
										className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium",
										children: "Khái niệm bắt được"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: fb.concepts,
										onChange: (e) => setFeedback(key, { concepts: e.target.value }),
										rows: 2,
										placeholder: "EOU · working capital · co giãn giá",
										className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium",
									children: "Discussion — cộng khi phát biểu debrief"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 divide-y divide-border rounded-lg border border-border",
									children: t.members.map((m, i) => {
										const dk = discKey(classKey, t.id, i);
										const n = disc[dk] ?? 0;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2 px-3 py-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "w-16 text-[11px] uppercase tracking-wider text-muted-foreground",
													children: m.role
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "min-w-0 flex-1 truncate text-sm",
													children: m.name || "Chưa gán tên"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: "flex size-10 items-center justify-center rounded-md border border-border",
													onClick: () => bumpDisc(dk, -1),
													"aria-label": "Giảm",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "w-8 text-center text-sm tabular-nums",
													children: n
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: "flex size-10 items-center justify-center rounded-md border border-border",
													onClick: () => bumpDisc(dk, 1),
													"aria-label": "Tăng",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" })
												})
											]
										}, dk);
									})
								})] })
							]
						}) : null]
					}, t.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2 no-print",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						onClick: copyCycle,
						children: ["Sao chép báo cáo chu kỳ ", round]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						onClick: copyFull,
						children: "Sao chép cả 6 chu kỳ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						onClick: () => window.print(),
						children: "In"
					})
				]
			})
		]
	});
}
//#endregion
export { PhanHoiPage as component };
