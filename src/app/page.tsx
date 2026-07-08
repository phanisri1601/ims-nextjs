import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import WantToKnowMore from "@/components/WantToKnowMore";
import BlogsSection from "@/components/BlogsSection";
import CareerSection from "@/components/CareerSection";

import Clients from "@/components/Clients";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoSection />
      <AboutSection
        eyebrow="ABOUT"
        title="IM SOLUTIONS"
        subtitle=""
        description={`IM Solutions is a full-stack marketing powerhouse built for brands that refuse to stay ordinary. We blend strategy, creativity, and performance into intelligent systems that turn visibility into measurable growth. From digital ecosystems to real-world impact, we don’t just run campaigns - we engineer momentum that moves brands forward.`}
      />
      <WantToKnowMore />
      <WhyChooseUs />
      <BlogsSection />
      <CareerSection />

      <Clients />
      <FAQ />
    </main>
  );
}
