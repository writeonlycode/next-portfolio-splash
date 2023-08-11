import { Projects } from "contentlayer/generated";
import projectEffect from "@/assets/images/small-splash-background.png";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/utils/icons";

export default function ProjectsSection({ data }: { data: Projects }) {
  return data.entries.map((entry, index) => {
    return (
      <section
        key={entry.title}
        id={`project-${entry.title}`}
        className="relative py-16"
      >
        <div className="container mx-auto px-8 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
            <div
              className={`col-span-6 flex items-center justify-center ${
                index % 2 === 0 ? "lg:order-first" : "lg:order-last"
              }`}
            >
              <div className="relative w-full lg:mx-16 aspect-[4/5]">
                <Image
                  src={projectEffect}
                  alt="Splash Background Image"
                  className="-m-10"
                />
                <Image
                  src={entry.image}
                  alt="About Picture"
                  className={`object-cover grayscale brightness-90 ${
                    index % 2 === 0
                      ? "diagonal-clip-end"
                      : "diagonal-clip-start"
                  }`}
                  fill
                />
              </div>
            </div>
            <div className="col-span-6 flex flex-col justify-center h-full">
              <h2 className="text-4xl font-bold text-primary mb-8">
                {entry.title}
              </h2>
              <h3 className="text-2xl font-semibold text-primary mb-6">
                {entry.subtitle}
              </h3>
              <p className="text-2xl text-dark mb-12">{entry.text}</p>
              <div className="flex gap-4 mb-12">
                {entry.tags.map((tag) => {
                  return (
                    <span
                      key={tag}
                      className="text-light font-medium bg-dark/75 px-3 py-2"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
              <div className="flex gap-5 text-secondary">
                {entry.links.map((iconLink) => {
                  return (
                    <Link
                      key={iconLink.label}
                      href={iconLink.link}
                      className="w-8 h-8 hover:text-dark transition-colors"
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
  });
}
