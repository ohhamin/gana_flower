"use client";

import { useState } from "react";

const tabs = [
  { id: "funeral",   label: "근조화환", emoji: "🕊️" },
  { id: "celebrate", label: "축하화환", emoji: "🎊" },
  { id: "opening",   label: "개업화환", emoji: "🏪" },
  { id: "graduation",label: "졸업화환", emoji: "🎓" },
];

type Product = {
  name: string;
  size: string;
  price: string;
  originalPrice?: string;
  emoji: string;
  badge?: string;
  badgeType?: "best" | "hot" | "new";
  bg: string;
  desc: string;
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
      desc: "흰 국화와 청초한 조화",
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
      desc: "풍성한 꽃으로 정중한 조의",
    },
    {
      name: "대형 근조화환",
      size: "대형 (H 170cm)",
      price: "130,000",
      emoji: "🌿",
      bg: "linear-gradient(135deg, #ccdae8, #a0b8d0)",
      desc: "넓은 공간에 위엄 있는 분위기",
    },
    {
      name: "특대형 근조화환",
      size: "특대 (H 200cm)",
      price: "200,000",
      emoji: "⚜️",
      badge: "프리미엄",
      badgeType: "new",
      bg: "linear-gradient(135deg, #b8ccd8, #90a8c0)",
      desc: "최고급 생화로 격식 있는 예우",
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
      desc: "다채로운 꽃으로 밝은 축하",
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
      desc: "화사하고 풍성한 꽃다발",
    },
    {
      name: "대형 축하화환",
      size: "대형 (H 170cm)",
      price: "140,000",
      emoji: "🌺",
      bg: "linear-gradient(135deg, #f5c0cc, #e890a8)",
      desc: "넓은 공간을 화사하게 장식",
    },
    {
      name: "특대형 축하화환",
      size: "특대 (H 200cm)",
      price: "210,000",
      emoji: "👑",
      badge: "프리미엄",
      badgeType: "new",
      bg: "linear-gradient(135deg, #f0b0c0, #e07090)",
      desc: "최상급 꽃으로 특별한 날 완성",
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
      desc: "새 출발의 기쁨을 환하게",
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
      desc: "번창을 기원하는 풍성한 꽃",
    },
    {
      name: "대형 개업화환",
      size: "대형 (H 170cm)",
      price: "150,000",
      emoji: "🌈",
      bg: "linear-gradient(135deg, #fde8a8, #f8c850)",
      desc: "화려하고 인상적인 개업 연출",
    },
    {
      name: "특대형 개업화환",
      size: "특대 (H 200cm)",
      price: "220,000",
      emoji: "⭐",
      badge: "프리미엄",
      badgeType: "new",
      bg: "linear-gradient(135deg, #fad890, #f5b830)",
      desc: "최고급 퀄리티로 성공 출발",
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
      desc: "졸업의 기쁨을 함께 축하",
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
      desc: "새로운 시작을 응원하는 꽃",
    },
    {
      name: "대형 졸업화환",
      size: "대형 (H 170cm)",
      price: "130,000",
      emoji: "🌿",
      bg: "linear-gradient(135deg, #b8e0c4, #70b888)",
      desc: "가장 뜻깊은 순간을 풍성하게",
    },
    {
      name: "특대형 졸업화환",
      size: "특대 (H 200cm)",
      price: "190,000",
      emoji: "🏆",
      badge: "프리미엄",
      badgeType: "new",
      bg: "linear-gradient(135deg, #a0d4b0, #50a870)",
      desc: "특별한 졸업을 최고급 꽃으로",
    },
  ],
};

export default function Units() {
  const [activeTab, setActiveTab] = useState("funeral");

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="products" className="py-8 md:py-12" style={{ background: "#f5f5f5" }}>
      <div className="max-w-6xl mx-auto px-4">

        {/* 섹션 헤더 */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <span className="section-label">PRODUCTS</span>
            <h2 className="section-title">화환 상품</h2>
          </div>
          <div
            className="text-xs font-semibold px-3 py-1.5 rounded"
            style={{ background: "#fff3cd", color: "#856404", border: "1px solid #ffc107" }}
          >
            ✓ 리본 문구 무료
          </div>
        </div>

        {/* 카테고리 탭 */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cat-tab ${activeTab === tab.id ? "active" : ""}`}
            >
              {tab.emoji} {tab.label}
            </button>
          ))}
        </div>

        {/* 상품 그리드 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {products[activeTab].map((product, i) => (
            <div key={i} className="shop-card">
              {/* 이미지 영역 */}
              <div
                className="relative flex items-center justify-center"
                style={{ background: product.bg, aspectRatio: "1 / 1" }}
              >
                <span className="text-6xl md:text-7xl select-none">{product.emoji}</span>
                {product.badge && (
                  <div className="absolute top-2 left-2">
                    <span className={`badge badge-${product.badgeType}`}>
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* 상품 정보 */}
              <div className="p-3">
                <p className="text-xs mb-0.5" style={{ color: "#999" }}>{product.size}</p>
                <h3 className="font-bold text-sm mb-1 leading-tight" style={{ color: "#1a1a1a" }}>
                  {product.name}
                </h3>
                <p className="text-xs mb-2 leading-snug" style={{ color: "#888" }}>
                  {product.desc}
                </p>

                {/* 가격 */}
                <div className="flex items-baseline gap-1.5 mb-3">
                  {product.originalPrice && (
                    <span className="price-original">{product.originalPrice}원</span>
                  )}
                  <span className="price-current">
                    {product.price}
                    <span className="price-unit">원</span>
                  </span>
                </div>

                <button
                  onClick={scrollToContact}
                  className="w-full py-2 text-sm font-bold rounded transition-all duration-150 hover:opacity-90"
                  style={{ background: "var(--primary)", color: "#fff", border: "none", cursor: "pointer" }}
                >
                  주문하기
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 안내 문구 */}
        <div
          className="mt-6 p-4 rounded-lg text-sm"
          style={{ background: "#fff", border: "1px solid var(--border)", color: "#666" }}
        >
          <p className="font-bold mb-2" style={{ color: "var(--primary)" }}>📌 주문 전 안내</p>
          <ul className="space-y-1" style={{ paddingLeft: "0.1rem" }}>
            <li>· 모든 가격은 VAT 포함 · 전국 배달비 무료</li>
            <li>· 리본 문구(보내는 분 · 받는 분) 맞춤 제작 무료</li>
            <li>· 오전 11시 이전 주문 시 당일 배달 가능 (지역별 상이)</li>
            <li>· 사진과 실물은 재료 수급에 따라 다를 수 있으나 동급 이상으로 제작</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
