"use client";

import { useState } from "react";

const tabs = [
  { id: "funeral", label: "근조화환", emoji: "🕊️" },
  { id: "celebrate", label: "축하화환", emoji: "🎊" },
  { id: "opening", label: "개업화환", emoji: "🏪" },
  { id: "graduation", label: "졸업화환", emoji: "🎓" },
];

type Product = {
  name: string;
  size: string;
  price: string;
  originalPrice?: string;
  emoji: string;
  badge?: string;
  badgeType?: "hot" | "new" | "best";
  bg: string;
  desc: string;
  popular?: boolean;
};

const products: Record<string, Product[]> = {
  funeral: [
    {
      name: "소형 근조화환",
      size: "소형 (H 110cm)",
      price: "55,000",
      emoji: "🤍",
      badge: "BEST",
      badgeType: "best",
      bg: "linear-gradient(135deg, #e8eef4, #c8d8e8)",
      desc: "흰 국화와 청초한 조화로 고인을 추모합니다.",
    },
    {
      name: "중형 근조화환",
      size: "중형 (H 140cm)",
      price: "85,000",
      originalPrice: "95,000",
      emoji: "🕊️",
      badge: "인기",
      badgeType: "hot",
      bg: "linear-gradient(135deg, #dce8f0, #b0c8dc)",
      desc: "풍성한 꽃으로 정중한 조의를 표현합니다.",
      popular: true,
    },
    {
      name: "대형 근조화환",
      size: "대형 (H 170cm)",
      price: "130,000",
      emoji: "🌿",
      bg: "linear-gradient(135deg, #ccdae8, #a0b8d0)",
      desc: "넓은 공간에 위엄 있는 분위기를 연출합니다.",
    },
    {
      name: "특대형 근조화환",
      size: "특대 (H 200cm)",
      price: "200,000",
      emoji: "⚜️",
      badge: "프리미엄",
      badgeType: "new",
      bg: "linear-gradient(135deg, #b8ccd8, #90a8c0)",
      desc: "최고급 생화로 격식 있는 예우를 갖춥니다.",
    },
  ],
  celebrate: [
    {
      name: "소형 축하화환",
      size: "소형 (H 110cm)",
      price: "60,000",
      emoji: "🌸",
      badge: "BEST",
      badgeType: "best",
      bg: "linear-gradient(135deg, #fce8ed, #f5b8c8)",
      desc: "다채로운 꽃으로 밝은 축하를 전합니다.",
    },
    {
      name: "중형 축하화환",
      size: "중형 (H 140cm)",
      price: "90,000",
      originalPrice: "100,000",
      emoji: "🎊",
      badge: "인기",
      badgeType: "hot",
      bg: "linear-gradient(135deg, #fad0dc, #f0a0b8)",
      desc: "화사하고 풍성한 꽃다발로 감동을 드립니다.",
      popular: true,
    },
    {
      name: "대형 축하화환",
      size: "대형 (H 170cm)",
      price: "140,000",
      emoji: "🌺",
      bg: "linear-gradient(135deg, #f5c0cc, #e890a8)",
      desc: "넓은 공간을 화사하게 장식합니다.",
    },
    {
      name: "특대형 축하화환",
      size: "특대 (H 200cm)",
      price: "210,000",
      emoji: "👑",
      badge: "프리미엄",
      badgeType: "new",
      bg: "linear-gradient(135deg, #f0b0c0, #e07090)",
      desc: "최상급 꽃으로 특별한 날을 완성합니다.",
    },
  ],
  opening: [
    {
      name: "소형 개업화환",
      size: "소형 (H 110cm)",
      price: "65,000",
      emoji: "🌻",
      badge: "BEST",
      badgeType: "best",
      bg: "linear-gradient(135deg, #fff8e6, #f5e090)",
      desc: "새 출발의 기쁨을 환하게 축하드립니다.",
    },
    {
      name: "중형 개업화환",
      size: "중형 (H 140cm)",
      price: "95,000",
      originalPrice: "110,000",
      emoji: "🎉",
      badge: "인기",
      badgeType: "hot",
      bg: "linear-gradient(135deg, #fef0c0, #f8d870)",
      desc: "번창을 기원하는 풍성한 꽃 어레인지.",
      popular: true,
    },
    {
      name: "대형 개업화환",
      size: "대형 (H 170cm)",
      price: "150,000",
      emoji: "🌈",
      bg: "linear-gradient(135deg, #fde8a8, #f8c850)",
      desc: "화려하고 인상적인 개업 분위기를 연출합니다.",
    },
    {
      name: "특대형 개업화환",
      size: "특대 (H 200cm)",
      price: "220,000",
      emoji: "⭐",
      badge: "프리미엄",
      badgeType: "new",
      bg: "linear-gradient(135deg, #fad890, #f5b830)",
      desc: "최고급 퀄리티로 성공적인 출발을 응원합니다.",
    },
  ],
  graduation: [
    {
      name: "소형 졸업화환",
      size: "소형 (H 110cm)",
      price: "55,000",
      emoji: "🎓",
      badge: "BEST",
      badgeType: "best",
      bg: "linear-gradient(135deg, #e8f5ed, #b0d8bc)",
      desc: "졸업의 기쁨을 함께 축하드립니다.",
    },
    {
      name: "중형 졸업화환",
      size: "중형 (H 140cm)",
      price: "85,000",
      originalPrice: "95,000",
      emoji: "🌱",
      badge: "인기",
      badgeType: "hot",
      bg: "linear-gradient(135deg, #d0ecda, #90c8a0)",
      desc: "새로운 시작을 응원하는 싱그러운 꽃.",
      popular: true,
    },
    {
      name: "대형 졸업화환",
      size: "대형 (H 170cm)",
      price: "130,000",
      emoji: "🌿",
      bg: "linear-gradient(135deg, #b8e0c4, #70b888)",
      desc: "가장 뜻깊은 순간을 풍성하게 꾸며드립니다.",
    },
    {
      name: "특대형 졸업화환",
      size: "특대 (H 200cm)",
      price: "190,000",
      emoji: "🏆",
      badge: "프리미엄",
      badgeType: "new",
      bg: "linear-gradient(135deg, #a0d4b0, #50a870)",
      desc: "특별한 졸업을 최고급 꽃으로 기념합니다.",
    },
  ],
};

export default function Units() {
  const [activeTab, setActiveTab] = useState("funeral");

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="products" className="py-16 md:py-28" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        {/* 헤더 */}
        <div className="text-center mb-10 md:mb-12">
          <span className="section-label">PRODUCTS</span>
          <h2 className="section-title">화환 상품 안내</h2>
          <div className="divider-line mx-auto" />
          <p className="section-desc max-w-lg mx-auto">
            상황에 맞는 화환을 선택하시면 전문 플로리스트가 정성껏 제작해 드립니다.<br />
            리본 문구 맞춤 제작 무료 · 당일 배달 가능
          </p>
        </div>

        {/* 탭 */}
        <div className="flex overflow-x-auto border-b mb-8" style={{ borderColor: "var(--border)" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-btn flex items-center gap-2 ${activeTab === tab.id ? "active" : ""}`}
              style={{ fontSize: "0.95rem", padding: "0.85rem 1.4rem" }}
            >
              <span>{tab.emoji}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* 상품 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products[activeTab].map((product, i) => (
            <div
              key={i}
              className="product-card relative"
              style={{
                border: product.popular ? "2px solid var(--pink)" : "1px solid var(--border)",
              }}
            >
              {/* 인기 표시 */}
              {product.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-3 py-1 text-sm font-bold rounded-full text-white"
                    style={{ background: "var(--pink)" }}>
                    ★ 가장 인기
                  </span>
                </div>
              )}

              {/* 이미지 영역 */}
              <div className="relative h-48 flex items-center justify-center overflow-hidden"
                style={{ background: product.bg }}>
                <span className="text-8xl select-none">{product.emoji}</span>
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <span className={`badge badge-${product.badgeType}`} style={{ fontSize: "0.8rem", padding: "0.25rem 0.65rem" }}>
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* 상품 정보 */}
              <div className="p-5">
                <div className="text-sm mb-1.5" style={{ color: "var(--gray)" }}>{product.size}</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--fg)" }}>
                  {product.name}
                </h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: "var(--gray)" }}>
                  {product.desc}
                </p>

                {/* 가격 */}
                <div className="flex items-baseline gap-2 mb-5">
                  {product.originalPrice && (
                    <span className="text-sm line-through" style={{ color: "#bbb" }}>
                      {product.originalPrice}원
                    </span>
                  )}
                  <span className="text-2xl font-black" style={{ color: "var(--primary)" }}>
                    {product.price}
                    <span className="text-base font-semibold">원</span>
                  </span>
                </div>

                <button
                  onClick={scrollToContact}
                  className="w-full py-3 text-base font-bold rounded-lg transition-all duration-200"
                  style={{
                    background: product.popular ? "var(--pink)" : "var(--primary)",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  주문하기
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 안내 문구 */}
        <div className="mt-10 p-6 rounded-xl text-base" style={{ background: "var(--beige)", color: "var(--gray-dark)" }}>
          <p className="font-bold mb-3 text-lg" style={{ color: "var(--primary)" }}>📌 주문 전 안내</p>
          <ul className="space-y-2">
            <li>• 모든 가격은 VAT 포함 금액입니다.</li>
            <li>• 리본 문구(보내는 분 · 받는 분) 맞춤 제작은 무료입니다.</li>
            <li>• 오전 11시 이전 주문 시 당일 배달 가능합니다. (지역에 따라 상이)</li>
            <li>• 사진과 실물은 재료 수급에 따라 다를 수 있으나 동급 이상으로 제작됩니다.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
