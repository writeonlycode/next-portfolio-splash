import { allPosts, site } from "contentlayer/generated";
import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

import Navbar from "@/components/navbar";
import FooterSection from "@/components/footer";
import Image from "next/image";
import bgImage from "src/assets/images/splash-background-full.png";

import "./markdown.css";
// import "katex/dist/katex.min.css"

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

const mdxComponents: MDXComponents = {
  Center: ({ children }) => (
    <div style={{ textAlign: "center" }}>{children}</div>
  ),
};

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
          <div className="container max-w-prose text-2xl text-light text-center p-10 mx-auto">
            <h1 className="text-8xl font-bold text-outline-dark">{post.title}</h1>
            <p className="text-md">{post.author}</p>
            <p className="text-sm">{post.date}</p>
          </div>
          <div className="container max-w-prose text-2xl bg-white p-10 mx-auto">
            <div className="markdown">
              <MDXContent components={mdxComponents} />
            </div>
          </div>
        </section>
      </main>
      <FooterSection data={site} />
    </>
  );
}
