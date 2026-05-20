"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    unitType: "",
    visitDate: "",
    message: "",
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "성함을 입력해 주세요.";
    if (!form.phone.trim()) newErrors.phone = "연락처를 입력해 주세요.";
    else if (!/^[0-9\-]{10,13}$/.test(form.phone.replace(/-/g, "")))
      newErrors.phone = "올바른 연락처를 입력해 주세요.";
    if (!form.unitType) newErrors.unitType = "관심 평형을 선택해 주세요.";
    if (!form.agree) newErrors.agree = "개인정보 수집에 동의해 주세요.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* 왼쪽: 상담 정보 */}
          <div>
            <p className="section-subtitle mb-3">CONSULTATION</p>
            <div className="gold-line" />
            <h2 className="section-title mt-4 mb-4">
              분양 상담 신청
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#666" }}>
              전문 상담사가 1:1로 안내해 드립니다.<br />
              연락처를 남겨주시면 신속하게 연락드리겠습니다.
            </p>

            {/* 연락처 카드들 */}
            <div className="flex flex-col gap-4 mb-8">
              <div
                className="flex items-center gap-4 p-5 rounded-xl"
                style={{ background: "var(--beige)", border: "1px solid var(--border)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "var(--primary)", color: "var(--gold)" }}
                >
                  ☎
                </div>
                <div>
                  <p className="text-xs mb-1" style={{ color: "#888" }}>분양 문의 전화</p>
                  <a
                    href="tel:1588-0000"
                    className="font-black text-2xl"
                    style={{ color: "var(--primary)" }}
                  >
                    1588-0000
                  </a>
                  <p className="text-xs mt-0.5" style={{ color: "#888" }}>
                    매일 10:00 ~ 17:00 (연중무휴)
                  </p>
                </div>
              </div>

              <div
                className="flex items-center gap-4 p-5 rounded-xl"
                style={{ background: "var(--beige)", border: "1px solid var(--border)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "var(--primary)", color: "var(--gold)" }}
                >
                  📍
                </div>
                <div>
                  <p className="text-xs mb-1" style={{ color: "#888" }}>모델하우스 주소</p>
                  <p className="font-bold text-sm" style={{ color: "var(--primary)" }}>
                    서울특별시 ○○구 ○○동 123-45
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#888" }}>
                    ○○역 2번 출구 도보 3분
                  </p>
                </div>
              </div>

              <div
                className="flex items-center gap-4 p-5 rounded-xl"
                style={{ background: "var(--beige)", border: "1px solid var(--border)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "#FEE500", color: "#000" }}
                >
                  💬
                </div>
                <div>
                  <p className="text-xs mb-1" style={{ color: "#888" }}>카카오 채널 문의</p>
                  <p className="font-bold text-sm" style={{ color: "var(--primary)" }}>
                    @가나플라워분양
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#888" }}>
                    채팅으로 빠른 상담 가능
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 상담 신청 폼 */}
          <div
            className="rounded-2xl overflow-hidden shadow-md"
            style={{ border: "1px solid var(--border)" }}
          >
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center text-center p-12"
                style={{ minHeight: "500px" }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-6"
                  style={{ background: "var(--beige)", color: "var(--primary)" }}
                >
                  ✓
                </div>
                <h3 className="font-black text-2xl mb-3" style={{ color: "var(--primary)" }}>
                  상담 신청 완료
                </h3>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "#777" }}>
                  소중한 상담 신청을 받았습니다.<br />
                  빠른 시간 내에 전문 상담사가 연락드리겠습니다.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", unitType: "", visitDate: "", message: "", agree: false }); }}
                  className="btn-outline px-8 py-3"
                >
                  다시 신청하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div
                  className="px-6 py-5"
                  style={{ background: "var(--primary)", color: "#fff" }}
                >
                  <h3 className="font-bold text-lg">상담 신청서</h3>
                  <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>
                    * 표시 항목은 필수 입력사항입니다
                  </p>
                </div>

                <div className="p-6 flex flex-col gap-4" style={{ background: "#fff" }}>
                  {/* 성함 */}
                  <div>
                    <label className="block text-xs font-bold mb-1.5" style={{ color: "#555" }}>
                      성함 *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="성함을 입력해 주세요"
                      className="form-input"
                      maxLength={20}
                    />
                    {errors.name && (
                      <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.name}</p>
                    )}
                  </div>

                  {/* 연락처 */}
                  <div>
                    <label className="block text-xs font-bold mb-1.5" style={{ color: "#555" }}>
                      연락처 *
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="010-0000-0000"
                      className="form-input"
                      type="tel"
                      maxLength={13}
                    />
                    {errors.phone && (
                      <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.phone}</p>
                    )}
                  </div>

                  {/* 관심 평형 */}
                  <div>
                    <label className="block text-xs font-bold mb-1.5" style={{ color: "#555" }}>
                      관심 평형 *
                    </label>
                    <select
                      name="unitType"
                      value={form.unitType}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">관심 평형을 선택해 주세요</option>
                      <option value="A">A타입 (59㎡)</option>
                      <option value="B">B타입 (74㎡)</option>
                      <option value="C">C타입 (84㎡)</option>
                      <option value="D">D타입 (102㎡)</option>
                      <option value="미정">미정 (상담 후 결정)</option>
                    </select>
                    {errors.unitType && (
                      <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.unitType}</p>
                    )}
                  </div>

                  {/* 방문 희망일 */}
                  <div>
                    <label className="block text-xs font-bold mb-1.5" style={{ color: "#555" }}>
                      방문 희망일
                    </label>
                    <input
                      name="visitDate"
                      value={form.visitDate}
                      onChange={handleChange}
                      type="date"
                      className="form-input"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  {/* 문의 내용 */}
                  <div>
                    <label className="block text-xs font-bold mb-1.5" style={{ color: "#555" }}>
                      문의 내용
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="문의하실 내용을 자유롭게 작성해 주세요"
                      className="form-input"
                      style={{ resize: "vertical", minHeight: "90px" }}
                      maxLength={500}
                    />
                  </div>

                  {/* 개인정보 동의 */}
                  <div
                    className="rounded-xl p-4"
                    style={{ background: "var(--beige)", border: errors.agree ? "1px solid #ef4444" : "1px solid var(--border)" }}
                  >
                    <p className="text-xs leading-relaxed mb-3" style={{ color: "#666" }}>
                      <strong>개인정보 수집 및 이용 동의</strong><br />
                      수집 항목: 성명, 연락처 / 수집 목적: 분양 상담 안내<br />
                      보유 기간: 상담 완료 후 3개월, 미동의 시 상담 서비스 이용 제한
                    </p>
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agree"
                        checked={form.agree}
                        onChange={handleChange}
                        className="w-4 h-4 accent-green-800"
                      />
                      <span className="text-sm font-bold" style={{ color: "var(--primary)" }}>
                        개인정보 수집 및 이용에 동의합니다 *
                      </span>
                    </label>
                    {errors.agree && (
                      <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.agree}</p>
                    )}
                  </div>

                  <button type="submit" className="btn-primary w-full py-4 text-base mt-2">
                    상담 신청하기 →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
