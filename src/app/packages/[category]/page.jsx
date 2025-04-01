import PackageCard from "@/components/PackageCard";
import Image from "next/image";
import tours from "@/data/tours.json";
import { data } from "@/data";
import { notFound } from "next/navigation";
import React from "react";
import LatestPosts from "@/components/LatestPosts";

export async function generateStaticParams() {
  return data.CATEGORIES.map((category) => ({ category }));
}

export default async function PackagesPage({ params }) {
  const { category } = await params;
  if (!data.CATEGORIES.includes(category)) notFound();
  const packages = tours.filter((tour) => tour.category === category);
  const pageData = data.CATEGORIES_DATA[category];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full h-[400px] flex relative overflow-hidden">
        <Image src="/the-ultimate-ladakh-adventure/7.jpeg" alt="about-us-image" fill className="object-cover" />
        <div className="absolute bottom-0 left-0 right-0 h-full bg-black/60 text-white">
          <div className="flex mt-[114] flex-col h-full justify-center container mx-auto max-w-7xl p-4 gap-3">
            <div className="text-5xl font-bold">{pageData.heading}</div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row gap-8 justify-center">
          <div className="flex flex-col gap-8 w-full">
            <h1 className="text-3xl font-bold text-start text-blue-600">Discover Our Safari Tours</h1>

            <div className="grid grid-cols-1 w-full gap-8">
              {packages?.map((tour, index) => (
                <PackageCard key={index} tour={tour} />
              ))}
            </div>
          </div>

          <div className="flex flex-col h-fit w-full md:w-2xl bg-white px-5 py-10 gap-4 md:mt-16 shadow-xl">
            <div className="text-xl font-bold">Latest Tours</div>
            <LatestPosts packages={packages} />
          </div>
        </div>
      </section>
    </div>
  );
}
