import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "دليل قطر 2025 | تجربة كأس العرب الشاملة",
  description:
    "منتج رقمي متكامل يقدم خطط سفر، حجز تجارب، وتحديثات حية لعشاق كأس العرب في قطر 2025.",
  metadataBase: new URL("https://agentic-fadba104.vercel.app"),
  openGraph: {
    title: "دليل قطر 2025 | تجربة كأس العرب الشاملة",
    description:
      "خطط مباريات، جولات ثقافية، وضيافة مميزة ضمن منتج رقمي يصلك بكل ما تحتاجه في قطر.",
    locale: "ar_QA",
    type: "website",
    siteName: "Qatar 2025 Fan Journey",
  },
  twitter: {
    card: "summary_large_image",
    title: "دليل قطر 2025 | تجربة كأس العرب الشاملة",
    description:
      "اكتشف قطر كما لم تفعل من قبل مع دليل رقمي مخصص لكأس العرب 2025.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-transparent`}
      >
        {children}
      </body>
    </html>
  );
}
