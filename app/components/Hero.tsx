"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    tag: "전국 당일 배달",
    title: "마음을 전하는\n특별한 화환",
    desc: "신선한 생화로 정성껏 제작된 화환,\n빠른 배송으로 소중한 순간을 빛내드립니다.",
    cta: "지금 주문하기",
    ctaHref: "#contact",
    badge: "오전 11시 이전 주문 시 당일 배달",
    flowers: ["🌹", "🌷", "💐", "🌸"],
    gradient: "linear-gradient(135deg, #134426 0%, #1b5e35 40%, #2d7a50 70%, #3d8f65 100%)",
  },
  {
    tag: "근조화환 전문",
    title: "삼가 고인의\n명복을 빕니다",
    desc: "엄숙하고 정중하게, 슬픔의 자리에\n위로와 예우를 담아 전해드립니다.",
    cta: "근조화환 보기",
    ctaHref: "#products",
    badge: "24시간 접수 · 새벽 배달 가능",
    flowers: ["🕊️", "🌿", "🌾", "🌼"],
    gradient: "linear-gradient(135deg, #2c3e50 0%, #3d5166 40%, #4a6278 70%, #5a7390 100%)",
  },
  {
    tag: "축하화환 전문",
    title: "기쁜 순간을\n함께 축하합니다",
    desc: "개업, 취임, 수상, 생일… 축하드리는 마음을\n화사하고 풍성한 화환에 담아드립니다.",
    cta: "축하화환 보기",
    ctaHref: "#products",
    badge: "리본 문구 맞춤 제작 무료",
    flowers: ["🎊", "🌺", "🌻", "💛"],
    gradient: "linear-gradient(135deg, #7b3f00 0%, #a0522d 40%, #c66b2d 70%, #d4843d 100%)",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length);
        setAnimating(false);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => {
    if (idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 300);
  };

  const slide = slides[current];

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-[580px] md:min-h-[680px] flex items-center overflow-hidden"
      style={{ background: slide.gradient, transition: "background 0.6s ease" }}
    >
      {/* 배경 장식 원 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full"
          style={{ background: "rgba(255,255,255,0.06)" }} />
        <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full"
          style={{ background: "rgba(255,255,255,0.05)" }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* 텍스트 영역 */}
          <div
            className="flex-1 text-white"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(20px)" : "translateY(0)",
              transition: "opacity 0.4s, transform 0.4s",
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5"
              style={{ background: "rgba(255,255,255,0.15)" }}>
              <span className="w-2 h-2 rounded-full bg-white animate-pulse inline-block" />
              {slide.tag}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 whitespace-pre-line"
              style={{ letterSpacing: "-0.03em", textShadow: "0 2px 20px rgba(0,0,0,0.2)" }}>
              {slide.title}
            </h1>

            <p className="text-base md:text-lg leading-relaxed mb-2 whitespace-pre-line"
              style={{ color: "rgba(255,255,255,0.85)" }}>
              {slide.desc}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-8 mt-2"
              style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.9)" }}>
              ✓ {slide.badge}
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo(slide.ctaHref)}
                className="btn-pink"
                style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
              >
                {slide.cta} →
              </button>
              <a href="tel:1588-3900" className="btn-outline-white">
                ☎ 1588-3900 전화 주문
              </a>
            </div>
          </div>

          {/* 꽃 비주얼 */}
          <div
            className="flex-shrink-0 relative"
            style={{ opacity: animating ? 0 : 1, transition: "opacity 0.4s" }}
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <div className="absolute inset-0 rounded-full"
                style={{ background: "rgba(255,255,255,0.08)" }} />
              <div className="absolute inset-0 flex items-center justify-center text-8xl md:text-9xl animate-float select-none">
                {slide.flowers[0]}
              </div>
              {[
                { top: "8%", left: "8%", delay: "0.3s" },
                { top: "8%", right: "8%", delay: "0.6s" },
                { bottom: "8%", left: "8%", delay: "0.9s" },
                { bottom: "8%", right: "8%", delay: "1.2s" },
              ].map((pos, i) => (
                <div key={i} className="absolute text-4xl select-none"
                  style={{ ...pos, animation: `float 3s ease-in-out ${pos.delay} infinite` }}>
                  {slide.flowers[i + 1] || "🌿"}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 슬라이드 인디케이터 */}
        <div className="flex items-center gap-2 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300 rounded-full border-none cursor-pointer"
              style={{
                width: i === current ? "2rem" : "0.5rem",
                height: "0.5rem",
                background: i === current ? "#fff" : "rgba(255,255,255,0.4)",
                padding: 0,
              }}
              aria-label={`슬라이드 ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 하단 스크롤 유도 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white opacity-50">
        <span className="text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-white" />
      </div>
    </section>
  );
}
