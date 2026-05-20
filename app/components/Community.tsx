"use client";

import { useEffect, useRef, useState } from "react";

const facilities = [
  {
    category: "스포츠",
    icon: "🏊",
    name: "실내 수영장",
    desc: "25m 레인 6개, 어린이 풀 포함, 연중 상시 운영",
    size: "1,200㎡",
  },
  {
    category: "스포츠",
    icon: "💪",
    name: "피트니스 센터",
    desc: "최신 운동 기구 완비, GX룸·스트레칭존 포함",
    size: "650㎡",
  },
  {
    category: "스포츠",
    icon: "⛳",
    name: "스크린 골프장",
    desc: "4개 부스 운영, 최신 시뮬레이터 탑재",
    size: "280㎡",
  },
  {
    category: "문화",
    icon: "📚",
    name: "독서실 · 스터디룸",
    desc: "개인석 60석, 그룹 스터디룸 4개실",
    size: "420㎡",
  },
  {
    category: "문화",
    icon: "🎬",
    name: "영화 상영관",
    desc: "70석 규모, 4K 빔 시스템, 주민 전용 상영",
    size: "350㎡",
  },
  {
    category: "라이프",
    icon: "☕",
    name: "카페테리아 라운지",
    desc: "커피머신·공유주방 완비, 입주민 전용 공간",
    size: "320㎡",
  },
  {
    category: "라이프",
    icon: "🧒",
    name: "어린이 놀이방",
    desc: "안전 인증 놀이시설, 보육 교사 상주",
    size: "280㎡",
  },
  {
    category: "라이프",
    icon: "🏨",
    name: "게스트하우스",
    desc: "4개실 운영, 방문 가족·지인 저렴 이용 가능",
    size: "200㎡",
  },
];

const categories = ["전체", "스포츠", "문화", "라이프"];

export default function Community() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState("전체");

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const filtered = filter === "전체" ? facilities : facilities.filter((f) => f.category === filter);

  return (
    <section
      id="community"
      ref={sectionRef}
      className="py-20 md:py-28"
      style={{ background: "var(--gray-light)" }}
    >
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
          <p className="section-subtitle mb-3">COMMUNITY</p>
          <div className="gold-line mx-auto" />
          <h2 className="section-title mt-4">
            프리미엄<br />커뮤니티 시설
          </h2>
          <p className="mt-3 text-sm" style={{ color: "#888" }}>
            일상이 특별해지는 고품격 커뮤니티 공간
          </p>
        </div>

        {/* 총 규모 배너 */}
        <div
          className="rounded-2xl p-8 mb-10 text-center"
          style={{
            background: "var(--primary)",
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(20px)",
            transition: "all 0.7s ease 0.2s",
          }}
        >
          <p className="text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>
            커뮤니티 총 시설 규모
          </p>
          <div
            className="font-black mb-2"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--gold)" }}
          >
            총 4,500㎡ (약 1,360평)
          </div>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
            세대당 3.75㎡의 넓은 커뮤니티 공간 제공
          </p>
        </div>

        {/* 필터 */}
        <div
          className="flex gap-2 mb-8 flex-wrap"
          style={{
            opacity: visible ? 1 : 0,
            transition: "all 0.7s ease 0.3s",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="px-5 py-2 rounded-full text-sm font-bold transition-all"
              style={{
                background: filter === cat ? "var(--primary)" : "#fff",
                color: filter === cat ? "#fff" : "#666",
                border: `1px solid ${filter === cat ? "var(--primary)" : "var(--border)"}`,
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 시설 카드 그리드 */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          style={{
            opacity: visible ? 1 : 0,
            transition: "all 0.7s ease 0.4s",
          }}
        >
          {filtered.map((fac, i) => (
            <div
              key={fac.name}
              className="rounded-xl p-5 hover:shadow-md transition-shadow duration-300 group"
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "var(--beige)" }}
                >
                  {fac.icon}
                </div>
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ background: "var(--beige)", color: "var(--primary)" }}
                >
                  {fac.category}
                </span>
              </div>
              <h4
                className="font-bold text-base mb-1"
                style={{ color: "var(--primary)" }}
              >
                {fac.name}
              </h4>
              <p className="text-xs leading-relaxed mb-3" style={{ color: "#777" }}>
                {fac.desc}
              </p>
              <div
                className="text-xs font-bold pt-3"
                style={{
                  color: "var(--gold)",
                  borderTop: "1px solid var(--border)",
                }}
              >
                규모: {fac.size}
              </div>
            </div>
          ))}
        </div>

        {/* 주민 혜택 섹션 */}
        <div
          className="mt-10 rounded-2xl p-8 md:p-10"
          style={{
            background: "#fff",
            border: "1px solid var(--border)",
            opacity: visible ? 1 : 0,
            transition: "all 0.7s ease 0.5s",
          }}
        >
          <h3 className="font-bold text-lg mb-6" style={{ color: "var(--primary)" }}>
            🎁 입주민 전용 혜택
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "커뮤니티 무료 이용",
                desc: "피트니스, 독서실, 어린이 놀이방 월정액 무료",
              },
              {
                title: "스마트홈 앱 제공",
                desc: "난방·전기·보안 원격 제어 IoT 시스템 기본 탑재",
              },
              {
                title: "1년 무상 AS",
                desc: "입주 후 1년간 마감재·설비 하자 무상 수리 보장",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="flex gap-3"
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                  style={{ background: "var(--primary)", color: "var(--gold)" }}
                >
                  ✓
                </span>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "var(--primary)" }}>
                    {benefit.title}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "#777" }}>
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
