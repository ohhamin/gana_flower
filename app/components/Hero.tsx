"use client";

import { useState, useEffect, useCallback } from "react";

const banners = [
  {
    tag: "24시간 접수 · 새벽배달 가능",
    title: "근조화환",
    priceTxt: "55,000원~",
    desc: "삼가 고인의 명복을 빕니다\n엄숙하고 정중한 근조화환",
    cta: "근조화환 주문하기",
    bg: "#1b3d2a",
    accent: "#7dd4a0",
    emoji: "🤍",
  },
  {
    tag: "리본 문구 맞춤 제작 무료",
    title: "축하화환",
    priceTxt: "60,000원~",
    desc: "개업·취임·수상·생일\n화사하고 풍성한 축하 화환",
    cta: "축하화환 주문하기",
    bg: "#8b1a3a",
    accent: "#f9b8cc",
    emoji: "🌸",
  },
  {
    tag: "오전 11시 이전 주문 당일배달",
    title: "개업화환",
    priceTxt: "65,000원~",
    desc: "새 출발을 응원합니다\n번창을 기원하는 화사한 꽃",
    cta: "개업화환 주문하기",
    bg: "#7a5c00",
    accent: "#fde68a",
    emoji: "🌻",
  },
];

/* 서비스 하이라이트 */
const services = [
  { icon: "🚚", text: "전국 당일배달" },
  { icon: "🌿", text: "신선 생화 보장" },
  { icon: "🎀", text: "리본 문구 무료" },
  { icon: "📸", text: "배달 완료 사진" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (idx === current) return;
    setAnimating(true);
    setTimeout(() => { setCurrent(idx); setAnimating(false); }, 280);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % banners.length);
        setAnimating(false);
      }, 280);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const b = banners[current];

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* 배너 */}
      <section
        className="relative overflow-hidden"
        style={{ background: b.bg, minHeight: "200px", transition: "background 0.6s ease" }}
      >
        <div
          className="max-w-6xl mx-auto px-5 py-10 md:py-14 flex items-center justify-between gap-6"
          style={{ opacity: animating ? 0 : 1, transition: "opacity 0.28s ease" }}
        >
          {/* 텍스트 */}
          <div className="flex-1 min-w-0">
            <div
              className="inline-block px-3 py-1 rounded text-xs font-semibold mb-3"
              style={{ background: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.9)" }}
            >
              {b.tag}
            </div>
            <h1
              className="font-black leading-tight mb-1 text-white"
              style={{ fontSize: "clamp(2rem, 8vw, 3.2rem)" }}
            >
              {b.title}
            </h1>
            <div className="text-xl md:text-2xl font-black mb-3" style={{ color: b.accent }}>
              {b.priceTxt}
            </div>
            <p
              className="text-sm mb-6 whitespace-pre-line"
              style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}
            >
              {b.desc}
            </p>
            <button
              onClick={scrollToProducts}
              className="px-6 py-3 rounded-lg font-bold text-sm transition-all duration-150 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: "#fff", color: b.bg, border: "none", cursor: "pointer" }}
            >
              {b.cta} →
            </button>
          </div>

          {/* 이모지 (PC) */}
          <div
            className="hidden md:flex items-center justify-center flex-shrink-0 select-none animate-float"
            style={{ fontSize: "7rem" }}
          >
            {b.emoji}
          </div>
        </div>

        {/* 슬라이드 인디케이터 */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full border-none cursor-pointer transition-all duration-200"
              style={{
                width: i === current ? "20px" : "7px",
                height: "7px",
                background: i === current ? "#fff" : "rgba(255,255,255,0.45)",
                padding: 0,
              }}
              aria-label={`배너 ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 서비스 하이라이트 스트립 */}
      <div className="bg-white border-b" style={{ borderColor: "#eee" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-4 divide-x" style={{ borderColor: "#eee" }}>
            {services.map((s) => (
              <div key={s.text} className="flex flex-col sm:flex-row items-center justify-center gap-1.5 py-4 px-2">
                <span className="text-xl sm:text-2xl">{s.icon}</span>
                <span className="text-xs sm:text-sm font-semibold text-center" style={{ color: "#444" }}>
                  {s.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
