"use client";

import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

// Define the Tour Package type

// Sample tour packages data
const tourPackages = [
  {
    id: 1,
    title: "JAPAN – 5 DAYS IN TOKYO, FUJIKAWA",
    image:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    duration: "5 Days",
    rating: 5,
    reviews: 3,
    price: 1600,
    discount: 10,
  },
  {
    id: 2,
    title: "FINLAND – HELSINKI, SANTA CLAUS TOWN",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    duration: "8 Days / 7 Nights",
    rating: 5,
    reviews: 5,
    price: 3500,
  },
  {
    id: 3,
    title: "PARIS – EIFFEL TOWER, NOTRE DAME CATH.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    duration: "10 Hours",
    rating: 4,
    reviews: 7,
    price: 800,
  },
  {
    id: 4,
    title: "PARIS – .",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    duration: "10 Hours",
    rating: 4,
    reviews: 7,
    price: 800,
  },
];

const TourPackages = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // Handle responsive sliding
  const getVisibleSlides = useCallback(() => {
    if (windowWidth >= 768) return 3; // Desktop: 3 slides
    if (windowWidth >= 640) return 2; // Tablet: 2 slides
    return 1; // Mobile: 1 slide
  }, [windowWidth]);

  // Adjust window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Set initial width
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Next slide function
  const nextSlide = useCallback(() => {
    const visibleSlides = getVisibleSlides();
    setCurrentSlide(prev => (prev + visibleSlides) % tourPackages.length);
  }, [getVisibleSlides]);

  // Previous slide function
  const prevSlide = useCallback(() => {
    const visibleSlides = getVisibleSlides();
    setCurrentSlide(prev => (prev - visibleSlides + tourPackages.length) % tourPackages.length);
  }, [getVisibleSlides]);

  // Render stars
  const renderStars = rating => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
    ));
  };

  // Determine which slides to show
  const visibleSlides = getVisibleSlides();
  const slidesToShow = tourPackages.slice(currentSlide, currentSlide + visibleSlides);

  // If we don't have enough slides, wrap around
  if (slidesToShow.length < visibleSlides) {
    const remainingSlides = tourPackages.slice(0, visibleSlides - slidesToShow.length);
    slidesToShow.push(...remainingSlides);
  }

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-gray-900/70 to-gray-900/40 lg:min-w-[1024px]">
      <div className="relative mx-auto max-w-7xl px-4 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Popular Tour Packages</h2>
          <a href="/tours" className="text-sm text-white/80 hover:text-white transition-colors duration-300 flex items-center">
            View All Tours
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Previous Slide Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg z-10 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Tour Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {slidesToShow.map(tour => (
              <div
                key={tour.id}
                className="bg-white rounded-xs overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative">
                  <Image src={tour.image} alt={tour.title} width={500} height={300} className="w-full h-48 object-cover" />
                  {tour.discount && (
                    <div className="absolute top-0 right-0 bg-yellow-500 text-white px-2 py-1 text-xs font-bold m-2 rounded">{tour.discount}% Off</div>
                  )}
                </div>

                {/* Tour Details */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 uppercase">{tour.title}</h3>

                  {/* Duration */}
                  <div className="flex items-center mt-3 text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{tour.duration}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mt-2">
                    <div className="flex">{renderStars(tour.rating)}</div>
                    <span className="text-xs text-gray-500 ml-1">({tour.reviews} Reviews)</span>
                  </div>

                  {/* Price and Book Button */}
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <span className="text-xs text-gray-500">From</span>
                      <p className="text-xl font-bold text-blue-600">${tour.price.toLocaleString()}</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
