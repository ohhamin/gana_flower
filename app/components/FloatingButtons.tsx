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
    <div className="fixed right-4 bottom-6 z-50 flex flex-col gap-3">
      {/* 상담 신청 */}
      <a
        href="tel:1588-0000"
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
        style={{ background: "var(--primary)", color: "var(--gold)" }}
        title="전화 상담"
      >
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
        </svg>
      </a>

      {/* 카카오 상담 */}
      <button
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl border-none cursor-pointer"
        style={{ background: "#FEE500", color: "#000" }}
        title="온라인 상담"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.48 3 2 6.48 2 10.5c0 2.67 1.62 5.01 4.07 6.41L5 21l4.64-2.54C10.39 18.8 11.18 19 12 19c5.52 0 10-3.58 10-8.5S17.52 3 12 3z"/>
        </svg>
      </button>

      {/* 맨 위로 */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl border-none cursor-pointer"
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
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 4l-8 8h6v8h4v-8h6z"/>
        </svg>
      </button>
    </div>
  );
}
