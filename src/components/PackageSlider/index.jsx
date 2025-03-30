"use client";

import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import tourPackages from "@/data/tours.json";
import { getPackagePrice } from "@/app/utils/getPackagePrice";

const TourPackages = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(tourPackages.length);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideRef = useRef(null);

  const extendedPackages = [...tourPackages, ...tourPackages, ...tourPackages];

  const getVisibleSlides = useCallback(() => {
    if (windowWidth >= 768) return 3;
    if (windowWidth >= 640) return 2;
    return 1;
  }, [windowWidth]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsTransitioning(true);
    }, 10);
  }, []);

  const handleTransitionEnd = useCallback(() => {
    if (currentSlide >= tourPackages.length * 2) {
      setIsTransitioning(false);
      setCurrentSlide(tourPackages.length);
    }

    if (currentSlide < tourPackages.length) {
      setIsTransitioning(false);
      setCurrentSlide(tourPackages.length * 2 - 1);
    }
  }, [currentSlide, tourPackages.length]);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
    }
    setCurrentSlide((prev) => prev + 1);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
    }
    setCurrentSlide((prev) => prev - 1);
  }, [isTransitioning]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  const visibleSlides = getVisibleSlides();

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-gray-900/70 to-gray-900/40 lg:min-w-[1024px]">
      <div className="relative mx-auto max-w-7xl px-4 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">
            Popular Tour Packages
          </h2>
          <a
            href="/tours"
            className="text-sm text-white/80 hover:text-white transition-colors duration-300 flex items-center"
          >
            View All Tours
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>

        <div className="relative">
          {/* Previous Slide Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg z-10 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Tour Cards Container with Transition */}
          <div className="overflow-hidden">
            <div
              ref={slideRef}
              className="flex"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`,
                transition: isTransitioning
                  ? "transform 300ms ease-in-out"
                  : "none",
              }}
            >
              {extendedPackages.map((tour, index) => (
                <div
                  key={`${tour.id}-${index}`}
                  className="overflow-hidden transform transition-all duration-300 hover:-translate-y-1 flex-shrink-0"
                  style={{
                    width: `${100 / visibleSlides}%`,
                    padding: "0 0.75rem",
                  }}
                >
                  <div className="flex flex-col shadow-lg bg-white flex-1 h-full hover:shadow-2xl">
                    {/* Image */}
                    <div className="relative">
                      <div className="relative w-full h-48">
                        <Image
                          src={tour?.image ?? "/images/venezia.jpg"}
                          alt={tour?.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {tour?.discount && (
                        <div className="absolute top-0 right-0 bg-yellow-500 text-white px-2 py-1 text-xs font-bold m-2 rounded">
                          {tour.discount}% Off
                        </div>
                      )}
                    </div>

                    {/* Tour Details */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-800 uppercase">
                        {tour?.name}
                      </h3>

                      {/* Duration */}
                      <div className="flex items-center mt-3 text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">{tour?.duration}</span>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mt-2">
                        <div className="flex">{renderStars(tour?.rating)}</div>
                        <span className="text-xs text-gray-500 ml-1">
                          ({tour?.reviews} Reviews)
                        </span>
                      </div>

                      {/* Price and Book Button */}
                      <div className="mt-4 flex justify-between items-center">
                        <div>
                          <span className="text-xs text-gray-500">From</span>
                          <p className="text-xl font-bold text-blue-600">
                            {getPackagePrice(tour)}
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            router.push(`${tour?.link}/${tour?.slug}`)
                          }
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Slide Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg z-10 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourPackages;
