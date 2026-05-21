"use client";

import { useState } from "react";

type FormData = {
  flowerType: string;
  size: string;
  senderName: string;
  receiverName: string;
  ribbon: string;
  deliveryDate: string;
  deliveryTime: string;
  address: string;
  phone: string;
  memo: string;
};

const initialForm: FormData = {
  flowerType: "", size: "", senderName: "", receiverName: "",
  ribbon: "", deliveryDate: "", deliveryTime: "",
  address: "", phone: "", memo: "",
};

const priceMap: Record<string, Record<string, string>> = {
  "근조화환": { "소형": "55,000원", "중형": "85,000원", "대형": "130,000원", "특대형": "200,000원" },
  "축하화환": { "소형": "60,000원", "중형": "90,000원", "대형": "140,000원", "특대형": "210,000원" },
  "개업화환": { "소형": "65,000원", "중형": "95,000원", "대형": "150,000원", "특대형": "220,000원" },
  "졸업화환": { "소형": "55,000원", "중형": "85,000원", "대형": "130,000원", "특대형": "190,000원" },
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.flowerType) e.flowerType = "화환 종류를 선택해 주세요.";
    if (!form.size) e.size = "사이즈를 선택해 주세요.";
    if (!form.senderName.trim()) e.senderName = "보내는 분 성함을 입력해 주세요.";
    if (!form.receiverName.trim()) e.receiverName = "받는 분 성함을 입력해 주세요.";
    if (!form.deliveryDate) e.deliveryDate = "배달 희망일을 선택해 주세요.";
    if (!form.address.trim()) e.address = "배달 주소를 입력해 주세요.";
    if (!form.phone.trim()) e.phone = "연락처를 입력해 주세요.";
    else if (!/^[0-9\-+\s]{9,15}$/.test(form.phone)) e.phone = "올바른 연락처를 입력해 주세요.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  const estimatedPrice = form.flowerType && form.size
    ? (priceMap[form.flowerType]?.[form.size] ?? "-") : "-";

  if (submitted) {
    return (
      <section id="contact" className="py-12 md:py-20" style={{ background: "#fff" }}>
        <div className="max-w-lg mx-auto px-5 text-center">
          <div className="text-7xl mb-5">🌸</div>
          <h2 className="text-2xl font-black mb-3" style={{ color: "var(--primary)" }}>주문 접수 완료!</h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "#666" }}>
            담당자가 확인 후 30분 이내에 연락드리겠습니다.<br />
            급한 경우 <strong style={{ color: "var(--price-red)" }}>1588-3900</strong>으로 전화 주세요.
          </p>
          <button onClick={() => { setSubmitted(false); setForm(initialForm); }} className="btn-primary">
            새 주문 신청하기
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-8 md:py-14" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-4">

        {/* 헤더 */}
        <div className="mb-7">
          <span className="section-label">ORDER</span>
          <h2 className="section-title">빠른 주문 신청</h2>
          <p className="text-sm mt-1" style={{ color: "#888" }}>
            양식 작성 시 담당자가 30분 이내 연락드립니다. 급한 주문은{" "}
            <a href="tel:1588-3900" className="font-bold" style={{ color: "var(--price-red)", textDecoration: "none" }}>
              ☎ 1588-3900
            </a>
            으로 연락주세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 주문 폼 */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white rounded-xl p-5 md:p-7"
            style={{ border: "1px solid var(--border)" }}
          >
            <h3 className="font-bold text-base mb-5" style={{ color: "#1a1a1a" }}>주문 정보 입력</h3>

            {/* 화환 종류 + 사이즈 */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "#333" }}>
                  화환 종류 <span style={{ color: "var(--price-red)" }}>*</span>
                </label>
                <select name="flowerType" value={form.flowerType} onChange={handleChange} className="form-select">
                  <option value="">선택</option>
                  <option>근조화환</option>
                  <option>축하화환</option>
                  <option>개업화환</option>
                  <option>졸업화환</option>
                </select>
                {errors.flowerType && <p className="text-xs mt-1" style={{ color: "var(--price-red)" }}>{errors.flowerType}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "#333" }}>
                  사이즈 <span style={{ color: "var(--price-red)" }}>*</span>
                </label>
                <select name="size" value={form.size} onChange={handleChange} className="form-select">
                  <option value="">선택</option>
                  <option>소형</option>
                  <option>중형</option>
                  <option>대형</option>
                  <option>특대형</option>
                </select>
                {errors.size && <p className="text-xs mt-1" style={{ color: "var(--price-red)" }}>{errors.size}</p>}
              </div>
            </div>

            {/* 보내는/받는 분 */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "#333" }}>
                  보내는 분 <span style={{ color: "var(--price-red)" }}>*</span>
                </label>
                <input type="text" name="senderName" value={form.senderName} onChange={handleChange}
                  placeholder="성명 또는 회사명" className="form-input" />
                {errors.senderName && <p className="text-xs mt-1" style={{ color: "var(--price-red)" }}>{errors.senderName}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "#333" }}>
                  받는 분 <span style={{ color: "var(--price-red)" }}>*</span>
                </label>
                <input type="text" name="receiverName" value={form.receiverName} onChange={handleChange}
                  placeholder="성명 또는 상호명" className="form-input" />
                {errors.receiverName && <p className="text-xs mt-1" style={{ color: "var(--price-red)" }}>{errors.receiverName}</p>}
              </div>
            </div>

            {/* 리본 문구 */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1.5" style={{ color: "#333" }}>
                리본 문구 <span style={{ color: "#aaa", fontWeight: 400 }}>(선택 · 무료)</span>
              </label>
              <input type="text" name="ribbon" value={form.ribbon} onChange={handleChange}
                placeholder="예) 삼가 고인의 명복을 빕니다 / 축 취임"
                className="form-input" />
            </div>

            {/* 배달 날짜 + 시간 */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "#333" }}>
                  배달 희망일 <span style={{ color: "var(--price-red)" }}>*</span>
                </label>
                <input type="date" name="deliveryDate" value={form.deliveryDate} onChange={handleChange} className="form-input" />
                {errors.deliveryDate && <p className="text-xs mt-1" style={{ color: "var(--price-red)" }}>{errors.deliveryDate}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "#333" }}>희망 시간대</label>
                <select name="deliveryTime" value={form.deliveryTime} onChange={handleChange} className="form-select">
                  <option value="">무관</option>
                  <option>오전 (09:00~12:00)</option>
                  <option>오후 (12:00~18:00)</option>
                  <option>저녁 (18:00~22:00)</option>
                  <option>새벽 (22:00~06:00)</option>
                </select>
              </div>
            </div>

            {/* 배달 주소 */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1.5" style={{ color: "#333" }}>
                배달 주소 <span style={{ color: "var(--price-red)" }}>*</span>
              </label>
              <input type="text" name="address" value={form.address} onChange={handleChange}
                placeholder="예) 서울시 강남구 역삼동 ○○장례식장 3호실" className="form-input" />
              {errors.address && <p className="text-xs mt-1" style={{ color: "var(--price-red)" }}>{errors.address}</p>}
            </div>

            {/* 연락처 */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1.5" style={{ color: "#333" }}>
                주문자 연락처 <span style={{ color: "var(--price-red)" }}>*</span>
              </label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                placeholder="010-0000-0000" className="form-input" />
              {errors.phone && <p className="text-xs mt-1" style={{ color: "var(--price-red)" }}>{errors.phone}</p>}
            </div>

            {/* 메모 */}
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-1.5" style={{ color: "#333" }}>추가 요청사항</label>
              <textarea name="memo" value={form.memo} onChange={handleChange}
                placeholder="특별히 요청하실 사항을 적어주세요." rows={3} className="form-input resize-none" />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 text-base font-black rounded-lg transition-all duration-150"
              style={{
                background: loading ? "#ccc" : "var(--primary)",
                color: "#fff", border: "none",
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "⏳ 주문 접수 중..." : "🌸 주문 신청하기"}
            </button>
            <p className="text-xs text-center mt-3" style={{ color: "#aaa" }}>
              * 접수 후 30분 이내 담당자 확인 전화 드립니다.
            </p>
          </form>

          {/* 사이드 */}
          <div className="flex flex-col gap-4">
            {/* 예상 금액 */}
            <div className="bg-white rounded-xl p-5" style={{ border: "1px solid var(--border)" }}>
              <h4 className="font-bold text-sm mb-3" style={{ color: "#1a1a1a" }}>예상 금액</h4>
              {form.flowerType && form.size ? (
                <div>
                  <p className="text-xs mb-1" style={{ color: "#999" }}>{form.flowerType} / {form.size}</p>
                  <p className="text-3xl font-black" style={{ color: "var(--price-red)" }}>{estimatedPrice}</p>
                  <p className="text-xs mt-1" style={{ color: "#aaa" }}>배달비 무료 · VAT 포함</p>
                </div>
              ) : (
                <p className="text-sm" style={{ color: "#aaa" }}>종류와 사이즈 선택 시 금액이 표시됩니다.</p>
              )}
            </div>

            {/* 전화 주문 */}
            <div className="rounded-xl p-5" style={{ background: "linear-gradient(135deg, var(--primary-dark), var(--primary))", color: "#fff" }}>
              <div className="text-3xl mb-3">☎</div>
              <h4 className="font-bold text-base mb-1">전화로 빠르게!</h4>
              <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.75)" }}>
                급한 주문은 전화가 가장 빠릅니다.<br />연중무휴 07:00~22:00
              </p>
              <a href="tel:1588-3900"
                className="block text-center py-3 rounded-lg font-black text-lg"
                style={{ background: "rgba(255,255,255,0.15)", color: "#fff", textDecoration: "none" }}>
                1588-3900
              </a>
            </div>

            {/* 카카오 */}
            <div className="rounded-xl p-5" style={{ background: "#FEE500" }}>
              <div className="text-3xl mb-3">💬</div>
              <h4 className="font-bold text-base mb-1" style={{ color: "#3C1E1E" }}>카카오톡 주문</h4>
              <p className="text-sm mb-4" style={{ color: "#5a3a2a" }}>
                카카오톡 채널에서<br />간편하게 주문하세요.
              </p>
              <div className="text-center py-3 rounded-lg font-bold text-sm"
                style={{ background: "rgba(0,0,0,0.08)", color: "#3C1E1E" }}>
                @가나플라워 채널 검색
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
