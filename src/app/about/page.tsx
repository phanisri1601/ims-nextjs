import AboutHero from "@/components/AboutHero";
import AboutSection from "@/components/AboutSection";
import FeaturesCards from "@/components/FeaturesCards";
import MissionVision from "@/components/MissionVision";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutSection
        eyebrow="ABOUT"
        title="IM SOLUTIONS"
        subtitle="Turning Ideas into Industry Leadership"
        description={`With the right advertising, you don't just get results but you multiply your profits. IM Solutions delivers just that. We are a team of experts creating unconventional ads that truly make an impression. Our ads are short, simple and straight to the point targeting ideal customers for a faster outcome. From digital space to every nook and corner of the offline market, we cover it all. IM Solutions connects people and businesses across the digital and physical world, powering people-based marketing. Presentation matters! We help brands present themselves better and reach their customers with our advertising expertise. In simple terms, we amplify your business and enhance your branding. Why wait when you can start now? Contact us for more details.`}
      />
      <FeaturesCards />
      <MissionVision />
    </main>
  );
}
