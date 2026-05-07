import HomeHero from "@/components/home-components/HomeHero";
import MainSection from "@/components/home-components/MainSection";
import MainSection1 from "@/components/home-components/MainSection1";
import WhoWeAre from "@/components/home-components/WhoWeAre";
import OurGoal from "@/components/about-components/OurGoal";
import HowWeWork from "@/components/service-components/HowWeWork";

export default function Home() {
  return (
    <div className="pt-20">
      <HomeHero />
      <MainSection1 />
      <MainSection />
      <WhoWeAre />
      <OurGoal />
      <HowWeWork />
    </div>
  );
}