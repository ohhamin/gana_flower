"use client";

import { useEffect, useRef, useState } from "react";

const locationItems = [
  {
    category: "교통",
    icon: "🚇",
    color: "#2563eb",
    items: [
      { name: "지하철 2호선 ○○역", distance: "도보 5분" },
      { name: "지하철 9호선 ○○역", distance: "도보 7분" },
      { name: "올림픽대로 ○○IC", distance: "차량 3분" },
      { name: "공항철도 ○○역", distance: "차량 10분" },
    ],
  },
  {
    category: "교육",
    icon: "🏫",
    color: "#16a34a",
    items: [
      { name: "○○초등학교", distance: "도보 3분" },
      { name: "○○중학교", distance: "도보 5분" },
      { name: "○○고등학교", distance: "도보 8분" },
      { name: "○○대학교", distance: "차량 10분" },
    ],
  },
  {
    category: "편의시설",
    icon: "🏪",
    color: "#ea580c",
    items: [
      { name: "이마트 ○○점", distance: "도보 3분" },
      { name: "○○대학병원", distance: "차량 5분" },
      { name: "○○백화점", distance: "차량 7분" },
      { name: "○○구청", distance: "차량 5분" },
    ],
  },
  {
    category: "자연환경",
    icon: "🌿",
    color: "#15803d",
    items: [
      { name: "○○공원", distance: "도보 3분" },
      { name: "○○한강공원", distance: "차량 5분" },
      { name: "○○체육관", distance: "도보 10분" },
      { name: "○○수목원", distance: "차량 15분" },
    ],
  },
];

export default function Location() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("교통");

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const active = locationItems.find((l) => l.category === activeCategory)!;

  return (
    <section id="location" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* 섹션 헤더 */}
        <div
          className="text-center mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <p className="section-subtitle mb-3">LOCATION</p>
          <div className="gold-line mx-auto" />
          <h2 className="section-title mt-4">입지 여건</h2>
          <p className="mt-3 text-sm" style={{ color: "#888" }}>
            최고의 생활 환경을 갖춘 최적의 입지
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* 지도 영역 */}
          <div
            className="rounded-2xl overflow-hidden shadow-md"
            style={{
              border: "1px solid var(--border)",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateX(-30px)",
              transition: "all 0.7s ease 0.2s",
            }}
          >
            {/* 지도 대체 SVG */}
            <div
              className="relative"
              style={{ background: "#e8f0ec", minHeight: "400px" }}
            >
              <svg
                viewBox="0 0 500 400"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "block" }}
              >
                {/* 도로망 */}
                <rect width="500" height="400" fill="#e8ede8" />
                {/* 주요 도로 */}
                <rect x="0" y="180" width="500" height="18" fill="#d4cfc0" />
                <rect x="230" y="0" width="18" height="400" fill="#d4cfc0" />
                {/* 보조 도로 */}
                <rect x="0" y="100" width="500" height="8" fill="#ddd8c8" />
                <rect x="0" y="290" width="500" height="8" fill="#ddd8c8" />
                <rect x="120" y="0" width="8" height="400" fill="#ddd8c8" />
                <rect x="360" y="0" width="8" height="400" fill="#ddd8c8" />
                {/* 공원 */}
                <rect x="30" y="30" width="80" height="60" rx="5" fill="#a8d5a2" />
                <text x="70" y="65" textAnchor="middle" fontSize="10" fill="#2d5a2d">공원</text>
                {/* 학교 */}
                <rect x="370" y="50" width="70" height="50" rx="3" fill="#93c5fd" />
                <text x="405" y="80" textAnchor="middle" fontSize="9" fill="#1e40af">학교</text>
                {/* 마트 */}
                <rect x="30" y="220" width="75" height="50" rx="3" fill="#fde68a" />
                <text x="68" y="250" textAnchor="middle" fontSize="9" fill="#92400e">마트</text>
                {/* 지하철역 */}
                <circle cx="230" cy="100" r="15" fill="#3b82f6" />
                <text x="230" y="104" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">M</text>
                <text x="230" y="125" textAnchor="middle" fontSize="9" fill="#1e40af">○○역</text>
                {/* 아파트 위치 (중앙) */}
                <rect x="178" y="128" width="105" height="105" rx="6" fill="#1e3a2f" opacity="0.9" />
                <text x="230" y="176" textAnchor="middle" fontSize="12" fill="#d4af55" fontWeight="bold">가나</text>
                <text x="230" y="192" textAnchor="middle" fontSize="12" fill="#d4af55" fontWeight="bold">플라워</text>
                {/* 핀 */}
                <circle cx="230" cy="117" r="8" fill="#d4af55" />
                <text x="230" y="121" textAnchor="middle" fontSize="10" fill="#fff">★</text>
                {/* 범례 */}
                <rect x="10" y="360" width="10" height="10" fill="#1e3a2f" rx="2" />
                <text x="26" y="370" fontSize="9" fill="#555">가나 플라워</text>
                <circle cx="120" cy="365" r="5" fill="#3b82f6" />
                <text x="132" y="370" fontSize="9" fill="#555">지하철역</text>
                <rect x="200" y="360" width="10" height="10" fill="#a8d5a2" rx="2" />
                <text x="216" y="370" fontSize="9" fill="#555">공원</text>
              </svg>
              <div
                className="absolute top-3 left-3 px-3 py-1.5 rounded-lg text-xs font-bold"
                style={{ background: "rgba(30,58,47,0.9)", color: "#d4af55" }}
              >
                개략 위치도 (실제와 상이할 수 있음)
              </div>
            </div>
          </div>

          {/* 입지 정보 */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateX(30px)",
              transition: "all 0.7s ease 0.3s",
            }}
          >
            {/* 카테고리 탭 */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {locationItems.map((loc) => (
                <button
                  key={loc.category}
                  onClick={() => setActiveCategory(loc.category)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all"
                  style={{
                    background: activeCategory === loc.category ? loc.color : "#f5f5f5",
                    color: activeCategory === loc.category ? "#fff" : "#666",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>{loc.icon}</span>
                  <span>{loc.category}</span>
                </button>
              ))}
            </div>

            {/* 선택된 카테고리 항목 */}
            <div className="flex flex-col gap-3">
              {active.items.map((item, i) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between p-4 rounded-xl"
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border)",
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: active.color }}
                    />
                    <span className="text-sm font-medium" style={{ color: "#333" }}>
                      {item.name}
                    </span>
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: `${active.color}15`, color: active.color }}
                  >
                    {item.distance}
                  </span>
                </div>
              ))}
            </div>

            {/* 모델하우스 정보 */}
            <div
              className="mt-6 p-5 rounded-xl"
              style={{ background: "var(--primary)", color: "#fff" }}
            >
              <h4 className="font-bold mb-3" style={{ color: "var(--gold)" }}>
                📍 모델하우스 위치
              </h4>
              <p className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.9)" }}>
                서울특별시 ○○구 ○○동 123-45
              </p>
              <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
                운영시간: 매일 10:00 ~ 17:00 (연중무휴)
              </p>
              <div className="flex gap-3">
                <a
                  href="tel:1588-0000"
                  className="btn-gold text-sm py-2.5 px-4"
                >
                  ☎ 1588-0000
                </a>
                <button
                  className="btn-outline text-sm py-2.5 px-4"
                  style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  방문 예약
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
