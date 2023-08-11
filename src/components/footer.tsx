import Link from "next/link";
import { Icons } from "@/utils/icons";
import { Site } from "contentlayer/generated";

export default function FooterSection({ data }: { data: Site }) {
  return (
    <footer className="bg-dark py-11">
      <div className="flex items-center justify-center gap-5 text-light mb-8">
        {data.social.map((iconLink) => {
          return (
            <Link
              key={iconLink.label}
              href={iconLink.link}
              className="w-8 h-8 text-white/50 hover:text-white transition-colors"
            >
              {Icons[iconLink.icon]}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-center gap-1 text-light">
        {data.copyright.map((item) => {
          if (item.link) {
            return (
              <a
                key={item.label}
                href={item.link}
                className="text-sm font-medium underline"
                target="_blank"
              >
                {item.label}
              </a>
            );
          } else {
            return (
              <p key={item.label} className="text-sm font-medium">
                {item.label}
              </p>
            );
          }
        })}
      </div>
    </footer>
  );
}
