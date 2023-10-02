import { allPosts, site } from "contentlayer/generated";

import Navbar from "@/components/navbar";
import FooterSection from "@/components/footer";
import Image from "next/image";
import bgImage from "src/assets/images/splash-background-full.png";


export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <section id="post" className="relative overflow-hidden py-44">
          <Image
            src={bgImage}
            alt="Background Splash Image"
            className="object-cover -z-10 h-150"
            fill
            priority
          />
          <div className="container max-w-prose text-2xl text-white text-center p-10 mx-auto">
            <h1 className="text-8xl font-bold">Posts</h1>
          </div>
          <div className="container max-w-prose text-2xl bg-white p-10 mx-auto">
            {allPosts.map((post) => (
              <a className="flex items-center justify-between my-2" href={post._raw.flattenedPath} key={post.title}>
                <div className="">
                  <span className="">
                    {post.title}
                  </span>
                  <span className="text-sm mx-4">
                    by {post.author}
                  </span>
                </div>
                <div className="text-base">
                  {post.date}
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <FooterSection data={site} />
    </>
  );
}
