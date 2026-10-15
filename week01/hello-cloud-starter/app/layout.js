import "./globals.css";

export const metadata = {
  title: "URL Shortener | Week 06",
  description: "Admin 페이지 및 클릭 통계 조회",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
