import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
import { hero } from "contentlayer/generated";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <HeroSection data={hero} />
      </main>
    </>
  );
}
