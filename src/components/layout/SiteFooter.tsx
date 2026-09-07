import { useT } from "@/lib/i18n";

/** Footer matching the pattern used across the BizOn ecosystem's static
 * pages (BizOn homepage, KT330H & KT338 overview page): brand + tagline,
 * a link row, then a copyright line with source-code links. */
export function SiteFooter() {
  const t = useT();
  return (
    <footer data-tour="footer" className="mt-16 border-t border-border pt-6 text-xs text-muted-foreground">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-semibold text-ink">BizOn Classroom</p>
          <p className="mt-1 max-w-sm">
            {t(
              "Kế hoạch triển khai KT330H Khởi sự doanh nghiệp — Khoa Kinh doanh quốc tế, Trường Kinh tế, Đại học Cần Thơ.",
              "Rollout plan for KT330H Entrepreneurship — School of International Business, College of Economics, Can Tho University.",
            )}
          </p>
        </div>
        <div className="space-x-2">
          <a
            className="underline underline-offset-2"
            href="https://thuyhuongctu.github.io/BizOn/"
            target="_blank"
            rel="noreferrer"
          >
            BizOn
          </a>
          <span>·</span>
          <a
            className="underline underline-offset-2"
            href="https://thuyhuongctu.github.io/EnQuiz/"
            target="_blank"
            rel="noreferrer"
          >
            EnQuiz
          </a>
          <span>·</span>
          <a
            className="underline underline-offset-2"
            href="https://thuyhuongctu.github.io/BizOn-Classroom_KT330H-KT338/"
            target="_blank"
            rel="noreferrer"
          >
            {t("Trang sinh viên", "Student overview")}
          </a>
        </div>
      </div>
      <p className="mt-4">
        © 2026 Đỗ Thùy Hương &amp; Phan Anh Tú. {t("Mã nguồn:", "Source code:")}{" "}
        <a
          className="underline underline-offset-2"
          href="https://github.com/thuyhuongctu/BizOn"
          target="_blank"
          rel="noreferrer"
        >
          BizOn
        </a>{" "}
        ·{" "}
        <a
          className="underline underline-offset-2"
          href="https://github.com/thuyhuongctu/EnQuiz"
          target="_blank"
          rel="noreferrer"
        >
          EnQuiz
        </a>{" "}
        ·{" "}
        <a
          className="underline underline-offset-2"
          href="https://github.com/thuyhuongctu/BizOn-Classroom_KT330H"
          target="_blank"
          rel="noreferrer"
        >
          BizOn-Classroom_KT330H
        </a>
        .
      </p>
    </footer>
  );
}
