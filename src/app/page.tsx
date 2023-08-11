import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
import AboutSection from "@/components/about";
import { about, hero, skill as skills } from "contentlayer/generated";
import SkillsSection from "@/components/skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <HeroSection data={hero} />
        <AboutSection data={about} />
        <SkillsSection data={skills} />
      </main>
    </>
  );
}
