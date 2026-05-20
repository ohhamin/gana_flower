"use client";

import { useState, useEffect } from "react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-6 z-50 flex flex-col gap-3 items-end">
      {/* 전화 주문 */}
      <a
        href="tel:1588-3900"
        className="flex items-center gap-2 px-4 h-14 rounded-full shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
        style={{ background: "var(--pink)", color: "#fff", textDecoration: "none" }}
        title="전화 주문"
      >
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
        </svg>
        <span className="font-black text-sm">1588-3900</span>
      </a>

      {/* 카카오 주문 */}
      <button
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        className="flex items-center gap-2 px-4 h-14 rounded-full shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl border-none cursor-pointer"
        style={{ background: "#FEE500", color: "#3C1E1E" }}
        title="카카오 주문"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.685 1.575 5.06 3.975 6.52L5.1 21l4.575-2.43c.75.12 1.53.18 2.325.18 5.523 0 10-3.477 10-7.8C22 6.477 17.523 3 12 3z"/>
        </svg>
        <span className="font-black text-sm">카카오 주문</span>
      </button>

      {/* 맨 위로 */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg border-none cursor-pointer"
        style={{
          background: "#fff",
          color: "var(--primary)",
          border: "1px solid var(--border)",
          opacity: showTop ? 1 : 0,
          pointerEvents: showTop ? "auto" : "none",
          transform: showTop ? "translateY(0)" : "translateY(10px)",
          transition: "all 0.3s ease",
        }}
        title="맨 위로"
      >
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 4l-8 8h6v8h4v-8h6z"/>
        </svg>
      </button>
    </div>
  );
}
