import { T as cn, f as LINKS } from "./plan-data-Ce0Wq5F4.mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Play, f as Pause, y as ExternalLink } from "../_libs/lucide-react.mjs";
import { c as CHORUS, d as getTrack, f as Button, l as FEATURED_ID, s as useMusicStore, u as TRACKS } from "./router-CGwAJjME.mjs";
import { t as Badge } from "./badge-q_iA9_1K.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/giai-dieu-BpX4kUoF.js
var import_jsx_runtime = require_jsx_runtime();
function GiaiDieu() {
	const trackId = useMusicStore((s) => s.trackId);
	const playing = useMusicStore((s) => s.playing);
	const toggle = useMusicStore((s) => s.toggle);
	const featured = getTrack(FEATURED_ID);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground",
						children: "Tạo hình Lumina · Kho âm nhạc BizOn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "max-w-3xl font-display text-[2.15rem] font-semibold leading-[1.15] text-ink sm:text-5xl",
						children: "Bài mở lớp là «Bật Nghiệp» bản có lời — đúng ca khúc chủ đề game."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-2xl text-base text-muted-foreground",
						children: "Tạo hình lấy từ nhân vật đất sét 3D của Bật Nghiệp. Bài hát lấy từ tuyển tập cùng tên trong kho nhạc: gắn sao, 3:23, V-pop 112 BPM, dùng làm nhạc nền mở đầu trong game."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "overflow-hidden rounded-xl border border-border bg-card shadow-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-sunken",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							className: "aspect-video w-full object-cover object-[50%_28%]",
							controls: true,
							playsInline: true,
							poster: "/characters/lumina-workshop.jpg",
							"aria-label": "MV Lumina chào lớp với anthem Bật Nghiệp",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
								src: "/video/lumina-bat-nghiep.mp4",
								type: "video/mp4"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-between gap-5 p-5 sm:p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "default",
									children: "Chọn cho KT330H"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "text-xl font-semibold text-ink",
									children: [
										featured.title,
										" · ",
										featured.version
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-muted-foreground",
									children: featured.use
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Clip 20 giây ghép hai cảnh Lumina với đoạn điệp khúc. Bản đầy đủ 3:23 phát ở thanh nhạc dưới cùng."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
									className: "space-y-1 border-l-2 border-terracotta/50 pl-4 text-sm italic text-ink",
									children: CHORUS.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line }, line))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								onClick: () => toggle(FEATURED_ID),
								children: [playing && trackId === "bat-nghiep-co-loi" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "translate-x-px" }), playing && trackId === "bat-nghiep-co-loi" ? "Tạm dừng" : "Phát bản đầy đủ"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: LINKS.music,
									target: "_blank",
									rel: "noreferrer",
									children: ["Mở kho nhạc gốc ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {})]
								})
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold text-ink",
					children: "Tuyển tập Bật Nghiệp — khi nào phát bài nào"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Cùng một tạo hình Lumina, năm bản từ kho nhạc. Mặc định là bản có lời; các bản còn lại đổi theo nhịp buổi, không át thảo luận."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-3",
					children: TRACKS.map((t) => {
						const active = trackId === t.id;
						const isOn = active && playing;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => toggle(t.id),
							className: cn("flex w-full items-center gap-4 rounded-xl border bg-card p-3 text-left shadow-soft transition-colors sm:p-4", active ? "border-primary bg-accent/60" : "border-border hover:bg-accent/40"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: t.art,
									alt: "",
									className: "size-16 shrink-0 rounded-lg object-contain object-bottom outline outline-1 -outline-offset-1 outline-black/10 sm:size-20"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex flex-wrap items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-ink",
													children: t.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm text-muted-foreground",
													children: t.version
												}),
												t.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													variant: "default",
													children: "Mở lớp"
												}) : null
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-sm leading-relaxed text-muted-foreground",
											children: t.use
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-[11px] tabular-nums text-faint",
											children: t.durationLabel
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground",
									children: isOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4 translate-x-px" })
								})
							]
						}) }, t.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "overflow-hidden rounded-xl border border-border bg-card shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/characters/lumina-mekong.jpg",
						alt: "Lumina vẫy chào trên bến sông đất sét",
						className: "aspect-video w-full object-cover outline outline-1 -outline-offset-1 outline-black/10"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "p-4 text-sm text-muted-foreground",
						children: "Cùng tạo hình áo dài trắng, hoa sen cài tóc — dùng khi chào lớp."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "overflow-hidden rounded-xl border border-border bg-card shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/characters/giai-dieu-bizon.webp",
						alt: "Bìa tuyển tập Giai điệu BizOn",
						className: "aspect-video w-full object-cover object-top outline outline-1 -outline-offset-1 outline-black/10"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "p-4 text-sm text-muted-foreground",
						children: "Bìa «Giai điệu BizOn» từ kho nhạc — Lumina giữa vườn hoa đất sét."
					})]
				})]
			})
		]
	});
}
//#endregion
export { GiaiDieu as component };
