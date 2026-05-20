"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "아파트 소개", href: "#intro" },
  { label: "세대 안내", href: "#units" },
  { label: "입지 여건", href: "#location" },
  { label: "분양 안내", href: "#sales" },
  { label: "커뮤니티", href: "#community" },
  { label: "상담 신청", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = navItems.map((n) => n.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveNav("#" + sections[i]);
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
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 상단 정보바 */}
      <div className="w-full bg-[var(--primary)] text-white text-xs py-2 hidden md:block">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span style={{ color: "#d4af55" }}>
            ✦ 가나 플라워 — 자연과 도시가 만나는 프리미엄 주거의 완성
          </span>
          <div className="flex items-center gap-6" style={{ color: "#ccc" }}>
            <span>모델하우스 운영: 매일 10:00 ~ 17:00</span>
            <a
              href="tel:1588-0000"
              className="font-bold text-sm"
              style={{ color: "#d4af55" }}
            >
              ☎ 1588-0000
            </a>
          </div>
        </div>
      </div>

      {/* 메인 헤더 */}
      <header
        className="sticky top-0 z-50 w-full transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.12)" : "0 1px 0 rgba(0,0,0,0.08)",
          backdropFilter: scrolled ? "blur(10px)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          {/* 로고 */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col items-start cursor-pointer bg-transparent border-none p-0"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 flex items-center justify-center rounded"
                style={{ background: "var(--primary)" }}
              >
                <span className="text-white font-black text-sm">GF</span>
              </div>
              <div>
                <div
                  className="font-black tracking-tight leading-none text-lg"
                  style={{ color: "var(--primary)" }}
                >
                  가나 플라워
                </div>
                <div
                  className="text-xs font-medium tracking-widest"
                  style={{ color: "var(--gold)" }}
                >
                  GANA FLOWER
                </div>
              </div>
            </div>
          </button>

          {/* PC 네비게이션 */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-sm font-600 transition-colors duration-200 relative"
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
                  <span
                    className="absolute bottom-0 left-4 right-4 h-0.5"
                    style={{ background: "var(--gold)" }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* 전화 + 모바일 메뉴 버튼 */}
          <div className="flex items-center gap-3">
            <a
              href="tel:1588-0000"
              className="hidden md:flex items-center gap-2 btn-gold text-sm py-2.5 px-5"
            >
              <span>☎</span>
              <span>분양 문의</span>
            </a>
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="메뉴 열기"
            >
              <span
                className="block w-6 h-0.5 transition-all duration-300"
                style={{
                  background: "var(--primary)",
                  transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
                }}
              />
              <span
                className="block w-6 h-0.5 transition-all duration-300"
                style={{
                  background: "var(--primary)",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-6 h-0.5 transition-all duration-300"
                style={{
                  background: "var(--primary)",
                  transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
                }}
              />
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: menuOpen ? "400px" : "0",
            borderTop: menuOpen ? "1px solid var(--border)" : "none",
          }}
        >
          <nav className="flex flex-col bg-white">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-6 py-4 text-left text-sm font-medium border-b"
                style={{
                  color: activeNav === item.href ? "var(--primary)" : "#555",
                  fontWeight: activeNav === item.href ? "700" : "500",
                  borderColor: "var(--border)",
                  background: activeNav === item.href ? "var(--beige)" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:1588-0000"
              className="mx-6 my-4 btn-gold text-center"
            >
              ☎ 분양 문의 1588-0000
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
