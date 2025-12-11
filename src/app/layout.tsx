import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ 
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800", "900"]
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-secondary",
  weight: ["400", "500", "700"]
});

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
    <html lang="en" className={`${poppins.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
