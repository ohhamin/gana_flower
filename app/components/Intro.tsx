"use client";

import { useEffect, useRef, useState } from "react";

const categories = [
  {
    emoji: "🕊️",
    name: "근조화환",
    nameEn: "FUNERAL WREATH",
    desc: "고인에 대한 예우와 유가족을 향한 위로를 담아 엄숙하고 정중하게 제작합니다.",
    color: "#4a6278",
    bg: "#f0f4f8",
    border: "#c8d8e8",
    href: "#products",
  },
  {
    emoji: "🎊",
    name: "축하화환",
    nameEn: "CELEBRATION WREATH",
    desc: "취임, 수상, 승진, 영전 등 기쁜 자리에 화사하고 풍성한 축하의 마음을 전합니다.",
    color: "#c49a3c",
    bg: "#fff8e6",
    border: "#f0d890",
    href: "#products",
  },
  {
    emoji: "🏪",
    name: "개업화환",
    nameEn: "OPENING WREATH",
    desc: "새로운 출발을 축하하는 개업, 이전, 확장 시 번창을 기원하는 화환을 전달합니다.",
    color: "#e05577",
    bg: "#fce8ed",
    border: "#f5b8c8",
    href: "#products",
  },
  {
    emoji: "🎓",
    name: "졸업화환",
    nameEn: "GRADUATION WREATH",
    desc: "졸업, 수료, 입학 등 새로운 시작을 맞이하는 소중한 분께 축하를 전해드립니다.",
    color: "#1b5e35",
    bg: "#e8f5ed",
    border: "#a8d5b8",
    href: "#products",
  },
];

const stats = [
  { num: "15,000+", label: "누적 배달 건수", icon: "🚚" },
  { num: "4.9★", label: "고객 만족도", icon: "⭐" },
  { num: "30분", label: "평균 제작 시간", icon: "⏱️" },
  { num: "전국", label: "배달 지역", icon: "🗺️" },
];

export default function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="intro" ref={ref} className="py-20 md:py-28" style={{ background: "var(--beige)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* 섹션 헤더 */}
        <div className="text-center mb-14"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s" }}>
          <span className="section-label">FLOWER CATEGORY</span>
          <h2 className="section-title">화환 종류 안내</h2>
          <div className="divider-line mx-auto" />
          <p className="section-desc max-w-xl mx-auto">
            상황에 맞는 화환을 선택하세요.<br />
            가나플라워가 마음을 담아 정성껏 제작하고 빠르게 배달해 드립니다.
          </p>
        </div>

        {/* 카테고리 카드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => scrollTo(cat.href)}
              className="text-left p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer group"
              style={{
                background: cat.bg,
                borderColor: cat.border,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.6s ease ${i * 0.1}s`,
              }}
            >
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 inline-block">
                {cat.emoji}
              </div>
              <div className="text-xs font-bold tracking-widest mb-1" style={{ color: cat.color }}>
                {cat.nameEn}
              </div>
              <div className="text-lg font-black mb-2" style={{ color: "#1a1a1a" }}>
                {cat.name}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--gray-dark)" }}>
                {cat.desc}
              </p>
              <div className="mt-4 text-sm font-bold flex items-center gap-1" style={{ color: cat.color }}>
                상품 보기 →
              </div>
            </button>
          ))}
        </div>

        {/* 통계 */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, var(--primary-dark), var(--primary))",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s 0.4s",
          }}
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center text-white">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-2xl md:text-3xl font-black mb-1">{s.num}</div>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
