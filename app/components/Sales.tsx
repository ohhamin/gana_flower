"use client";

import { useEffect, useRef, useState } from "react";

const highlights = [
  {
    icon: "⚡",
    title: "당일 배달",
    desc: "오전 11시 이전 주문 완료 시 당일 배달 가능 (일부 지역 제외)",
    highlight: true,
  },
  {
    icon: "🌙",
    title: "새벽·야간 배달",
    desc: "장례식장 등 급한 상황을 위한 새벽 및 야간 배달 운영",
    highlight: false,
  },
  {
    icon: "📸",
    title: "배달 완료 사진",
    desc: "배달 완료 후 현장 사진을 주문자에게 전송",
    highlight: false,
  },
  {
    icon: "🗺️",
    title: "전국 배달",
    desc: "제주도 포함 전국 어디서나 배달",
    highlight: false,
  },
];

const regions = [
  { name: "서울",       time: "2~4시간",  fee: "무료" },
  { name: "경기·인천", time: "3~5시간",  fee: "무료" },
  { name: "강원",       time: "4~6시간",  fee: "무료" },
  { name: "충청",       time: "4~6시간",  fee: "무료" },
  { name: "전라",       time: "5~7시간",  fee: "무료" },
  { name: "경상",       time: "5~7시간",  fee: "무료" },
  { name: "제주",       time: "익일 배달", fee: "20,000원" },
];

const guarantees = [
  { icon: "🌿", title: "신선도 보장",   desc: "당일 입하된 신선한 생화만 사용" },
  { icon: "🎨", title: "품질 보장",     desc: "전문 플로리스트가 직접 제작" },
  { icon: "🔄", title: "교환·환불 보장", desc: "하자 발생 시 즉시 교환" },
  { icon: "📱", title: "실시간 알림",   desc: "배달 시작·완료 시 알림 전송" },
];

export default function Sales() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="delivery" ref={ref} className="py-8 md:py-14" style={{ background: "#f5f5f5" }}>
      <div className="max-w-6xl mx-auto px-4">

        {/* 헤더 */}
        <div
          className="mb-7"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s" }}
        >
          <span className="section-label">DELIVERY</span>
          <h2 className="section-title">배송 안내</h2>
          <p className="text-sm mt-1" style={{ color: "#888" }}>전국 어디든 빠르고 안전하게, 급한 상황을 위한 새벽·야간 배달도 가능합니다.</p>
        </div>

        {/* 배달 하이라이트 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-4"
              style={{
                background: item.highlight
                  ? "linear-gradient(135deg, var(--primary-dark), var(--primary))"
                  : "#fff",
                border: item.highlight ? "none" : "1px solid var(--border)",
                opacity: visible ? 1 : 0,
                transition: `opacity 0.5s ease ${i * 0.1}s`,
              }}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3
                className="font-bold text-sm mb-1"
                style={{ color: item.highlight ? "#fff" : "#1a1a1a" }}
              >
                {item.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: item.highlight ? "rgba(255,255,255,0.8)" : "#888" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 두 컬럼: 테이블 + 품질 보장 */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s 0.3s" }}
        >
          {/* 지역별 배달 시간 */}
          <div className="bg-white rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
            <div className="px-5 py-3.5 font-bold text-sm" style={{ background: "var(--primary)", color: "#fff" }}>
              📍 지역별 배달 시간
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#f8f8f8", borderBottom: "1px solid #eee" }}>
                  <th className="px-4 py-2.5 text-left font-semibold" style={{ color: "#555" }}>지역</th>
                  <th className="px-4 py-2.5 text-center font-semibold" style={{ color: "#555" }}>예상 시간</th>
                  <th className="px-4 py-2.5 text-center font-semibold" style={{ color: "#555" }}>배달비</th>
                </tr>
              </thead>
              <tbody>
                {regions.map((r, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #f5f5f5" }}>
                    <td className="px-4 py-2.5 font-semibold" style={{ color: "var(--primary)" }}>{r.name}</td>
                    <td className="px-4 py-2.5 text-center" style={{ color: "#666" }}>{r.time}</td>
                    <td className="px-4 py-2.5 text-center font-semibold"
                      style={{ color: r.fee === "무료" ? "var(--primary)" : "var(--price-red)" }}>
                      {r.fee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs px-4 py-3" style={{ color: "#aaa" }}>
              ※ 교통 상황에 따라 변동될 수 있습니다.
            </p>
          </div>

          {/* 품질 보장 */}
          <div className="bg-white rounded-xl p-5 border" style={{ borderColor: "var(--border)" }}>
            <h3 className="font-bold text-sm mb-4" style={{ color: "var(--primary-dark)" }}>
              🌸 가나플라워 품질 보장 약속
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {guarantees.map((g, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-2xl flex-shrink-0">{g.icon}</span>
                  <div>
                    <div className="font-bold text-sm" style={{ color: "#1a1a1a" }}>{g.title}</div>
                    <div className="text-xs mt-0.5 leading-relaxed" style={{ color: "#888" }}>{g.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
