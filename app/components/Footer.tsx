"use client";

const navLinks = [
  { label: "상품 안내", href: "#products" },
  { label: "주문 방법", href: "#howtoorder" },
  { label: "배송 안내", href: "#delivery" },
  { label: "빠른 주문", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "var(--primary-dark)", color: "#fff" }}>
      {/* 상단 CTA 바 */}
      <div className="py-10 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black mb-2">지금 바로 주문하세요</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem" }}>
              연중무휴 07:00~22:00 · 오전 주문 시 당일 배달 가능
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:1588-3900"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-base transition-all duration-200"
              style={{ background: "var(--pink)", color: "#fff", textDecoration: "none" }}>
              ☎ 1588-3900
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-base transition-all duration-200 border"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff", background: "transparent", cursor: "pointer" }}>
              온라인 주문하기 →
            </button>
          </div>
        </div>
      </div>

      {/* 메인 푸터 */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* 로고 + 소개 */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 flex items-center justify-center rounded-full"
                style={{ background: "rgba(255,255,255,0.1)" }}>
                <span className="text-2xl">🌸</span>
              </div>
              <div>
                <div className="font-black text-xl text-white">가나플라워</div>
                <div className="text-xs tracking-widest" style={{ color: "var(--pink-light)" }}>GANA FLOWER</div>
              </div>
            </div>
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              전국 화환 당일 배달 전문점.<br />
              신선한 생화로 정성껏 제작하여<br />
              소중한 마음을 전해드립니다.
            </p>
          </div>

          {/* 메뉴 */}
          <div>
            <h4 className="font-black mb-5 text-sm tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
              QUICK MENU
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-base hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer p-0"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="font-black mb-5 text-sm tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
              CONTACT
            </h4>
            <ul className="space-y-4" style={{ color: "rgba(255,255,255,0.7)" }}>
              <li className="flex items-start gap-3">
                <span className="text-lg">☎</span>
                <div>
                  <div className="font-bold text-white text-lg">1588-3900</div>
                  <div className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>연중무휴 07:00~22:00</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg">💬</span>
                <div>
                  <div className="font-semibold text-base">카카오톡 채널</div>
                  <div className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>@가나플라워 검색</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg">📧</span>
                <div className="text-base">ganaflower@example.com</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg">📍</span>
                <div className="text-base">서울특별시 강남구 가나로 123</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 하단 카피라이트 */}
      <div className="border-t py-6" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm"
          style={{ color: "rgba(255,255,255,0.35)" }}>
          <span>© 2026 가나플라워(GANA FLOWER). All rights reserved.</span>
          <div className="flex gap-5">
            <span className="cursor-pointer hover:text-white transition-colors">이용약관</span>
            <span className="cursor-pointer hover:text-white transition-colors">개인정보처리방침</span>
            <span className="cursor-pointer hover:text-white transition-colors">사업자정보</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
