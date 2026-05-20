"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    step: "01",
    icon: "📞",
    title: "주문 접수",
    desc: "전화, 카카오톡, 온라인 중 편한 방법으로 주문하세요. 연중무휴 07:00~22:00 접수 가능합니다.",
    color: "var(--primary)",
    bg: "#e8f5ed",
  },
  {
    step: "02",
    icon: "✍️",
    title: "리본 문구 확인",
    desc: "보내시는 분과 받는 분 성함, 리본 문구를 확인합니다. 맞춤 문구 제작은 무료입니다.",
    color: "var(--pink)",
    bg: "var(--pink-pale)",
  },
  {
    step: "03",
    icon: "💐",
    title: "신선한 생화 제작",
    desc: "전문 플로리스트가 신선한 생화로 정성껏 제작합니다. 주문 후 30분 내 제작 완료됩니다.",
    color: "var(--gold)",
    bg: "#fff8e6",
  },
  {
    step: "04",
    icon: "🚚",
    title: "신속 배달 완료",
    desc: "전담 배달 기사가 지정 장소로 안전하게 배달합니다. 배달 완료 시 사진으로 확인해 드립니다.",
    color: "#4a6278",
    bg: "#f0f4f8",
  },
];

const methods = [
  {
    icon: "☎️",
    title: "전화 주문",
    value: "1588-3900",
    sub: "연중무휴 07:00 ~ 22:00",
    desc: "전화 한 통으로 빠르게 주문하세요.",
    color: "var(--primary)",
    bg: "#e8f5ed",
    action: "tel:1588-3900",
    actionLabel: "전화하기",
  },
  {
    icon: "💬",
    title: "카카오톡 주문",
    value: "가나플라워",
    sub: "카카오 채널 검색",
    desc: "카카오톡으로 편리하게 주문하세요.",
    color: "#3C1E1E",
    bg: "#FEF9C3",
    action: "#contact",
    actionLabel: "채널 연결",
  },
  {
    icon: "🌐",
    title: "온라인 주문",
    value: "빠른 주문 폼",
    sub: "24시간 접수 가능",
    desc: "하단 주문 폼을 통해 간편하게 신청하세요.",
    color: "var(--pink)",
    bg: "var(--pink-pale)",
    action: "#contact",
    actionLabel: "주문 폼으로",
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
      const id = action.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="howtoorder" ref={ref} className="py-20 md:py-28" style={{ background: "var(--beige)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* 헤더 */}
        <div className="text-center mb-16"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s" }}>
          <span className="section-label">HOW TO ORDER</span>
          <h2 className="section-title">주문 방법</h2>
          <div className="divider-line mx-auto" />
          <p className="section-desc">
            전화, 카카오톡, 온라인 주문 폼으로 간편하게 주문하세요.<br />
            친절한 상담원이 도와드립니다.
          </p>
        </div>

        {/* 주문 방법 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {methods.map((method, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                background: method.bg,
                borderColor: "transparent",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${i * 0.15}s`,
              }}
            >
              <div className="text-5xl mb-4">{method.icon}</div>
              <div className="text-xs font-bold tracking-widest mb-1" style={{ color: method.color, opacity: 0.7 }}>
                {method.sub}
              </div>
              <h3 className="text-lg font-black mb-1" style={{ color: "#1a1a1a" }}>{method.title}</h3>
              <p className="text-xl font-black mb-2" style={{ color: method.color }}>{method.value}</p>
              <p className="text-sm mb-5" style={{ color: "var(--gray)" }}>{method.desc}</p>
              <button
                onClick={() => handleAction(method.action)}
                className="w-full py-2.5 text-sm font-bold rounded-lg border-2 transition-all duration-200"
                style={{
                  borderColor: method.color,
                  color: method.color,
                  background: "transparent",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = method.color;
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = method.color;
                }}
              >
                {method.actionLabel} →
              </button>
            </div>
          ))}
        </div>

        {/* 주문 프로세스 */}
        <div className="mb-6 text-center">
          <h3 className="text-xl font-black" style={{ color: "var(--primary-dark)" }}>
            주문부터 배달까지, 4단계
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl"
              style={{
                background: step.bg,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${0.3 + i * 0.1}s`,
              }}
            >
              {/* 연결선 (마지막 제외) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 z-10 text-gray-300 text-xl">
                  →
                </div>
              )}
              <div className="text-3xl mb-3">{step.icon}</div>
              <div className="text-xs font-black tracking-widest mb-1" style={{ color: step.color, opacity: 0.5 }}>
                STEP {step.step}
              </div>
              <h4 className="font-black text-base mb-2" style={{ color: "#1a1a1a" }}>{step.title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: "var(--gray-dark)" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
