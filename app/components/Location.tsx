"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    step: "01",
    icon: "📞",
    title: "주문 접수",
    desc: "전화·카카오·온라인 폼으로\n연중무휴 07:00~22:00 접수",
    color: "var(--primary)",
  },
  {
    step: "02",
    icon: "✍️",
    title: "리본 문구 확인",
    desc: "보내는 분·받는 분 성함,\n리본 문구 맞춤 제작 (무료)",
    color: "var(--pink)",
  },
  {
    step: "03",
    icon: "💐",
    title: "신선 생화 제작",
    desc: "전문 플로리스트가\n신선한 생화로 정성껏 제작",
    color: "var(--gold)",
  },
  {
    step: "04",
    icon: "🚚",
    title: "신속 배달 완료",
    desc: "지정 장소 배달 후\n완료 사진을 전송해 드립니다",
    color: "#4a6278",
  },
];

const methods = [
  {
    icon: "☎️",
    title: "전화 주문",
    value: "1588-3900",
    sub: "연중무휴 07:00 ~ 22:00",
    desc: "전화 한 통으로 빠르게 주문",
    action: "tel:1588-3900",
    actionLabel: "전화하기",
    style: { background: "#e8f5ed", borderColor: "var(--primary)", valueColor: "var(--primary)" },
  },
  {
    icon: "💬",
    title: "카카오톡 주문",
    value: "@가나플라워",
    sub: "카카오 채널 검색",
    desc: "카카오톡으로 편리하게 주문",
    action: "#contact",
    actionLabel: "채널 연결",
    style: { background: "#FEF9C3", borderColor: "#c49a3c", valueColor: "#3C1E1E" },
  },
  {
    icon: "🌐",
    title: "온라인 주문",
    value: "빠른 주문 폼",
    sub: "24시간 접수 가능",
    desc: "하단 주문 폼으로 간편 신청",
    action: "#contact",
    actionLabel: "주문 폼으로",
    style: { background: "#fce8ed", borderColor: "var(--pink)", valueColor: "var(--pink)" },
  },
];

export default function Location() {
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

  const handleAction = (action: string) => {
    if (action.startsWith("tel:")) {
      window.location.href = action;
    } else {
      document.getElementById(action.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="howtoorder" ref={ref} className="py-8 md:py-14" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-4">

        {/* 헤더 */}
        <div
          className="mb-8"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s" }}
        >
          <span className="section-label">HOW TO ORDER</span>
          <h2 className="section-title">주문 방법</h2>
          <p className="text-sm mt-1" style={{ color: "#888" }}>
            전화·카카오·온라인 주문 폼으로 간편하게 주문하세요.
          </p>
        </div>

        {/* 주문 방법 카드 3개 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {methods.map((m, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border-2 text-center transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              style={{
                background: m.style.background,
                borderColor: m.style.borderColor,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease ${i * 0.1}s`,
              }}
            >
              <div className="text-4xl mb-3">{m.icon}</div>
              <p className="text-xs font-semibold mb-1" style={{ color: "#888" }}>{m.sub}</p>
              <h3 className="text-base font-black mb-1" style={{ color: "#1a1a1a" }}>{m.title}</h3>
              <p className="text-lg font-black mb-2" style={{ color: m.style.valueColor }}>{m.value}</p>
              <p className="text-sm mb-4" style={{ color: "#888" }}>{m.desc}</p>
              <button
                onClick={() => handleAction(m.action)}
                className="w-full py-2.5 text-sm font-bold rounded-lg border-2 transition-all duration-150"
                style={{
                  borderColor: m.style.valueColor,
                  color: m.style.valueColor,
                  background: "transparent",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = m.style.valueColor;
                  el.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "transparent";
                  el.style.color = m.style.valueColor;
                }}
              >
                {m.actionLabel} →
              </button>
            </div>
          ))}
        </div>

        {/* 주문 프로세스 4단계 */}
        <div
          className="p-5 md:p-7 rounded-xl"
          style={{ background: "#f8f8f8", opacity: visible ? 1 : 0, transition: "opacity 0.6s 0.3s" }}
        >
          <h3 className="text-base font-black mb-5 text-center" style={{ color: "#1a1a1a" }}>
            주문부터 배달까지 4단계
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-4 text-center relative"
                style={{ border: "1px solid #eee" }}
              >
                <div className="text-3xl mb-2">{step.icon}</div>
                <div className="text-xs font-black mb-1" style={{ color: step.color, opacity: 0.7 }}>
                  STEP {step.step}
                </div>
                <h4 className="text-sm font-black mb-1.5" style={{ color: "#1a1a1a" }}>{step.title}</h4>
                <p className="text-xs leading-relaxed whitespace-pre-line" style={{ color: "#888" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
