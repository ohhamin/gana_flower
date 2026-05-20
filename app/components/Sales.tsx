"use client";

import { useEffect, useRef, useState } from "react";

const deliveryInfo = [
  {
    icon: "⚡",
    title: "당일 배달",
    desc: "오전 11시 이전 주문 완료 시 당일 배달 가능합니다. (일부 지역 제외)",
    highlight: true,
  },
  {
    icon: "🌙",
    title: "새벽·야간 배달",
    desc: "장례식장 등 급한 상황을 위해 새벽 배달 및 야간 배달을 운영합니다.",
    highlight: false,
  },
  {
    icon: "📸",
    title: "배달 완료 사진 전송",
    desc: "배달 완료 후 현장 사진을 주문자에게 전송해 드립니다.",
    highlight: false,
  },
  {
    icon: "🗺️",
    title: "전국 배달",
    desc: "제주도 및 도서지역 포함, 전국 어디서나 배달해 드립니다.",
    highlight: false,
  },
];

const regions = [
  { name: "서울", time: "2~4시간", fee: "무료" },
  { name: "경기·인천", time: "3~5시간", fee: "무료" },
  { name: "강원", time: "4~6시간", fee: "무료" },
  { name: "충청", time: "4~6시간", fee: "무료" },
  { name: "전라", time: "5~7시간", fee: "무료" },
  { name: "경상", time: "5~7시간", fee: "무료" },
  { name: "제주", time: "익일 배달", fee: "20,000원" },
];

const guarantees = [
  { icon: "🌿", title: "신선도 보장", desc: "당일 입하된 신선한 생화만 사용합니다." },
  { icon: "🎨", title: "품질 보장", desc: "전문 플로리스트가 직접 제작합니다." },
  { icon: "🔄", title: "교환·환불 보장", desc: "하자 발생 시 즉시 교환해 드립니다." },
  { icon: "📱", title: "실시간 알림", desc: "배달 시작·완료 시 알림을 보내드립니다." },
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
    <section id="delivery" ref={ref} className="py-16 md:py-28" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        {/* 헤더 */}
        <div className="text-center mb-12 md:mb-14"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s" }}>
          <span className="section-label">DELIVERY INFO</span>
          <h2 className="section-title">배송 안내</h2>
          <div className="divider-line mx-auto" />
          <p className="section-desc max-w-lg mx-auto">
            전국 어디든 빠르고 안전하게 배달해 드립니다.<br />
            급한 상황을 위한 새벽·야간 배달도 가능합니다.
          </p>
        </div>

        {/* 배달 특징 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 md:mb-14">
          {deliveryInfo.map((item, i) => (
            <div
              key={i}
              className="flex gap-5 p-6 rounded-2xl border transition-all duration-300"
              style={{
                background: item.highlight ? "linear-gradient(135deg, var(--primary-dark), var(--primary))" : "var(--beige)",
                borderColor: item.highlight ? "transparent" : "var(--border)",
                color: item.highlight ? "#fff" : "var(--fg)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${i * 0.1}s`,
              }}
            >
              <div className="text-4xl flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-black text-lg mb-2">{item.title}</h3>
                <p className="text-base leading-relaxed"
                  style={{ color: item.highlight ? "rgba(255,255,255,0.85)" : "var(--gray-dark)" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 지역별 배달 시간 */}
        <div
          className="mb-12 md:mb-14"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.7s 0.3s" }}
        >
          <h3 className="text-xl font-black mb-5" style={{ color: "var(--primary-dark)" }}>
            📍 지역별 배달 시간
          </h3>
          <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "var(--border)" }}>
            <table className="w-full text-base">
              <thead>
                <tr style={{ background: "var(--primary)", color: "#fff" }}>
                  <th className="px-5 py-4 text-left font-semibold">지역</th>
                  <th className="px-5 py-4 text-center font-semibold">예상 배달 시간</th>
                  <th className="px-5 py-4 text-center font-semibold">배달비</th>
                </tr>
              </thead>
              <tbody>
                {regions.map((r, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "var(--beige)" }}>
                    <td className="px-5 py-4 font-semibold" style={{ color: "var(--primary)" }}>{r.name}</td>
                    <td className="px-5 py-4 text-center" style={{ color: "var(--gray-dark)" }}>{r.time}</td>
                    <td className="px-5 py-4 text-center font-semibold"
                      style={{ color: r.fee === "무료" ? "var(--primary)" : "var(--pink)" }}>
                      {r.fee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-3" style={{ color: "var(--gray)" }}>
            ※ 배달 시간은 주문 접수 후 기준이며, 교통 상황에 따라 달라질 수 있습니다.
          </p>
        </div>

        {/* 품질 보장 */}
        <div
          className="p-8 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, #faf6f0, #fce8ed)",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s 0.5s",
          }}
        >
          <h3 className="text-xl font-black mb-8 text-center" style={{ color: "var(--primary-dark)" }}>
            🌸 가나플라워 품질 보장 약속
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {guarantees.map((g, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-3">{g.icon}</div>
                <div className="font-black text-base mb-2" style={{ color: "var(--primary)" }}>{g.title}</div>
                <div className="text-sm leading-relaxed" style={{ color: "var(--gray-dark)" }}>{g.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
