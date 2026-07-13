import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import PhilosophySection from "@/components/PhilosophySection";
import IMSystemSection from "@/components/IMSystemSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import WantToKnowMore from "@/components/WantToKnowMore";
import WhyIMSolutions from "@/components/WhyIMSolutions";
import BlogsSection from "@/components/BlogsSection";
import CareerSection from "@/components/CareerSection";
import PartnersSection from "@/components/PartnersSection";

import Clients from "@/components/Clients";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#F8F4F0" }}>
      <Hero />
      <VideoSection />
      <PhilosophySection />
      <IMSystemSection />
      <WantToKnowMore />
      <WhyIMSolutions />
      <WhyChooseUs />
      <BlogsSection />
      <CareerSection />
      <PartnersSection />
      <FAQ variant="plain" />
    </main>
  );
}
