import { T as cn, a as CYCLES, c as DIFFS, f as LINKS, m as OUTLINE_NOTE, p as OPTIONS, r as CLASSES } from "./plan-data-Ce0Wq5F4.mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ArrowRight, d as Play, y as ExternalLink } from "../_libs/lucide-react.mjs";
import { d as getTrack, f as Button, l as FEATURED_ID, o as usePlanStore, s as useMusicStore } from "./router-CGwAJjME.mjs";
import { a as teachingWeekOf, r as nextSession, t as WEEK_CALENDAR } from "./calendar-DogF0ykN.mjs";
import { t as Badge } from "./badge-q_iA9_1K.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-NzENpssC.js
var import_jsx_runtime = require_jsx_runtime();
function LuminaStage() {
	const play = useMusicStore((s) => s.play);
	const featured = getTrack(FEATURED_ID);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "overflow-hidden rounded-xl border border-border bg-card shadow-soft",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[16/10] bg-sunken sm:aspect-[16/8]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/characters/lumina-workshop.jpg",
					alt: "Lumina, cố vấn AI đất sét 3D của BizOn Bật Nghiệp, trong xưởng bên sông",
					className: "absolute inset-0 h-full w-full object-cover object-[50%_22%] outline outline-1 -outline-offset-1 outline-black/10"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					className: "absolute inset-0 h-full w-full object-cover object-[50%_22%]",
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					poster: "/characters/lumina-workshop.jpg",
					"aria-hidden": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						src: "/video/lumina-loop.mp4",
						type: "video/mp4"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "absolute bottom-3 left-4 right-4 text-xs text-primary-foreground",
					children: "Tạo hình Lumina — cố vấn AI của BizOn Bật Nghiệp"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-[0.16em] text-terracotta",
						children: "Kho nhạc · tuyển tập Bật Nghiệp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-2xl font-semibold leading-tight text-ink",
						children: [
							"«",
							featured.title,
							"» · ",
							featured.version
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted-foreground",
						children: featured.use
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					onClick: () => play(FEATURED_ID),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "translate-x-px" }), "Phát anthem mở lớp"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/giai-dieu",
						children: "Xem tuyển tập"
					})
				})]
			})]
		})]
	});
}
var FOUNDERS = [{
	name: "Lumina",
	role: "Cố vấn AI học tập",
	art: "/characters/lumina-ao-dai-wave.webp",
	quote: "Je m'appelle Hương — hỏi, chất vấn, phản tư. Engine vẫn do đội quyết.",
	alt: "Lumina, nhân vật đất sét áo dài trắng, vẫy chào"
}, {
	name: "PGS.TS. Phan Anh Tú",
	role: "Đồng sáng lập · Cố vấn học thuật",
	art: "/characters/anh-tu-stand.webp",
	quote: "Biến tri thức thành quyết định. Biến ý tưởng thành doanh nghiệp.",
	alt: "Thầy Phan Anh Tú đứng riêng, áo dài kem, không đeo dây chuyền"
}];
function FoundersIntro() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] font-medium uppercase tracking-[0.16em] text-terracotta",
			children: "Giới thiệu mở lớp"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-1 text-xl font-semibold text-ink",
			children: "Cố vấn học thuật và cố vấn AI"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2",
			children: FOUNDERS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "overflow-hidden rounded-xl border border-border bg-card shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-64 items-end justify-center bg-sunken px-4 pt-6 sm:h-72",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.art,
						alt: p.alt,
						className: "h-full w-auto max-w-[11rem] object-contain object-bottom"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-medium uppercase tracking-[0.14em] text-terracotta",
							children: p.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold leading-snug text-ink",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm leading-relaxed text-muted-foreground",
							children: [
								"«",
								p.quote,
								"»"
							]
						})
					]
				})]
			}, p.name))
		})]
	});
}
function Home() {
	const classKey = usePlanStore((s) => s.classKey);
	const klass = CLASSES[classKey];
	const weekNow = teachingWeekOf();
	const next = nextSession(classKey);
	const cal = WEEK_CALENDAR.find((w) => w.week === (weekNow === 0 ? 1 : Math.min(weekNow, 12)));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground",
						children: "Ghi chú giảng dạy · Khoa Kinh tế · ĐH Cần Thơ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "max-w-3xl font-display text-[2.15rem] font-semibold leading-[1.15] text-ink sm:text-5xl",
						children: "Triển khai BizOn Bật Nghiệp đúng vào KT330H, không phải một game khởi nghiệp chung."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-2xl text-base text-muted-foreground",
						children: "Học phần Khởi sự doanh nghiệp, NH 2026–2027 HK1 (07/9–20/12). Sáu chu kỳ, năm vai trò, ba đối thủ AI, nhật ký SEC — thầy Phan Anh Tú dẫn học thuật, Lumina đồng hành trên từng vòng."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/lich",
									children: ["Xem lịch 12 tuần ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/checklist",
									children: "Checklist trước thứ Hai"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: LINKS.game,
									target: "_blank",
									rel: "noreferrer",
									children: ["Mở game ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {})]
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FoundersIntro, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuminaStage, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-terracotta/30 bg-card p-5 shadow-soft sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-wider text-terracotta",
								children: weekNow === 0 ? "Học kỳ bắt đầu thứ Hai 07/9" : weekNow > 12 ? "Hết 12 tuần giảng dạy" : `Tuần giảng dạy ${weekNow} / 12`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 text-xl font-semibold text-ink",
								children: weekNow === 0 ? "Còn weekend để chạy thử 6 vòng" : next ? `Buổi tới · ${next.date.label}` : "Hết buổi trên TKB"
							}),
							next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: [
									klass.code,
									" · tiết ",
									next.meeting.periods,
									" · ",
									next.meeting.time,
									" · ",
									next.meeting.room,
									next.week === 1 && next.slot === "first" ? " — luật, CLO, chia đội. Chưa commit vòng tính điểm." : next.week === 1 ? " — demo 1 vòng, kết quả không tính." : ""
								]
							}) : null
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: weekNow === 0 ? "warn" : "soft",
							children: weekNow === 0 ? "Tuần 0 · chuẩn bị" : `Tuần ${Math.min(weekNow, 12)}`
						})]
					}),
					cal ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-2 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "rounded-lg bg-muted/70 px-3 py-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "F1 · "
								}),
								cal.F1.first.short,
								" ",
								CLASSES.F1.meetings.first.room,
								" · ",
								cal.F1.second.short,
								" ",
								CLASSES.F1.meetings.second.room
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "rounded-lg bg-muted/70 px-3 py-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "F2 · "
								}),
								cal.F2.first.short,
								" ",
								CLASSES.F2.meetings.first.room,
								" · ",
								cal.F2.second.short,
								" ",
								CLASSES.F2.meetings.second.room
							]
						})]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs leading-relaxed text-muted-foreground",
						children: "F1 Thứ Ba tiết 5–7 cắt nghỉ trưa (10:40–11:30 rồi 13:30–15:20, 104/KT) — không chạy một chu kỳ 150 phút. Game mặc định: F1 Thứ Năm 103/KT, F2 Thứ Sáu 202/KT."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
				children: [
					{
						k: "2 lớp CLC",
						v: `${CLASSES.F1.code} · ${CLASSES.F2.code}`
					},
					{
						k: "Sĩ số",
						v: `${CLASSES.F1.students + CLASSES.F2.students} sinh viên`
					},
					{
						k: "Đội",
						v: `${CLASSES.F1.teams + CLASSES.F2.teams} đội · 5 vai`
					},
					{
						k: "Lịch",
						v: "12 tuần · 6 chu kỳ"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-4 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-wider text-muted-foreground",
						children: s.k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm font-medium leading-snug",
						children: s.v
					})]
				}, s.k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-card p-5 shadow-soft sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-wider text-muted-foreground",
						children: "Lớp đang chọn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap items-end justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-xl font-semibold text-ink",
							children: [
								klass.code,
								" · nhóm ",
								klass.nhom
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: [
								klass.students,
								" SV · ",
								klass.teams,
								" đội · Class ID",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground",
									children: klass.classId
								})
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "soft",
							children: [
								klass.meetings.first.room,
								" / ",
								klass.meetings.second.room
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeetingCard, {
							title: "Buổi 1 trong tuần",
							m: klass.meetings.first,
							tag: "Lý thuyết (mặc định)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeetingCard, {
							title: "Buổi 2 trong tuần",
							m: klass.meetings.second,
							tag: "Game / thực hành (mặc định)"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: "Đổi thứ tự buổi game ở trang Lớp & đội. Khuyến nghị: lý thuyết trước, game sau — cùng tuần với chương Mariotti."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold text-ink",
					children: "Lịch 12 tuần — ngày thật"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Tuần 1 = 07/9–13/9. Tuần 12 kết thúc 29/11. Thi trong khung đến 20/12."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto rounded-xl border border-border bg-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[640px] text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-muted/70 text-[11px] uppercase tracking-wider text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 font-medium",
									children: "Tuần"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 font-medium",
									children: "Khung"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 font-medium",
									children: "Chu kỳ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 font-medium",
									children: klass.code
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: WEEK_CALENDAR.map((w) => {
							const cycle = CYCLES.find((c) => c.week === w.week);
							const dates = w[classKey];
							const active = weekNow === 0 && w.week === 1 || weekNow === w.week;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: cn("border-t border-border", active && "bg-accent/50"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2 font-medium tabular-nums",
										children: w.week
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2 text-muted-foreground",
										children: w.range
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2",
										children: cycle ? `C${cycle.n} ${cycle.title}` : w.week <= 2 ? "Chuẩn bị" : w.week === 12 ? "Pitch" : "Thu hoạch"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-3 py-2 text-muted-foreground",
										children: [
											dates.first.short,
											" · ",
											dates.second.short
										]
									})
								]
							}, w.week);
						}) })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold text-ink",
					children: "Sáu chu kỳ · Cần Thơ đến Hà Nội"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Mỗi chu kỳ một tuần thực hành (tuần 3–8). Thắng vòng để cắm cờ — nhưng rubric học phần chấm lập luận và phản tư, không chỉ xếp hạng."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
					children: CYCLES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/lich",
						className: "block h-full rounded-xl border border-border bg-card p-4 shadow-soft transition-colors hover:bg-accent/50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground",
								children: [
									"Tuần ",
									c.week,
									" · ",
									c.flag
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 font-medium text-ink",
								children: [
									c.n,
									". ",
									c.title
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: c.subtitle
							})
						]
					}) }, c.n))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold text-ink",
					children: "Ba cách triển khai — chỉ một cái khớp TKB"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Kế hoạch nghiên cứu 4 buổi vẫn hữu ích như phương án dự phòng. Với 2 buổi × 3 tiết mỗi tuần, mô hình đúng là một chu kỳ / tuần có debrief."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 md:grid-cols-3",
					children: OPTIONS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex flex-col rounded-xl border border-border bg-card p-5 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-medium",
								children: o.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: o.id === "A" ? "default" : o.id === "C" ? "warn" : "outline",
								children: o.badge
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm text-muted-foreground",
							children: o.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "leading-relaxed",
								children: p
							}, p))
						})]
					}, o.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold text-ink",
						children: "Đã chỉnh so với kế hoạch trước"
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
										children: "Kế hoạch cũ"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Kế hoạch này"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "hidden px-4 py-3 font-medium md:table-cell",
										children: "Lý do"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: DIFFS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-border align-top",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 text-muted-foreground",
										children: d.from
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 font-medium",
										children: d.to
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "hidden px-4 py-3 text-muted-foreground md:table-cell",
										children: d.why
									})
								]
							}, d.from)) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs leading-relaxed text-muted-foreground",
						children: OUTLINE_NOTE
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
						title: "Không kéo thanh để thắng",
						body: "Chu trình học: dữ liệu → giả định → quyết định → kết quả → giải thích → điều chỉnh. Nếu chỉ tối ưu dự báo tức thời, SV thắng game nhưng không chứng minh được CLO."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
						title: "AI không chấm điểm",
						body: "Lumina giải thích, chất vấn, phản tư. Engine thị phần và P&L là xác định, tái lập được. Tối đa 3 câu / vòng; phải ghi dùng / bác bỏ."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
						title: "Nghiên cứu đi sau vận hành",
						body: "Pilot đầu chỉ hỏi: game chạy ổn? hiểu luật? đúng giờ? log đủ? Chưa kết luận năng lực hay ý định khởi nghiệp."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: [
					"Nguồn game:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "underline",
						href: LINKS.hub,
						target: "_blank",
						rel: "noreferrer",
						children: "cổng BizOn"
					}),
					" · ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "underline",
						href: LINKS.game,
						target: "_blank",
						rel: "noreferrer",
						children: "Bật Nghiệp 2026"
					}),
					" · ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "underline",
						href: LINKS.guide,
						target: "_blank",
						rel: "noreferrer",
						children: "hướng dẫn giảng viên"
					}),
					" · ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "underline",
						href: LINKS.music,
						target: "_blank",
						rel: "noreferrer",
						children: "kho nhạc"
					}),
					" · ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "underline",
						href: LINKS.team,
						target: "_blank",
						rel: "noreferrer",
						children: "đội ngũ"
					}),
					". Đề cương KT330H (Mariotti 2016, 3 TC). TKB cán bộ NH 2026–2027 HK1."
				]
			})
		]
	});
}
function MeetingCard({ title, tag, m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-muted/60 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-wider text-muted-foreground",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 font-medium",
				children: [
					m.day,
					" · tiết ",
					m.periods
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: [
					m.time,
					" · ",
					m.room
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-primary",
				children: tag
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs leading-relaxed text-muted-foreground",
				children: m.note
			})
		]
	});
}
function Note({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl border border-border bg-card p-5 shadow-soft",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-medium text-ink",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted-foreground",
			children: body
		})]
	});
}
//#endregion
export { Home as component };
