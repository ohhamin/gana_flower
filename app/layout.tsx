import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "가나플라워 | 전국 화환 당일배달 전문",
  description: "가나플라워 — 근조화환, 축하화환, 개업화환, 졸업화환 전국 당일 배달 전문점. 신선한 생화로 정성껏 제작, 빠른 배송으로 감사한 마음을 전해드립니다.",
  keywords: "가나플라워, 화환, 근조화환, 축하화환, 개업화환, 졸업화환, 전국화환배달, 당일배달, 화환전문",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
