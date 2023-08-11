import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
import AboutSection from "@/components/about";
import {site, about, hero, skill as skills, project as projects, contact, } from "contentlayer/generated";
import SkillsSection from "@/components/skills";
import ProjectsSection from "@/components/projects";
import ContactSection from "@/components/contact";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <HeroSection data={hero} />
        <AboutSection data={about} />
        <SkillsSection data={skills} />
        <ProjectsSection data={projects} />
        <ContactSection data={contact} />
        <FooterSection data={site} />
      </main>
    </>
  );
}
