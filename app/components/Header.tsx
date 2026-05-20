"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "화환 소개", href: "#intro" },
  { label: "상품 안내", href: "#products" },
  { label: "주문 방법", href: "#howtoorder" },
  { label: "배송 안내", href: "#delivery" },
  { label: "고객 후기", href: "#reviews" },
  { label: "빠른 주문", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      const sectionIds = ["intro", "products", "howtoorder", "delivery", "reviews", "contact"];
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveNav("#" + sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* 상단 알림바 */}
      <div className="w-full text-white text-xs py-2.5 hidden md:block"
        style={{ background: "var(--primary-dark)" }}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span style={{ color: "#a8d5b5" }}>
            🌸 신선한 생화로 정성껏 제작 · 전국 당일 배달 전문
          </span>
          <div className="flex items-center gap-6" style={{ color: "#ccc" }}>
            <span>주문 접수: 매일 07:00 ~ 22:00</span>
            <a href="tel:1588-3900" className="font-bold text-sm flex items-center gap-1"
              style={{ color: "#fce8ed" }}>
              ☎ 1588-3900
            </a>
          </div>
        </div>
      </div>

      {/* 메인 헤더 */}
      <header
        className="sticky top-0 z-50 w-full transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.12)" : "0 1px 0 rgba(0,0,0,0.08)",
          backdropFilter: scrolled ? "blur(10px)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          {/* 로고 */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 cursor-pointer bg-transparent border-none p-0"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full"
              style={{ background: "linear-gradient(135deg, var(--primary), var(--primary-light))" }}>
              <span className="text-2xl leading-none select-none">🌸</span>
            </div>
            <div>
              <div className="font-black tracking-tight leading-none text-xl"
                style={{ color: "var(--primary)" }}>
                가나플라워
              </div>
              <div className="text-xs font-semibold tracking-widest mt-0.5"
                style={{ color: "var(--pink)" }}>
                GANA FLOWER
              </div>
            </div>
          </button>

          {/* PC 네비게이션 */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-sm relative transition-colors duration-200"
                style={{
                  color: activeNav === item.href ? "var(--primary)" : "#555",
                  fontWeight: activeNav === item.href ? "700" : "500",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {item.label}
                {activeNav === item.href && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                    style={{ background: "var(--pink)" }} />
                )}
              </button>
            ))}
          </nav>

          {/* 우측 버튼 */}
          <div className="flex items-center gap-2.5">
            {/* 카카오 버튼 */}
            <a href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="hidden md:flex items-center gap-1.5 px-4 py-2.5 text-sm font-bold rounded-full transition-all duration-200"
              style={{
                background: "#FEE500",
                color: "#3C1E1E",
                textDecoration: "none",
              }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.685 1.575 5.06 3.975 6.52L5.1 21l4.575-2.43c.75.12 1.53.18 2.325.18 5.523 0 10-3.477 10-7.8C22 6.477 17.523 3 12 3z"/>
              </svg>
              카카오 주문
            </a>
            {/* 전화 버튼 */}
            <a href="tel:1588-3900"
              className="hidden md:flex items-center gap-1.5 text-sm font-bold py-2.5 px-5 rounded-full transition-all duration-200"
              style={{ background: "var(--pink)", color: "#fff", textDecoration: "none" }}>
              ☎ 빠른 주문
            </a>
            {/* 모바일 햄버거 */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="메뉴 열기"
            >
              <span className="block w-6 h-0.5 transition-all duration-300 rounded"
                style={{ background: "var(--primary)", transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none" }} />
              <span className="block w-6 h-0.5 transition-all duration-300 rounded"
                style={{ background: "var(--primary)", opacity: menuOpen ? 0 : 1 }} />
              <span className="block w-6 h-0.5 transition-all duration-300 rounded"
                style={{ background: "var(--primary)", transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none" }} />
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        <div className="md:hidden overflow-hidden transition-all duration-300"
          style={{ maxHeight: menuOpen ? "420px" : "0", borderTop: menuOpen ? "1px solid var(--border)" : "none" }}>
          <nav className="flex flex-col bg-white">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-6 py-4 text-left text-sm"
                style={{
                  color: activeNav === item.href ? "var(--primary)" : "#555",
                  fontWeight: activeNav === item.href ? "700" : "500",
                  background: activeNav === item.href ? "var(--pink-pale)" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {item.label}
              </button>
            ))}
            <div className="flex gap-2 mx-6 my-4">
              <a href="tel:1588-3900"
                className="flex-1 text-center py-3 rounded-full font-bold text-sm"
                style={{ background: "var(--pink)", color: "#fff", textDecoration: "none" }}>
                ☎ 1588-3900
              </a>
              <a href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                className="flex-1 text-center py-3 rounded-full font-bold text-sm"
                style={{ background: "#FEE500", color: "#3C1E1E", textDecoration: "none" }}>
                카카오 주문
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
