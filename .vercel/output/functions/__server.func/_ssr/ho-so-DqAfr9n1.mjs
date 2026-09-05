import { i as __toESM } from "../_runtime.mjs";
import { C as TICKET_FIELDS, r as CLASSES, s as DEBRIEF4 } from "./plan-data-Ce0Wq5F4.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as getTicket, f as Button, o as usePlanStore } from "./router-CGwAJjME.mjs";
import { t as Badge } from "./badge-q_iA9_1K.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ho-so-DqAfr9n1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HoSoPage() {
	const classKey = usePlanStore((s) => s.classKey);
	const teams = usePlanStore((s) => s.teams[s.classKey]);
	const tickets = usePlanStore((s) => s.tickets);
	const setTicket = usePlanStore((s) => s.setTicket);
	const resetTicket = usePlanStore((s) => s.resetTicket);
	const [teamId, setTeamId] = (0, import_react.useState)(teams[0]?.id ?? "");
	const [round, setRound] = (0, import_react.useState)(1);
	const key = `${teamId}-R${round}`;
	const ticket = getTicket(tickets, key);
	const klass = CLASSES[classKey];
	(0, import_react.useEffect)(() => {
		if (!teams.some((t) => t.id === teamId)) setTeamId(teams[0]?.id ?? "");
	}, [
		classKey,
		teams,
		teamId
	]);
	const filled = (0, import_react.useMemo)(() => {
		const before = TICKET_FIELDS.filter((f) => f.phase === "before");
		return {
			n: before.filter((f) => ticket[f.key]).length,
			d: before.length
		};
	}, [ticket]);
	function copyTicket() {
		const lines = [`${klass.classId} · ${teamId} · Chu kỳ ${round}`, ...TICKET_FIELDS.map((f) => `${f.label}: ${ticket[f.key] || "—"}`)];
		navigator.clipboard.writeText(lines.join("\n"));
		toast.success("Đã sao chép phiếu");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground",
						children: "Công cụ lớp · lưu trên máy này"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-semibold text-ink",
						children: "Phiếu quyết định và debrief"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-2xl text-sm text-muted-foreground",
						children: "Trước commit: giả định và dự báo. Sau kết quả: sai lệch và bài học. SEC có thể gõ trực tiếp hoặc sao chép ra giấy. Dữ liệu chỉ nằm trên trình duyệt giảng viên / máy đội."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: teams.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setTeamId(t.id),
					className: `rounded-full border px-3 py-1 text-xs font-medium ${teamId === t.id ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`,
					children: [
						t.id.replace(`${classKey}-`, ""),
						" ",
						t.name
					]
				}, t.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [[
					1,
					2,
					3,
					4,
					5,
					6
				].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setRound(r),
					className: `size-10 rounded-md border text-sm tabular-nums ${round === r ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`,
					children: r
				}, r)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					variant: "soft",
					children: [
						"Trước commit ",
						filled.n,
						"/",
						filled.d
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-6 rounded-xl border border-border bg-card p-5 shadow-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-medium text-ink",
						children: "Trước khi CEO khóa"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid gap-3 sm:grid-cols-2",
						children: TICKET_FIELDS.filter((f) => f.phase === "before").map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium",
									children: f.label
								}),
								f.hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-2 text-[11px] text-muted-foreground",
									children: f.hint
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: ticket[f.key],
									onChange: (e) => setTicket(key, { [f.key]: e.target.value }),
									className: "mt-1 h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
								})
							]
						}, f.key))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-medium text-ink",
						children: "Sau khi có kết quả"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid gap-3 sm:grid-cols-2",
						children: TICKET_FIELDS.filter((f) => f.phase === "after").map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block sm:col-span-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium",
									children: f.label
								}),
								f.hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-2 text-[11px] text-muted-foreground",
									children: f.hint
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: ticket[f.key],
									onChange: (e) => setTicket(key, { [f.key]: e.target.value }),
									rows: 2,
									className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
								})
							]
						}, f.key))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2 no-print",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								onClick: copyTicket,
								children: "Sao chép phiếu"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								onClick: () => window.print(),
								children: "In"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ghost",
								onClick: () => resetTicket(key),
								children: "Xóa phiếu này"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold text-ink",
						children: "Bốn câu debrief — sau mỗi chu kỳ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 md:grid-cols-2",
						children: DEBRIEF4.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl border border-border bg-card p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: d.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed",
								children: d.a
							})]
						}, d.q))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Sau mỗi hai chu kỳ (tuần 4 và tuần 6), kéo debrief lên 20 phút và bắt buộc một khái niệm textbook — simulation không tự tạo phản tư nếu thiếu can thiệp sư phạm."
					})
				]
			})
		]
	});
}
//#endregion
export { HoSoPage as component };
