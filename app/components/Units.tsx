"use client";

import { useState } from "react";

const unitTypes = [
  {
    type: "A타입",
    area: "59㎡",
    rooms: "방 2개 / 욕실 1개",
    count: "300세대",
    floor: "5~38층",
    features: ["남향 위주 배치", "발코니 확장", "팬트리 수납공간"],
    color: "#1e3a2f",
    popular: false,
  },
  {
    type: "B타입",
    area: "74㎡",
    rooms: "방 3개 / 욕실 2개",
    count: "350세대",
    floor: "5~38층",
    features: ["남향 4Bay 판상형", "알파룸 제공", "드레스룸"],
    color: "#b8972e",
    popular: true,
  },
  {
    type: "C타입",
    area: "84㎡",
    rooms: "방 3개 / 욕실 2개",
    count: "400세대",
    floor: "3~38층",
    features: ["남·동향 복합배치", "넓은 주방·거실", "대형 드레스룸"],
    color: "#1e3a2f",
    popular: false,
  },
  {
    type: "D타입",
    area: "102㎡",
    rooms: "방 4개 / 욕실 2개",
    count: "150세대",
    floor: "3~38층",
    features: ["4Bay 파노라마 뷰", "독립적 가족공간", "더블 드레스룸"],
    color: "#1e3a2f",
    popular: false,
  },
];

const floorPlanData = {
  "A타입": {
    width: 320,
    height: 240,
    rooms: [
      { x: 10, y: 10, w: 90, h: 100, label: "거실", color: "#e8f4ec" },
      { x: 110, y: 10, w: 100, h: 60, label: "주방", color: "#f5f0e8" },
      { x: 220, y: 10, w: 90, h: 100, label: "침실1", color: "#e8f0f5" },
      { x: 10, y: 120, w: 80, h: 110, label: "침실2", color: "#e8f0f5" },
      { x: 100, y: 80, w: 110, h: 70, label: "식당", color: "#f5f0e8" },
      { x: 220, y: 120, w: 90, h: 55, label: "욕실", color: "#f0f5f8" },
      { x: 220, y: 185, w: 90, h: 45, label: "현관", color: "#f5f5f5" },
      { x: 100, y: 160, w: 110, h: 70, label: "발코니", color: "#e0ede5" },
    ],
  },
  "B타입": {
    width: 320,
    height: 240,
    rooms: [
      { x: 10, y: 10, w: 110, h: 110, label: "거실", color: "#e8f4ec" },
      { x: 130, y: 10, w: 80, h: 60, label: "주방", color: "#f5f0e8" },
      { x: 220, y: 10, w: 90, h: 80, label: "침실1", color: "#e8f0f5" },
      { x: 10, y: 130, w: 80, h: 100, label: "침실2", color: "#e8f0f5" },
      { x: 100, y: 130, w: 80, h: 100, label: "침실3", color: "#e8f0f5" },
      { x: 190, y: 100, w: 60, h: 60, label: "욕실1", color: "#f0f5f8" },
      { x: 260, y: 100, w: 50, h: 60, label: "욕실2", color: "#f0f5f8" },
      { x: 190, y: 170, w: 120, h: 60, label: "드레스룸", color: "#f5f5e8" },
      { x: 130, y: 75, w: 80, h: 45, label: "알파룸", color: "#f5f0e8" },
    ],
  },
  "C타입": {
    width: 320,
    height: 240,
    rooms: [
      { x: 10, y: 10, w: 120, h: 120, label: "거실", color: "#e8f4ec" },
      { x: 140, y: 10, w: 80, h: 65, label: "주방", color: "#f5f0e8" },
      { x: 230, y: 10, w: 80, h: 90, label: "침실1", color: "#e8f0f5" },
      { x: 10, y: 140, w: 95, h: 90, label: "침실2", color: "#e8f0f5" },
      { x: 115, y: 140, w: 95, h: 90, label: "침실3", color: "#e8f0f5" },
      { x: 140, y: 80, w: 80, h: 50, label: "식당", color: "#f5f0e8" },
      { x: 230, y: 110, w: 80, h: 60, label: "욕실", color: "#f0f5f8" },
      { x: 220, y: 175, w: 90, h: 55, label: "드레스룸", color: "#f5f5e8" },
    ],
  },
  "D타입": {
    width: 320,
    height: 240,
    rooms: [
      { x: 10, y: 10, w: 130, h: 120, label: "거실", color: "#e8f4ec" },
      { x: 150, y: 10, w: 80, h: 65, label: "주방+식당", color: "#f5f0e8" },
      { x: 240, y: 10, w: 70, h: 90, label: "침실1", color: "#e8f0f5" },
      { x: 10, y: 140, w: 80, h: 90, label: "침실2", color: "#e8f0f5" },
      { x: 100, y: 140, w: 80, h: 90, label: "침실3", color: "#e8f0f5" },
      { x: 190, y: 140, w: 80, h: 90, label: "침실4", color: "#e8f0f5" },
      { x: 150, y: 80, w: 80, h: 50, label: "다용도실", color: "#f5f0e8" },
      { x: 240, y: 110, w: 70, h: 55, label: "욕실", color: "#f0f5f8" },
      { x: 280, y: 175, w: 30, h: 55, label: "현관", color: "#f5f5f5" },
    ],
  },
};

export default function Units() {
  const [activeType, setActiveType] = useState("B타입");

  const active = unitTypes.find((u) => u.type === activeType)!;
  const plan = floorPlanData[activeType as keyof typeof floorPlanData];

  return (
    <section id="units" className="py-20 md:py-28" style={{ background: "var(--gray-light)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12">
          <p className="section-subtitle mb-3">UNIT GUIDE</p>
          <div className="gold-line mx-auto" />
          <h2 className="section-title mt-4">
            세대 안내
          </h2>
          <p className="mt-3 text-sm" style={{ color: "#888" }}>
            다양한 평형으로 구성된 가나 플라워의 세대 정보를 확인하세요
          </p>
        </div>

        {/* 타입 선택 탭 */}
        <div
          className="flex overflow-x-auto mb-8"
          style={{ borderBottom: "2px solid var(--border)", gap: 0 }}
        >
          {unitTypes.map((unit) => (
            <button
              key={unit.type}
              onClick={() => setActiveType(unit.type)}
              className="tab-btn relative flex-shrink-0"
              style={{
                color: activeType === unit.type ? "var(--primary)" : "#888",
                fontWeight: activeType === unit.type ? 700 : 500,
                borderBottom: activeType === unit.type ? "3px solid var(--gold)" : "3px solid transparent",
                marginBottom: "-2px",
              }}
            >
              {unit.popular && (
                <span
                  className="absolute -top-2 -right-1 text-xs font-bold px-1.5 py-0.5 rounded-full"
                  style={{ background: "#ef4444", color: "#fff", fontSize: "0.65rem" }}
                >
                  인기
                </span>
              )}
              <span>{unit.type}</span>
              <span className="ml-1.5 font-medium" style={{ color: "var(--gold)" }}>
                {unit.area}
              </span>
            </button>
          ))}
        </div>

        {/* 세대 상세 정보 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 평면도 */}
          <div
            className="rounded-xl overflow-hidden shadow-sm"
            style={{ background: "#fff", border: "1px solid var(--border)" }}
          >
            <div
              className="px-6 py-4 flex items-center justify-between"
              style={{ background: "var(--primary)", color: "#fff" }}
            >
              <h3 className="font-bold text-base">
                {active.type} — {active.area} 평면도
              </h3>
              <span className="text-xs opacity-70">개략 도면 (실제와 상이할 수 있음)</span>
            </div>
            <div className="p-6 flex items-center justify-center" style={{ background: "#fafafa", minHeight: "280px" }}>
              <svg
                viewBox={`0 0 ${plan.width} ${plan.height}`}
                width="100%"
                style={{ maxWidth: "400px" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* 배경 */}
                <rect width={plan.width} height={plan.height} fill="#f0f0f0" />
                {/* 외곽선 */}
                <rect x="8" y="8" width={plan.width - 16} height={plan.height - 16} fill="none" stroke="#1e3a2f" strokeWidth="2" />
                {/* 방들 */}
                {plan.rooms.map((room, i) => (
                  <g key={i}>
                    <rect
                      x={room.x}
                      y={room.y}
                      width={room.w}
                      height={room.h}
                      fill={room.color}
                      stroke="#ccc"
                      strokeWidth="0.5"
                    />
                    <text
                      x={room.x + room.w / 2}
                      y={room.y + room.h / 2 + 4}
                      textAnchor="middle"
                      fontSize={room.w > 70 ? "10" : "8"}
                      fill="#333"
                      fontFamily="sans-serif"
                    >
                      {room.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* 세대 정보 */}
          <div className="flex flex-col gap-4">
            {/* 기본 정보 카드 */}
            <div
              className="rounded-xl p-6"
              style={{ background: "#fff", border: "1px solid var(--border)" }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm font-medium mb-1" style={{ color: "#888" }}>
                    {active.type}
                  </p>
                  <h3
                    className="font-black"
                    style={{ fontSize: "2.5rem", color: "var(--primary)", lineHeight: 1 }}
                  >
                    {active.area}
                  </h3>
                </div>
                {active.popular && (
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: "#fef3c7", color: "#b8972e" }}
                  >
                    ★ 인기 평형
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "구조", value: active.rooms },
                  { label: "공급 세대", value: active.count },
                  { label: "공급 층수", value: active.floor },
                  { label: "주차", value: "세대당 1.5대" },
                ].map((info) => (
                  <div
                    key={info.label}
                    className="rounded-lg p-3"
                    style={{ background: "var(--beige)" }}
                  >
                    <p className="text-xs mb-1" style={{ color: "#999" }}>
                      {info.label}
                    </p>
                    <p className="font-bold text-sm" style={{ color: "var(--primary)" }}>
                      {info.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 특장점 */}
            <div
              className="rounded-xl p-6"
              style={{ background: "#fff", border: "1px solid var(--border)" }}
            >
              <h4 className="font-bold text-sm mb-4" style={{ color: "var(--primary)" }}>
                {active.type} 특장점
              </h4>
              <ul className="flex flex-col gap-3">
                {active.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                      style={{ background: "var(--primary)", color: "#fff" }}
                    >
                      ✓
                    </span>
                    <span className="text-sm" style={{ color: "#444" }}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary w-full py-4 text-base"
            >
              {active.type} 상담 신청하기 →
            </button>
          </div>
        </div>

        {/* 전체 세대수 테이블 */}
        <div
          className="mt-10 rounded-xl overflow-hidden shadow-sm"
          style={{ border: "1px solid var(--border)" }}
        >
          <div
            className="px-6 py-4"
            style={{ background: "var(--primary)", color: "#fff" }}
          >
            <h3 className="font-bold text-sm">공급 세대 현황</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="info-table">
              <thead>
                <tr>
                  <th>타입</th>
                  <th>공급면적</th>
                  <th>전용면적</th>
                  <th>세대수</th>
                  <th>공급가격(예정)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A타입</td>
                  <td>59.76㎡</td>
                  <td>49.88㎡</td>
                  <td>300세대</td>
                  <td>3억 5천만원 ~ 4억 2천만원</td>
                </tr>
                <tr>
                  <td>B타입</td>
                  <td>74.32㎡</td>
                  <td>59.98㎡</td>
                  <td>350세대</td>
                  <td>4억 5천만원 ~ 5억 5천만원</td>
                </tr>
                <tr>
                  <td>C타입</td>
                  <td>84.91㎡</td>
                  <td>69.87㎡</td>
                  <td>400세대</td>
                  <td>5억 2천만원 ~ 6억 5천만원</td>
                </tr>
                <tr>
                  <td>D타입</td>
                  <td>102.44㎡</td>
                  <td>84.76㎡</td>
                  <td>150세대</td>
                  <td>7억 ~ 9억원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="px-6 py-3 text-xs"
            style={{ background: "var(--beige)", color: "#888" }}
          >
            ※ 공급가격은 층수 및 호수에 따라 상이하며, 확정 분양가는 분양공고 기준을 따릅니다.
          </div>
        </div>
      </div>
    </section>
  );
}
