"use client";

const navLinks = [
  { label: "화환 상품", href: "products" },
  { label: "주문 방법", href: "howtoorder" },
  { label: "배송 안내", href: "delivery" },
  { label: "빠른 주문", href: "contact" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#1a1a1a", color: "#fff" }}>
      {/* CTA 바 */}
      <div className="py-8 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-black mb-1">지금 바로 주문하세요</h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
              연중무휴 07:00~22:00 · 오전 주문 시 당일 배달
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="tel:1588-3900"
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-lg font-bold text-sm"
              style={{ background: "var(--primary)", color: "#fff", textDecoration: "none" }}
            >
              ☎ 1588-3900
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-lg font-bold text-sm border"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff", background: "transparent", cursor: "pointer" }}
            >
              온라인 주문 →
            </button>
          </div>
        </div>
      </div>

      {/* 본문 */}
      <div className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 로고 */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.1)" }}>
                <span className="text-xl">🌸</span>
              </div>
              <div>
                <div className="font-black text-base text-white">가나플라워</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em" }}>GANA FLOWER</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              전국 화환 당일 배달 전문점.<br />
              신선한 생화로 정성껏 제작하여<br />
              소중한 마음을 전해드립니다.
            </p>
          </div>

          {/* 메뉴 */}
          <div>
            <h4 className="text-xs font-bold tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              MENU
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm bg-transparent border-none cursor-pointer p-0 transition-colors duration-150"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.6)"; }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="text-xs font-bold tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              CONTACT
            </h4>
            <ul className="space-y-3" style={{ color: "rgba(255,255,255,0.6)" }}>
              <li className="flex items-center gap-2.5">
                <span>☎</span>
                <div>
                  <div className="font-bold text-white text-base">1588-3900</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>연중무휴 07:00~22:00</div>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <span>💬</span>
                <div>
                  <div className="text-sm">카카오톡 채널</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>@가나플라워 검색</div>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <span>📍</span>
                <div className="text-sm">서울특별시 강남구 가나로 123</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 카피라이트 */}
      <div className="border-t py-5" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{ color: "rgba(255,255,255,0.3)" }}>
          <span>© 2026 가나플라워(GANA FLOWER). All rights reserved.</span>
          <div className="flex gap-4">
            <span className="cursor-pointer transition-colors hover:text-white">이용약관</span>
            <span className="cursor-pointer transition-colors hover:text-white">개인정보처리방침</span>
            <span className="cursor-pointer transition-colors hover:text-white">사업자정보</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
