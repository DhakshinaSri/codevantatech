import AboutHero from "@/components/about-components/AboutHero";
import OurTeam from "@/components/about-components/OurTeam";
import OurGoal from "@/components/about-components/OurGoal";

export default function About() {
  return (
    <div className="pt-15">
      <AboutHero />
      <OurTeam />
      <OurGoal />
    </div>
  );
}