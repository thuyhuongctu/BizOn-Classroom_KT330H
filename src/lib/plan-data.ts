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
		leftover: "5 đội × 5 và 2 đội × 6 (thành viên thứ sáu = phân tích dữ liệu)",
		classId: "KT330H-F1-2627",
		meetings: {
			first: {
				day: "Thứ Ba",
				periods: "6–8",
				time: "13:30–16:10",
				room: "104/KT (tiết 6–7) + Phòng máy 3.20 – Nhà học ATL (tiết 8)",
				note: "TKB chính thức bản v3 (06/9/2026). Tiết 6–7 lý thuyết ở 104/KT (13:30–15:10); tiết 8 (15:20–16:10) cả lớp chơi game ở Phòng máy 3.20 — Nhà học ATL, khác cơ sở với phòng lý thuyết. Giải lao chuyển tiết chỉ 10 phút, kết thúc tiết 7 là di chuyển ngay.",
			},
			second: {
				day: "Thứ Năm",
				periods: "1–3",
				time: "07:00–09:40",
				room: "103/KT (tiết 1–2) + Phòng máy tính 2 – Trường Kinh tế (tiết 3)",
				note: "TKB chính thức bản v3 (06/9/2026). Tiết 1–2 lý thuyết ở 103/KT (07:00–08:40); tiết 3 (08:50–09:40) cả lớp chơi game ở Phòng máy tính 2 – Trường Kinh tế, cùng cơ sở.",
			},
		},
	},
	F2: {
		key: "F2",
		code: "KT2322F2",
		nhom: "M02",
		students: 41,
		teams: 8,
		leftover: "7 đội × 5 và 1 đội × 6 (thành viên thứ sáu = phân tích dữ liệu)",
		classId: "KT330H-F2-2627",
		meetings: {
			first: {
				day: "Thứ Tư",
				periods: "1–3",
				time: "07:00–09:40",
				room: "105/KT (tiết 1–2) + Phòng máy tính 1 – Trường Kinh tế (tiết 3)",
				note: "TKB chính thức bản v3 (06/9/2026). Tiết 1–2 lý thuyết ở 105/KT; tiết 3 (08:50–09:40) cả lớp chơi game ở Phòng máy tính 1 – Trường Kinh tế.",
			},
			second: {
				day: "Thứ Sáu",
				periods: "1–3",
				time: "07:00–09:40",
				room: "202/KT (tiết 1–2) + Phòng máy tính 1 – Trường Kinh tế (tiết 3)",
				note: "TKB chính thức bản v3 (06/9/2026). Tiết 1–2 lý thuyết ở 202/KT; tiết 3 (08:50–09:40) cả lớp chơi game ở Phòng máy tính 1 – Trường Kinh tế. Lưu ý: 41 SV nhưng phòng máy chỉ có 40 máy — lớp trưởng gửi danh sách SV có laptop cá nhân cho GV trước 09/9/2026.",
			},
		},
	},
};

/** Tuần 12 (24–27/11) — buổi dự trữ + thi cuối kỳ. Theo TKB chính thức bản v3 (06/9/2026). */
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
	"Phân tích",
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
			"Phân tích",
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
			"Phân tích",
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
			"Phân tích",
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
		evidence: "Nhật ký 6 vòng: giả định, quyết định, kết quả, sai lệch, bài học, cách dùng Lumina.",
		ask: "Biến cố vòng này đổi giả định nào? Đội đã bác bỏ khuyến nghị AI nào, vì sao?",
	},
	{
		id: "Phân tích",
		title: "Phân tích dữ liệu — quan sát viên",
		job: "Đội 6 người: ghi log quyết định, so sánh dự báo–thực tế, chuẩn bị số liệu cho debrief.",
		evidence: "Bảng sai lệch 6 vòng; đóng góp câu hỏi debrief.",
		ask: "Sai lệch lớn nhất đến từ đối thủ, biến cố hay giả định của đội?",
	},
];
export const WEEKS: WeekPlan[] = [
	{
		week: 1,
		chapter: "Giới thiệu học phần + luật BizOn",
		theory: "Mục tiêu học phần, CLO, rubric 10/20/20/50, cấu trúc 6 chu kỳ, 5 vai trò, tiêu chí thắng.",
		practice: "Buổi liền 3 tiết: chia đội, chọn vai, Class ID, chơi thử 1 vòng (không tính). F1 Thứ Ba 08/9 chỉ luật — demo dời Thứ Năm.",
		cycle: "Demo",
		cycleKind: "prep",
		hours: "3 LT · 0/nhẹ TH",
		clos: [
			"CO1",
			"CO11",
			"CO12",
		],
		gv: [
			"Công bố kế hoạch 11 tuần (TKB 07/9–22/11) và rubric 10/20/20/50 trước khi chơi.",
			"Cấp Class ID, tạo 7–8 đội, phát vốn khởi điểm giống nhau (game mở với tiền mặt 0₫).",
			"F1: Thứ Ba 08/9 tiết 6–8 (chiều liền) — chỉ luật + demo ngắn; game thử để Thứ Năm 10/9.",
			"F2: Thứ Tư 09/9 luật + chia đội; Thứ Sáu 11/9 demo 1 vòng (kết quả không tính).",
			"Thu khảo sát đầu kỳ (T0) nếu làm nghiên cứu — tách khỏi điểm.",
		],
		sv: [
			"Vào game, nhập Class ID, chọn vai, chạy thử 1 vòng, đọc Sổ tay.",
		],
		debrief: "Luật nào còn mơ hồ? Vai nào đội chưa hiểu nhiệm vụ?",
		textbook: "Đề cương §1–6; Mariotti — Introduction",
	},
	{
		week: 2,
		chapter: "Ch. 1 Nhận diện cơ hội",
		theory: "Câu hỏi kinh tế, Schumpeter, ý tưởng, SWOT, con đường khởi nghiệp.",
		practice: "Mỗi đội viết SWOT + tuyên bố cơ hội cho doanh nghiệp sẽ điều hành 6 vòng. Chốt vai 2 vòng đầu.",
		cycle: "Chuẩn bị",
		cycleKind: "prep",
		hours: "5 LT · 5 TH",
		clos: [
			"CO1",
			"CO2",
			"CO5",
			"CO11",
			"CO12",
		],
		gv: [
			"Không cho CEO ôm hết thanh trượt — yêu cầu mỗi vai trình bày 1 khuyến nghị.",
			"Bài kiểm tra luật ngắn (5 câu).",
			"Công bố vốn khởi điểm và điều kiện cấp thêm.",
		],
		sv: [
			"SWOT đội; phiếu vai trò; đọc biến cố mẫu.",
		],
		debrief: "Cơ hội đội chọn là discovery hay creation? SWOT nào sẽ bị thị trường thử thách ở vòng 1?",
		textbook: "Mariotti Ch.1 §1.1–1.5",
	},
	{
		week: 3,
		chapter: "Ch. 2 Kế hoạch kinh doanh & BMC",
		theory: "Feasibility, Business Model Canvas, mục đích và đối tượng của business plan.",
		practice: "Chu kỳ 1 — Cần Thơ, Thị trường ổn định. Thành lập xưởng, chạy quý đầu. BMC sơ bộ sau khi đã commit.",
		cycle: "Chu kỳ 1",
		cycleKind: "play",
		hours: "3 LT · 5 TH",
		clos: [
			"CO1",
			"CO2",
			"CO4",
			"CO6",
			"CO11",
		],
		gv: [
			"Brief 5 phút: mục tiêu vòng 1 là sống sót có lãi, không phải cắm hết cờ.",
			"Khóa vòng sau cảnh báo 5 phút.",
			"Debrief 4 câu.",
		],
		sv: [
			"Phiếu quyết định vòng 1; BMC 9 ô nháp; nhật ký SEC.",
		],
		debrief: "Feasibility analysis khác business plan ở chỗ nào — đội đã làm cái nào trước khi commit?",
		textbook: "Mariotti Ch.2 §2.1–2.6",
	},
	{
		week: 4,
		chapter: "Ch. 3 Tạo doanh nghiệp từ cơ hội",
		theory: "Mission/vision, lợi thế cạnh tranh, economics of one unit, định giá doanh nghiệp.",
		practice: "Chu kỳ 2 — TP. Hồ Chí Minh, Cơ Hội Vàng (cầu +35%). Kiểm tra EOU trước khi tăng công suất. Công bố luân chuyển vai từ vòng 3.",
		cycle: "Chu kỳ 2",
		cycleKind: "play",
		hours: "5 LT · 5 TH",
		clos: [
			"CO3",
			"CO4",
			"CO5",
			"CO9",
			"CO11",
		],
		gv: [
			"Ép CFO + COO tính EOU trên bảng trước khi CMO đổi giá.",
			"So sánh 3 đối thủ AI: đội đang cạnh tranh giá hay thương hiệu?",
		],
		sv: [
			"Tính EOU; ghi lợi thế cạnh tranh giả định; nhật ký.",
		],
		debrief: "Một đơn vị hàng lời bao nhiêu sau marketing? Nếu sai 20% sản lượng, EOU còn dương không?",
		textbook: "Mariotti Ch.3 §3.1–3.5",
	},
	{
		week: 5,
		chapter: "Ch. 4 Khám phá thị trường",
		theory: "Marketing ≠ selling, nghiên cứu thị trường, phân khúc, định vị.",
		practice: "Chu kỳ 3 — Khánh Hòa, Cạnh Tranh Về Giá (co giãn ×1,4). CMO dẫn. Đọc biến cố trước khi cắt giá. Luân chuyển vai.",
		cycle: "Chu kỳ 3",
		cycleKind: "play",
		hours: "3 LT · 5 TH",
		clos: [
			"CO3",
			"CO7",
			"CO8",
			"CO11",
		],
		gv: [
			"Cấm tối ưu theo thanh dự báo thị phần mà không nêu phân khúc.",
			"Hỏi: đối thủ đang ở đâu trên bản đồ giá–marketing?",
		],
		sv: [
			"Khách mục tiêu 1 câu; lý do giá; nhật ký sau luân chuyển.",
		],
		debrief: "Thị phần tăng nhưng lãi giảm — đó là thắng hay thua theo rubric của học phần?",
		textbook: "Mariotti Ch.4 §4.1–4.4",
	},
	{
		week: 6,
		chapter: "Ch. 5 Marketing mix",
		theory: "4P, thuộc tính sản phẩm, định giá, kênh và phân phối.",
		practice: "Chu kỳ 4 — Đà Nẵng, Khủng Hoảng Năng Lượng (cầu ×0,7, chi phí ×1,3, OEE −10%). Debrief giữa kỳ 20 phút.",
		cycle: "Chu kỳ 4",
		cycleKind: "play",
		hours: "3 LT · 5 TH",
		clos: [
			"CO7",
			"CO8",
			"CO9",
			"CO11",
		],
		gv: [
			"Nhắc marketing đối thủ 55–90 triệu/vòng — chi ngoài dải này phải có luận cứ.",
			"Debrief sâu 15–20 phút (mốc giữa kỳ).",
		],
		sv: [
			"4P một trang; điểm hòa vốn marketing; dùng hoặc bác bỏ Lumina có ghi chú.",
		],
		debrief: "P nào đội đang đánh đổi? Promotion có đang ăn hết contribution margin không?",
		textbook: "Mariotti Ch.5 §5.1–5.4",
	},
	{
		week: 7,
		chapter: "Ch. 6 Bán hàng & Ch. 7 Chi phí",
		theory: "Bán theo lợi ích, CRM; vốn khởi sự, biến phí, định phí, lãi gộp.",
		practice: "Chu kỳ 5 — Thanh Hóa, Khủng Hoảng Chuỗi Cung Ứng (giá thành +25%, đáp ứng −15%). Thanh khoản vì lãi vay 8,5%/vòng luôn chạy.",
		cycle: "Chu kỳ 5",
		cycleKind: "play",
		hours: "4 LT · 5 TH",
		clos: [
			"CO8",
			"CO9",
			"CO10",
			"CO11",
		],
		gv: [
			"Nhấn mạnh vòng 5–6: lãi vay và thanh khoản căng. Không cấp vốn tùy ý.",
			"Hỏi COO: tồn kho vòng trước đang làm gì với cash?",
		],
		sv: [
			"Tách biến phí / định phí từ P&L game; kế hoạch bán dựa trên lợi ích, không phải giá.",
		],
		debrief: "Lãi kế toán và tiền mặt có đang kể hai câu chuyện khác nhau không?",
		textbook: "Mariotti Ch.6–7",
	},
	{
		week: 8,
		chapter: "Ch. 8 Báo cáo tài chính",
		theory: "P&L, bảng cân đối, tỷ số, ROI, common-size.",
		practice: "Chu kỳ 6 — Hà Nội, Việt Nam Hóa Rồng (cầu ×1,25, thương hiệu ×1,5). Cắm cờ / chốt bản đồ. Xuất nhật ký CSV.",
		cycle: "Chu kỳ 6",
		cycleKind: "play",
		hours: "4 LT · 5 TH",
		clos: [
			"CO4",
			"CO9",
			"CO11",
			"CO12",
		],
		gv: [
			"Không spoil công thức trên lớp — để đội giải thích tại sao thua/thắng.",
			"Sao lưu xếp hạng, số cờ, P&L ngay khi khóa.",
			"Giao đề pitch tuần 9 — TKB chính thức xếp pitching ở tuần 9–10, sớm hơn 2 tuần so với bản kế hoạch trước.",
		],
		sv: [
			"Phân tích tỷ số từ 6 vòng; xuất CSV nhật ký; dàn ý báo cáo cuối.",
		],
		debrief: "Kết quả khác dự báo vì biến cố, đối thủ, hay sai giả định? Đổi chiến lược từ vòng nào?",
		textbook: "Mariotti Ch.8 §8.1–8.7",
	},
	{
		week: 9,
		chapter: "Ch. 12 Lãnh đạo & Pitch dự án khởi nghiệp — đợt 1",
		theory: "Không có tiết lý thuyết riêng tuần này — TKB chính thức dành trọn 3 tiết/buổi cho pitching, không dùng phòng máy.",
		practice: "Pitch 7 phút/đội + 5 phút phản biện: hành trình 6 vòng, 1 sai lầm đắt, 1 quyết định đúng, kế hoạch tiếp. Nửa lớp trình bày đợt này (GV chia lịch cụ thể).",
		cycle: "Pitch 1",
		cycleKind: "close",
		hours: "0 LT · 6 TH (pitch)",
		clos: [
			"CO4",
			"CO11",
			"CO12",
		],
		gv: [
			"Rubric pitch công khai trước. Đồng đẳng 1 phiếu/đội. Không chỉ đọc bảng xếp hạng.",
			"2 buổi = 2 phòng lý thuyết quen thuộc (không phòng máy) — theo đúng TKB v3.",
		],
		sv: [
			"Slide 6 trang; nộp CSV + nhật ký; phiếu đồng đẳng.",
		],
		debrief: "What / Why / So what / Now what cho hành trình 6 vòng — không chỉ cho vòng cuối.",
		textbook: "Mariotti Ch.12 §12.1–12.7",
	},
	{
		week: 10,
		chapter: "Pitch dự án khởi nghiệp — đợt 2",
		theory: "Không có tiết lý thuyết riêng tuần này — TKB chính thức dành trọn 3 tiết/buổi cho pitching, không dùng phòng máy.",
		practice: "Nửa lớp còn lại trình bày pitch 7 phút + 5 phút phản biện. Khảo sát T2 sau buổi pitch cuối.",
		cycle: "Pitch 2",
		cycleKind: "close",
		hours: "0 LT · 6 TH (pitch)",
		clos: [
			"CO4",
			"CO11",
			"CO12",
		],
		gv: [
			"Hoàn tất chấm pitch + đồng đẳng cho cả lớp. Tổng hợp điểm dự án khởi nghiệp (20%).",
		],
		sv: [
			"Hoàn tất slide, nộp CSV + nhật ký, phiếu đồng đẳng, khảo sát T2.",
		],
		debrief: "So sánh 2 đợt pitch: đội nào rút ra bài học từ đội trình bày trước?",
		textbook: "Mariotti Ch.12 §12.1–12.7",
	},
	{
		week: 11,
		chapter: "Ch. 9 Dòng tiền + Ch. 10–11 Tài trợ, vận hành & pháp lý",
		theory: "Cash ≠ profit, ngân sách tiền, vốn lưu động, thuế. Nợ vs vốn chủ, nguồn vốn. Loại hình DN, hợp đồng, IP, rủi ro, disaster recovery.",
		practice: "Buổi thực hành cuối: xuất dữ liệu 6 vòng, hoàn tất phiếu/nhật ký còn thiếu — không mở vòng mới (game đã đóng ở vòng 6, tuần 8; business plan đã nộp/pitch xong ở tuần 9–10). Soi lại chương tài chính + rủi ro/pháp lý của báo cáo bằng góc nhìn Ch.9–11, bổ sung nếu cần từ phản hồi sau pitch.",
		cycle: "Thu hoạch",
		cycleKind: "harvest",
		hours: "4 LT · 2 TH",
		clos: [
			"CO4",
			"CO11",
			"CO10",
			"CO11",
			"CO12",
		],
		gv: [
			"Chấm nhật ký SEC + phiếu 6 vòng. Phản hồi theo mẫu: điểm mạnh / cần cải / khái niệm.",
			"Cấm số liệu không truy xuất từ 6 vòng. Đội phải chú thích nguồn (vòng nào, biến nào).",
			"Nối biến cố game với pháp lý thật (hợp đồng, IP, tài sản hữu hình).",
		],
		sv: [
			"Báo cáo dòng tiền 6 vòng; working capital; bài học CFO.",
			"Nợ/vốn chủ đã dùng; phương án tài trợ nếu scale ra Hà Nội.",
			"Loại hình DN; 3 rủi ro lớn nhất đã gặp; kế hoạch phục hồi.",
		],
		debrief: "Nếu không được vay, đội đã chết ở vòng nào? Vay 8,5%/vòng đắt hay rẻ so với cơ hội mất thị phần?",
		textbook: "Mariotti Ch.9 §9.1–9.6, Ch.10–11 §10.1–10.5, §11.1–11.6",
	},
];
export const CYCLE_STEPS = [
	{
		id: "brief",
		label: "Briefing",
		minutes: 10,
		gv: "Công bố mục tiêu vòng, thời gian, biến cố (không giải thích hộ). Nhắc giới hạn 2 Nếu–Thì và 3 câu Lumina.",
		sv: "Mở dashboard, kiểm tra tiền mặt, tồn kho, thương hiệu, cờ, thứ hạng.",
	},
	{
		id: "market",
		label: "Đọc thị trường",
		minutes: 10,
		gv: "Im lặng. Quan sát đội nào bỏ qua biến cố.",
		sv: "SEC đọc biến cố và dữ liệu thị trường; CMO đọc đối thủ.",
	},
	{
		id: "roles",
		label: "Phân tích theo vai",
		minutes: 20,
		gv: "Đi từng bàn, hỏi 1 câu Socratic, không ra đáp án.",
		sv: "CMO / COO / CFO viết khuyến nghị riêng trên phiếu trước khi họp.",
	},
	{
		id: "talk",
		label: "Thảo luận đội",
		minutes: 20,
		gv: "Kiểm soát sự tham gia. Không để CEO tự kéo thanh.",
		sv: "CEO điều phối. Đội thống nhất giả định và mục tiêu vòng (thị phần / lãi / cash / thương hiệu).",
	},
	{
		id: "whatif",
		label: "Nếu–Thì",
		minutes: 15,
		gv: "Nhắc tối đa 2 lượt. Cấm chạy xong chọn phương án điểm cao nhất rồi thôi.",
		sv: "Chạy tối đa 2 kịch bản. Ghi kịch bản nào bị loại và vì sao.",
	},
	{
		id: "lumina",
		label: "Lumina AI",
		minutes: 10,
		gv: "Không dùng AI để cung cấp đáp án. Nhắc đánh giá, không sao chép.",
		sv: "Hỏi tối đa 3 câu. Ghi: dùng / điều chỉnh / bác bỏ.",
	},
	{
		id: "commit",
		label: "Commit",
		minutes: 10,
		gv: "Cảnh báo còn 5 phút rồi khóa vòng (ERR_ROUND_LOCKED). Ghi đội trễ hạn.",
		sv: "CEO commit. SEC ghi lý do cuối. Không sửa sau khóa.",
	},
	{
		id: "result",
		label: "Kết quả",
		minutes: 15,
		gv: "Mở P&L, dòng tiền, chi phí đối thủ. Không tuyên bố đội thắng trước debrief.",
		sv: "So dự báo với thực tế. Chụp xếp hạng / cờ / P&L.",
	},
	{
		id: "debrief",
		label: "Debrief",
		minutes: 25,
		gv: "What → Why → So what → Now what. Nối 1 khái niệm textbook.",
		sv: "SEC hoàn tất nhật ký. Đội chốt 1 thay đổi cho vòng sau.",
	},
	{
		id: "close",
		label: "Chốt & CLO",
		minutes: 15,
		gv: "Xuất / sao lưu dữ liệu vòng. Giao việc tự học.",
		sv: "Nộp phiếu quyết định. Ghi bài học cá nhân 5 dòng.",
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
export const RUBRIC_COURSE = [
	{
		id: "disc",
		name: "Thảo luận / chuyên cần",
		weight: 10,
		note: "Đúng đề cương. Điểm danh + phát biểu debrief + đóng góp vai trò. Thầy Phan Anh Tú chốt: mỗi lần phát biểu được 1 điểm (~1%).",
		clos: "CO11, CO12",
	},
	{
		id: "game",
		name: "Điểm chơi mô phỏng BizOn Bật Nghiệp",
		weight: 20,
		note: "Thầy Phan Anh Tú chốt: quy đổi điểm trên App (thang 100%) thành 20% điểm cuối kỳ. Xem \"Chỉ số kết quả game\" bên dưới cho cách tính 100% đó.",
		clos: "CO1–CO9, CO12",
	},
	{
		id: "proc",
		name: "Dự án khởi nghiệp (BMC + pitch)",
		weight: 20,
		note: "Viết dự án khởi nghiệp theo project-based outcome + báo cáo thuyết trình tại lớp tuần 9–10 (chung 1 dự án với game). Thầy Phan Anh Tú giao Hương tự quyết chi tiết chấm điểm phần này.",
		clos: "CO1–CO12",
	},
	{
		id: "exam",
		name: "Thi cuối kỳ",
		weight: 50,
		note: "Giữ nguyên theo quy định CTU. Hình thức: trắc nghiệm trên máy, kết hợp câu hỏi mở. Game không thay thế thi — câu thi có thể lấy tình huống từ 6 vòng.",
		clos: "CO1–CO9, CO11, CO12",
	},
];
export const RUBRIC_PROCESS = [
	{
		group: "game" as const,
		name: "Hiệu quả 6 chu kỳ",
		pct: 8,
		of: 20,
		detail: "Chỉ số tổng hợp công bố trước: lãi lũy kế, tiền mặt dương, thị phần/cờ, thương hiệu, không phá sản. Không chỉ xếp hạng.",
	},
	{
		group: "game" as const,
		name: "Phiếu quyết định & lập luận",
		pct: 6,
		of: 20,
		detail: "Giả định, dự báo, bất đồng, lý do commit — trước khi biết kết quả.",
	},
	{
		group: "game" as const,
		name: "Nhật ký SEC & phản tư",
		pct: 6,
		of: 20,
		detail: "Sai lệch dự báo–thực tế, nguyên nhân, bài học, đánh giá Lumina.",
	},
	{
		group: "project" as const,
		name: "Business plan / BMC từ dữ liệu game",
		pct: 10,
		of: 20,
		detail: "Số liệu phải truy xuất được từ 6 vòng (xong ở tuần 8). Hoàn thiện trước khi pitch tuần 9 — pitch chính là báo cáo dự án này.",
	},
	{
		group: "project" as const,
		name: "Pitch cuối kỳ + hợp tác",
		pct: 6,
		of: 20,
		detail: "7 phút, đồng đẳng, đóng góp cá nhân. Tuần 11 — báo cáo + thuyết trình dự án khởi nghiệp tại lớp.",
	},
];
export const OPTIONS = [
	{
		id: "A",
		title: "Mô hình đề xuất — 11 tuần",
		badge: "Nên dùng",
		points: [
			"Mỗi buổi (2 buổi/tuần) đều gồm 2 tiết lý thuyết + 1 tiết phòng máy (tiết cuối). F1: Thứ Ba 104/KT + Phòng máy 3.20 – Nhà học ATL; Thứ Năm 103/KT + Phòng máy tính 2 – Trường Kinh tế.",
			"Tuần 2–8 = đúng 6 chu kỳ (tuần 3–8) + 1 tuần chuẩn bị (tuần 2), mỗi buổi 1 tiết chơi game.",
			"Tuần 9–10 pitch dự án khởi nghiệp (4 buổi, trọn 3 tiết, không phòng máy). Tuần 11 thu hoạch Ch.9–11.",
			"66 tiết trên lớp (2×3 tiết × 11 tuần) — đúng quy định 11 tuần dạy. Tuần 12: dự trữ + thi cuối kỳ. 60 giờ TH đề cương gồm đồ án ngoài lớp.",
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
				label: "Chạy thử đủ 6 vòng với 2 đội giả — commit, khóa, ERR_ROUND_LOCKED, 2 Nếu–Thì, 3 Lumina, 3 AI, cấp vốn.",
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
					"Xác nhận wifi / máy chiếu 104/KT, 103/KT, 105/KT, 202/KT, Phòng máy 3.20 – Nhà học ATL (F1 Thứ Ba), Phòng máy tính 2 (F1 Thứ Năm), Phòng máy tính 1 (F2 cả 2 buổi) — theo TKB chính thức bản v3.",
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
				label: "In / chiếu rubric 10 / 20 / 20 / 50 và cách quy đổi điểm App thành 20%.",
			},
			{
				id: "rolesheet",
				label: "In thẻ 5 vai trò (trang Lớp & đội) — 7 bộ F1, 8 bộ F2.",
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
				label: "Thu phiếu quyết định (đủ 6 vòng / đội).",
			},
			{
				id: "feedback",
				label: "Ghi phản hồi nhóm (điểm mạnh / cần cải / khái niệm) ngay trong buổi.",
			},
		],
	},
	{
		group: "Sau tuần 8 và pitch (tuần 9–10)",
		items: [
			{
				id: "csv",
				label: "Đủ CSV nhật ký 7–8 đội.",
			},
			{
				id: "feedback2",
				label: "Phản hồi nhóm theo mẫu điểm mạnh / cần cải / khái niệm.",
			},
			{
				id: "pitch",
				label: "Pitch tuần 9–10 + đồng đẳng + khảo sát T2.",
			},
			{
				id: "grade",
				label: "Ghép điểm cá nhân: discussion riêng, game nhóm ± peer.",
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
		metric: "Nhật ký SEC đủ 6 vòng",
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
		metric: "Debrief sau mỗi vòng (tuần 3–8)",
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
];
export const LINKS = {
	hub: "https://thuyhuongctu.github.io/BizOn/",
	game: "https://thuyhuongctu.github.io/BizOn/game.html",
	guide: "https://github.com/thuyhuongctu/BizOn/blob/main/docs/huong-dan-giang-vien.md",
	music: "https://thuyhuongctu.github.io/BizOn/am-nhac.html",
	team: "https://thuyhuongctu.github.io/BizOn/doi-ngu.html",
};
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
export const OUTLINE_NOTE = "Đề cương 2019 có 13 tuần (45 LT + 60 TH). TKB chính thức bản v3 (06/9/2026, thầy Phan Anh Tú lập) đánh 11 tuần dạy + 1 tuần thi (tuần 12), 2 buổi × 3 tiết = 66 tiết trên lớp. Pitching dự án khởi nghiệp xếp tuần 9–10 (4 buổi, không dùng phòng máy) — sớm hơn 2 tuần so với bản kế hoạch trước; Ch.9 (dòng tiền) + Ch.10–11 (tài trợ, vận hành, pháp lý) dồn về tuần 11 sau pitch. Ch.6+Ch.7 vẫn gộp tuần 7. 60 giờ TH gồm đồ án ngoài lớp (BMC, plan, pitch).";
/** Sáu vòng = CONQUEST_STOPS (js/app.js) × MARKET_EVENTS (js/engine.js). `expand` = Mariotti / sư phạm — không đổi tên biến cố trong engine. */
export const CYCLES = [
	{
		n: 1,
		week: 3,
		city: "Cần Thơ",
		zone: "Đồng bằng sông Cửu Long",
		eventId: "EV_STABLE",
		event: "Thị trường ổn định",
		tag: "Vòng khởi động",
		title: "Cần Thơ",
		subtitle: "Thị trường ổn định",
		flag: "Cờ 1 · xưởng thủ công",
		engine: "Nhu cầu ×1,0 · chi phí ổn định",
		goal: "Chốt giá, marketing, sản lượng, nhân sự, vốn. Sống sót có lãi. Thắng thị phần thì cắm cờ tại Cần Thơ.",
		trap: "Tối ưu thanh dự báo thị phần, bỏ biến cố, CEO kéo một mình.",
		evidence: "Phiếu vòng 1, nhật ký giả định, cờ Cần Thơ nếu thắng.",
		expand: "Sau vòng: BMC 9 ô từ quyết định thật (Mariotti Ch.2).",
	},
	{
		n: 2,
		week: 4,
		city: "TP. Hồ Chí Minh",
		zone: "Đông Nam Bộ",
		eventId: "EV_GOLDEN",
		event: "Cơ Hội Vàng",
		tag: "Sự kiện đặc biệt",
		title: "TP. Hồ Chí Minh",
		subtitle: "Cơ Hội Vàng",
		flag: "Cờ 2",
		engine: "Nhu cầu +35% · R&D ×1,5 · thuế XK 0%",
		goal: "Tăng công suất đáp ứng gói kích cầu. CFO rà ngân sách, COO tăng sản lượng/OEE.",
		trap: "Không tăng công suất kịp, hoặc đốt marketing khi cầu đã tự tăng.",
		evidence: "EOU trước khi đổi giá, P&L vòng 1–2, cờ TP.HCM.",
		expand: "Economics of one unit (Mariotti Ch.3) tính trên số liệu vòng này.",
	},
	{
		n: 3,
		week: 5,
		city: "Khánh Hòa",
		zone: "Duyên hải Nam Trung Bộ",
		eventId: "EV_PRICEWAR",
		event: "Cạnh Tranh Về Giá",
		tag: "Cảnh báo thị trường",
		title: "Khánh Hòa",
		subtitle: "Cạnh Tranh Về Giá",
		flag: "Cờ 3",
		engine: "Co giãn giá ×1,4 · đối thủ MT −15%",
		goal: "CMO dẫn. Bundling hoặc value-added — không giảm giá sâu. Luân chuyển vai.",
		trap: "Lao vào cắt giá, mất biên. Thị phần tăng, lãi giảm mà tưởng thắng.",
		evidence: "Lý do giá, khách mục tiêu 1 câu, nhật ký sau đổi vai.",
		expand: "Phân khúc–định vị (Mariotti Ch.4) sau khi đã đọc biến cố Price War.",
	},
	{
		n: 4,
		week: 6,
		city: "Đà Nẵng",
		zone: "Duyên hải miền Trung",
		eventId: "EV_RECESSION",
		event: "Khủng Hoảng Năng Lượng",
		tag: "Cảnh báo khẩn cấp",
		title: "Đà Nẵng",
		subtitle: "Khủng Hoảng Năng Lượng",
		flag: "Cờ 4 · debrief giữa kỳ",
		engine: "Nhu cầu ×0,7 · chi phí ×1,3 · OEE −10%",
		goal: "COO rà lịch máy, CFO dự phòng vốn. Pin mặt trời giảm nhẹ tác động nếu đội có.",
		trap: "Giữ sản lượng cũ khi cầu đã −30%. Chi marketing ngoài dải 55–90 triệu không luận cứ.",
		evidence: "4P một trang, điểm hòa vốn, dùng/bác bỏ Lumina.",
		expand: "Marketing mix + hòa vốn (Mariotti Ch.5). Debrief 20 phút.",
	},
	{
		n: 5,
		week: 7,
		city: "Thanh Hóa",
		zone: "Bắc Trung Bộ",
		eventId: "EV_SUPPLY",
		event: "Khủng Hoảng Chuỗi Cung Ứng",
		tag: "Cảnh báo khẩn cấp",
		title: "Thanh Hóa",
		subtitle: "Khủng Hoảng Chuỗi Cung Ứng",
		flag: "Cờ 5",
		engine: "Giá thành +25% · đáp ứng đơn −15%",
		goal: "Tăng ngân sách vận chuyển hoặc đàm phán giao hàng. Giữ cash — lãi vay 8,5%/vòng luôn chạy.",
		trap: "Vay để bù lỗ vòng. Bỏ qua tỷ lệ đáp ứng đơn −15%.",
		evidence: "Tách biến phí / định phí, tồn kho vs cash, cờ Thanh Hóa.",
		expand: "Sổ tay GV ghi «Siết tín dụng» cho Thanh Hóa — hỏi thanh khoản, không đổi tên biến cố trong engine.",
	},
	{
		n: 6,
		week: 8,
		city: "Hà Nội",
		zone: "Đồng bằng sông Hồng",
		eventId: "EV_MILESTONE",
		event: "Việt Nam Hóa Rồng",
		tag: "Vòng chung kết · kịch bản giả định",
		title: "Hà Nội",
		subtitle: "Việt Nam Hóa Rồng",
		flag: "Cờ 6",
		engine: "Cầu ×1,25 · thương hiệu ×1,5 · lương ×1,1 · co giãn ×0,85 · marketing ×1,2",
		goal: "Vòng quyết định. Xuất CSV. Không spoil công thức. Giao đề pitch tuần 9.",
		trap: "Đội tối ưu xếp hạng thay vì giải thích được vì sao thắng/thua.",
		evidence: "Tỷ số 6 vòng, CSV nhật ký, dàn ý báo cáo, cờ Hà Nội.",
		expand: "P&L và tỷ số (Mariotti Ch.8) từ đúng 6 vòng game.",
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

/** Biểu mẫu sinh viên E — Pitch cuối kỳ. Dùng chung cho phần "dự án khởi nghiệp" 20% tuần 9–10. */
export const PITCH_GUIDE = {
	format: "7 phút trình bày, 5 phút phản biện.",
	points: [
		"Chiến lược ban đầu.",
		"Ba bước ngoặt của sáu vòng.",
		"Một quyết định thành công và một sai lầm.",
		"Dữ liệu thị phần, lợi nhuận, tiền mặt, thương hiệu.",
		"Vai trò phối hợp liên chức năng.",
		"Cách dùng / bác bỏ Lumina.",
		"Chiến lược nếu có thêm hai chu kỳ.",
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
