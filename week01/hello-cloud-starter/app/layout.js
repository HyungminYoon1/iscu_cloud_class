import "./globals.css";

export const metadata = {
  title: "URL Shortener | Week 04",
  description: "DB 연결",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
