import "./globals.css";

export const metadata = {
  title: "URL Shortener | Week 07",
  description: "Admin 페이지 인증 및 인가",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
