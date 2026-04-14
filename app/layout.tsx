import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "GoFalah — CRM + Аналитика + AI для бизнеса",
  description:
    "Современная CRM-система с аналитикой и AI для малого и среднего бизнеса в Казахстане, России и Узбекистане. Управляйте клиентами, сделками и командой в одном месте.",
  keywords: [
    "CRM",
    "аналитика",
    "AI",
    "бизнес",
    "Казахстан",
    "amoCRM альтернатива",
    "GoFalah",
  ],
  openGraph: {
    title: "GoFalah — CRM + Аналитика + AI для бизнеса",
    description:
      "Управляйте клиентами, сделками и командой. Аналитика ROI/ROMI. AI-скоринг лидов.",
    url: "https://promo.gofalah.com",
    siteName: "GoFalah",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
