export type Track = {
  id: string;
  title: string;
  version: string;
  src: string;
  duration: number;
  durationLabel: string;
  use: string;
  art: string;
  featured?: boolean;
  album: string;
};

/** Tuyển tập Bật Nghiệp lấy từ kho nhạc BizOn — bài gắn sao là mặc định. */
export const TRACKS: Track[] = [
  {
    id: "bat-nghiep-co-loi",
    title: "Bật Nghiệp",
    version: "Bản thu có lời",
    src: "/audio/bat-nghiep-co-loi.mp3",
    duration: 203,
    durationLabel: "3:23",
    use: "Mở đầu buổi. Ca khúc chủ đề game, gắn sao trong kho nhạc, nhạc nền chào lớp.",
    art: "/characters/lumina-ao-dai.webp",
    featured: true,
    album: "Bật Nghiệp",
  },
  {
    id: "bat-nghiep",
    title: "Bật Nghiệp",
    version: "Instrumental",
    src: "/audio/bat-nghiep.mp3",
    duration: 80,
    durationLabel: "1:20",
    use: "Xen giữa các vòng — bản không lời, không át thảo luận đội.",
    art: "/characters/lumina-ao-dai-present.webp",
    album: "Bật Nghiệp",
  },
  {
    id: "huong-on-return",
    title: "Hương on Return",
    version: "Bài hát chính của hệ sinh thái",
    src: "/audio/huong-on-return.mp3",
    duration: 150,
    durationLabel: "2:30",
    use: "Nhạc nền khi đội phân tích và chạy Nếu–Thì. Đúng bản game đang phát.",
    art: "/characters/lumina-nghe-nhac.webp",
    album: "Hương on Return",
  },
  {
    id: "mekong-sunfire-2",
    title: "Bật Nghiệp",
    version: "Remix Mekong Sunfire 2",
    src: "/audio/bat-nghiep-mekong-sunfire-2.mp3",
    duration: 203,
    durationLabel: "3:23",
    use: "Cao trào pitch / tổng kết. Kho nhạc ghi «đề xuất nghe».",
    art: "/characters/lumina-ao-dai-cheer.webp",
    album: "Bật Nghiệp",
  },
  {
    id: "bizon-theme",
    title: "BizOn Theme",
    version: "Instrumental",
    src: "/audio/bizon-theme.mp3",
    duration: 181,
    durationLabel: "3:01",
    use: "Nền chung khi phát phiếu, debrief, checklist — không lời.",
    art: "/characters/lumina-dj.webp",
    album: "BizOn Theme",
  },
];

export const FEATURED_ID = "bat-nghiep-co-loi";

export function getTrack(id: string): Track {
  return TRACKS.find((t) => t.id === id) ?? TRACKS[0]!;
}

export const CHORUS = [
  "Bật lên như đất sét gặp bàn tay,",
  "Sáu vòng thị trường khốc liệt, cờ ta cắm mỗi ngày.",
  "Từ Miền Tây ra tới Thủ đô,",
  "Hóa Rồng cùng đất nước — giấc mơ không còn mơ hồ.",
];
