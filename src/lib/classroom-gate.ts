// Khóa nhẹ cho toàn bộ app công cụ lớp học (Điều hành, Đánh giá, Checklist...).
// App này xuất bản tĩnh lên GitHub Pages (VITE_STATIC_SPA=true), không có máy
// chủ để xác thực thật — đây KHÔNG phải bảo mật thật sự (mật khẩu chỉ so khớp
// SHA-256 ngay trên trình duyệt, ai đọc bundle JS + biết cách brute-force hash
// vẫn qua được), chỉ nhằm chặn sinh viên tình cờ mở link và xem nội dung dành
// cho giảng viên (đã xảy ra thật với nhóm M01 — xem lịch sử commit). Nếu cần
// khóa chặt hơn, chuyển sang xuất bản có backend + auth thật (đã có sẵn hạ
// tầng ở src/lib/auth/, hiện đang tắt qua VITE_AUTH_ENABLED=false).
//
// Không cấu hình VITE_CLASSROOM_GATE_HASH (rỗng) → khóa tắt, dùng cho môi
// trường dev/preview nội bộ. Bản build thật (.github/workflows/deploy-pages.yml)
// luôn đặt giá trị này.

const SESSION_KEY = "bizon-classroom-gate-ok";

export function gateHash(): string {
  return (import.meta.env.VITE_CLASSROOM_GATE_HASH ?? "").trim();
}

export function gateEnabled(): boolean {
  return gateHash().length > 0;
}

export function hasUnlockedThisSession(): boolean {
  if (!gateEnabled()) return true;
  try {
    return sessionStorage.getItem(SESSION_KEY) === gateHash();
  } catch {
    return false;
  }
}

async function sha256Hex(input: string): Promise<string> {
  const bytes = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function tryUnlock(password: string): Promise<boolean> {
  const hash = await sha256Hex(password);
  if (hash !== gateHash()) return false;
  try {
    sessionStorage.setItem(SESSION_KEY, gateHash());
  } catch {
    // sessionStorage bị chặn (chế độ riêng tư...) — vẫn cho qua phiên hiện tại,
    // chỉ là sẽ phải nhập lại mật khẩu nếu tải lại trang.
  }
  return true;
}
