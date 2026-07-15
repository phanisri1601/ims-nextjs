import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import PhilosophySection from "@/components/PhilosophySection";
import IMSystemSection from "@/components/IMSystemSection";
import WhyIMSolutions from "@/components/WhyIMSolutions";
import BlogHomeSection from "@/components/BlogHomeSection";
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
      <WhyIMSolutions />
      <BlogHomeSection />
      <CareerSection />
      <PartnersSection />
      <FAQ variant="plain" />
    </main>
  );
}
