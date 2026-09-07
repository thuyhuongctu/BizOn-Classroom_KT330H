# BizOn Classroom — KT330H

App kế hoạch giảng dạy dành cho giảng viên/trợ giảng học phần **KT330H — Khởi sự doanh nghiệp**
(Đại học Cần Thơ, HK1 2026–2027): lịch 12 tuần, đội/vai trò, checklist chuẩn bị, đánh giá và
báo cáo tiến độ theo mô hình 2 Mùa × 6 vòng + Đại hội Cổ đông.

Triển khai dưới dạng static SPA lên GitHub Pages: https://thuyhuongctu.github.io/BizOn-Classroom_KT330H/

## Phát triển

```bash
npm ci
npm run dev
```

## Build static SPA (dùng để deploy GitHub Pages)

```bash
VITE_STATIC_SPA=true VITE_BASE_PATH=/BizOn-Classroom_KT330H/ VITE_AUTH_ENABLED=false npx vite build
```

Deploy tự động qua GitHub Actions (`.github/workflows/deploy-pages.yml`) mỗi khi push lên `main`.

## Các công cụ liên quan

- [BizOn Bật Nghiệp](https://thuyhuongctu.github.io/BizOn/game.html) — game mô phỏng dành cho sinh viên.
- [EnQuiz](https://thuyhuongctu.github.io/EnQuiz/) — ôn thi trắc nghiệm.
- [Trang tổng quan KT330H & KT338](https://thuyhuongctu.github.io/BizOn-Classroom_KT330H-KT338/) — giới thiệu học phần cho sinh viên.
