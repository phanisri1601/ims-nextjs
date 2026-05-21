import CareerHero from "@/components/CareerHero";
import CareerContent from "@/components/CareerContent";
import { jobs } from "@/data/jobs";

export default function CareersPage() {
  return (
    <main>
      <CareerHero />
      <CareerContent jobs={jobs} />
    </main>
  );
}

