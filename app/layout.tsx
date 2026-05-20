import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "가나 플라워 | 프리미엄 아파트 분양",
  description: "가나 플라워 — 자연과 도시가 만나는 프리미엄 주거 공간. 우수한 학군, 편리한 교통, 풍부한 자연환경이 조화를 이루는 곳에서의 특별한 삶.",
  keywords: "가나플라워, 아파트분양, 프리미엄아파트, 신규분양, 아파트청약",
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
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
