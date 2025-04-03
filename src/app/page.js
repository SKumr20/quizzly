import Hero from "@/components/sections/Hero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import VisitorCount from "@/components/sections/VisitorCount";
export default function Home() {


  return (
    <>
      <Hero />
      <div className="flex flex-col bg-background p-10 items-center justify-center">
        <FeatureSection />  
        <VisitorCount />
      </div>
      
    </>
  );
}
