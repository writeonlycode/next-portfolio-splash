import Link from "next/link";
import Image from "next/image";
import { Hero } from "contentlayer/generated";
import { Icons } from "@/utils/icons";
import bgImage from "src/assets/images/splash-background-full.png";

export default function HeroSection({ data }: { data: Hero }) {
  return (
    <section id="hero" className="relative text-white py-72">
      <Image src={bgImage} alt="Background Splash Image" className="object-cover -z-10 h-150" fill priority />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="container flex flex-col justify-center px-8 lg:px-24">
            <h1 className="text-black text-5xl uppercase font-extrabold text-outline mb-4">
              {data.title}
            </h1>
            <p className="text-2xl font-semibold mb-8">{data.subtitle}</p>
            <div className="flex gap-5 text-white">
              {data.social.map((iconLink) => {
                return (
                  <Link
                    key={iconLink.label}
                    href={iconLink.link}
                    className="w-8 h-8 text-white/50 hover:text-white transition-colors"
                    aria-label={iconLink.label}
                  >
                    {Icons[iconLink.icon]}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
