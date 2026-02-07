import type { Metadata } from "next";
import "pretendard/dist/web/static/pretendard.css";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "KORIA - Global AI O2O Platform",
  description: "Connecting global trade with offline experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className="antialiased min-h-screen flex flex-col font-sans"
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
