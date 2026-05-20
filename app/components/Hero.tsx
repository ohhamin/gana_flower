"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    bg: "linear-gradient(135deg, #1e3a2f 0%, #2d5a44 40%, #1a4a35 100%)",
    badge: "2025 대한민국 우수 브랜드 아파트",
    title: "자연이 품은\n도시의 품격",
    subtitle: "가나 플라워",
    desc: "풍요로운 자연환경과 탁월한 입지 조건이 만나\n당신의 삶에 새로운 가치를 더합니다.",
    accent: "#d4af55",
  },
  {
    bg: "linear-gradient(135deg, #243b55 0%, #141e30 100%)",
    badge: "전 세대 4Bay 판상형 설계",
    title: "넓고 환한\n쾌적한 일상",
    subtitle: "가나 플라워",
    desc: "59㎡ ~ 102㎡ 다양한 평형으로 구성된\n합리적인 주거 공간을 경험하세요.",
    accent: "#b8972e",
  },
  {
    bg: "linear-gradient(135deg, #3d2b1f 0%, #5a3e2b 60%, #2b1e13 100%)",
    badge: "총 1,200세대 대단지",
    title: "커뮤니티와\n함께하는 삶",
    subtitle: "가나 플라워",
    desc: "수영장, 피트니스, 독서실, 카페테리아 등\n최고급 커뮤니티 시설이 함께합니다.",
    accent: "#c8a94a",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(idx);
      setTimeout(() => setIsAnimating(false), 800);
    },
    [isAnimating]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "90vh", background: slide.bg, transition: "background 0.8s ease" }}
    >
      {/* 배경 패턴 */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* 하단 웨이브 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block" }}>
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col justify-center" style={{ minHeight: "90vh", paddingBottom: "5rem" }}>
        <div
          key={current}
          className="animate-fade-in-up"
          style={{ maxWidth: "700px" }}
        >
          {/* 배지 */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest rounded-full"
            style={{
              background: "rgba(255,255,255,0.15)",
              color: slide.accent,
              border: `1px solid ${slide.accent}40`,
              backdropFilter: "blur(10px)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: slide.accent }}
            />
            {slide.badge}
          </div>

          {/* 서브타이틀 */}
          <p
            className="text-sm font-bold tracking-widest mb-3"
            style={{ color: slide.accent, letterSpacing: "0.2em" }}
          >
            {slide.subtitle}
          </p>

          {/* 메인 타이틀 */}
          <h1
            className="font-black text-white mb-5"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              whiteSpace: "pre-line",
            }}
          >
            {slide.title}
          </h1>

          {/* 골드 라인 */}
          <div
            className="mb-6"
            style={{ width: "60px", height: "3px", background: slide.accent }}
          />

          {/* 설명 */}
          <p
            className="text-base md:text-lg mb-10"
            style={{
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.8,
              whiteSpace: "pre-line",
            }}
          >
            {slide.desc}
          </p>

          {/* CTA 버튼들 */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("contact")}
              className="btn-gold px-8 py-4 text-base"
            >
              분양 상담 신청
            </button>
            <button
              onClick={() => scrollTo("intro")}
              className="btn-outline px-8 py-4 text-base"
              style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}
            >
              아파트 알아보기
            </button>
          </div>
        </div>

        {/* 슬라이드 인디케이터 */}
        <div className="absolute bottom-24 left-6 md:left-0 md:relative md:mt-16 flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300 cursor-pointer border-none bg-transparent p-0"
              aria-label={`슬라이드 ${i + 1}`}
            >
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "32px" : "8px",
                  height: "8px",
                  background: i === current ? slide.accent : "rgba(255,255,255,0.4)",
                }}
              />
            </button>
          ))}
          <span className="text-xs ml-2" style={{ color: "rgba(255,255,255,0.5)" }}>
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* 우측 핵심 정보 카드 (데스크탑) */}
      <div
        className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3"
        style={{ transform: "translateY(-50%)" }}
      >
        {[
          { label: "총 세대수", value: "1,200세대" },
          { label: "건설사", value: "가나건설" },
          { label: "청약 접수", value: "2025.08" },
          { label: "입주 예정", value: "2028.03" },
        ].map((item) => (
          <div
            key={item.label}
            className="px-5 py-3 rounded-lg text-center"
            style={{
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.2)",
              minWidth: "140px",
            }}
          >
            <div className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.05em" }}>
              {item.label}
            </div>
            <div className="font-bold text-white text-sm">{item.value}</div>
          </div>
        ))}
      </div>

      {/* 모바일 스크롤 힌트 */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:hidden"
        style={{ transform: "translateX(-50%)" }}
      >
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>스크롤</span>
        <div
          className="w-px h-8"
          style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)",
            animation: "shimmer 2s infinite",
          }}
        />
      </div>
    </section>
  );
}
