import { allPosts, site } from "contentlayer/generated";

import Navbar from "@/components/navbar";
import FooterSection from "@/components/footer";
import Image from "next/image";
import bgImage from "src/assets/images/splash-background-full.png";
import AllPosts from "@/components/ui/AllPosts";


export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <section id="post" className="overflow-hidden py-44">
          <div className="absolute top-0 -z-10 w-full h-screen">
            <Image
              src={bgImage}
              alt="Background Splash Image"
              className="object-cover -z-10 h-100"
              fill
              priority
            />
          </div>
          <div className="container max-w-prose text-2xl text-white text-center p-10 mx-auto">
            <h1 className="text-8xl font-bold text-outline-dark">Posts</h1>
          </div>
          <div className="container max-w-prose text-2xl bg-white p-10 mx-auto transition-all">
            <AllPosts />
          </div>
        </section>
      </main>
      <FooterSection data={site} />
    </>
  );
}
