"use client";

import { useState, useEffect } from "react";

const categories = [
  { label: "전체보기",   href: "products" },
  { label: "근조화환",   href: "products" },
  { label: "축하화환",   href: "products" },
  { label: "개업화환",   href: "products" },
  { label: "졸업화환",   href: "products" },
  { label: "배송안내",   href: "delivery" },
  { label: "주문하기",   href: "contact"  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* 상단 알림바 */}
      <div className="w-full text-xs py-2" style={{ background: "#1a1a1a", color: "#ccc" }}>
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <span>신선한 생화 · 전국 당일배달 전문</span>
          <a href="tel:1588-3900" className="font-bold" style={{ color: "#fff", textDecoration: "none" }}>
            ☎ 1588-3900
          </a>
        </div>
      </div>

      {/* 메인 헤더 */}
      <header
        className="sticky top-0 z-50 w-full bg-white"
        style={{ boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none", borderBottom: "1px solid #eee" }}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
          {/* 로고 */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 bg-transparent border-none cursor-pointer p-0"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "var(--primary)" }}
            >
              <span className="text-xl leading-none select-none">🌸</span>
            </div>
            <div className="text-left">
              <div className="font-black text-base leading-none" style={{ color: "var(--primary)" }}>
                가나플라워
              </div>
              <div className="text-xs mt-0.5" style={{ color: "#aaa", letterSpacing: "0.06em" }}>
                GANA FLOWER
              </div>
            </div>
          </button>

          {/* 우측 버튼 */}
          <div className="flex items-center gap-2">
            <a
              href="https://pf.kakao.com/_xoxxxj"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-md text-sm font-bold"
              style={{ background: "#FEE500", color: "#3C1E1E", textDecoration: "none" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.685 1.575 5.06 3.975 6.52L5.1 21l4.575-2.43c.75.12 1.53.18 2.325.18 5.523 0 10-3.477 10-7.8C22 6.477 17.523 3 12 3z" />
              </svg>
              카카오 주문
            </a>
            <a
              href="tel:1588-3900"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-md text-sm font-bold"
              style={{ background: "var(--primary)", color: "#fff", textDecoration: "none" }}
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              <span className="hidden sm:inline">☎ 주문전화</span>
              <span className="sm:hidden">전화</span>
            </a>

            {/* 모바일 햄버거 */}
            <button
              className="sm:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="메뉴"
            >
              <span
                className="block w-5 h-0.5 rounded transition-all duration-200"
                style={{ background: "#333", transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none" }}
              />
              <span
                className="block w-5 h-0.5 rounded transition-all duration-200"
                style={{ background: "#333", opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-5 h-0.5 rounded transition-all duration-200"
                style={{ background: "#333", transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none" }}
              />
            </button>
          </div>
        </div>

        {/* 카테고리 탭 (PC) */}
        <div className="border-t" style={{ borderColor: "#eeeeee" }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="hidden sm:flex overflow-x-auto hide-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => scrollTo(cat.href)}
                  className="whitespace-nowrap px-4 py-3 text-sm font-semibold border-none bg-transparent cursor-pointer transition-colors duration-150"
                  style={{ color: "#444", borderBottom: "2px solid transparent" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--primary)";
                    (e.currentTarget as HTMLButtonElement).style.borderBottomColor = "var(--primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "#444";
                    (e.currentTarget as HTMLButtonElement).style.borderBottomColor = "transparent";
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 모바일 드롭다운 메뉴 */}
        <div
          className="sm:hidden overflow-hidden transition-all duration-200 bg-white"
          style={{ maxHeight: menuOpen ? "400px" : "0", borderTop: menuOpen ? "1px solid #eee" : "none" }}
        >
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => scrollTo(cat.href)}
              className="w-full text-left px-5 py-3.5 text-sm font-medium border-none bg-transparent cursor-pointer"
              style={{ borderBottom: "1px solid #f5f5f5", color: "#333" }}
            >
              {cat.label}
            </button>
          ))}
          <div className="flex gap-3 px-5 py-4">
            <a
              href="tel:1588-3900"
              className="flex-1 text-center py-3 rounded-lg font-bold text-sm"
              style={{ background: "var(--primary)", color: "#fff", textDecoration: "none" }}
            >
              ☎ 1588-3900
            </a>
            <a
              href="https://pf.kakao.com/_xoxxxj"
              className="flex-1 text-center py-3 rounded-lg font-bold text-sm"
              style={{ background: "#FEE500", color: "#3C1E1E", textDecoration: "none" }}
            >
              카카오 주문
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
