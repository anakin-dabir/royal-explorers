import Question from "@/components/Question";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LatestBlogs({ blogs }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        {blogs.map((blog, index, arr) => {
          return (
            <React.Fragment key={index}>
              <Link href={`/blogs/${blog?.slug}`} className="flex items-center gap-3">
                <div className="relative size-16 shrink-0">
                  <Image src={blog?.images?.[0] || "/images/venezia.jpg"} alt={blog?.title} fill className="object-cover" />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="font-medium">{blog?.title}</div>
                  <div className="line-clamp-1 max-w-min">{blog?.details}</div>
                </div>
              </Link>
              {index !== arr.length - 1 && <div className="border-b border-b-gray-200" />}
            </React.Fragment>
          );
        })}
      </div>
      <Question />
    </div>
  );
}
