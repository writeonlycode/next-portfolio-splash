"use client";

import { useState } from "react";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";

function compareDates(a: string, b: string) {
  const dateA = new Date(a).getTime();
  const dateB = new Date(b).getTime();

  if (dateA > dateB) {
    return -1;
  } else if (dateA < dateB) {
    return 1;
  } else {
    return 0;
  }
}

export default function AllPosts() {
  const [limit, setLimit] = useState(2);
  const sortedPosts = allPosts.sort((a, b) => compareDates(a.date || "", b.date || ""));
  const paginatedPosts = sortedPosts.slice(0, limit);

  return (
    <>
      {paginatedPosts.map((post) => (
        <Link
          className="flex items-center justify-between my-2"
          href={post._raw.flattenedPath}
          key={post.title}
        >
          <div className="flex items-start lg:items-center flex-col lg:flex-row">
            <span className="">{post.title}</span>
            <span className="text-sm mx-4">by {post.author}</span>
          </div>
          <div className="text-base">
            {new Date(post.date || "").toDateString()}
          </div>
        </Link>
      ))}
      <div className="text-center mt-10">
        <button
          className="bg-primary text-light px-10 py-2"
          onClick={() => setLimit(limit + 2)}
        >
          More Posts
        </button>
      </div>
    </>
  );
}
