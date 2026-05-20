"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "1,200", unit: "세대", label: "총 세대수" },
  { value: "59~102", unit: "㎡", label: "공급 면적" },
  { value: "15", unit: "개동", label: "아파트 동수" },
  { value: "38", unit: "층", label: "최고 층수" },
];

const highlights = [
  {
    icon: "🌿",
    title: "자연친화 설계",
    desc: "단지 내 중앙광장과 1km 산책로, 사계절 꽃길로 자연을 일상에서 즐길 수 있습니다.",
  },
  {
    icon: "🏫",
    title: "우수한 학군",
    desc: "도보 5분 거리에 초·중·고교가 밀집하여 자녀 교육에 최적화된 환경입니다.",
  },
  {
    icon: "🚇",
    title: "교통 요충지",
    desc: "지하철 2·9호선 더블역세권, 주요 간선도로 인접으로 어디든 빠르게 이동합니다.",
  },
  {
    icon: "🏪",
    title: "생활 인프라",
    desc: "대형마트, 병원, 은행, 관공서 등 생활 편의시설이 반경 500m 내에 집중되어 있습니다.",
  },
  {
    icon: "🏊",
    title: "프리미엄 커뮤니티",
    desc: "실내 수영장, 피트니스센터, 골프연습장, 독서실, 게스트하우스를 갖추었습니다.",
  },
  {
    icon: "🔒",
    title: "스마트 보안 시스템",
    desc: "24시간 통합 CCTV, 무인택배함, 스마트홈 IoT 시스템으로 안심 생활을 보장합니다.",
  },
];

export default function Intro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="intro" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* 섹션 헤더 */}
        <div
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <p className="section-subtitle mb-3">APARTMENT INTRODUCTION</p>
          <div className="gold-line mx-auto" />
          <h2 className="section-title mt-4">
            새로운 삶의 기준,<br />
            <span style={{ color: "var(--gold)" }}>가나 플라워</span>
          </h2>
          <p className="mt-4 text-base md:text-lg" style={{ color: "#666", maxWidth: "600px", margin: "1rem auto 0" }}>
            수십 년의 건설 노하우와 혁신적 설계로 탄생한 가나 플라워는<br className="hidden md:block" />
            당신이 꿈꾸던 프리미엄 주거 라이프스타일을 현실로 만듭니다.
          </p>
        </div>

        {/* 통계 수치 */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-20"
          style={{
            background: "var(--border)",
            border: "1px solid var(--border)",
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(20px)",
            transition: "all 0.7s ease 0.2s",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-8 px-4 text-center"
              style={{ background: "#fff" }}
            >
              <div className="flex items-end gap-1 mb-1">
                <span
                  className="font-black"
                  style={{
                    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                    color: "var(--primary)",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="font-bold mb-1"
                  style={{ color: "var(--gold)", fontSize: "1rem" }}
                >
                  {stat.unit}
                </span>
              </div>
              <p className="text-sm font-medium" style={{ color: "#888" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* 하이라이트 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className="p-6 rounded-xl border hover:shadow-lg transition-shadow duration-300"
              style={{
                borderColor: "var(--border)",
                background: "#fff",
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(25px)",
                transition: `all 0.6s ease ${0.1 * i + 0.3}s`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: "var(--beige)" }}
              >
                {item.icon}
              </div>
              <h3
                className="font-bold text-base mb-2"
                style={{ color: "var(--primary)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
