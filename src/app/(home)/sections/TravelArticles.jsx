// components/TravelArticles.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Lightbulb, Clock } from "lucide-react";
import blogs from "@/data/blog.json";

const articlesData = [
  {
    id: 1,
    title: "Change your place and get the fresh air",
    date: "June 6, 2016",
    image: "/images/venezia.jpg",
  },
  {
    id: 2,
    title: "Change your place and get the fresh air",
    date: "June 6, 2016",
    image: "/images/venezia.jpg",
  },
  {
    id: 3,
    title: "Change your place and get the fresh air",
    date: "June 6, 2016",
    image: "/images/venezia.jpg",
  },
  {
    id: 4,
    title: "Change your place and get the fresh air",
    date: "June 6, 2016",
    image: "/images/venezia.jpg",
  },
];

const TravelArticles = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-10 flex flex-col gap-10">
      <div className="flex items-center">
        <Lightbulb className="text-blue-500 mr-2" />
        <h2 className="text-2xl font-medium text-gray-800">Travel Articles</h2>
        <span className="mx-2 text-gray-400">/</span>
        <Link href="/blogs" className="text-blue-500 hover:underline">
          Read All Articles
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog, index) => (
          <Link href={`/blogs/${blog.slug}`} key={index} className="group">
            <div className="relative h-64 overflow-hidden group">
              <Image
                src={blog?.images?.[0]}
                alt={blog.title || "Travel image"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div
                className="lg:group-hover:opacity-100 lg:opacity-0 transition-opacity absolute inset-0 bg-gradient-to-t from-black/70
                to-transparent flex flex-col justify-end p-4 gap-4"
              >
                <h3 className="text-white font-medium text-lg leading-tight">{blog.title}</h3>

                {/* <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Clock size={14} />
                  <span>{article.date}</span>
                </div> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TravelArticles;
