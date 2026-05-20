"use client";

import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    name: "김○○",
    date: "2026.05.15",
    rating: 5,
    type: "근조화환",
    title: "급하게 주문했는데 3시간 만에 도착했어요",
    content: "부친상 소식에 급히 연락했더니 너무 친절하게 상담해 주셨어요. 화환도 생각보다 훨씬 고급스럽고 풍성했습니다. 배달 완료 사진까지 보내주셔서 걱정 없었어요.",
    avatar: "🧑",
    verified: true,
  },
  {
    name: "이○○",
    date: "2026.05.12",
    rating: 5,
    type: "개업화환",
    title: "사장님이 너무 좋아하셨어요!",
    content: "지인 가게 개업 선물로 화환을 보냈는데, 꽃이 정말 신선하고 화려했다며 칭찬을 많이 받았습니다. 리본 문구도 원하는 대로 예쁘게 써주셔서 감사합니다.",
    avatar: "👩",
    verified: true,
  },
  {
    name: "박○○",
    date: "2026.05.10",
    rating: 5,
    type: "축하화환",
    title: "가격 대비 퀄리티가 최고입니다",
    content: "다른 업체보다 가격도 합리적이고 꽃 품질이 훨씬 좋았어요. 이번이 두 번째 이용인데 앞으로도 계속 여기서 주문할 것 같아요. 강력 추천합니다!",
    avatar: "👨",
    verified: true,
  },
  {
    name: "최○○",
    date: "2026.05.07",
    rating: 5,
    type: "졸업화환",
    title: "딸 졸업식에 깜짝 선물로 보냈어요",
    content: "졸업식장 입구에 화환이 딱 놓여있으니 아이가 너무 감동받았다고 연락이 왔어요. 시간 맞춰 정확히 배달해 주신 덕분에 특별한 추억이 됐습니다.",
    avatar: "👵",
    verified: true,
  },
  {
    name: "정○○",
    date: "2026.05.03",
    rating: 5,
    type: "근조화환",
    title: "전화 한 통으로 모든 게 해결됐어요",
    content: "갑작스러운 부고 소식에 당황했는데 전화하니 바로 친절하게 안내해 주셨어요. 새벽에도 배달이 된다고 해서 정말 안심했습니다. 앞으로도 자주 이용할게요.",
    avatar: "🧓",
    verified: true,
  },
  {
    name: "한○○",
    date: "2026.04.28",
    rating: 4,
    type: "개업화환",
    title: "빠른 배달과 친절한 서비스!",
    content: "주문 후 배달까지 4시간 정도 걸렸어요. 서울 외곽인데도 빠르게 배달해 주셔서 감사했습니다. 꽃도 싱싱하고 포장도 깔끔했어요.",
    avatar: "👦",
    verified: true,
  },
];

export default function Community() {
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

  const typeColors: Record<string, { bg: string; color: string }> = {
    "근조화환": { bg: "#f0f4f8", color: "#4a6278" },
    "축하화환": { bg: "var(--pink-pale)", color: "var(--pink)" },
    "개업화환": { bg: "#fff8e6", color: "var(--gold)" },
    "졸업화환": { bg: "#e8f5ed", color: "var(--primary)" },
  };

  return (
    <section id="reviews" ref={ref} className="py-20 md:py-28" style={{ background: "var(--beige)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* 헤더 */}
        <div className="text-center mb-14"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s" }}>
          <span className="section-label">CUSTOMER REVIEWS</span>
          <h2 className="section-title">고객 후기</h2>
          <div className="divider-line mx-auto" />
          <p className="section-desc">
            가나플라워를 이용해 주신 고객님들의 진솔한 후기를 확인하세요.
          </p>

          {/* 통합 평점 */}
          <div className="inline-flex items-center gap-6 mt-6 px-8 py-4 rounded-2xl"
            style={{ background: "#fff", border: "1px solid var(--border)" }}>
            <div className="text-center">
              <div className="text-4xl font-black" style={{ color: "var(--primary)" }}>4.9</div>
              <div className="text-yellow-400 text-lg">★★★★★</div>
              <div className="text-xs mt-0.5" style={{ color: "var(--gray)" }}>종합 평점</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-4xl font-black" style={{ color: "var(--primary)" }}>15K+</div>
              <div className="text-xs mt-1" style={{ color: "var(--gray)" }}>누적 리뷰</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-4xl font-black" style={{ color: "var(--primary)" }}>98%</div>
              <div className="text-xs mt-1" style={{ color: "var(--gray)" }}>재구매율</div>
            </div>
          </div>
        </div>

        {/* 후기 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => {
            const tc = typeColors[review.type] || { bg: "#f0f0f0", color: "#888" };
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  borderColor: "var(--border)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.6s ease ${i * 0.08}s`,
                }}
              >
                {/* 상단 */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                      style={{ background: "var(--beige)" }}>
                      {review.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{review.name}</div>
                      <div className="text-xs" style={{ color: "var(--gray)" }}>{review.date}</div>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{ background: tc.bg, color: tc.color }}>
                    {review.type}
                  </span>
                </div>

                {/* 별점 */}
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} style={{ color: j < review.rating ? "#f59e0b" : "#e0e0e0" }}>★</span>
                  ))}
                  {review.verified && (
                    <span className="ml-2 text-xs px-1.5 py-0.5 rounded font-semibold"
                      style={{ background: "#e8f5ed", color: "var(--primary)" }}>
                      ✓ 구매 인증
                    </span>
                  )}
                </div>

                {/* 제목 */}
                <h3 className="font-black text-sm mb-2" style={{ color: "#1a1a1a" }}>
                  {review.title}
                </h3>

                {/* 내용 */}
                <p className="text-sm leading-relaxed" style={{ color: "var(--gray-dark)" }}>
                  {review.content}
                </p>
              </div>
            );
          })}
        </div>

        {/* 더보기 안내 */}
        <div className="text-center mt-10">
          <p className="text-sm mb-4" style={{ color: "var(--gray)" }}>
            더 많은 후기는 네이버, 카카오 플레이스에서 확인하실 수 있습니다.
          </p>
          <div className="flex justify-center gap-3">
            <span className="px-5 py-2 rounded-full text-sm font-semibold border"
              style={{ borderColor: "var(--border)", color: "var(--gray-dark)" }}>
              🟢 네이버 리뷰 1,240건
            </span>
            <span className="px-5 py-2 rounded-full text-sm font-semibold border"
              style={{ borderColor: "var(--border)", color: "var(--gray-dark)" }}>
              💛 카카오 리뷰 982건
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
