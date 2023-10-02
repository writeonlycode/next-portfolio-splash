import { allPosts, site } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

import Navbar from "@/components/navbar";
import FooterSection from "@/components/footer";
import Image from "next/image";
import bgImage from "src/assets/images/splash-background-full.png";

import markdown from "./markdown.css";
import katex from "katex/dist/katex.min.css"

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  // Find the post for the current page.
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === `posts/${params.slug}`
  );

  // 404 if the post does not exist.
  if (!post) notFound();

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <link rel="stylesheet" href={markdown} />
      <link rel="stylesheet" href={katex} />
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
            <h1 className="text-8xl font-bold">{post.title}</h1>
            <p className="text-md">{post.author}</p>
            <p className="text-sm">{post.date}</p>
          </div>
          <div className="container max-w-prose text-2xl bg-white p-10 mx-auto">
            <div className="markdown">
              <MDXContent />
            </div>
          </div>
        </section>
      </main>
      <FooterSection data={site} />
    </>
  );
}
