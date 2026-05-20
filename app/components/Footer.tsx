"use client";

export default function Footer() {
  return (
    <footer style={{ background: "#111", color: "#aaa" }}>
      {/* 상단 푸터 */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 로고 및 설명 */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 flex items-center justify-center rounded font-black text-sm"
                style={{ background: "#1e3a2f", color: "#d4af55" }}
              >
                GF
              </div>
              <div>
                <div className="font-black text-lg text-white leading-none">가나 플라워</div>
                <div className="text-xs tracking-widest" style={{ color: "#b8972e" }}>GANA FLOWER</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#777" }}>
              자연과 도시가 만나는 프리미엄 주거 공간.<br />
              가나건설이 선보이는 최고급 아파트 브랜드입니다.
            </p>
            <div className="flex gap-3">
              {["블로그", "유튜브", "인스타"].map((sns) => (
                <div
                  key={sns}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer transition-colors hover:bg-white hover:text-black"
                  style={{ background: "#222", color: "#aaa", border: "1px solid #333" }}
                >
                  {sns[0]}
                </div>
              ))}
            </div>
          </div>

          {/* 바로가기 */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-white">바로가기</h4>
            <ul className="flex flex-col gap-2">
              {["아파트 소개", "세대 안내", "입지 여건", "분양 안내", "커뮤니티", "상담 신청"].map((item) => (
                <li key={item}>
                  <button
                    className="text-sm hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0"
                    style={{ color: "#777" }}
                    onClick={() => {
                      const map: Record<string, string> = {
                        "아파트 소개": "intro",
                        "세대 안내": "units",
                        "입지 여건": "location",
                        "분양 안내": "sales",
                        "커뮤니티": "community",
                        "상담 신청": "contact",
                      };
                      document.getElementById(map[item])?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-white">문의 안내</h4>
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-xs mb-1" style={{ color: "#555" }}>분양 문의</p>
                <a
                  href="tel:1588-0000"
                  className="font-bold text-xl text-white hover:text-yellow-400 transition-colors"
                >
                  1588-0000
                </a>
              </div>
              <div className="text-xs leading-relaxed" style={{ color: "#666" }}>
                <p>운영시간: 매일 10:00 ~ 17:00</p>
                <p>모델하우스: 서울 ○○구 ○○동 123-45</p>
              </div>
              <a
                href="tel:1588-0000"
                className="btn-gold text-sm py-2.5 px-4 text-center mt-2"
              >
                ☎ 전화 상담하기
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div style={{ borderTop: "1px solid #222" }} />

      {/* 하단 법적 고지 */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="text-xs leading-relaxed" style={{ color: "#555" }}>
            <p>사업 주체: (주)가나건설 | 대표이사: 홍길동 | 사업자등록번호: 123-45-67890</p>
            <p>주소: 서울특별시 ○○구 ○○로 123, 가나빌딩 10층 | 전화: 02-1234-5678</p>
          </div>
          <div className="flex gap-4 text-xs" style={{ color: "#555" }}>
            <button className="hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0">
              개인정보처리방침
            </button>
            <button className="hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0">
              이용약관
            </button>
          </div>
        </div>
        <div className="mt-4 text-xs leading-relaxed" style={{ color: "#444" }}>
          <p>
            ※ 본 홈페이지의 이미지, 도면, 조감도 등은 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.
            분양 정보는 변경될 수 있으며, 최종 확정된 분양 정보는 분양공고를 기준으로 합니다.
          </p>
          <p className="mt-1">
            ※ 본 아파트는 「주택법」 및 「공동주택관리법」에 의거하여 분양됩니다.
          </p>
        </div>
        <p className="mt-4 text-xs text-center" style={{ color: "#444" }}>
          © 2025 가나 플라워. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
