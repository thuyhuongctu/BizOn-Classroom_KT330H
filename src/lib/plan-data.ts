export type Meeting = {
  day: string;
  periods: string;
  time: string;
  room: string;
  note: string;
};

export type ClassInfo = {
  key: "F1" | "F2";
  code: string;
  nhom: string;
  students: number;
  teams: number;
  leftover: string;
  classId: string;
  meetings: { first: Meeting; second: Meeting };
};

export type TeamSeed = { id: string; name: string; roles: string[] };

export type WeekPlan = {
  week: number;
  chapter: string;
  theory: string;
  practice: string;
  cycle: string;
  cycleKind: "prep" | "play" | "harvest" | "close";
  hours: string;
  clos: string[];
  gv: string[];
  sv: string[];
  debrief: string;
  textbook: string;
};

export const CLASSES: Record<"F1" | "F2", ClassInfo> = {
	F1: {
		key: "F1",
		code: "KT2322F1",
		nhom: "M01",
		students: 37,
		teams: 7,
		leftover: "5 đội × 5 và 2 đội × 6 (thành viên thứ sáu = CDO, phân tích dữ liệu)",
		classId: "KT330H-F1-2627",
		meetings: {
			first: {
				day: "Thứ Ba",
				periods: "6–8",
				time: "13:30–16:10",
				room: "104/KT (tiết 6–7) + Phòng máy 3.20 – Nhà học ATL (tiết 8)",
				note: "TKB chính thức bản v4 (06/9/2026). Tiết 6–7 lý thuyết ở 104/KT (13:30–15:10); tiết 8 (15:20–16:10) cả lớp chơi game ở Phòng máy 3.20 — Nhà học ATL, khác cơ sở với phòng lý thuyết. Giải lao chuyển tiết chỉ 10 phút, kết thúc tiết 7 là di chuyển ngay.",
			},
			second: {
				day: "Thứ Năm",
				periods: "1–3",
				time: "07:00–09:40",
				room: "103/KT (tiết 1–2) + Phòng máy tính 2 – Trường Kinh tế (tiết 3)",
				note: "TKB chính thức bản v4 (06/9/2026). Tiết 1–2 lý thuyết ở 103/KT (07:00–08:40); tiết 3 (08:50–09:40) cả lớp chơi game ở Phòng máy tính 2 – Trường Kinh tế, cùng cơ sở.",
			},
		},
	},
	F2: {
		key: "F2",
		code: "KT2322F2",
		nhom: "M02",
		students: 41,
		teams: 8,
		leftover: "7 đội × 5 và 1 đội × 6 (thành viên thứ sáu = CDO, phân tích dữ liệu)",
		classId: "KT330H-F2-2627",
		meetings: {
			first: {
				day: "Thứ Tư",
				periods: "1–3",
				time: "07:00–09:40",
				room: "105/KT (tiết 1–2) + Phòng máy tính 1 – Trường Kinh tế (tiết 3)",
				note: "TKB chính thức bản v4 (06/9/2026). Tiết 1–2 lý thuyết ở 105/KT; tiết 3 (08:50–09:40) cả lớp chơi game ở Phòng máy tính 1 – Trường Kinh tế.",
			},
			second: {
				day: "Thứ Sáu",
				periods: "1–3",
				time: "07:00–09:40",
				room: "202/KT (tiết 1–2) + Phòng máy tính 1 – Trường Kinh tế (tiết 3)",
				note: "TKB chính thức bản v4 (06/9/2026). Tiết 1–2 lý thuyết ở 202/KT; tiết 3 (08:50–09:40) cả lớp chơi game ở Phòng máy tính 1 – Trường Kinh tế. Lưu ý: 41 SV nhưng phòng máy chỉ có 40 máy — lớp trưởng gửi danh sách SV có laptop cá nhân cho GV trước 09/9/2026.",
			},
		},
	},
};

/** Tuần 12 (24–27/11) — buổi dự trữ + thi cuối kỳ. Theo TKB chính thức bản v4 (06/9/2026). */
export const EXAM_INFO: Record<
	"F1" | "F2",
	{ buffer: string; exam: string; examWarning?: string; examWarningEn?: string }
> = {
	F1: {
		buffer: "Thứ Ba 24/11/2026 · tiết 6–8 (13:30–16:10) · 104/KT — chỉ tổ chức nếu cần bù bài, GV sẽ báo trước.",
		exam: "Thứ Năm 26/11/2026 · tiết 1–3 (07:00–09:40) · Phòng máy tính 2 – Trường Kinh tế — đúng phòng và khung giờ học Thứ Năm thường lệ. Thi trên máy, có mặt trước ít nhất 10 phút, mang thẻ sinh viên.",
	},
	F2: {
		buffer: "Thứ Tư 25/11/2026 · tiết 1–3 (07:00–09:40) · 105/KT — chỉ tổ chức nếu cần bù bài, GV sẽ báo trước.",
		exam: "Thứ Sáu 27/11/2026 · tiết 6–8 (13:30–16:10) · Phòng máy 3.20 – Nhà học ATL.",
		examWarning:
			"ĐỔI GIỜ VÀ ĐỊA ĐIỂM THI: thi vào buổi CHIỀU (không phải sáng như lịch học thường lệ) và tại Nhà học ATL (không phải Trường Kinh tế). Sáng Thứ Sáu 27/11 KHÔNG có buổi học.",
		examWarningEn:
			"EXAM TIME & LOCATION CHANGE: the exam is in the AFTERNOON (not morning like the usual schedule) and at the ATL building (not the School of Economics). There is NO class on Friday morning 27/11.",
	},
};

/** Trợ giảng cấu phần thực hành — chính thức hoá từ TKB bản v4 (06/9/2026), không đổi lịch/phòng so với v3. */
export const TA_INFO = {
	vi: "Trợ giảng cấu phần thực hành: NCS Đỗ Thuỳ Hương. Có mặt tại tất cả các buổi diễn ra ở phòng máy tính — buổi chuẩn bị kỹ thuật tuần 1, thực hành tuần 2–8 và tuần 11, buổi thi kết thúc học phần. Sinh viên liên hệ trợ giảng cho các vấn đề về tài khoản, phần mềm và vận hành game mô phỏng.",
	en: "Teaching assistant for the practical component: NCS Đỗ Thuỳ Hương. Present at every computer-lab session — the week-1 technical setup, hands-on sessions weeks 2–8 and 11, and the final exam. Students should contact the TA for account, software and simulation-game issues.",
};

export const ROLES5 = [
	"CEO",
	"CMO",
	"COO",
	"CFO",
	"SEC",
];
export const ROLES6 = [
	"CEO",
	"CMO",
	"COO",
	"CFO",
	"SEC",
	"CDO",
];
export const F1_TEAMS: TeamSeed[] = [
	{
		id: "F1-T01",
		name: "Đội 1",
		roles: [
			"CEO",
			"CMO",
			"COO",
			"CFO",
			"SEC",
		],
	},
	{
		id: "F1-T02",
		name: "Đội 2",
		roles: [
			"CEO",
			"CMO",
			"COO",
			"CFO",
			"SEC",
		],
	},
	{
		id: "F1-T03",
		name: "Đội 3",
		roles: [
			"CEO",
			"CMO",
			"COO",
			"CFO",
			"SEC",
		],
	},
	{
		id: "F1-T04",
		name: "Đội 4",
		roles: [
			"CEO",
			"CMO",
			"COO",
			"CFO",
			"SEC",
		],
	},
	{
		id: "F1-T05",
		name: "Đội 5",
		roles: [
			"CEO",
			"CMO",
			"COO",
			"CFO",
			"SEC",
		],
	},
	{
		id: "F1-T06",
		name: "Đội 6",
		roles: [
			"CEO",
			"CMO",
			"COO",
			"CFO",
			"SEC",
			"CDO",
		],
	},
	{
		id: "F1-T07",
		name: "Đội 7",
		roles: [
			"CEO",
			"CMO",
			"COO",
			"CFO",
			"SEC",
			"CDO",
		],
	},
];
export const F2_TEAMS: TeamSeed[] = [
	{
		id: "F2-T01",
		name: "Đội 1",
		roles: [
			"CEO",
			"CMO",
			"COO",
			"CFO",
			"SEC",
		],
	},
	{
		id: "F2-T02",
		name: "Đội 2",
		roles: [
			"CEO",
			"CMO",
			"COO",
			"CFO",
			"SEC",
		],
	},
	{
		id: "F2-T03",
		name: "Đội 3",
		roles: [
			"CEO",
			"CMO",
			"COO",
			"CFO",
			"SEC",
		],
	},
	{
		id: "F2-T04",
		name: "Đội 4",
		roles: [
			"CEO",
			"CMO",
			"COO",
			"CFO",
			"SEC",
		],
	},
	{
		id: "F2-T05",
		name: "Đội 5",
		roles: [
			"CEO",
			"CMO",
			"COO",
			"CFO",
			"SEC",
		],
	},
	{
		id: "F2-T06",
		name: "Đội 6",
		roles: [
			"CEO",
			"CMO",
			"COO",
			"CFO",
			"SEC",
		],
	},
	{
		id: "F2-T07",
		name: "Đội 7",
		roles: [
			"CEO",
			"CMO",
			"COO",
			"CFO",
			"SEC",
		],
	},
	{
		id: "F2-T08",
		name: "Đội 8",
		roles: [
			"CEO",
			"CMO",
			"COO",
			"CFO",
			"SEC",
			"CDO",
		],
	},
];
export const ROLES = [
	{
		id: "CEO",
		title: "CEO — Nhà lãnh đạo tầm nhìn",
		job: "Điều phối thảo luận, chạy tối đa 2 kịch bản Nếu–Thì, commit và khóa quyết định.",
		evidence: "Biên bản quyết định cuối; thời điểm commit; giải thích lựa chọn khi bất đồng.",
		ask: "Đội đang tối ưu thị phần hay lợi nhuận? Ai chịu trách nhiệm nếu commit sai?",
	},
	{
		id: "CMO",
		title: "CMO — Phù thủy marketing",
		job: "Đề xuất giá bán và ngân sách marketing; đọc dự báo thị phần; định vị so với 3 đối thủ AI.",
		evidence: "Phân tích khách hàng, giá, 4P, dự báo thị phần trước commit.",
		ask: "Giá 150.000₫ là tham chiếu thị trường. Lệch giá thì co giãn sẽ ăn vào sức hút ra sao?",
	},
	{
		id: "COO",
		title: "COO — Chuyên gia vận hành",
		job: "Sản lượng, nhân sự, đào tạo, OEE và rủi ro tồn kho / thiếu hàng.",
		evidence: "Bảng công suất, chi phí 45.000₫/sp (chưa gồm nhân công), lương 1 triệu/người/vòng, năng suất 70 sp/người.",
		ask: "Nếu bán không hết, tồn kho và dòng tiền đổi thế nào? Thiếu người thì OEE rơi bao nhiêu?",
	},
	{
		id: "CFO",
		title: "CFO — Chiến lược gia tài chính",
		job: "Vốn chủ / vay (lãi 8,5%/vòng trên thấu chi), R&D, dòng tiền, CVP, tỷ số.",
		evidence: "Dự báo P&L và cash; phân tích CVP; lý do vay hay không vay.",
		ask: "R&D tác động tức thời hay tích lũy? Vay để bù thiếu hụt ngắn hạn có bền không?",
	},
	{
		id: "SEC",
		title: "SEC — Thư ký pháp chế",
		job: "Đọc biến cố thị trường, ghi nhật ký đội, giữ kỷ luật thời gian trước khi CEO khóa.",
		evidence: "Nhật ký 6 vòng/mùa (12 vòng cả kỳ): giả định, quyết định, kết quả, sai lệch, bài học, cách dùng Lumina.",
		ask: "Biến cố vòng này đổi giả định nào? Đội đã bác bỏ khuyến nghị AI nào, vì sao?",
	},
	{
		id: "CDO",
		title: "CDO — Trưởng phân tích dữ liệu",
		job: "Vai bổ sung, chỉ ở đội 6 người: giữ Nhật ký đội, lập báo cáo «Chi phí đối thủ», trình chiếu file Excel hoà vốn và thay số tại chỗ khi CFO pitch trước Hội đồng.",
		evidence: "Nhật ký đội; báo cáo Chi phí đối thủ (Tuần 5); file Excel hoà vốn dùng khi pitch (Tuần 9–10).",
		ask: "Đối thủ đang đặt giá/marketing thế nào so với đội mình? Nếu Hội đồng hỏi ngược một con số, CFO có tra được ngay không?",
	},
];
export const WEEKS: WeekPlan[] = [
	{
		week: 1,
		chapter: "Giới thiệu học phần + cài đặt BizOn",
		theory: "Buổi A: cài đặt phần mềm, cấp tài khoản, chia đội cố định cả kỳ (F1: 7 đội, F2: 8 đội), đặt tên công ty và khẩu hiệu; khảo sát trước (phiếu T0).",
		practice: "Buổi B: chơi thử làm quen giao diện và 5 vai trò (chưa tính điểm — chưa nhập Mã lớp); nhận Mã lớp để dùng từ Tuần 2.",
		cycle: "Chuẩn bị",
		cycleKind: "prep",
		hours: "2 tiết phòng máy (chuẩn bị)",
		clos: [
			"CO1",
			"CO11",
			"CO12",
		],
		gv: [
			"Công bố kế hoạch 12 tuần, mô hình 2 Mùa × 6 vòng và rubric (xem trang Đánh giá — đang chờ đối chiếu đề cương chính thức).",
			"Tạo 2 Mã lớp riêng (KT330H-F1-2627, KT330H-F2-2627); chia đội cố định cả kỳ; đội 6 người có thêm vai CDO.",
			"Buổi A: chỉ cài đặt + chia đội + khảo sát, chưa phát Mã lớp. Buổi B: phát Mã lớp, cho chơi thử 1 vòng không tính điểm.",
			"F1 Thứ Ba: biến thể 40 phút do di chuyển 104/KT → Phòng máy 3.20 (ATL) — làm phần chia đội/Class ID trước.",
		],
		sv: [
			"Làm phiếu khảo sát trước; vào đúng đội đã chia; đặt tên công ty + khẩu hiệu; chơi thử 1 vòng ở buổi B.",
		],
		debrief: "Luật nào còn mơ hồ? Vai nào đội chưa hiểu nhiệm vụ?",
		textbook: "Giới thiệu học phần · mô hình kinh doanh",
	},
	{
		week: 2,
		chapter: "Mùa 1 — Vòng 1–2",
		theory: "Buổi A · Mùa 1 Vòng 1 — Giá bán và độ co giãn của cầu.",
		practice: "Buổi B · Mùa 1 Vòng 2 — Cấu trúc chi phí và điểm hoà vốn.",
		cycle: "Mùa 1 · V1–2",
		cycleKind: "play",
		hours: "2 tiết phòng máy (1 vòng/buổi)",
		clos: [
			"CO5",
			"CO8",
			"CO9",
			"CO11",
		],
		gv: [
			"Nhịp 50 phút/vòng: 0–5 khởi động, 5–10 biến cố, 10–15 họp đội, 15–18 khoá quyết định, 18–25 đọc kết quả, 25–40 liên hệ lý thuyết, 40–50 chốt buổi.",
			"F1 Thứ Ba dùng biến thể 40 phút: liên hệ lý thuyết rút còn 8 phút, phần còn lại chuyển lên 2 tiết lý thuyết trước đó; Nhật ký đội thành bài về nhà.",
			"Không cho CEO ôm hết quyết định — mỗi vai trình bày 1 khuyến nghị trước khi họp.",
		],
		sv: [
			"Nhập quyết định đúng vai; ghi Nhật ký đội (SEC); tính điểm hoà vốn (CFO/COO) trước khi commit vòng 2.",
		],
		debrief: "Đội bạn đặt giá dựa trên giả định co giãn nào? Nếu sai, lãi đổi ra sao?",
		textbook: "Độ co giãn giá · định phí, biến phí, BEP, biên an toàn",
	},
	{
		week: 3,
		chapter: "Mùa 1 — Vòng 3–4",
		theory: "Buổi A · Mùa 1 Vòng 3 — Marketing và định vị thương hiệu.",
		practice: "Buổi B · Mùa 1 Vòng 4 — Vận hành, nhân sự và năng suất.",
		cycle: "Mùa 1 · V3–4",
		cycleKind: "play",
		hours: "2 tiết phòng máy (1 vòng/buổi)",
		clos: [
			"CO7",
			"CO8",
			"CO10",
			"CO11",
		],
		gv: [
			"CMO trình bày phân khúc + định vị trước khi đổi giá/marketing.",
			"COO canh chi phí điện năng và năng suất nhân sự — không tăng sản lượng mà không tính công suất.",
		],
		sv: [
			"Phiếu định vị 1 trang; kế hoạch nhân sự/bảo trì; Nhật ký đội tiếp tục cập nhật.",
		],
		debrief: "Thị phần tăng nhưng lãi giảm — đội có đang đánh đổi đúng mục tiêu không?",
		textbook: "Phân khúc, định vị, ngân sách marketing · năng suất, bảo trì, chi phí điện năng",
	},
	{
		week: 4,
		chapter: "Mùa 1 — Vòng 5–6",
		theory: "Buổi A · Mùa 1 Vòng 5 — Nguồn vốn và đòn bẩy tài chính.",
		practice: "Buổi B · Mùa 1 Vòng 6 — Biến cố thị trường và quản trị rủi ro.",
		cycle: "Mùa 1 · V5–6",
		cycleKind: "play",
		hours: "2 tiết phòng máy (1 vòng/buổi)",
		clos: [
			"CO9",
			"CO10",
			"CO11",
		],
		gv: [
			"CFO trình bày lựa chọn vốn chủ / vay 8,5% trước khi COO quyết định công suất.",
			"Vòng 6 kết thúc Mùa 1 — nhắc đội chuẩn bị số liệu cho Sơ kết tuần 5.",
		],
		sv: [
			"Ghi rõ nguồn vốn dùng mỗi vòng (vốn chủ/vay); ghi nhận biến cố và cách ứng phó vào Nhật ký.",
		],
		debrief: "Vay 8,5%/vòng giúp hay hại đội bạn ở Mùa 1? Khi nào nên dùng đòn bẩy?",
		textbook: "Vốn chủ so với vay 8,5% · dòng tiền · nhận diện và ứng phó rủi ro",
	},
	{
		week: 5,
		chapter: "Sơ kết Mùa 1 & khởi động Mùa 2",
		theory: "Buổi A — Sơ kết Mùa 1: phân tích tab «Tổng kết», nộp báo cáo «Chi phí đối thủ» của đội (căn cứ 10% điểm Tuần 5).",
		practice: "Buổi B — Đổi vai trong đội (mỗi SV trải nghiệm ít nhất 2 «ghế» cả kỳ) + Vòng khởi động Mùa 2.",
		cycle: "Sơ kết",
		cycleKind: "harvest",
		hours: "2 tiết phòng máy (sơ kết + đổi vai)",
		clos: [
			"CO9",
			"CO11",
			"CO12",
		],
		gv: [
			"Thu báo cáo «Chi phí đối thủ» theo đội — CDO (đội 6 người) hoặc SEC (đội 5 người) chủ trì.",
			"Công bố luân chuyển vai nội bộ đội trước khi vào Vòng khởi động Mùa 2.",
		],
		sv: [
			"Phân tích kết quả 6 vòng Mùa 1 (thị phần, lợi nhuận, cờ); nộp báo cáo Chi phí đối thủ; nhận vai mới cho Mùa 2.",
		],
		debrief: "Kết quả Mùa 1 khác dự báo vì biến cố, đối thủ, hay sai giả định của đội?",
		textbook: "Phân tích số liệu kinh doanh · phản tư chiến lược",
	},
	{
		week: 6,
		chapter: "Mùa 2 — Vòng 1–2",
		theory: "Buổi A · Mùa 2 Vòng 1 — Giá bán và độ co giãn của cầu.",
		practice: "Buổi B · Mùa 2 Vòng 2 — Cấu trúc chi phí và điểm hoà vốn.",
		cycle: "Mùa 2 · V1–2",
		cycleKind: "play",
		hours: "2 tiết phòng máy (1 vòng/buổi)",
		clos: [
			"CO5",
			"CO8",
			"CO9",
			"CO11",
		],
		gv: [
			"Cùng khái niệm Mùa 1 nhưng ở mức vận dụng cao hơn — hỏi đội thay đổi gì so với Mùa 1 với vai trò mới.",
		],
		sv: [
			"So sánh cách ra quyết định ở vai mới với vai cũ của Mùa 1; ghi vào Nhật ký đội.",
		],
		debrief: "Với vai mới, đội có ra quyết định khác Mùa 1 không? Vì sao?",
		textbook: "Lặp lại khái niệm Mùa 1 ở mức vận dụng cao hơn",
	},
	{
		week: 7,
		chapter: "Mùa 2 — Vòng 3–4",
		theory: "Buổi A · Mùa 2 Vòng 3 — Marketing và định vị thương hiệu.",
		practice: "Buổi B · Mùa 2 Vòng 4 — Vận hành, nhân sự và năng suất.",
		cycle: "Mùa 2 · V3–4",
		cycleKind: "play",
		hours: "2 tiết phòng máy (1 vòng/buổi)",
		clos: [
			"CO7",
			"CO8",
			"CO10",
			"CO11",
		],
		gv: [
			"Đẩy đội tối ưu hoá phối thức: đánh đổi chi phí – sản lượng rõ ràng hơn Mùa 1.",
		],
		sv: [
			"Ghi rõ đánh đổi chi phí–sản lượng đã chọn và lý do trong Nhật ký.",
		],
		debrief: "Đội đang tối ưu chi phí hay sản lượng? Đánh đổi đó có nhất quán với Mùa 1 không?",
		textbook: "Tối ưu hoá phối thức · đánh đổi chi phí – sản lượng",
	},
	{
		week: 8,
		chapter: "Mùa 2 — Vòng 5–6 & chốt hai mùa",
		theory: "Buổi A · Mùa 2 Vòng 5 — Nguồn vốn và đòn bẩy tài chính.",
		practice: "Buổi B · Mùa 2 Vòng 6 — Biến cố và quản trị rủi ro; sau đó chốt bảng tổng sắp hai mùa (Mùa 1 so với Mùa 2).",
		cycle: "Mùa 2 · V5–6",
		cycleKind: "play",
		hours: "2 tiết phòng máy (1 vòng/buổi + chốt bảng)",
		clos: [
			"CO9",
			"CO10",
			"CO11",
			"CO12",
		],
		gv: [
			"Không spoil công thức — để đội tự giải thích vì sao thắng/thua qua 2 mùa.",
			"Sao lưu xếp hạng, số cờ, P&L của cả 2 mùa ngay khi khoá vòng cuối.",
			"Nhắc cả lớp chuẩn bị pitch xin vốn tại Đại hội Cổ đông Tuần 9–10 (khung PASTOR, checklist 12 mục).",
		],
		sv: [
			"So sánh cấu trúc vốn và kết quả Mùa 1 với Mùa 2; bắt đầu chuẩn bị nội dung pitch theo khung PASTOR.",
		],
		debrief: "Mức tiến bộ Mùa 2 so với Mùa 1 đến từ năng lực đội hay từ may rủi thị trường?",
		textbook: "Cấu trúc vốn · đo lường mức tiến bộ Mùa 1 so với Mùa 2",
	},
	{
		week: 9,
		chapter: "Đại hội Cổ đông — Phiên A & B",
		theory: "Buổi A · Phiên A — Khai mạc Đại hội, giới thiệu Hội đồng đầu tư, bốc thăm thứ tự pitch; huấn luyện khung PASTOR và checklist 12 mục; duyệt thử 2 đội với góp ý công khai.",
		practice: "Buổi B · Phiên B — Sàn đấu vòng 1: 4 đội × (pitch 7 phút + Q&A 8 phút + tự chấm nóng 3 phút); nghỉ chiến thuật 10 phút giữa chừng.",
		cycle: "Đại hội CĐ 1",
		cycleKind: "close",
		hours: "6 tiết Đại hội Cổ đông (phòng lý thuyết, không phòng máy)",
		clos: [
			"CO1",
			"CO11",
			"CO12",
		],
		gv: [
			"Quá giờ 30 giây trừ ngay 5 điểm — kỷ luật thời gian giữ nguyên từ kịch bản gốc. Dặn SV mặc lịch sự như gặp nhà đầu tư thật.",
			"Chưa đủ 10/12 mục checklist thì báo CEO đổi nội dung hoặc giảm cam kết trước khi lên sàn đấu.",
		],
		sv: [
			"Hoàn thiện checklist 12 mục; luyện pitch đúng thời lượng theo vai (CEO 30s hook → CMO 90s thị trường → CFO 90s Excel hoà vốn → COO 60s vận hành → CEO 90s chốt).",
		],
		debrief: "Ba con số mỗi thành viên phải thuộc: VỐN XIN · BEP mỗi tháng · LỢI NHUẬN MỤC TIÊU — đội bạn đã thuộc chưa?",
		textbook: "Lập kế hoạch kinh doanh · thuyết phục nhà đầu tư · BEP và biên an toàn",
	},
	{
		week: 10,
		chapter: "Đại hội Cổ đông — Phiên C & D",
		theory: "Buổi A · Phiên C — Sàn đấu vòng 2: 3–4 đội còn lại, cùng thể thức; bổ sung phản biện chéo giữa các đội.",
		practice: "Buổi B · Phiên D — Hội đồng nghị án, công bố mức cấp vốn (50–250 triệu giả định); các đội ký «Sổ Vốn» và lập cam kết SMART 6 tháng; GV nạp vốn vào Chế độ giảng viên làm két sắt cho Vòng Chung kết.",
		cycle: "Đại hội CĐ 2",
		cycleKind: "close",
		hours: "6 tiết Đại hội Cổ đông (phòng lý thuyết, không phòng máy)",
		clos: [
			"CO1",
			"CO11",
			"CO12",
		],
		gv: [
			"Sau Phiên D: nạp đúng số vốn đã công bố cho từng đội vào tab Giảng viên trước Tuần 11 — đây là két sắt khởi điểm Vòng Chung kết.",
			"Lưu «Sổ Vốn» và cam kết SMART của từng đội để đối chiếu ở Tổng kết Tuần 11.",
		],
		sv: [
			"Pitch (nếu chưa đến lượt ở Phiên B); nghe phản biện chéo; ký Sổ Vốn và viết cam kết SMART 6 tháng sau khi biết mức cấp vốn.",
		],
		debrief: "Mức vốn Hội đồng cấp có phản ánh đúng chất lượng dự án không, hay còn yếu tố khác?",
		textbook: "Thẩm định dự án · phân bổ vốn 4 khoản · cam kết SMART",
	},
	{
		week: 11,
		chapter: "Vòng Chung kết & Tổng kết giải đấu",
		theory: "Buổi A — VÒNG CHUNG KẾT: toàn lớp chơi đồng bộ một vòng duy nhất, két sắt khởi điểm bằng đúng số vốn Hội đồng đã cấp ở Phiên D.",
		practice: "Buổi B — Tổng kết giải đấu: so sánh Mùa 1 với Mùa 2 của chính đội mình, trao huy hiệu, phát phiếu khảo sát sau (T2), hướng dẫn ôn thi.",
		cycle: "Chung kết",
		cycleKind: "close",
		hours: "2 tiết (Chung kết + Tổng kết)",
		clos: [
			"CO1",
			"CO9",
			"CO11",
			"CO12",
		],
		gv: [
			"Đội được cấp vốn cao có lợi thế nhưng cũng chịu áp lực kỳ vọng — đúng logic đầu tư thật, đây là lý do pitch Tuần 9–10 vẫn có ý nghĩa dù không mở màn.",
			"Phát phiếu khảo sát sau (T2); hướng dẫn ôn thi cho Tuần 12.",
		],
		sv: [
			"Chơi Vòng Chung kết với vốn đã được cấp; so sánh tiến bộ Mùa 1 và Mùa 2 của chính đội mình; làm khảo sát T2.",
		],
		debrief: "So sánh Mùa 1 và Mùa 2 của chính đội bạn: phần cải thiện đến từ năng lực hay từ may rủi?",
		textbook: "Tích hợp toàn bộ khái niệm · đánh giá hiệu quả sử dụng vốn",
	},
];
/** Nhịp 1 vòng = 1 buổi 50 phút (Kịch bản v1, Mục IV) — thay nhịp 150 phút cũ vì mỗi buổi chỉ còn
 * đúng 1 tiết phòng máy. F1 Thứ Ba dùng biến thể 40 phút riêng (xem ghi chú tuần trong WEEKS). */
export const CYCLE_STEPS = [
	{
		id: "start",
		label: "Khởi động",
		minutes: 5,
		gv: "Đăng nhập, chiếu bảng tổng sắp, nhắc Mã lớp.",
		sv: "Vào game, kiểm tra tiền mặt, tồn kho, thương hiệu, cờ, thứ hạng.",
	},
	{
		id: "market",
		label: "Biến cố thị trường",
		minutes: 5,
		gv: "Im lặng. Quan sát đội nào bỏ qua biến cố.",
		sv: "SEC đọc và tóm tắt biến cố cho đội.",
	},
	{
		id: "talk",
		label: "Họp đội",
		minutes: 5,
		gv: "Kiểm soát sự tham gia. Không để CEO tự kéo thanh.",
		sv: "Nghe đề xuất của 4 cộng sự ảo, thảo luận theo vai.",
	},
	{
		id: "commit",
		label: "Khoá quyết định",
		minutes: 3,
		gv: "Cảnh báo còn 1 phút rồi khoá vòng (ERR_ROUND_LOCKED).",
		sv: "Nhập quyết định và khoá vòng ĐỒNG BỘ bằng Mã lớp.",
	},
	{
		id: "result",
		label: "Đọc kết quả",
		minutes: 7,
		gv: "Mở Đấu trường thị phần. Không tuyên bố đội thắng trước khi bấm «Vì sao?».",
		sv: "Đấu trường thị phần; mỗi đội bấm «Vì sao?» của Lumina.",
	},
	{
		id: "theory-link",
		label: "Liên hệ lý thuyết",
		minutes: 15,
		gv: "Nối kết quả vòng chơi với khái niệm của hai tiết lý thuyết vừa học. F1 Thứ Ba: rút còn 8 phút, phần còn lại chuyển lên 2 tiết lý thuyết trước đó.",
		sv: "Nghe liên hệ lý thuyết; ghi câu hỏi nếu chưa rõ.",
	},
	{
		id: "close",
		label: "Chốt buổi",
		minutes: 10,
		gv: "Cập nhật bảng tổng sắp. Giao Nhật ký đội nếu chưa xong (F1 Thứ Ba: thành bài về nhà).",
		sv: "Ghi Nhật ký đội, dự đoán vòng sau, cập nhật bảng tổng sắp.",
	},
];
export const CLOS = [
	{
		id: "CO1",
		kind: "Kiến thức",
		text: "Mô tả doanh nhân làm gì và chỗ đứng trên thị trường.",
	},
	{
		id: "CO2",
		kind: "Kiến thức",
		text: "Nhận diện và đánh giá cơ hội khả thi để khởi sự.",
	},
	{
		id: "CO3",
		kind: "Kiến thức",
		text: "Lợi thế cạnh tranh, phân khúc, nghiên cứu để thích ứng sản phẩm.",
	},
	{
		id: "CO4",
		kind: "Kiến thức",
		text: "Xây dựng business plan: marketing, vận hành, nhân sự, tài chính.",
	},
	{
		id: "CO5",
		kind: "Kỹ năng",
		text: "Cost/benefit, SWOT, feasibility để quyết định.",
	},
	{
		id: "CO6",
		kind: "Kỹ năng",
		text: "Lập Business Model Canvas (9 ô).",
	},
	{
		id: "CO7",
		kind: "Kỹ năng",
		text: "Phân khúc, nghiên cứu, định vị — kế hoạch nghiên cứu thị trường.",
	},
	{
		id: "CO8",
		kind: "Kỹ năng",
		text: "4P và phân tích hòa vốn cho marketing plan.",
	},
	{
		id: "CO9",
		kind: "Kỹ năng",
		text: "EOU, NPV, nợ/vốn, dòng tiền, tỷ số, chi phí khởi sự.",
	},
	{
		id: "CO10",
		kind: "Kỹ năng",
		text: "Vận hành và việc của nhà quản lý để hoàn tất plan.",
	},
	{
		id: "CO11",
		kind: "Kỹ năng",
		text: "Giao tiếp, teamwork, giải quyết vấn đề, lãnh đạo.",
	},
	{
		id: "CO12",
		kind: "Thái độ",
		text: "Thái độ, tự chủ, trách nhiệm, đạo đức, phục vụ cộng đồng.",
	},
];
/** ⚠️ Đề xuất từ «Kịch bản BizOn hiệu chỉnh bản v1» (06/9/2026, do Hương soạn) — CHƯA đối chiếu
 * với đề cương chi tiết học phần KT330H đã ban hành, và KHÁC với cơ cấu 10/20/20/50 do Thầy Phan
 * Anh Tú chốt trước đó (thảo luận 10% + điểm game 20% + dự án khởi nghiệp 20% + thi 50%). Nếu đề
 * cương đã cố định trọng số thì thiết kế đánh giá này phải điều chỉnh theo, chứ không phải ngược
 * lại — xem DIFFS để biết lý do đổi và mức độ chắc chắn. */
export const RUBRIC_COURSE_CAVEAT =
	"Bảng dưới đây là đề xuất từ Kịch bản BizOn hiệu chỉnh bản v1 (06/9/2026) — CHƯA đối chiếu với đề cương chi tiết học phần KT330H đã ban hành, và khác với cơ cấu 10/20/20/50 (thảo luận 10% + game 20% + dự án khởi nghiệp 20% + thi 50%) Thầy Phan Anh Tú đã chốt trước đó qua Zalo. Đặc biệt trọng số thi cuối kỳ ở đây là 25%, không phải 50%. Cần đối chiếu lại với đề cương chính thức trước khi dùng để chấm điểm thật.";
export const RUBRIC_COURSE = [
	{
		id: "journal",
		name: "Nhật ký quyết định hằng tuần",
		weight: 15,
		note: "Tuần 2–8 (cả Mùa 1 và Mùa 2). Căn cứ: Nhật ký đội trong game — giả định, quyết định, kết quả, sai lệch, bài học.",
		clos: "CO9, CO11, CO12",
	},
	{
		id: "midterm",
		name: "Sơ kết Mùa 1 + báo cáo «Chi phí đối thủ»",
		weight: 10,
		note: "Tuần 5. Báo cáo nộp theo đội, dựa trên tab «Tổng kết» sau 6 vòng Mùa 1.",
		clos: "CO4, CO9",
	},
	{
		id: "progress",
		name: "Mức tiến bộ Mùa 2 so với Mùa 1",
		weight: 10,
		note: "Tuần 8. Căn cứ bảng tổng sắp hai mùa — đo tiến bộ, tách may rủi khỏi năng lực.",
		clos: "CO9, CO11",
	},
	{
		id: "pitch",
		name: "Pitch xin vốn tại Đại hội Cổ đông",
		weight: 25,
		note: "Tuần 9–10, 4 phiên A–D. Chấm của Hội đồng đầu tư + tự chấm nóng 4 tiêu chí (khả thi tài chính · độc đáo · đội ngũ · trình bày).",
		clos: "CO1–CO12",
	},
	{
		id: "final-round",
		name: "Vòng Chung kết + xếp hạng giải đấu",
		weight: 10,
		note: "Tuần 11, buổi A. Két sắt khởi điểm = vốn Hội đồng đã cấp ở Phiên D. Căn cứ kết quả vòng chung kết.",
		clos: "CO1–CO9",
	},
	{
		id: "exam",
		name: "Thi kết thúc học phần trên máy",
		weight: 25,
		note: "Tuần 12. Ván cá nhân 6 vòng nhịp nhanh (42 phút) + bài phân tích viết trên máy (60 phút). ⚠️ Khác quy định CTU 50% đã biết trước đó — cần xác nhận lại.",
		clos: "CO1–CO9, CO11, CO12",
	},
	{
		id: "survey",
		name: "Khảo sát trước–sau và chuyên cần",
		weight: 5,
		note: "Tuần 1 và Tuần 11. Phiếu khảo sát + điểm danh.",
		clos: "CO12",
	},
];
/** Giải phẫu pitch 7 phút theo vai — Đại hội Cổ đông, Tuần 9–10 (Kịch bản v1, Mục V). */
export const PITCH_TIMING = [
	{
		seconds: 30,
		role: "CEO",
		content: "Hook mở màn và trình bày vấn đề của khách hàng.",
	},
	{
		seconds: 90,
		role: "CMO",
		content: "Kích thước thị trường và chân dung khách hàng.",
	},
	{
		seconds: 90,
		role: "CFO",
		content: "Bức tranh tài chính — chiếu trực tiếp file Excel hoà vốn (BEP, biên an toàn), sẵn sàng thay số tại chỗ khi Hội đồng yêu cầu.",
	},
	{
		seconds: 60,
		role: "COO",
		content: "Cỗ máy vận hành và cấu trúc chi phí.",
	},
	{
		seconds: 90,
		role: "CEO",
		content: "Lời chốt, yêu cầu cấp vốn và cam kết SMART.",
	},
];
/** Khung nội dung pitch PASTOR (Kịch bản v1, Mục V) — giữ nguyên từ kịch bản gốc. */
export const PASTOR = [
	{ letter: "P", word: "Problem", vi: "Nỗi đau của khách hàng." },
	{ letter: "A", word: "Answer", vi: "Giải pháp của đội." },
	{ letter: "S", word: "Story", vi: "Một câu chuyện thật — đắt hơn mười bảng thống kê." },
	{ letter: "T", word: "Traction", vi: "BEP, biên an toàn, biên đóng góp." },
	{ letter: "O", word: "Offer", vi: "Xin chính xác bao nhiêu, tiêu vào ba việc gì." },
	{ letter: "R", word: "Response", vi: "Đề nghị Hội đồng ký sổ ngay." },
];
/** Checklist trước pitch 12 mục — chưa đủ 10/12 thì báo CEO đổi nội dung hoặc giảm cam kết. */
export const PITCH_CHECKLIST_12 = [
	"File Excel hoà vốn mở sẵn, đã kiểm tra chạy được",
	"USB dự phòng có bản sao slide + Excel",
	"In 5 bản hồ sơ giấy cho Hội đồng",
	"Mỗi vai thuộc đúng phần và đúng thời lượng của mình",
	"CEO thuộc lòng câu hook mở màn",
	"CMO có số liệu thị trường + chân dung khách hàng cụ thể",
	"CFO thuộc BEP, biên an toàn, biên đóng góp — trả lời được không cần nhìn giấy",
	"COO nêu được cấu trúc chi phí chính",
	"Số tiền xin vốn chính xác + 3 việc sẽ tiêu vào",
	"Cam kết SMART đã viết sẵn (6 tháng)",
	"Trang phục lịch sự như gặp nhà đầu tư thật",
	"Đã canh giờ thử ít nhất 1 lần, không vượt 7 phút",
];
/** 4 tiêu chí tự chấm nóng ngay sau mỗi lượt pitch, khi cảm xúc còn tươi — mỗi tiêu chí 2,5 điểm. */
export const PITCH_SELF_SCORE = [
	"Khả thi tài chính",
	"Độc đáo",
	"Đội ngũ",
	"Trình bày",
];
/** Ba con số mỗi thành viên phải thuộc lòng khi bước vào Đại hội Cổ đông. */
export const PITCH_KEY_NUMBERS = ["VỐN XIN", "BEP mỗi tháng", "LỢI NHUẬN MỤC TIÊU"];
/** Bốn phiên Đại hội Cổ đông, Tuần 9–10 (Kịch bản v1, Mục V). buổi: "first" | "second" ứng với
 * klass.meetings.first/second — week 9 hoặc 10 tuỳ phiên. */
export const DAI_HOI_PHIEN = [
	{
		id: "A",
		week: 9,
		buoi: "first" as const,
		title: "Khai mạc & huấn luyện",
		content: "Khai mạc Đại hội, giới thiệu Hội đồng đầu tư, bốc thăm thứ tự pitch; huấn luyện khung PASTOR và checklist 12 mục; duyệt thử 2 đội với góp ý công khai.",
	},
	{
		id: "B",
		week: 9,
		buoi: "second" as const,
		title: "Sàn đấu vòng 1",
		content: "4 đội × (pitch 7 phút + Q&A 8 phút + tự chấm nóng 3 phút); nghỉ chiến thuật 10 phút giữa chừng.",
	},
	{
		id: "C",
		week: 10,
		buoi: "first" as const,
		title: "Sàn đấu vòng 2",
		content: "3–4 đội còn lại, cùng thể thức; bổ sung phản biện chéo giữa các đội.",
	},
	{
		id: "D",
		week: 10,
		buoi: "second" as const,
		title: "Hội đồng nghị án",
		content: "Công bố mức cấp vốn (50–250 triệu giả định); các đội ký «Sổ Vốn» và lập cam kết SMART 6 tháng; giảng viên nạp vốn vào Chế độ giảng viên làm két sắt cho Vòng Chung kết.",
	},
];
/** Kỷ luật thời gian pitch, giữ nguyên từ kịch bản gốc: quá giờ 30 giây trừ ngay 5 điểm. */
export const PITCH_TIME_PENALTY =
	"Quá giờ 30 giây trừ ngay 5 điểm, đồng hồ reo và phần trình bày bị ngắt. Sinh viên mặc trang phục lịch sự như gặp nhà đầu tư thật.";
/** Vòng Chung kết (Tuần 11, buổi A) và Tổng kết giải đấu (buổi B) — Kịch bản v1, Mục VI. */
export const VONG_CHUNG_KET = {
	final: "Toàn lớp chơi đồng bộ một vòng duy nhất, két sắt khởi điểm bằng chính số vốn Hội đồng đã cấp ở Phiên D. Đội được cấp vốn cao có lợi thế nhưng cũng chịu áp lực kỳ vọng — đúng logic đầu tư thật.",
	wrap: "So sánh Mùa 1 với Mùa 2 của chính đội mình (thước đo tiến bộ, tách may rủi khỏi năng lực), trao huy hiệu, phát phiếu khảo sát sau, hướng dẫn ôn thi.",
	exam: "Thi kết thúc học phần (Tuần 12): ván cá nhân 6 vòng nhịp nhanh 7 phút/vòng (42 phút) + bài phân tích viết trên máy 60 phút, yêu cầu giải thích quyết định bằng khái niệm độ co giãn giá, điểm hoà vốn và đòn bẩy tài chính. Đây là buổi duy nhất mỗi SV cần một máy riêng.",
};
/** Bốn việc GV cần chuẩn bị trước Tuần 1 (Kịch bản v1, Mục VIII). */
export const PREP_BEFORE_WEEK1 = [
	{ item: "Tạo hai Mã lớp riêng", detail: "Một Mã lớp cho F1 và một cho F2, để bảng tổng sắp hai nhóm không lẫn nhau.", deadline: "Trước 07/9/2026" },
	{ item: "Gửi link và QR cho sinh viên", detail: "thuyhuongctu.github.io/BizOn qua hai email nhóm; dặn SV mở thử một lần ở nhà để kích hoạt chế độ chạy ngoại tuyến.", deadline: "Trước 07/9/2026" },
	{ item: "In phiếu khảo sát", detail: "Phiếu trước cho Tuần 1 và phiếu sau cho Tuần 11 (trang khao-sat.html có bản in sẵn).", deadline: "Trước 08/9/2026" },
	{ item: "Phân công giữ nhịp", detail: "Chốt với trợ giảng ai giữ đồng hồ và khoá vòng đồng bộ trong 14 tiết thực hành — điểm dễ vỡ khung nhất.", deadline: "Trước 08/9/2026" },
];
/** Phụ lục A — Rubric chấm nhanh một buổi chơi (thang 10), GV/trợ giảng chấm ngay trong buổi. */
export const SESSION_RUBRIC = [
	{ criterion: "Kết quả kinh doanh (lợi nhuận luỹ kế và số cờ cắm)", weight: 40, evidence: "Bảng xếp hạng cuối vòng và tab «Tổng kết»" },
	{ criterion: "Chất lượng làm việc nhóm theo vai trò", weight: 30, evidence: "Quan sát của GV/trợ giảng + Nhật ký đội trong game" },
	{ criterion: "Bài trình bày rút kinh nghiệm", weight: 20, evidence: "Trình bày 2 phút cuối buổi" },
	{ criterion: "Khảo sát và mức độ tham gia", weight: 10, evidence: "Phiếu trước–sau, chuyên cần" },
];
/** Phụ lục B — Xử lý sự cố nhanh trong buổi chơi (Kịch bản v1). */
export const QUICK_TROUBLESHOOTING = [
	{ situation: "Mạng lớp học yếu hoặc rớt", fix: "Game vẫn chạy ngoại tuyến nếu đã mở ít nhất một lần trước đó; dặn SV mở thử ở nhà từ Tuần 1." },
	{ situation: "Thiết bị hiển thị bản cũ", fix: "Đóng hẳn ứng dụng rồi mở lại hai lần — game tự cập nhật phiên bản mới." },
	{ situation: "Đội bấm nhầm hoặc muốn chơi lại", fix: "Tiến trình lưu trên từng máy; dùng nút chơi lại trong phần cài đặt, hoặc đổi thiết bị là ván mới." },
	{ situation: "Sinh viên vào nhầm địa chỉ", fix: "Chỉ cần nhớ thuyhuongctu.github.io — gõ thiếu /BizOn cũng tự chuyển về đúng trang." },
	{ situation: "Đội xong sớm ngồi chờ", fix: "Giao khám phá BizOn Arcade (8 mini-game) hoặc đọc Sổ tay mục «Đối thủ AI» để chuẩn bị vòng sau." },
	{ situation: "Buổi Thứ Ba của F1 bị trễ do di chuyển liên khu", fix: "Áp dụng biến thể 40 phút: rút phần liên hệ lý thuyết còn 8 phút, chuyển phần còn lại lên hai tiết lý thuyết ngay trước đó; Nhật ký đội thành bài về nhà." },
];
/** Phụ lục C — Vai trò GV và trợ giảng trong lúc chơi (Kịch bản v1). */
export const GV_TA_ROLES = [
	{ item: "Giữ nhịp", how: "Đồng hồ đếm ngược chiếu trên màn hình; khoá vòng đúng giờ — trễ nhịp là buổi học vỡ khung.", who: "Trợ giảng" },
	{ item: "Quan sát cuộc họp đội", how: "Đi vòng quanh lớp, chú ý đội chỉ có một người bấm máy; nhắc đúng vai bằng câu hỏi trực tiếp, ví dụ «CFO của đội thấy khoản vay này thế nào?»", who: "Cả hai" },
	{ item: "Khai thác biến cố thị trường", how: "Khi có Chiến tranh giá hoặc Khủng hoảng năng lượng: dừng 30 giây, hỏi cả lớp «đội nào đổi chiến lược vì tin này?»", who: "Giảng viên" },
	{ item: "Để game tự giải thích", how: "Khuyến khích SV dùng nút «Vì sao?» của Lumina sau mỗi vòng thay vì giảng viên giải thích hộ.", who: "Giảng viên" },
	{ item: "Bảo đảm công bằng", how: "Đối thủ AI chạy theo hạt giống cố định của từng đội nên kết quả tái lập được; không đội nào «gặp may» hơn đội nào.", who: "Ghi chú khi chấm" },
	{ item: "Hỗ trợ kỹ thuật", how: "Tài khoản, phần mềm, thiết bị, sự cố mạng theo Phụ lục B.", who: "Trợ giảng" },
];
/** Phụ lục D — 6 câu hỏi thảo luận rút kinh nghiệm cho mô hình 2 Mùa (chọn 3–4 câu/buổi). */
export const TOURNAMENT_DEBRIEF_QUESTIONS = [
	"Đội bạn thắng hay thua vì quyết định nào? Nếu chơi lại, vòng nào bạn sẽ làm khác?",
	"Khi Alpha Dynamics phá giá, đội bạn giảm giá theo hay giữ giá và tăng marketing? Kết quả nói gì về độ co giãn của cầu theo giá?",
	"Có đội nào lãi cao nhưng thị phần thấp, hoặc ngược lại? Doanh nghiệp thật nên chọn mục tiêu nào, và trong hoàn cảnh nào?",
	"Khoản vay 8,5% giúp hay hại đội bạn? Khi nào nên dùng đòn bẩy tài chính?",
	"Vai trò nào trong đội khó nhất? Vì sao một doanh nghiệp cần đủ cả năm «ghế»?",
	"So sánh Mùa 1 và Mùa 2 của chính đội bạn: phần cải thiện đến từ năng lực hay từ may rủi?",
];
export const OPTIONS = [
	{
		id: "A",
		title: "Mô hình đề xuất — Kịch bản v1, 2 Mùa × 6 vòng",
		badge: "Nên dùng",
		points: [
			"Tuần 1: cài đặt + chia đội cố định cả kỳ (buổi A) rồi chơi thử + nhận Mã lớp (buổi B).",
			"Tuần 2–4: Mùa 1, 6 vòng (2 vòng/tuần, 1 vòng/buổi 50 phút). Tuần 5: sơ kết Mùa 1 + đổi vai + khởi động Mùa 2.",
			"Tuần 6–8: Mùa 2 lặp lại 6 vòng ở vai mới, chốt bảng tổng sắp 2 mùa cuối tuần 8.",
			"Tuần 9–10: Đại hội Cổ đông — 4 phiên pitch xin vốn (PASTOR, checklist 12 mục), Hội đồng công bố mức cấp vốn.",
			"Tuần 11: Vòng Chung kết (két sắt = vốn Hội đồng cấp) + Tổng kết so Mùa 1/Mùa 2. Tuần 12: dự trữ + thi cá nhân trên máy.",
			"18 tiết phòng máy (2 chuẩn bị + 14 vòng chơi + 2 chung kết) khớp đúng TKB bản v6.",
		],
	},
	{
		id: "B",
		title: "Nén — 4 buổi game",
		badge: "Dự phòng",
		points: [
			"Nếu vào muộn hoặc mất tuần: 2 chu kỳ / buổi × 3 buổi, buổi 4 = pitch.",
			"Debrief nông hơn, nhật ký dễ qua loa — chỉ dùng khi lịch bị cắt.",
			"Vẫn giữ buổi lý thuyết song song.",
		],
	},
	{
		id: "C",
		title: "Một ngày thi đấu",
		badge: "Không cho KT330H",
		points: [
			"Phù hợp ngoại khóa / club, không đủ phản tư cho 3 tín chỉ.",
			"Dữ liệu nghiên cứu yếu vì không có vòng lặp giả định → kết quả → điều chỉnh.",
		],
	},
];
export const ENGINE = {
	priceRef: 150_000,
	unitCost: 45_000,
	wage: 1_000_000,
	productivity: 70,
	trainOee: 5,
	rate: 0.085,
	aiMkt: "55–90 triệu/vòng",
	whatIf: 2,
	lumina: 3,
	cashStart: 0,
	aiJitter: "±12% (0,90–1,15), tất định theo seed đội",
	share: "Sức hút = (150.000 / giá)^co_giãn × (1 + √marketing_hiệu_quả / 18) × thương_hiệu^trọng_số. Thị phần = sức hút / tổng 4 công ty. Vòng 6: trọng số thương hiệu ×1,5.",
	capitalDefault: 500_000_000,
	baseMarket: 12_000,
};
export const SOCRATIC = [
	"Nhóm đang tối ưu thị phần hay lợi nhuận?",
	"Dự báo dựa trên giả định nào — và giả định đó kiểm được không?",
	"Nếu bán không hết, dòng tiền và tồn kho đổi ra sao?",
	"R&D tạo tác động tức thời hay tích lũy?",
	"Nhóm có đang vay chỉ để xử lý thiếu hụt ngắn hạn?",
	"Kết quả khác dự báo vì biến cố, đối thủ, hay sai giả định?",
	"Bằng chứng nào khiến nhóm đổi chiến lược ở vòng sau?",
	"Khuyến nghị Lumina nào được dùng, điều chỉnh, hay bác bỏ?",
];
export const DEBRIEF4 = [
	{
		q: "What?",
		a: "Đội đã quyết định gì và kết quả ra sao? Số, không cảm tính.",
	},
	{
		q: "Why?",
		a: "Vì sao kết quả khác hoặc giống dự báo? Tách biến cố / đối thủ / giả định.",
	},
	{
		q: "So what?",
		a: "Liên quan lý thuyết nào của tuần này (SWOT, EOU, 4P, CVP, tỷ số, cash)?",
	},
	{
		q: "Now what?",
		a: "Đổi biến nào ở chu kỳ sau — một thay đổi, có giả định mới.",
	},
];
export const CHECKS = [
	{
		group: "Cuối tuần này — trước thứ Hai 07/9",
		items: [
			{
				id: "dry6",
				label: "Chạy thử đủ 12 vòng (2 Mùa) với 2 đội giả — commit, khóa, ERR_ROUND_LOCKED, 2 Nếu–Thì, 3 Lumina, 3 AI, cấp vốn.",
			},
			{
				id: "classid",
				label: "Đặt Class ID: KT330H-F1-2627 và KT330H-F2-2627.",
			},
			{
				id: "machines",
				label: "Mỗi đội một máy / hồ sơ trình duyệt riêng (hai đội một máy sẽ ghi đè save).",
			},
			{
				id: "rooms",
				label:
					"Xác nhận wifi / máy chiếu 104/KT, 103/KT, 105/KT, 202/KT, Phòng máy 3.20 – Nhà học ATL (F1 Thứ Ba), Phòng máy tính 2 (F1 Thứ Năm), Phòng máy tính 1 (F2 cả 2 buổi) — theo TKB chính thức bản v4.",
			},
			{
				id: "laptop-list",
				label: "F2: gửi danh sách SV có laptop cá nhân cho GV trước 09/9/2026 (41 SV, phòng máy chỉ 40 máy).",
			},
			{
				id: "capital",
				label: "Thống nhất vốn khởi điểm (game: 500 triệu; cấp qua tab Giảng viên vì dashboard mở với 0₫) và quy tắc cấp thêm.",
			},
			{
				id: "rubric",
				label: "In / chiếu rubric 7 phần theo Kịch bản v1 — nhớ đây là đề xuất CHƯA đối chiếu với đề cương chính thức (đặc biệt trọng số thi 25% khác 50% đã biết).",
			},
			{
				id: "rolesheet",
				label: "In thẻ 5–6 vai trò, gồm CDO cho đội 6 người (trang Lớp & đội) — 7 bộ F1, 8 bộ F2.",
			},
			{
				id: "consent",
				label: "Nếu nghiên cứu: phiếu đồng thuận tách khỏi điểm; khảo sát T0.",
			},
			{
				id: "backup",
				label: "Quy trình sao lưu xếp hạng, P&L, CSV nhật ký sau mỗi vòng. Plan B: case Mariotti nếu wifi sập.",
			},
		],
	},
	{
		group: "Mỗi buổi game",
		items: [
			{
				id: "brief",
				label: "Brief 10 phút: mục tiêu vòng, thời gian, giới hạn AI / Nếu–Thì.",
			},
			{
				id: "roles",
				label: "Kiểm tra mỗi vai có khuyến nghị trước khi CEO đụng thanh trượt.",
			},
			{
				id: "warn5",
				label: "Cảnh báo 5 phút rồi khóa vòng trên màn hình Giảng viên.",
			},
			{
				id: "debrief",
				label: "Debrief 4 câu, nối 1 khái niệm textbook.",
			},
			{
				id: "export",
				label: "Xuất / chụp kết quả, nhật ký, cấp vốn ngay khi hết vòng.",
			},
			{
				id: "ticket",
				label: "Thu phiếu quyết định (đủ 6 vòng / đội / mùa).",
			},
			{
				id: "feedback",
				label: "Ghi phản hồi nhóm (điểm mạnh / cần cải / khái niệm) ngay trong buổi.",
			},
		],
	},
	{
		group: "Sau tuần 8 (chốt 2 mùa) và Đại hội Cổ đông (tuần 9–10)",
		items: [
			{
				id: "csv",
				label: "Đủ CSV nhật ký 7–8 đội cho cả Mùa 1 và Mùa 2.",
			},
			{
				id: "progress-table",
				label: "Bảng tổng sắp Mùa 1 so Mùa 2 đã chốt cho từng đội.",
			},
			{
				id: "pitch-training",
				label: "Đã huấn luyện khung PASTOR + checklist 12 mục trước Phiên B (Tuần 9 buổi B).",
			},
			{
				id: "grant-capital",
				label: "Sau Phiên D: nạp đúng số vốn Hội đồng đã công bố vào tab Giảng viên cho từng đội — két sắt Vòng Chung kết tuần 11.",
			},
			{
				id: "pitch",
				label: "Chấm pitch (Hội đồng + tự chấm nóng 4 tiêu chí) + khảo sát T2 sau Tuần 11.",
			},
			{
				id: "grade",
				label: "Ghép điểm cá nhân: discussion riêng, game nhóm ± peer — theo rubric 7 phần (chờ đối chiếu đề cương).",
			},
		],
	},
	{
		group: "Nghiên cứu — trước khi bật (nếu thu dữ liệu nghiên cứu)",
		items: [
			{
				id: "res-protocol",
				label: "Đề cương và câu hỏi nghiên cứu đã phê duyệt.",
			},
			{
				id: "res-ethics",
				label: "Có phê duyệt đạo đức / đơn vị có thẩm quyền.",
			},
			{
				id: "res-consent-split",
				label: "Consent tách khỏi chấm điểm — từ chối không ảnh hưởng điểm.",
			},
			{
				id: "res-code",
				label: "Mã nghiên cứu (class_id/team_id/student_hash) dùng xuyên T0–T3 và event log.",
			},
			{
				id: "res-dictionary",
				label: "Có data dictionary và event schema cho các biến sẽ phân tích.",
			},
			{
				id: "res-missing-plan",
				label: "Có kế hoạch xử lý missing data, loại mẫu và phân tích trước khi thu.",
			},
			{
				id: "res-file-split",
				label: "Tệp danh tính, điểm học phần và dữ liệu nghiên cứu được tách riêng.",
			},
		],
	},
	{
		group: "Sau pilot — nghiệm thu",
		items: [
			{
				id: "post-interview",
				label: "Đã phỏng vấn mẫu: đội kết quả cao, trung bình, thấp.",
			},
			{
				id: "post-changelog",
				label: "Có danh sách thay đổi rút ra trước khi chạy nghiên cứu chính (nếu mở rộng pilot).",
			},
		],
	},
];
export const TICKET_FIELDS = [
	{
		key: "goal",
		label: "Mục tiêu chu kỳ",
		phase: "before",
		hint: "Thị phần, lãi, tiền mặt hay thương hiệu?",
	},
	{
		key: "price",
		label: "Giá bán",
		phase: "before",
		hint: "Tham chiếu 150.000₫",
	},
	{
		key: "marketing",
		label: "Marketing",
		phase: "before",
		hint: "Đối thủ ~ 55–90 triệu",
	},
	{
		key: "qty",
		label: "Sản lượng",
		phase: "before",
		hint: "Mặc định tham chiếu 1.200 sp",
	},
	{
		key: "staff",
		label: "Nhân sự",
		phase: "before",
		hint: "1 triệu/người/vòng · 70 sp/người",
	},
	{
		key: "train",
		label: "Đào tạo",
		phase: "before",
		hint: "OEE tối đa +5%",
	},
	{
		key: "loan",
		label: "Vay / thấu chi",
		phase: "before",
		hint: "Lãi 8,5%/vòng",
	},
	{
		key: "rd",
		label: "R&D",
		phase: "before",
		hint: "Tích lũy, không phải chi phí vòng",
	},
	{
		key: "assumption",
		label: "Giả định",
		phase: "before",
		hint: "Đội tin điều gì sẽ xảy ra?",
	},
	{
		key: "forecastShare",
		label: "Dự báo thị phần",
		phase: "before",
		hint: "%",
	},
	{
		key: "forecastProfit",
		label: "Dự báo lợi nhuận",
		phase: "before",
		hint: "₫",
	},
	{
		key: "forecastCash",
		label: "Dự báo tiền mặt",
		phase: "before",
		hint: "₫",
	},
	{
		key: "risk",
		label: "Rủi ro",
		phase: "before",
		hint: "Biến nào làm dự báo sai?",
	},
	{
		key: "dissent",
		label: "Bất đồng",
		phase: "before",
		hint: "Vai nào không đồng ý, vì sao?",
	},
	{
		key: "finalCall",
		label: "Quyết định CEO",
		phase: "before",
		hint: "Chọn gì và vì sao?",
	},
	{
		key: "actual",
		label: "Kết quả thực",
		phase: "after",
		hint: "Thị phần, lãi, cash, cờ",
	},
	{
		key: "gap",
		label: "Sai lệch",
		phase: "after",
		hint: "Dự báo − thực tế",
	},
	{
		key: "cause",
		label: "Nguyên nhân đội đưa ra",
		phase: "after",
		hint: "Biến cố / đối thủ / giả định",
	},
	{
		key: "good",
		label: "Làm tốt",
		phase: "after",
		hint: "",
	},
	{
		key: "miss",
		label: "Sai hoặc bất ngờ",
		phase: "after",
		hint: "",
	},
	{
		key: "next",
		label: "Đổi ở vòng sau",
		phase: "after",
		hint: "Một thay đổi",
	},
	{
		key: "lumina",
		label: "Lumina",
		phase: "after",
		hint: "Dùng / điều chỉnh / bác bỏ",
	},
];
export const PILOT_THRESHOLDS = [
	{
		metric: "Đội hoàn thành 6 chu kỳ",
		threshold: "≥ 80%",
	},
	{
		metric: "Nhật ký SEC đủ 6 vòng / mùa",
		threshold: "≥ 80%",
	},
	{
		metric: "Dữ liệu ghép được đội–vòng",
		threshold: "≥ 95%",
	},
	{
		metric: "Sự cố làm gián đoạn một vòng",
		threshold: "≤ 10% số đội",
	},
	{
		metric: "SV hiểu mục tiêu và luật (1–5)",
		threshold: "≥ 3,5",
	},
	{
		metric: "Debrief sau mỗi vòng (tuần 2–4, 6–8)",
		threshold: "100% buổi",
	},
];
/** Rubric đội/cá nhân 4 mức — từ bộ hồ sơ triển khai BizOn Bật Nghiệp 2026 (bizon-kit/05-rubric.csv). */
export const RUBRIC_TEAM = [
	{
		criterion: "Kết quả game",
		weight: 20,
		l4: "Cân bằng thị phần, lợi nhuận, tiền mặt, thương hiệu; cải thiện có giải thích",
		l3: "Kết quả tốt ở đa số chỉ số",
		l2: "Có kết quả dương nhưng thiếu cân bằng",
		l1: "Chỉ tối ưu một chỉ số hoặc mất khả năng vận hành",
		evidence: "results; dashboard",
	},
	{
		criterion: "Lập luận quyết định",
		weight: 20,
		l4: "Dữ liệu rõ; giả định kiểm tra được; so sánh phương án",
		l3: "Có dữ liệu và giả định hợp lý",
		l2: "Có lý do nhưng bằng chứng hạn chế",
		l1: "Cảm tính; không có giả định",
		evidence: "decision sheets; SEC notes",
	},
	{
		criterion: "Tài chính–vận hành",
		weight: 15,
		l4: "Nhất quán cầu, công suất, chi phí, tiền mặt",
		l3: "Phân tích đúng phần lớn quan hệ",
		l2: "Có một số mâu thuẫn",
		l1: "Thiếu hoặc sai logic cơ bản",
		evidence: "forecast; results; report",
	},
	{
		criterion: "Thích nghi",
		weight: 15,
		l4: "Điều chỉnh đúng mức theo tín hiệu và giải thích được",
		l3: "Có điều chỉnh hợp lý",
		l2: "Điều chỉnh nhưng lý do yếu",
		l1: "Ngẫu nhiên hoặc không học từ kết quả",
		evidence: "round-to-round decisions",
	},
	{
		criterion: "Nhật ký–phản tư",
		weight: 15,
		l4: "Chỉ rõ quyết định–hệ quả–bài học–chuyển giao",
		l3: "Phân tích khá sâu",
		l2: "Chủ yếu mô tả",
		l1: "Thiếu hoặc kể lại sự kiện",
		evidence: "SEC notes; reflection",
	},
	{
		criterion: "Hợp tác cá nhân",
		weight: 10,
		l4: "Đóng góp ổn định; tranh luận và phối hợp xây dựng",
		l3: "Hoàn thành tốt vai trò",
		l2: "Đóng góp không đều",
		l1: "Free-riding hoặc chi phối tiêu cực",
		evidence: "peer; role logs; observation",
	},
	{
		criterion: "Pitch",
		weight: 5,
		l4: "Cô đọng; dùng dữ liệu; trả lời phản biện tốt",
		l3: "Đủ logic và minh chứng",
		l2: "Đủ nội dung nhưng ít phân tích",
		l1: "Thiếu logic hoặc không dùng dữ liệu",
		evidence: "pitch; Q&A",
	},
];
export const DIFFS = [
	{
		from: "Kế hoạch nghiên cứu 4 buổi",
		to: "Kế hoạch giảng dạy 11 tuần KT330H",
		why: "TKB thật: 2 buổi × 3 tiết × 11 tuần (07/9–22/11). Dồn 6 vòng/4 buổi làm mất debrief — đúng thứ game cần để ra CLO.",
	},
	{
		from: "Đề cương 13 tuần (2019)",
		to: "Nén thành 12 tuần TKB: Ch.6+Ch.7 gộp tuần 7",
		why: "TKB cán bộ đánh dấu tuần 1–12. 45 tiết LT + thực hành trên lớp = 72 tiết; 60 giờ TH của đề cương gồm đồ án ngoài lớp.",
	},
	{
		from: "12 tuần TKB (Ch.6+Ch.7 gộp tuần 7)",
		to: "Nén tiếp còn 11 tuần: Ch.10+Ch.11 gộp tuần 10",
		why: "Thầy Phan Anh Tú xác nhận: quy định chỉ 11 tuần dạy, không phải 12. Tuần Pitch lùi từ 12 xuống 11; 66 tiết trên lớp (2×3 tiết × 11 tuần).",
	},
	{
		from: "F1 Thứ Ba tiết 5–7 cắt nghỉ trưa (đọc TKB lần đầu bị lệch)",
		to: "F1 Thứ Ba tiết 6–8 chiều liền, không cắt trưa (104/KT)",
		why: "Thầy Phan Anh Tú xác nhận trực tiếp theo TKB cán bộ 2026–2027 HK1: buổi chiều là tiết 6, 7, 8 liền — không có tiết 5 buổi sáng trong buổi này.",
	},
	{
		from: "Cả buổi lý thuyết ở phòng học (104/KT hoặc 105/KT)",
		to: "Tiết cuối buổi lý thuyết chuyển sang phòng máy tính Trường Kinh tế chơi game (F1 tiết 8 Thứ Ba, F2 tiết 3 Thứ Tư)",
		why: "Thầy Phan Anh Tú: mỗi buổi lý thuyết chỉ 2 tiết lý thuyết + 1 tiết thực hành chơi game, tiết cuối cả lớp qua phòng máy tính Trường Kinh tế.",
	},
	{
		from: "Rubric game 20/20/15/15/15/10/5",
		to: "Khớp đề cương 10 / 40 / 50",
		why: "Không invent thang điểm mới cho học phần. Game nằm trong 40% quá trình; thi 50% giữ nguyên.",
	},
	{
		from: "10 / 40 / 50 (game gộp chung 40% quá trình với business plan/pitch)",
		to: "10 / 20 / 20 / 50 (game và dự án khởi nghiệp tách riêng, mỗi phần 20%)",
		why: "Thầy Phan Anh Tú chốt trực tiếp: điểm App (100%) quy đổi thẳng thành 20%; 20% còn lại là dự án khởi nghiệp (BMC + pitch tuần 9–10), giao Hương tự quyết chi tiết chấm điểm.",
	},
	{
		from: "Pilot 1–2 lớp generic 30–60 SV",
		to: "Đúng 2 lớp CLC: F1 = 37, F2 = 41",
		why: "Chia đội và phòng học lấy từ TKB cán bộ NH 2026–2027 HK1.",
	},
	{
		from: "Nghiên cứu là mục tiêu đầu",
		to: "Dạy ổn đã, nghiên cứu là lớp sau",
		why: "Pilot đầu chỉ kiểm vận hành, luật, giờ, log. Chưa kết luận game làm tăng ý định khởi nghiệp.",
	},
	{
		from: "Tên đội theo quận Cần Thơ (Ninh Kiều, Thốt Nốt…)",
		to: "Đội 1–n; sáu vòng = bản đồ chinh phục + biến cố engine",
		why: "Quận không có trong game. Vòng chơi phải áp sát Cần Thơ → Hà Nội và MARKET_EVENTS; Mariotti / thanh khoản là lớp mở rộng.",
	},
	{
		from: "Ước tính phòng máy chung chung, pitch tuần 11, buổi 2 là buổi game trọn 3 tiết riêng",
		to: "TKB chính thức bản v3 (06/9/2026): F1 Phòng máy 3.20 – Nhà học ATL (Thứ Ba) / Phòng máy tính 2 (Thứ Năm); F2 Phòng máy tính 1 (cả 2 buổi). Cả 2 buổi/tuần đều 2 tiết lý thuyết + 1 tiết phòng máy — không còn buổi thực hành riêng. Pitch dồn về tuần 9–10 (4 buổi, không phòng máy); tuần 11 thu hoạch Ch.9–11.",
		why: "Nhận trực tiếp file lịch học chính thức do thầy Phan Anh Tú lập (PDF, HK1 2026–2027, riêng cho từng lớp M01/M02) — thay mọi ước tính/giả định trước đó. Cũng ghi nhận: F2 thi cuối kỳ đổi giờ + địa điểm (chiều Thứ Sáu 27/11, Nhà học ATL, khác lịch học thường lệ); 41 SV F2 nhưng phòng máy chỉ 40 máy.",
	},
	{
		from: "TKB bản v3 (06/9/2026) — chưa có thông tin trợ giảng chính thức",
		to: "TKB bản v4 (06/9/2026): giữ nguyên mọi ngày/giờ/phòng so với v3; bổ sung chính thức vai trò trợ giảng cấu phần thực hành (NCS Đỗ Thuỳ Hương), có mặt các buổi phòng máy tuần 1, 2–8, 11 và buổi thi.",
		why: "Thầy Phan Anh Tú cập nhật file lịch học F1/F2 lên bản v4 (06/9/2026) — chỉ thêm dòng ghi nhận vai trò trợ giảng, không đổi lịch/phòng đã chốt ở v3.",
	},
	{
		from: "1 mùa 6 vòng (tuần 3–8) + pitch dự án khởi nghiệp (BMC, tuần 9–10, chung 1 dự án với game) + thu hoạch Ch.9–11 (tuần 11) + rubric 10/20/20/50",
		to: "2 Mùa × 6 vòng (Mùa 1 tuần 2–4, sơ kết+đổi vai tuần 5, Mùa 2 tuần 6–8) + Đại hội Cổ đông pitch XIN VỐN 4 phiên (tuần 9–10, khung PASTOR, checklist 12 mục) + Vòng Chung kết dùng vốn Hội đồng cấp + Tổng kết so 2 mùa (tuần 11) + rubric 7 phần mới (15/10/10/25/10/25/5)",
		why: "Áp dụng «Kịch bản BizOn hiệu chỉnh bản v1» (06/9/2026) do Hương soạn riêng cho app tự quản lý lớp của Thầy Phan Anh Tú, theo yêu cầu thay thế toàn bộ mô hình cũ. ⚠️ Rubric 7 phần trong Kịch bản v1 tự nhận là ĐỀ XUẤT CHƯA đối chiếu với đề cương chi tiết học phần đã ban hành, và khác cơ cấu 10/20/20/50 (đặc biệt thi 25% thay vì 50%) Thầy Phan Anh Tú đã chốt trước đó qua Zalo — cần xác nhận lại trước khi dùng để chấm điểm thật. Vai trò thứ 6 trong đội đổi tên từ «Phân tích» thành «CDO» theo đúng Kịch bản v1.",
	},
];
export const LINKS = {
	hub: "https://thuyhuongctu.github.io/BizOn/",
	game: "https://thuyhuongctu.github.io/BizOn/game.html",
	guide: "https://github.com/thuyhuongctu/BizOn/blob/main/docs/huong-dan-giang-vien.md",
	music: "https://thuyhuongctu.github.io/BizOn/am-nhac.html",
	team: "https://thuyhuongctu.github.io/BizOn/doi-ngu.html",
};
/** Plan B nếu game/wifi sập. ⚠️ Chưa rà lại theo nội dung tuần mới của Kịch bản v1 (2 Mùa × 6
 * vòng, Đại hội Cổ đông) — case study Mariotti giữ nguyên từ bản trước, độ khớp chủ đề có thể lệch. */
export const BACKUP_CASES = [
	{
		week: 2,
		unit: "Unit 1",
		cases: "Urban Decay · Foursquare",
		clos: "CO1, CO2, CO5",
	},
	{
		week: 3,
		unit: "Unit 2",
		cases: "The Business Plan (BMC + feasibility)",
		clos: "CO4, CO6",
	},
	{
		week: 4,
		unit: "Unit 3",
		cases: "Creating Business from Opportunity",
		clos: "CO3, CO9",
	},
	{
		week: 5,
		unit: "Unit 4",
		cases: "Exploring your market",
		clos: "CO7, CO8",
	},
	{
		week: 6,
		unit: "Unit 5",
		cases: "Marketing mix",
		clos: "CO7, CO8",
	},
	{
		week: 7,
		unit: "Unit 6–7",
		cases: "Selling/CRM + start-up costs",
		clos: "CO8, CO9",
	},
	{
		week: 8,
		unit: "Unit 8",
		cases: "Gentle Rest Slumber · Portland Freelancer",
		clos: "CO9",
	},
	{
		week: 9,
		unit: "Unit 12",
		cases: "ONLC · AYZH · Agritechno Hybrid",
		clos: "CO11, CO12",
	},
	{
		week: 10,
		unit: "Unit 12",
		cases: "ONLC · AYZH · Agritechno Hybrid",
		clos: "CO11, CO12",
	},
	{
		week: 11,
		unit: "Unit 9–11",
		cases: "Holterholm Farms · Cash CakeLove + Chilly Dilly's · Lee's Ice Cream + The Bun Company · Airbnb",
		clos: "CO9, CO10, CO12",
	},
];
export const OUTLINE_NOTE = "Kịch bản BizOn hiệu chỉnh bản v1 (06/9/2026, do Hương soạn, khớp TKB chính thức bản v6): 2 Mùa × 6 vòng chơi ở Tuần 2–4 và 6–8 (đổi vai + sơ kết ở Tuần 5), Đại hội Cổ đông pitch xin vốn 4 phiên ở Tuần 9–10, Vòng Chung kết + Tổng kết ở Tuần 11 (két sắt = vốn Hội đồng cấp), dự trữ + thi cá nhân trên máy ở Tuần 12. Thay thế mô hình 1 mùa 6 vòng + pitch dự án khởi nghiệp trước đó — xem DIFFS để biết lý do đổi.";
/** 2 Mùa × 6 vòng (Kịch bản v1). Mỗi mùa là một lượt chơi lại trọn vẹn CONQUEST_STOPS (js/app.js) ×
 * MARKET_EVENTS (js/engine.js) — engine cố định thứ tự 6 thành phố/biến cố theo round, nên Mùa 2
 * lặp lại đúng chuỗi Cần Thơ → Hà Nội của Mùa 1, chỉ khác vai trò (đã đổi ở Tuần 5) và mức vận
 * dụng. `expand` = liên hệ khái niệm tuần đó (Kịch bản Mục III) — không đổi tên biến cố trong engine. */
export const CYCLES = [
	{
		n: 1,
		season: 1 as const,
		week: 2,
		buoi: "first" as const,
		city: "Cần Thơ",
		zone: "Đồng bằng sông Cửu Long",
		eventId: "EV_STABLE",
		event: "Thị trường ổn định",
		tag: "Mùa 1 · Vòng 1",
		title: "Cần Thơ",
		subtitle: "Thị trường ổn định",
		flag: "Cờ 1 · xưởng thủ công",
		engine: "Nhu cầu ×1,0 · chi phí ổn định",
		goal: "Chốt giá bán dựa trên độ co giãn của cầu. Sống sót có lãi, không cắm hết cờ ngay vòng 1.",
		trap: "Tối ưu thanh dự báo thị phần, bỏ biến cố, CEO kéo một mình.",
		evidence: "Phiếu quyết định vòng 1, Nhật ký đội, cờ Cần Thơ nếu thắng.",
		expand: "Độ co giãn giá — vì sao đổi giá không đổi doanh thu theo tỷ lệ tương ứng.",
	},
	{
		n: 2,
		season: 1 as const,
		week: 2,
		buoi: "second" as const,
		city: "TP. Hồ Chí Minh",
		zone: "Đông Nam Bộ",
		eventId: "EV_GOLDEN",
		event: "Cơ Hội Vàng",
		tag: "Mùa 1 · Vòng 2",
		title: "TP. Hồ Chí Minh",
		subtitle: "Cơ Hội Vàng",
		flag: "Cờ 2",
		engine: "Nhu cầu +35% · R&D ×1,5 · thuế XK 0%",
		goal: "Tính điểm hoà vốn (BEP) và biên an toàn trước khi tăng công suất đón gói kích cầu.",
		trap: "Không tăng công suất kịp, hoặc đốt marketing khi cầu đã tự tăng.",
		evidence: "BEP trước khi đổi giá, P&L vòng 1–2, cờ TP.HCM.",
		expand: "Định phí, biến phí, điểm hoà vốn, biên an toàn.",
	},
	{
		n: 3,
		season: 1 as const,
		week: 3,
		buoi: "first" as const,
		city: "Khánh Hòa",
		zone: "Duyên hải Nam Trung Bộ",
		eventId: "EV_PRICEWAR",
		event: "Cạnh Tranh Về Giá",
		tag: "Mùa 1 · Vòng 3",
		title: "Khánh Hòa",
		subtitle: "Cạnh Tranh Về Giá",
		flag: "Cờ 3",
		engine: "Co giãn giá ×1,4 · đối thủ MT −15%",
		goal: "CMO dẫn định vị thương hiệu. Bundling hoặc value-added — không giảm giá sâu.",
		trap: "Lao vào cắt giá, mất biên. Thị phần tăng, lãi giảm mà tưởng thắng.",
		evidence: "Lý do định vị, khách mục tiêu 1 câu, Nhật ký đội.",
		expand: "Phân khúc, định vị, ngân sách marketing.",
	},
	{
		n: 4,
		season: 1 as const,
		week: 3,
		buoi: "second" as const,
		city: "Đà Nẵng",
		zone: "Duyên hải miền Trung",
		eventId: "EV_RECESSION",
		event: "Khủng Hoảng Năng Lượng",
		tag: "Mùa 1 · Vòng 4",
		title: "Đà Nẵng",
		subtitle: "Khủng Hoảng Năng Lượng",
		flag: "Cờ 4",
		engine: "Nhu cầu ×0,7 · chi phí ×1,3 · OEE −10%",
		goal: "COO rà lịch máy và năng suất nhân sự. Cân đối chi phí điện năng khi OEE giảm.",
		trap: "Giữ sản lượng cũ khi cầu đã −30%. Tăng nhân sự không tính năng suất.",
		evidence: "Kế hoạch nhân sự/bảo trì, chi phí điện năng, cờ Đà Nẵng.",
		expand: "Năng suất, bảo trì, chi phí điện năng.",
	},
	{
		n: 5,
		season: 1 as const,
		week: 4,
		buoi: "first" as const,
		city: "Thanh Hóa",
		zone: "Bắc Trung Bộ",
		eventId: "EV_SUPPLY",
		event: "Khủng Hoảng Chuỗi Cung Ứng",
		tag: "Mùa 1 · Vòng 5",
		title: "Thanh Hóa",
		subtitle: "Khủng Hoảng Chuỗi Cung Ứng",
		flag: "Cờ 5",
		engine: "Giá thành +25% · đáp ứng đơn −15%",
		goal: "CFO chọn vốn chủ hay vay 8,5%/vòng để bù chi phí tăng — cân nhắc đòn bẩy tài chính.",
		trap: "Vay để bù lỗ vòng mà không tính lãi tích luỹ. Bỏ qua tỷ lệ đáp ứng đơn −15%.",
		evidence: "Lý do chọn nguồn vốn, tồn kho vs cash, cờ Thanh Hóa.",
		expand: "Vốn chủ so với vay 8,5% · dòng tiền.",
	},
	{
		n: 6,
		season: 1 as const,
		week: 4,
		buoi: "second" as const,
		city: "Hà Nội",
		zone: "Đồng bằng sông Hồng",
		eventId: "EV_MILESTONE",
		event: "Việt Nam Hóa Rồng",
		tag: "Mùa 1 · Vòng 6",
		title: "Hà Nội",
		subtitle: "Việt Nam Hóa Rồng",
		flag: "Cờ 6 · chốt Mùa 1",
		engine: "Cầu ×1,25 · thương hiệu ×1,5 · lương ×1,1 · co giãn ×0,85 · marketing ×1,2",
		goal: "Vòng chốt Mùa 1. Nhận diện và ứng phó biến cố thị trường — không spoil công thức.",
		trap: "Đội tối ưu xếp hạng thay vì giải thích được vì sao thắng/thua.",
		evidence: "Tỷ số 6 vòng Mùa 1, CSV nhật ký, cờ Hà Nội.",
		expand: "Nhận diện và ứng phó rủi ro thị trường — chuẩn bị Sơ kết Mùa 1 tuần 5.",
	},
	{
		n: 1,
		season: 2 as const,
		week: 6,
		buoi: "first" as const,
		city: "Cần Thơ",
		zone: "Đồng bằng sông Cửu Long",
		eventId: "EV_STABLE",
		event: "Thị trường ổn định",
		tag: "Mùa 2 · Vòng 1",
		title: "Cần Thơ",
		subtitle: "Thị trường ổn định",
		flag: "Cờ 1 · vai mới",
		engine: "Nhu cầu ×1,0 · chi phí ổn định",
		goal: "Với vai đã đổi từ Tuần 5, lặp lại quyết định giá — so với Mùa 1 có gì khác?",
		trap: "Rập khuôn y hệt quyết định Mùa 1 dù đang giữ vai khác.",
		evidence: "Phiếu quyết định vòng 1 Mùa 2, so sánh với Mùa 1.",
		expand: "Độ co giãn giá — vận dụng lại ở vai mới.",
	},
	{
		n: 2,
		season: 2 as const,
		week: 6,
		buoi: "second" as const,
		city: "TP. Hồ Chí Minh",
		zone: "Đông Nam Bộ",
		eventId: "EV_GOLDEN",
		event: "Cơ Hội Vàng",
		tag: "Mùa 2 · Vòng 2",
		title: "TP. Hồ Chí Minh",
		subtitle: "Cơ Hội Vàng",
		flag: "Cờ 2",
		engine: "Nhu cầu +35% · R&D ×1,5 · thuế XK 0%",
		goal: "Tính lại BEP với vai mới — kết quả có tốt hơn Mùa 1 không, và vì sao?",
		trap: "Quên bài học BEP đã rút ra ở Mùa 1.",
		evidence: "BEP vòng 2 Mùa 2, so với Mùa 1.",
		expand: "Định phí, biến phí, điểm hoà vốn — mức vận dụng cao hơn.",
	},
	{
		n: 3,
		season: 2 as const,
		week: 7,
		buoi: "first" as const,
		city: "Khánh Hòa",
		zone: "Duyên hải Nam Trung Bộ",
		eventId: "EV_PRICEWAR",
		event: "Cạnh Tranh Về Giá",
		tag: "Mùa 2 · Vòng 3",
		title: "Khánh Hòa",
		subtitle: "Cạnh Tranh Về Giá",
		flag: "Cờ 3",
		engine: "Co giãn giá ×1,4 · đối thủ MT −15%",
		goal: "Tối ưu hoá phối thức marketing — đánh đổi chi phí quảng bá với sản lượng bán được.",
		trap: "Lặp lại y hệt định vị Mùa 1 mà không tối ưu thêm.",
		evidence: "Phối thức marketing đã đánh đổi, Nhật ký đội.",
		expand: "Tối ưu hoá phối thức · đánh đổi chi phí – sản lượng.",
	},
	{
		n: 4,
		season: 2 as const,
		week: 7,
		buoi: "second" as const,
		city: "Đà Nẵng",
		zone: "Duyên hải miền Trung",
		eventId: "EV_RECESSION",
		event: "Khủng Hoảng Năng Lượng",
		tag: "Mùa 2 · Vòng 4",
		title: "Đà Nẵng",
		subtitle: "Khủng Hoảng Năng Lượng",
		flag: "Cờ 4",
		engine: "Nhu cầu ×0,7 · chi phí ×1,3 · OEE −10%",
		goal: "So với Mùa 1: đội có ứng phó khủng hoảng năng lượng tốt hơn với kinh nghiệm cũ không?",
		trap: "Chủ quan vì đã từng gặp biến cố này ở Mùa 1.",
		evidence: "So sánh cách ứng phó với Mùa 1.",
		expand: "Tối ưu hoá phối thức · đánh đổi chi phí – sản lượng.",
	},
	{
		n: 5,
		season: 2 as const,
		week: 8,
		buoi: "first" as const,
		city: "Thanh Hóa",
		zone: "Bắc Trung Bộ",
		eventId: "EV_SUPPLY",
		event: "Khủng Hoảng Chuỗi Cung Ứng",
		tag: "Mùa 2 · Vòng 5",
		title: "Thanh Hóa",
		subtitle: "Khủng Hoảng Chuỗi Cung Ứng",
		flag: "Cờ 5",
		engine: "Giá thành +25% · đáp ứng đơn −15%",
		goal: "Cấu trúc vốn Mùa 2: so với lựa chọn vốn chủ/vay ở Mùa 1, đội có đổi chiến lược không?",
		trap: "Vay lặp lại y hệt Mùa 1 mà không xét lại bối cảnh vai mới.",
		evidence: "So sánh cấu trúc vốn 2 mùa.",
		expand: "Cấu trúc vốn · đo lường tiến bộ Mùa 1 so với Mùa 2.",
	},
	{
		n: 6,
		season: 2 as const,
		week: 8,
		buoi: "second" as const,
		city: "Hà Nội",
		zone: "Đồng bằng sông Hồng",
		eventId: "EV_MILESTONE",
		event: "Việt Nam Hóa Rồng",
		tag: "Mùa 2 · Vòng 6",
		title: "Hà Nội",
		subtitle: "Việt Nam Hóa Rồng",
		flag: "Cờ 6 · chốt hai mùa",
		engine: "Cầu ×1,25 · thương hiệu ×1,5 · lương ×1,1 · co giãn ×0,85 · marketing ×1,2",
		goal: "Vòng chốt cả giải đấu 2 mùa. Chốt bảng tổng sắp Mùa 1 so Mùa 2 ngay sau khi khoá vòng.",
		trap: "Đội tối ưu xếp hạng thay vì giải thích được mức tiến bộ qua 2 mùa.",
		evidence: "Tỷ số 6 vòng Mùa 2, bảng tổng sắp 2 mùa, cờ Hà Nội.",
		expand: "Cấu trúc vốn · đo lường mức tiến bộ Mùa 1 so với Mùa 2 — chuẩn bị pitch Tuần 9–10.",
	},
] as const;
export type Cycle = (typeof CYCLES)[number];
export const RATINGS = [
	{
		label: "Quite good",
		score: 19,
	},
	{
		label: "Good",
		score: 19.5,
	},
	{
		label: "Very good",
		score: 19.7,
	},
	{
		label: "Excellent",
		score: 20,
	},
];
export function ratingLabel(score: number): string {
	const hit = RATINGS.find((r) => r.score === score);
	return hit ? hit.label : score ? String(score) : "Chưa chấm";
}
export const SURVEYS = [
	{
		id: "T0",
		when: "Trước tuần 1",
		minutes: 8,
		items: [
			"Tôi mô tả được các bước tạo một doanh nghiệp nhỏ.",
			"Tôi tự tin lập Business Model Canvas cho một ý tưởng.",
			"Tôi tự tin tính điểm hòa vốn, EOU và dòng tiền khởi sự.",
			"Tôi có ý định khởi sự hoặc tham gia startup trong 3 năm tới.",
			"Làm việc theo vai trò chức năng (CEO/CMO/COO/CFO/SEC) phù hợp với cách tôi học.",
		],
	},
	{
		id: "T1",
		when: "Sau chu kỳ 3 (tuần 5)",
		minutes: 5,
		items: [
			"Tôi tập trung khi chơi (cảm giác flow).",
			"Luật, thời gian và tiêu chí thắng là rõ.",
			"Kết quả giữa các đội là công bằng.",
			"Phần debrief giúp tôi hiểu lý thuyết hơn chính game.",
			"Đội tôi thảo luận trước khi CEO commit — không phải một người kéo thanh.",
		],
	},
	{
		id: "T2",
		when: "Sau pitch tuần 9–10",
		minutes: 8,
		items: [
			"Tôi mô tả được các bước tạo một doanh nghiệp nhỏ.",
			"Tôi tự tin lập Business Model Canvas cho một ý tưởng.",
			"Tôi tự tin tính điểm hòa vốn, EOU và dòng tiền khởi sự.",
			"Tôi có ý định khởi sự hoặc tham gia startup trong 3 năm tới.",
			"Tôi đánh giá, điều chỉnh hoặc bác bỏ khuyến nghị AI thay vì làm theo.",
			"Tôi giải thích được vì sao đội thắng hoặc thua — bằng số, không cảm tính.",
		],
	},
];
export const PEER_ITEMS = [
	{
		id: "voice",
		label: "Nói khi đến lượt vai của mình",
	},
	{
		id: "listen",
		label: "Lắng nghe và phản biện bằng số liệu",
	},
	{
		id: "prep",
		label: "Chuẩn bị khuyến nghị trước họp đội",
	},
	{
		id: "record",
		label: "Ghi nhật ký / phiếu đúng hạn",
	},
	{
		id: "respect",
		label: "Không độc chiếm máy hoặc commit hộ",
	},
];

/** Biểu mẫu sinh viên A — Team Charter. Từ bộ hồ sơ triển khai BizOn Bật Nghiệp 2026. */
export const TEAM_CHARTER_FIELDS = [
	"Thành viên và vai trò",
	"Lịch luân chuyển vai trò",
	"Mục tiêu học tập của đội",
	"Quy trình họp và biểu quyết",
	"Trường hợp CEO được quyền quyết định cuối",
	"Cách ghi nhận ý kiến bất đồng",
	"Quy trình xử lý vắng mặt / xung đột",
	"Nguyên tắc dùng Lumina và AI ngoài hệ thống",
	"Cam kết lưu bằng chứng",
];

/** Biểu mẫu sinh viên C — Reflection cá nhân. Hoàn thành sau chu kỳ 2, 4 và 6; 150–250 từ. */
export const REFLECTION_PROMPTS = [
	"Quyết định nào bản thân ảnh hưởng nhiều nhất?",
	"Bằng chứng nào được dùng hoặc bị bỏ qua?",
	"Điều gì khác kỳ vọng và vì sao?",
	"Quan điểm nào đã thay đổi?",
	"Nếu giữ vai trò khác, quyết định có thay đổi không?",
	"Khuyến nghị AI nào hữu ích / không hữu ích?",
	"Bài học nào có thể chuyển sang doanh nghiệp thực?",
];

/** Biểu mẫu sinh viên E — Pitch xin vốn tại Đại hội Cổ đông (Kịch bản v1, Mục V), tuần 9–10. */
export const PITCH_GUIDE = {
	format: "7 phút pitch (đúng khung PASTOR, chia theo vai — xem PITCH_TIMING) + 8 phút Q&A với Hội đồng + 3 phút tự chấm nóng.",
	points: [
		"Hành trình 2 Mùa: chiến lược Mùa 1, thay đổi gì ở Mùa 2 sau khi đổi vai.",
		"Một quyết định thành công và một sai lầm, từ cả 12 vòng.",
		"Dữ liệu lợi nhuận, uy tín/thương hiệu, tiền mặt, thị phần — so Mùa 1 với Mùa 2.",
		"BEP, biên an toàn, biên đóng góp — chiếu trực tiếp Excel, CFO sẵn sàng thay số tại chỗ.",
		"Số tiền xin vốn chính xác + 3 việc sẽ tiêu vào (Vòng Chung kết tuần 11).",
		"Cam kết SMART 6 tháng nếu được cấp vốn.",
		"Ba con số thuộc lòng: VỐN XIN · BEP mỗi tháng · LỢI NHUẬN MỤC TIÊU.",
	],
};

/** Biểu mẫu sinh viên D — Peer assessment. Điểm cuối do GV tổng hợp qua trang Đánh giá (PEER_ITEMS). */
export const PEER_ASSESSMENT_NOTE =
	"Mỗi thành viên phân bổ tổng cộng 100 điểm cho các thành viên còn lại theo: chuẩn bị, đóng góp chuyên môn, hợp tác, độ tin cậy và phản tư. Kèm 1 bằng chứng cho mức điểm cao nhất và 1 đề xuất cải thiện. GV đối chiếu với 5 tiêu chí quan sát ở mục \"Phiếu đồng đẳng\" trên trang Đánh giá.";

/** Phiếu thông tin & đồng thuận nghiên cứu — mẫu tham khảo, cần đơn vị đạo đức nghiên cứu rà soát
 * trước khi dùng thật. Chỉ áp dụng nếu lớp có thu thập dữ liệu nghiên cứu (không bắt buộc để chơi game). */
export const CONSENT_FORM = {
	title: "Đánh giá quá trình học tập và ra quyết định trong mô phỏng kinh doanh BizOn Bật Nghiệp 2026",
	purpose:
		"Tìm hiểu trải nghiệm học tập, quá trình ra quyết định, hợp tác đội, sử dụng phản hồi game và AI, cùng sự thay đổi về kiến thức/năng lực liên quan.",
	dataCollected: [
		"Thông tin nền cần thiết cho câu hỏi nghiên cứu.",
		"Câu trả lời khảo sát T0–T3.",
		"Dấu vết thao tác, quyết định và kết quả trong game.",
		"Nhật ký, reflection, peer assessment và pitch.",
		"Ghi âm / phỏng vấn chỉ khi có mục đồng ý riêng.",
	],
	voluntary:
		"Tham gia nghiên cứu là tự nguyện. Từ chối hoặc rút lui không ảnh hưởng điểm, quyền học tập hoặc quan hệ với cơ sở đào tạo — game vẫn chơi bình thường, chỉ dữ liệu không đưa vào nghiên cứu.",
	confidentiality:
		"Dữ liệu phân tích dùng mã ẩn danh. Tệp nối mã với danh tính lưu riêng, phân quyền và bảo vệ. Báo cáo chỉ trình bày dữ liệu tổng hợp hoặc trích dẫn đã khử nhận diện.",
	consentItems: [
		"Đồng ý sử dụng khảo sát.",
		"Đồng ý sử dụng log game.",
		"Đồng ý sử dụng sản phẩm học tập đã khử nhận diện.",
		"Đồng ý tham gia phỏng vấn.",
		"Đồng ý ghi âm phỏng vấn.",
		"Đồng ý được liên hệ cho T3.",
	],
};
