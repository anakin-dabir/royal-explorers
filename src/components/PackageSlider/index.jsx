"use client";

import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import tourPackages from "@/data/tours.json";
import { getPackagePrice } from "@/utils/getPackagePrice";
import { useKeenSlider } from "keen-slider/react";

const TourPackages = () => {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 800px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1100px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1, spacing: 5 },
    created() {
      setLoaded(true);
    },
  });

  const renderStars = rating => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
    ));
  };

  return (
    <div className="relative w-full overflow-hidden px-4">
      <Image src="/images/venezia.jpg" fill alt="Bg-slider-image" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative container mx-auto max-w-7xl py-12 px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Popular Tour Packages</h2>
          <a href="/packages/tour" className="text-sm text-white/80 hover:text-white transition-colors duration-300 flex items-center">
            View All Tours
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>
        <div ref={sliderRef} className="keen-slider flex h-full flex-1">
          {tourPackages.map((tour, index) => (
            <div key={`${tour.id}-${index}`} className="keen-slider__slide flex flex-col shadow-lg bg-white flex-1 hover:shadow-2xl relative">
              {/* Image */}
              <div>
                <div className="relative w-full h-56">
                  <Image src={tour?.images?.[0] ?? "/images/venezia.jpg"} alt={tour?.name} fill className="object-cover" />
                </div>
                {/* {tour?.discount && ( */}
                <div className="absolute top-4 -left-2 shadow-2xl bg-orange-500 text-white px-5 py-2 text-xs font-bold m-2">{20}% Off</div>
                {/* )} */}
              </div>

              {/* Tour Details */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 uppercase">{tour?.name}</h3>

                {/* Duration */}
                {!tour?.duration ? null : (
                  <div className="flex items-center mt-3 text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{tour?.duration}</span>
                  </div>
                )}

                {/* Rating */}
                <div className="flex items-center mt-2">
                  <div className="flex">{renderStars(tour?.rating)}</div>
                  <span className="text-xs text-gray-500 ml-1">({tour?.reviews} Reviews)</span>
                </div>

                {/* Price and Book Button */}
                <div className="mt-4 flex justify-between items-center">
                  {!tour?.packageCost ? null : (
                    <div>
                      <span className="text-xs text-gray-500">From</span>
                      <p className="text-xl font-bold text-blue-600">{getPackagePrice(tour)}</p>
                    </div>
                  )}

                  <button
                    onClick={() => router.push(`/package/${tour?.slug}`)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                  >
                    More Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {loaded && instanceRef.current && (
          <>
            <button
              onClick={e => e.stopPropagation() || instanceRef.current?.prev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg z-10 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={e => e.stopPropagation() || instanceRef.current?.next()}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg z-10 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TourPackages;
