import Hero from "@/components/sections/Hero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import VisitorCount2 from "@/components/sections/VisitorCount2";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex flex-col bg-background p-10 gap-10 items-center justify-center">
        <FeatureSection />
        <VisitorCount2 />
      </div>
    </>
  );
}
