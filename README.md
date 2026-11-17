# BizOn Classroom — KT330H

App kế hoạch giảng dạy dành cho giảng viên/trợ giảng học phần **KT330H — Khởi sự doanh nghiệp**
(Đại học Cần Thơ, HK1 2026–2027): lịch 12 tuần, đội/vai trò, checklist chuẩn bị, đánh giá và
báo cáo tiến độ theo mô hình 2 Mùa × 6 vòng + Đại hội Cổ đông.

Triển khai dưới dạng static SPA lên GitHub Pages: https://kt330h.bizonland.com/

## Phát triển

```bash
npm ci
npm run dev
```

## Build static SPA (dùng để deploy GitHub Pages)

```bash
VITE_STATIC_SPA=true VITE_BASE_PATH=/ VITE_AUTH_ENABLED=false npx vite build
```

Deploy tự động qua GitHub Actions (`.github/workflows/deploy-pages.yml`) mỗi khi push lên `main`.

## Các công cụ liên quan

- [BizOn Bật Nghiệp](https://bizonland.com/game.html) — game mô phỏng dành cho sinh viên.
- [EnQuiz](https://enquiz.bizonland.com/) — ôn thi trắc nghiệm.
- [Trang tổng quan KT330H & KT338](https://hocphan.bizonland.com/) — giới thiệu học phần cho sinh viên.
