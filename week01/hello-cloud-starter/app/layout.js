import "./globals.css";

export const metadata = {
  title: "URL Shortener | Week 05",
  description: "동적 경로 적용 및 HTTP 리다이렉트",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
