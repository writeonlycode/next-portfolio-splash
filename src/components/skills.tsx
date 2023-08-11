import Image from "next/image";
import { Skills } from "contentlayer/generated";
import bgImage from "src/assets/images/splash-background.png";
import SkillBar from "./ui/SkillBar";

export default function SkillsSection({ data }: { data: Skills }) {
  return (
    <section id="skills" className="relative overflow-hidden py-16">
      <div className="absolute w-full h-full left-0 translate-x-2/3">
        <Image
          src={bgImage}
          alt="Background Splash Image"
          className="hidden lg:block object-cover rotate-180 -z-10"
          fill
        />
      </div>
      <div className="container mx-auto px-8 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="col-span-6 flex items-center justify-center lg:order-last">
            <div className="relative w-full lg:mx-16 aspect-[4/5]">
              <Image
                src={data.image}
                alt="About Picture"
                className="object-cover grayscale brightness-90 diagonal-clip-start"
                fill
              />
            </div>
          </div>
          <div className="col-span-6 flex flex-col justify-center h-full">
            <h2 className="text-4xl font-bold text-primary mb-8">
              {data.title}
            </h2>
            <p className="text-2xl text-dark mb-12">{data.text}</p>
            <div className="flex justify-center flex-wrap gap-x-16 gap-y-8">
              {data.entries.map((skill) => {
                return (
                  <div
                    key={skill.label}
                    className="flex flex-col items-center w-24"
                  >
                    <div className="mb-1 w-24 h-24">
                      <SkillBar value={skill.value} />
                    </div>
                    <p className="text-sm text-center font-medium">
                      {skill.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
