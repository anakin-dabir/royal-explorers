import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <div className="flex flex-col bg-white shadow-md overflow-hidden w-full mx-auto">
      {/* Image Container with Overlay */}
      <div className="relative h-80 w-full">
        <Image fill className="object-cover" src={blog?.images?.[0]} alt={blog?.title} />
      </div>

      {/* Content Container */}
      <div className="flex flex-col xl:flex-row xl:justify-between gap-6 p-5 xl:p-8">
        <div className="flex flex-col gap-2">
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-800 uppercase">{blog?.title}</h2>

          {/* Description */}
          <p className="text-gray-600 text-sm line-clamp-3">{blog?.sections[0]?.content}</p>
        </div>

        {/* Price and Button */}
        <div className="flex flex-row justify-between xl:flex-col gap-4 xl:border-l border-l-gray-200 xl:pl-10 xl:justify-center items-center text-center">
          <Link
            href={`/blogs/${blog?.slug}`}
            className="bg-blue-500 min-w-[130px] shrink-0 flex hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300 uppercase text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
