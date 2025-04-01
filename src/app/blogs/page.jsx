import Image from "next/image";
import blogs from "@/data/blog.json";
import BlogCard from "@/app/blogs/components/BlogCard";
import LatestBlogs from "@/app/blogs/components/LatestBlogs";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full h-[400px] flex relative overflow-hidden">
        <Image src="/images/banner-2.jpg" alt="about-us-image" fill className="object-cover" />
        <div className="absolute bottom-0 left-0 right-0 h-full bg-black/60 text-white">
          <div className="flex mt-[114] flex-col h-full justify-center container mx-auto max-w-7xl p-4 gap-3">
            <div className="text-5xl font-bold">Blogs</div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row gap-8 justify-center">
          <div className="flex flex-col gap-8 w-full">
            <div className="grid grid-cols-1 w-full gap-8">
              {blogs?.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
              ))}
            </div>
          </div>

          <div className="flex flex-col h-fit w-full md:w-2xl bg-white px-5 py-10 gap-4 shadow-xl">
            <div className="text-xl font-bold">Latest Blogs</div>
            <LatestBlogs blogs={blogs} />
          </div>
        </div>
      </section>
    </div>
  );
}
