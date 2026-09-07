/** Nền chìm: bản đồ Việt Nam — phỏng theo #vnmark của EnQuiz (đường viền +
 * chấm Hoàng Sa/Trường Sa + 4 hải đăng nhấp nháy), bỏ hai ảnh cờ base64 nặng
 * cho gọn. Đặt bên trong DeepMindHero (không phải position:fixed toàn trang
 * như EnQuiz) vì hero ở đây có nền đen đặc — một lớp fixed z-index âm sẽ bị
 * nền đặc đó che kín, không thể thấy được. */
export function VietnamMark() {
  return (
    <div id="vnmark" aria-hidden="true">
      <svg viewBox="-12 -46 604 650" xmlns="http://www.w3.org/2000/svg" overflow="visible">
        <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
          <polygon points="108.9,25.2 148.2,39.0 145.3,52.5 158.2,69.0 186.7,80.1 166.7,96.0 158.2,99.0 148.2,102.0 138.2,120.0 126.8,129.0 120.3,156.0 125.4,177.0 142.5,189.0 159.6,210.0 174.4,231.0 192.4,243.0 202.9,258.0 210.9,273.0 216.6,291.0 222.3,312.0 223.7,336.0 220.9,357.0 218.0,378.0 198.1,396.0 183.8,405.0 159.6,415.5 152.5,417.0 146.8,429.0 141.1,441.0 119.7,456.0 95.5,468.0 94.6,454.5 93.5,439.5 101.2,427.5 96.3,415.5 84.1,413.4 101.2,399.0 124.0,397.5 124.8,378.0 140.2,374.4 145.3,363.0 172.4,348.0 169.6,321.0 169.6,294.0 172.4,284.4 173.8,270.0 169.6,249.0 153.9,240.0 134.0,219.0 116.8,198.0 104.0,174.0 72.7,147.0 85.5,137.4 88.3,121.5 81.2,113.4 44.2,99.0 39.9,86.4 18.2,83.4 18.5,54.0 31.3,43.5 52.7,50.4 61.3,42.0 81.2,43.2 95.8,38.4 105.5,32.4 108.9,25.2" />
          <ellipse cx="71.2" cy="419.4" rx="4.5" ry="7" />
        </g>
        <g fill="currentColor">
          <circle cx="145.3" cy="465.6" r="1.8" />
          <g opacity=".95">
            <circle cx="287.8" cy="219.0" r="1.5" />
            <circle cx="299.2" cy="225.0" r="1.5" />
            <circle cx="307.8" cy="220.5" r="1.5" />
            <circle cx="319.2" cy="231.0" r="1.5" />
            <circle cx="299.2" cy="237.0" r="1.5" />
            <circle cx="290.7" cy="229.5" r="1.5" />
            <circle cx="312.1" cy="240.0" r="1.5" />
          </g>
          <g opacity=".95">
            <circle cx="296.4" cy="384.0" r="1.4" />
            <circle cx="322.0" cy="402.0" r="1.4" />
            <circle cx="350.5" cy="393.0" r="1.4" />
            <circle cx="364.8" cy="414.0" r="1.4" />
            <circle cx="339.2" cy="432.0" r="1.4" />
            <circle cx="313.5" cy="438.0" r="1.4" />
            <circle cx="379.0" cy="429.0" r="1.4" />
            <circle cx="353.4" cy="462.0" r="1.4" />
            <circle cx="324.9" cy="474.0" r="1.4" />
            <circle cx="367.7" cy="489.0" r="1.4" />
            <circle cx="290.7" cy="420.0" r="1.4" />
            <circle cx="393.3" cy="447.0" r="1.4" />
          </g>
        </g>
        <g transform="translate(108.9,25.2)">
          <line x1="0" y1="0" x2="0" y2="-22" stroke="#8a6a4f" strokeWidth="1.6" />
          <rect x="0.8" y="-22" width="17" height="11" rx="1.2" fill="#da251d" />
          <path
            fill="#ffce00"
            d="M9.3 -19.9 10.3 -17.2 13.1 -17.2 10.8 -15.5 11.7 -12.8 9.3 -14.5 6.9 -12.8 7.8 -15.5 5.5 -17.2 8.3 -17.2Z"
          />
        </g>
        <g transform="translate(122.0,425.1)">
          <path fill="#b3701a" d="M0 -7 1.9 -2.2 7 -2.2 2.9 0.9 4.4 5.8 0 2.8 -4.4 5.8 -2.9 0.9 -7 -2.2 -1.9 -2.2Z" />
        </g>
        {[
          [302.1, 228.0],
          [344.8, 435.0],
          [71.2, 419.4],
          [145.3, 465.6],
        ].map(([x, y]) => (
          <g key={`${x},${y}`} className="lh" transform={`translate(${x},${y})`}>
            <path d="M-2.4 0 L-1.4 -7 H1.4 L2.4 0 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            <line x1="-2.6" y1="0" x2="2.6" y2="0" stroke="currentColor" strokeWidth="1" />
            <rect x="-1.7" y="-9.2" width="3.4" height="2.2" rx="0.6" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle className="lh-light" cx="0" cy="-8.1" r="1.3" fill="#e8483f" />
            <circle className="lh-halo" cx="0" cy="-8.1" r="4.2" fill="none" stroke="#e8483f" strokeWidth="1" />
          </g>
        ))}
      </svg>
    </div>
  );
}
