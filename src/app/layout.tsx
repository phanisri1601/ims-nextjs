import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IM Solutions - Best Advertising Agency in Bangalore",
  description: "Leading advertising agency in Bangalore offering creative design, 360° digital marketing, and lead generation services. 7+ years of experience with 300+ satisfied clients.",
  keywords: "advertising agency bangalore, digital marketing, creative design, lead generation, brand activation, SEO services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
