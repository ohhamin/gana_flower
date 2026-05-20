"use client";

import { useEffect, useRef, useState } from "react";

const schedule = [
  { step: "01", label: "청약 접수", date: "2025.08.11 ~ 08.13", note: "당해지역 우선" },
  { step: "02", label: "당첨자 발표", date: "2025.08.20", note: "홈페이지 발표" },
  { step: "03", label: "당첨자 서류 제출", date: "2025.08.21 ~ 08.27", note: "해당 지점 방문" },
  { step: "04", label: "계약 체결", date: "2025.08.28 ~ 09.05", note: "모델하우스 현장" },
  { step: "05", label: "중도금 납부", date: "2026.01 ~ 2027.06", note: "6회 분납" },
  { step: "06", label: "입주", date: "2028.03 (예정)", note: "잔금 납부 후 입주" },
];

const paymentPlan = [
  { phase: "계약금", ratio: "10%", timing: "계약 시", note: "계약 당일 납부" },
  { phase: "중도금 1회", ratio: "10%", timing: "2026.01", note: "무이자 중도금" },
  { phase: "중도금 2회", ratio: "10%", timing: "2026.04", note: "무이자 중도금" },
  { phase: "중도금 3회", ratio: "10%", timing: "2026.07", note: "무이자 중도금" },
  { phase: "중도금 4회", ratio: "10%", timing: "2026.10", note: "무이자 중도금" },
  { phase: "중도금 5회", ratio: "10%", timing: "2027.03", note: "무이자 중도금" },
  { phase: "중도금 6회", ratio: "10%", timing: "2027.06", note: "무이자 중도금" },
  { phase: "잔금", ratio: "30%", timing: "2028.03", note: "입주 시 납부" },
];

export default function Sales() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"schedule" | "payment" | "eligibility">("schedule");

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="sales"
      ref={sectionRef}
      className="py-20 md:py-28"
      style={{ background: "var(--beige)" }}
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
          <p className="section-subtitle mb-3">SALES GUIDE</p>
          <div className="gold-line mx-auto" />
          <h2 className="section-title mt-4">분양 안내</h2>
          <p className="mt-3 text-sm" style={{ color: "#888" }}>
            분양 일정, 납부 방법, 청약 자격을 확인하세요
          </p>
        </div>

        {/* 핵심 정보 배너 */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          style={{
            opacity: visible ? 1 : 0,
            transition: "all 0.7s ease 0.2s",
          }}
        >
          {[
            { label: "분양가 상한제", value: "미적용", icon: "💰" },
            { label: "중도금 대출", value: "60% 가능", icon: "🏦" },
            { label: "전매 제한", value: "3년", icon: "📋" },
            { label: "무이자 중도금", value: "전 세대", icon: "✨" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl p-5 text-center shadow-sm"
              style={{ background: "#fff", border: "1px solid var(--border)" }}
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <div
                className="font-black text-lg mb-1"
                style={{ color: "var(--primary)" }}
              >
                {item.value}
              </div>
              <div className="text-xs" style={{ color: "#888" }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* 탭 */}
        <div
          className="flex border-b mb-8"
          style={{
            borderColor: "var(--border)",
            opacity: visible ? 1 : 0,
            transition: "all 0.7s ease 0.3s",
          }}
        >
          {(["schedule", "payment", "eligibility"] as const).map((tab) => {
            const labels = { schedule: "분양 일정", payment: "납부 일정", eligibility: "청약 자격" };
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="tab-btn"
                style={{
                  color: activeTab === tab ? "var(--primary)" : "#888",
                  fontWeight: activeTab === tab ? 700 : 500,
                  borderBottom: activeTab === tab ? "3px solid var(--gold)" : "3px solid transparent",
                  marginBottom: "-1px",
                }}
              >
                {labels[tab]}
              </button>
            );
          })}
        </div>

        {/* 분양 일정 */}
        {activeTab === "schedule" && (
          <div className="relative">
            <div className="flex flex-col gap-0">
              {schedule.map((item, i) => (
                <div key={item.step} className="flex gap-4 md:gap-8">
                  {/* 타임라인 */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
                      style={{ background: "var(--primary)", color: "var(--gold)" }}
                    >
                      {item.step}
                    </div>
                    {i < schedule.length - 1 && (
                      <div
                        className="w-px flex-1 my-1"
                        style={{ background: "var(--border)", minHeight: "30px" }}
                      />
                    )}
                  </div>

                  {/* 내용 */}
                  <div className="pb-6 flex-1">
                    <div
                      className="rounded-xl p-4 shadow-sm"
                      style={{ background: "#fff", border: "1px solid var(--border)" }}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h4
                            className="font-bold text-base mb-1"
                            style={{ color: "var(--primary)" }}
                          >
                            {item.label}
                          </h4>
                          <p className="text-xs" style={{ color: "#888" }}>
                            {item.note}
                          </p>
                        </div>
                        <span
                          className="font-bold text-sm px-3 py-1.5 rounded-lg flex-shrink-0"
                          style={{ background: "var(--beige)", color: "var(--primary)" }}
                        >
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 납부 일정 */}
        {activeTab === "payment" && (
          <div className="rounded-xl overflow-hidden shadow-sm" style={{ border: "1px solid var(--border)" }}>
            <table className="info-table">
              <thead>
                <tr>
                  <th>납부 구분</th>
                  <th>납부 비율</th>
                  <th>납부 시기</th>
                  <th>비고</th>
                </tr>
              </thead>
              <tbody>
                {paymentPlan.map((p) => (
                  <tr key={p.phase}>
                    <td className="font-medium">{p.phase}</td>
                    <td className="font-bold" style={{ color: "var(--primary)" }}>{p.ratio}</td>
                    <td>{p.timing}</td>
                    <td className="text-xs" style={{ color: "#888" }}>{p.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div
              className="px-6 py-3 text-xs"
              style={{ background: "var(--beige)", color: "#888" }}
            >
              ※ 중도금 대출은 세대당 분양가의 60%까지 가능하며, 금융기관 심사에 따라 변동될 수 있습니다.
            </div>
          </div>
        )}

        {/* 청약 자격 */}
        {activeTab === "eligibility" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "1순위 청약 자격",
                color: "var(--primary)",
                items: [
                  "해당 지역 1년 이상 거주자",
                  "청약통장 가입 24개월 이상",
                  "납입인정 횟수 24회 이상",
                  "세대주 (무주택 또는 1주택)",
                  "청약 제한 기간 미해당",
                ],
              },
              {
                title: "2순위 청약 자격",
                color: "#888",
                items: [
                  "해당 지역 거주자",
                  "청약통장 가입 12개월 이상",
                  "납입인정 횟수 12회 이상",
                  "세대원 포함 가능",
                  "1순위 미달 세대 대상",
                ],
              },
              {
                title: "특별공급 대상",
                color: "var(--gold)",
                items: [
                  "다자녀 가구 (3자녀 이상)",
                  "신혼부부 (혼인 7년 이내)",
                  "생애최초 주택구입자",
                  "노부모 부양 가구",
                  "장애인 가구",
                ],
              },
              {
                title: "청약 구비 서류",
                color: "#2563eb",
                items: [
                  "주민등록등본 (전입 이력 포함)",
                  "청약통장 확인서",
                  "소득 증빙 서류",
                  "가족관계증명서",
                  "해당 특별공급 증빙서류",
                ],
              },
            ].map((group) => (
              <div
                key={group.title}
                className="rounded-xl p-6 shadow-sm"
                style={{ background: "#fff", border: "1px solid var(--border)" }}
              >
                <h4
                  className="font-bold text-base mb-4 pb-3"
                  style={{ color: group.color, borderBottom: `2px solid ${group.color}` }}
                >
                  {group.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "#444" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: group.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
