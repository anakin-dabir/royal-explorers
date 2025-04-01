import StickyScrollBar from "@/components/StickyTopBar";
import { Heart } from "lucide-react";
import Image from "next/image";
import data from "@/data/tours.json";
import React from "react";
import Heading from "./sections/Heading";
import Duration from "./sections/Duration";
import Details from "./sections/Details";
import TourPrice from "./sections/TourPrice";
import BikingPrice from "./sections/BikingPrice";
import PriceIncludes from "./sections/PriceIncludes";
import PriceExcludes from "./sections/PriceExcludes";
import BookingPolicy from "./sections/BookingPolicy";
import CancellationPolicy from "./sections/CancellationPolicy";
import Itinerary from "./sections/Itinerary";
import Photos from "./sections/Photos";
import Reviews from "./sections/Reviews";
import Highlights from "./sections/Highlights";
import BikesRides from "./sections/BikesRides";
import AdditionalInformation from "./sections/AdditionalInformation";
import { notFound } from "next/navigation";
import { data as staticData } from "@/data";

export async function generateStaticParams() {
  return staticData.PACKAGES.map((pkg) => ({ slug: pkg }));
}

export default async function PackagesPage({ params }) {
  const { slug } = await params;
  const tour = data.find((data) => data.slug === slug);
  if (!tour) notFound();

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full h-[400px] flex relative overflow-hidden">
        <Image src={tour?.images?.[0]} alt="about-us-image" fill className="object-cover" />
        <Heading tour={tour} />
      </section>
      <Duration tour={tour} />
      <StickyScrollBar />

      <section className="relative max-w-7xl container mx-auto">
        <section className="py-10 px-6 max-w-3xl">
          <div className="flex flex-col gap-6">
            <Details tour={tour} />
            <AdditionalInformation tour={tour} />
            <Highlights tour={tour} />
            <BikesRides tour={tour} />
            {tour?.category === "tour" ? <TourPrice tour={tour} /> : <BikingPrice tour={tour} />}
            <PriceIncludes tour={tour} />
            <PriceExcludes tour={tour} />
            <BookingPolicy tour={tour} />
            <CancellationPolicy tour={tour} />
            <Itinerary tour={tour} />
            <Photos tour={tour} />
            <Reviews tour={tour} />
          </div>
        </section>

        <section className="flex flex-col lg:min-w-sm shrink-0 border border-gray-100 shadow-lg mx-4 lg:mx-0 lg:absolute top-0 right-0">
          <div className="w-full py-4 bg-blue-900 text-white flex items-center justify-center text-lg">Enquiry Form</div>
          <div className="w-full py-4 bg-white flex flex-col">
            <form className="grid grid-cols-1 gap-4 px-4 py-8">
              <input type="text" placeholder="Full Name*" className="bg-gray-100 p-4 w-full" required />
              <input type="email" placeholder="Email*" className="bg-gray-100 p-4 w-full" required />
              <input type="text" placeholder="Subject*" className="bg-gray-100 p-4 w-full" required />
              <textarea placeholder="Message*" className="bg-gray-100 p-4 w-full h-32 resize-none" required></textarea>
              <button className="bg-blue-600 text-white font-medium w-full py-4 hover:bg-blue-700">Submit Enquiry</button>
            </form>
          </div>

          <button className="p-4 w-full flex items-center justify-center gap-2 border bg-gray-100 border-gray-200">
            <Heart size={20} />
            <div>Save to wishlist</div>
          </button>
        </section>
      </section>
    </div>
  );
}
