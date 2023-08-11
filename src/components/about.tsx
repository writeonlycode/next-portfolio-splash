"use client";

import Link from "next/link";
import Image from "next/image";
import { About } from "contentlayer/generated";
import bgImage from "@/assets/images/about-splash-background.png";
import aboutEffect from "@/assets/images/about-effect.png";

export default function AboutSection({ data }: { data: About }) {
  return (
    <section id="about" className="relative py-16">
      <Image
        src={bgImage}
        alt="Background Splash Image"
        className="-translate-y-1/3 obect-cover -z-10"
        fill
        priority
      />
      <div className="container mx-auto lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="col-span-6 flex items-center justify-center">
            <div className="relative w-full mx-16 aspect-[4/5]">
              <Image src={aboutEffect} alt="About Picture" className="-m-10" />
              <Image
                src={require(`/assets/images/${data.image}`)}
                alt="About Picture"
                className="object-cover grayscale brightness-90 diagonal-clip-end"
                fill
              />
            </div>
          </div>
          <div className="col-span-6 flex flex-col justify-center h-full">
            <h2 className="text-4xl font-bold text-primary mb-8">
              {data.title}
            </h2>
            <p className="text-2xl text-dark mb-12">{data.text}</p>
            <div className="flex gap-4">
              {data.buttons.map((button) => {
                return (
                  <Link
                    key={button.label}
                    href={button.link}
                    className="text-light font-medium bg-dark px-6 py-4"
                  >
                    {button.label}
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
