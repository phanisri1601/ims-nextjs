import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import WantToKnowMore from "@/components/WantToKnowMore";
import BlogsSection from "@/components/BlogsSection";
import CareerSection from "@/components/CareerSection";
import CursorRipple from "@/components/CursorRipple";

import Clients from "@/components/Clients";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <CursorRipple />
      <Hero />
      <VideoSection />
      <AboutSection />
      <WantToKnowMore />
      <WhyChooseUs />
      <BlogsSection />
      <CareerSection />

      <Clients />
      <FAQ />
    </main>
  );
}
