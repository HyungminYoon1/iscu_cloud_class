import "./globals.css";

export const metadata = {
  title: "URL Shortener | Week 03",
  description: "API 구성 실습",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
