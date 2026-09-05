import { r as CLASSES } from "./plan-data-Ce0Wq5F4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/calendar-DogF0ykN.js
/** HK1 2026–2027: giảng dạy từ 07/9/2026; khung học kỳ đến 20/12/2026. */
var SEMESTER = {
	label: "NH 2026–2027 · HK1",
	start: "2026-09-07",
	week12End: "2026-11-29",
	examUntil: "2026-12-20"
};
var DAY_VI = [
	"Chủ nhật",
	"Thứ Hai",
	"Thứ Ba",
	"Thứ Tư",
	"Thứ Năm",
	"Thứ Sáu",
	"Thứ Bảy"
];
var DAY_SHORT = [
	"CN",
	"T2",
	"T3",
	"T4",
	"T5",
	"T6",
	"T7"
];
function parseIso(iso) {
	const [y, m, d] = iso.split("-").map(Number);
	return new Date(y, m - 1, d);
}
function addDays(iso, n) {
	const dt = parseIso(iso);
	dt.setDate(dt.getDate() + n);
	return toIso(dt);
}
function toIso(d) {
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function mondayOf(week) {
	return addDays(SEMESTER.start, (week - 1) * 7);
}
function fmtVi(iso, short = false) {
	const d = parseIso(iso);
	return `${short ? DAY_SHORT[d.getDay()] : DAY_VI[d.getDay()]} ${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}`;
}
function fmtRange(week) {
	const mon = mondayOf(week);
	const sun = addDays(mon, 6);
	return `${fmtVi(mon, true)} – ${fmtVi(sun, true)}`;
}
function sessionDates(week, klass) {
	const mon = mondayOf(week);
	const offsetFirst = klass.key === "F1" ? 1 : 2;
	const offsetSecond = klass.key === "F1" ? 3 : 4;
	const firstIso = addDays(mon, offsetFirst);
	const secondIso = addDays(mon, offsetSecond);
	return {
		first: {
			iso: firstIso,
			label: fmtVi(firstIso),
			short: fmtVi(firstIso, true)
		},
		second: {
			iso: secondIso,
			label: fmtVi(secondIso),
			short: fmtVi(secondIso, true)
		}
	};
}
function teachingWeekOf(iso = todayIso()) {
	const start = parseIso(SEMESTER.start);
	const d = parseIso(iso);
	const diff = Math.floor((d.getTime() - start.getTime()) / 864e5);
	if (diff < 0) return 0;
	const w = Math.floor(diff / 7) + 1;
	if (w > 12) return 13;
	return w;
}
function todayIso() {
	return new Intl.DateTimeFormat("en-CA", {
		timeZone: "Asia/Ho_Chi_Minh",
		year: "numeric",
		month: "2-digit",
		day: "2-digit"
	}).format(/* @__PURE__ */ new Date());
}
function nextSession(classKey, iso = todayIso()) {
	const klass = CLASSES[classKey];
	const today = parseIso(iso);
	for (let w = 1; w <= 12; w++) {
		const s = sessionDates(w, klass);
		for (const slot of ["first", "second"]) if (parseIso(s[slot].iso).getTime() >= today.getTime()) return {
			week: w,
			slot,
			date: s[slot],
			meeting: klass.meetings[slot]
		};
	}
	return null;
}
var WEEK_CALENDAR = Array.from({ length: 12 }, (_, i) => {
	const week = i + 1;
	const f1 = sessionDates(week, CLASSES.F1);
	const f2 = sessionDates(week, CLASSES.F2);
	return {
		week,
		range: fmtRange(week),
		monday: mondayOf(week),
		F1: f1,
		F2: f2
	};
});
//#endregion
export { teachingWeekOf as a, sessionDates as i, fmtRange as n, nextSession as r, WEEK_CALENDAR as t };
