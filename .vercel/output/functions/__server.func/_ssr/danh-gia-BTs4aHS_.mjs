import { S as SURVEYS, b as RUBRIC_PROCESS, g as PILOT_THRESHOLDS, h as PEER_ITEMS, i as CLOS, w as WEEKS, y as RUBRIC_COURSE } from "./plan-data-Ce0Wq5F4.mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Badge } from "./badge-q_iA9_1K.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/danh-gia-BTs4aHS_.js
var import_jsx_runtime = require_jsx_runtime();
function GradePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground",
						children: "Đề cương §10 · thang 10, một chữ số thập phân"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-semibold text-ink",
						children: "Đánh giá khớp 10 / 40 / 50"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-2xl text-sm text-muted-foreground",
						children: "Không invent rubric mới cho học phần. Game chiếm một phần của 40% quá trình — cùng chỗ với báo cáo nhóm / đồ án hiện nay. Thi cuối kỳ 50% giữ nguyên; câu thi có thể lấy tình huống từ 6 vòng."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "grid gap-3 md:grid-cols-3",
				children: RUBRIC_COURSE.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-border bg-card p-5 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-4xl font-semibold tabular-nums text-primary",
							children: [r.weight, "%"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-medium text-ink",
							children: r.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: r.note
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-faint",
							children: r.clos
						})
					]
				}, r.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold text-ink",
						children: "Phân rã 40% quá trình"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Gợi ý tương tự cách chấm ACT của học phần định lượng (điểm nhóm + discussion cá nhân). Có thể gom thành 20% game + 20% plan/pitch nếu muốn đơn giản hơn."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-xl border border-border bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-muted/70 text-[11px] uppercase tracking-wider text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Thành phần"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "% học phần"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "hidden px-4 py-3 font-medium md:table-cell",
										children: "Nội dung"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [RUBRIC_PROCESS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-border align-top",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 font-medium",
										children: r.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 tabular-nums",
										children: r.pct
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "hidden px-4 py-3 text-muted-foreground md:table-cell",
										children: r.detail
									})
								]
							}, r.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-border bg-muted/40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 font-medium",
										children: "Tổng quá trình"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 tabular-nums font-medium",
										children: "40"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "hidden px-4 py-3 text-muted-foreground md:table-cell",
										children: "Discussion 10% nằm ngoài bảng này, đúng đề cương."
									})
								]
							})] })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-card p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-medium text-ink",
					children: "Chỉ số kết quả game — công bố trước tuần 3"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted-foreground",
					children: "Không chấm chỉ bằng lợi nhuận cuối. Gợi ý trọng số nội bộ (trong 8% hiệu quả): lãi lũy kế 30% · số cờ / thị phần vòng 25% · tiền mặt không âm các vòng 20% · thương hiệu 15% · hoàn thành nhiệm vụ / không phá sản 10%. Sổ tay GitHub (40/30/15/15) thiên về thắng cuộc; học phần này nâng nhật ký và lập luận lên, hạ xếp hạng xuống."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold text-ink",
						children: "Ma trận CLO × tuần"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto rounded-xl border border-border bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "min-w-[720px] w-full text-left text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-muted/70 text-[11px] uppercase tracking-wider text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 font-medium",
									children: "CLO"
								}), WEEKS.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-1 py-2 text-center font-medium",
									children: w.week
								}, w.week))] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: CLOS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-3 py-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: c.id
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 hidden text-muted-foreground lg:inline",
										children: c.text
									})]
								}), WEEKS.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-1 py-2 text-center",
									children: w.clos.includes(c.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block size-2 rounded-full bg-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block size-2 rounded-full bg-border" })
								}, w.week))]
							}, c.id)) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-2 sm:grid-cols-2",
						children: CLOS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "soft",
								children: c.id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground",
								children: [c.kind, " · "]
							}), c.text] })]
						}, c.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold text-ink",
						children: "Mẫu phản hồi nhóm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Cùng cấu trúc đã dùng cho ACT: điểm mạnh / cần cải / khái niệm bắt được / kết luận. Chấm nhóm cho phiếu + nhật ký; discussion cá nhân tách riêng. Ghi trực tiếp ở trang Phản hồi."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: [
							{
								t: "Điểm mạnh",
								d: "Slide/phiếu rõ, dùng đúng công cụ (SWOT, EOU, 4P, CVP), không đọc tài liệu."
							},
							{
								t: "Cần cải",
								d: "Đào sâu nội dung, Q&A, tiếng Anh nói nếu CLC, không tối ưu theo thanh dự báo."
							},
							{
								t: "Khái niệm",
								d: "Ghi đúng 1–2 thuật ngữ tuần đó: EOU, hard/soft, co giãn, working capital."
							},
							{
								t: "Kết luận",
								d: "Quite good 19 · Good 19.5 · Very good 19.7 · Excellent 20 — hoặc thang 10."
							}
						].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: x.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: x.d
							})]
						}, x.t))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold text-ink",
						children: "Khảo sát T0 / T1 / T2 — Likert 1–5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "T0 và T2 dùng cùng mã ẩn danh để ghép cặp. T1 tối đa 5 phút, không làm gián đoạn vòng chơi. Từ chối nghiên cứu không ảnh hưởng điểm."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 md:grid-cols-3",
						children: SURVEYS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl border border-border bg-card p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[11px] uppercase tracking-wider text-muted-foreground",
									children: [
										s.id,
										" · ",
										s.minutes,
										" phút"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-medium text-ink",
									children: s.when
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-3 list-decimal space-y-2 pl-4 text-sm text-muted-foreground",
									children: s.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "leading-relaxed",
										children: it
									}, it))
								})
							]
						}, s.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold text-ink",
						children: "Phiếu đồng đẳng — tuần 12"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Mỗi thành viên chấm 4 người còn lại, thang 1–5. Không chấm mình. GV đối chiếu với discussion đã ghi suốt 6 vòng."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-border overflow-hidden rounded-xl border border-border bg-card",
						children: PEER_ITEMS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "px-4 py-3 text-sm",
							children: p.label
						}, p.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-semibold text-ink",
				children: "Ngưỡng khả thi — không phải ngưỡng hiệu quả"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 overflow-hidden rounded-xl border border-border bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
					className: "w-full text-left text-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: PILOT_THRESHOLDS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border first:border-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3",
							children: p.metric
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 text-right font-medium tabular-nums",
							children: p.threshold
						})]
					}, p.metric)) })
				})
			})] })
		]
	});
}
//#endregion
export { GradePage as component };
