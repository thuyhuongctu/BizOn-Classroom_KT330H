import { D as formatVnd, T as cn, l as ENGINE, r as CLASSES, v as ROLES } from "./plan-data-Ce0Wq5F4.mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as Button, o as usePlanStore } from "./router-CGwAJjME.mjs";
import { t as Badge } from "./badge-q_iA9_1K.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/doi-D0KZQvi5.js
var import_jsx_runtime = require_jsx_runtime();
function DoiPage() {
	const classKey = usePlanStore((s) => s.classKey);
	const teams = usePlanStore((s) => s.teams[s.classKey]);
	const setMember = usePlanStore((s) => s.setMember);
	const setTeamName = usePlanStore((s) => s.setTeamName);
	const rotateRoles = usePlanStore((s) => s.rotateRoles);
	const resetTeams = usePlanStore((s) => s.resetTeams);
	const capital = usePlanStore((s) => s.startingCapital);
	const setCapital = usePlanStore((s) => s.setCapital);
	const gameSlot = usePlanStore((s) => s.gameSlot);
	const setGameSlot = usePlanStore((s) => s.setGameSlot);
	const klass = CLASSES[classKey];
	function exportMd() {
		const lines = [
			`# ${klass.code} · ${klass.classId}`,
			`Vốn khởi điểm (cấp qua tab Giảng viên): ${formatVnd(capital)}`,
			"",
			...teams.flatMap((t) => [
				`## ${t.id} · ${t.name}`,
				...t.members.map((m) => `- ${m.role}: ${m.name || "…"}`),
				""
			])
		];
		navigator.clipboard.writeText(lines.join("\n"));
		toast.success("Đã sao chép danh sách đội");
	}
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
							" · ",
							klass.students,
							" SV"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-semibold text-ink",
						children: "Tổ chức đội và năm vai trò"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "max-w-2xl text-sm text-muted-foreground",
						children: [klass.leftover, ". Một máy / đội — hai đội một trình duyệt sẽ ghi đè save. Vai giữ ổn định tuần 1–4 (chu kỳ 1–2), luân chuyển từ chu kỳ 3."]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground",
								children: "Class ID"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-medium",
								children: klass.classId
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted-foreground",
								children: "SV nhập khi vào game.html"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground",
								children: "Vốn khởi điểm / đội"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "mt-1 block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Vốn khởi điểm"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									step: 1e7,
									min: 1e8,
									value: capital,
									onChange: (e) => setCapital(Number(e.target.value) || 0),
									className: "h-10 w-full rounded-md border border-input bg-background px-3 text-sm tabular-nums"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs text-muted-foreground",
								children: [
									"Game mở với tiền mặt ",
									formatVnd(ENGINE.cashStart),
									". Cấp ",
									formatVnd(capital),
									" giống nhau qua tab Giảng viên; mọi giao dịch có lý do."
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground",
								children: "Buổi game"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 grid grid-cols-2 gap-1 rounded-lg bg-muted p-1",
								children: ["second", "first"].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setGameSlot(s),
									className: cn("rounded-md px-2 py-2 text-xs font-medium", gameSlot === s ? "bg-card text-ink shadow-soft" : "text-muted-foreground"),
									children: s === "second" ? klass.meetings.second.day : klass.meetings.first.day
								}, s))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-muted-foreground",
								children: "Mặc định buổi 2. F1 nên giữ Thứ Năm — Thứ Ba cắt trưa không đủ 150 phút liền."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-wider text-muted-foreground",
							children: "Tham số engine"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm leading-relaxed text-muted-foreground",
							children: [
								"Giá tham chiếu ",
								ENGINE.priceRef.toLocaleString("vi-VN"),
								"₫ · giá vốn",
								" ",
								ENGINE.unitCost.toLocaleString("vi-VN"),
								"₫ · lãi vay ",
								ENGINE.rate * 100,
								"%/vòng · Nếu–Thì",
								" ",
								ENGINE.whatIf,
								" · Lumina ",
								ENGINE.lumina,
								" câu."
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2 no-print",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						onClick: () => rotateRoles(classKey),
						variant: "secondary",
						children: "Luân chuyển vai (mọi đội)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						onClick: exportMd,
						variant: "outline",
						children: "Sao chép danh sách"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						onClick: () => resetTeams(classKey),
						variant: "ghost",
						children: "Đặt lại tên đội"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: teams.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-border bg-card p-4 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: t.id }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: t.name,
							onChange: (e) => setTeamName(classKey, t.id, e.target.value),
							className: "h-9 min-w-0 flex-1 rounded-md border border-input bg-background px-3 text-sm font-medium",
							"aria-label": `Tên ${t.id}`
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
						children: t.members.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground",
								children: m.role
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: m.name,
								placeholder: "Họ tên",
								onChange: (e) => setMember(classKey, t.id, i, e.target.value),
								className: "mt-1 h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
							})]
						}, `${t.id}-${m.role}-${i}`))
					})]
				}, t.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold text-ink",
					children: "Thẻ vai trò — in và phát tuần 1"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 md:grid-cols-2",
					children: ROLES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-border bg-card p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-medium text-ink",
								children: r.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed",
								children: r.job
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs uppercase tracking-wider text-muted-foreground",
								children: "Minh chứng"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: r.evidence
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 rounded-lg bg-accent/70 p-3 text-sm text-ink",
								children: r.ask
							})
						]
					}, r.id))
				})]
			})
		]
	});
}
//#endregion
export { DoiPage as component };
