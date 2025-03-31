"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import slides from "@/data/slides.json";

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Carousel slides */}
      <div className="flex size-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="size-full flex shrink-0 relative">
            <Image src={slide?.image} alt={slide?.alt} fill priority={index === 0} className="object-cover" />
            <div className="absolute inset-0 bg-black/30 text-white">
              <div className="flex mt-6 flex-col h-full justify-center items-center text-center xl:items-start xl:text-start container mx-auto max-w-7xl p-4 gap-6">
                <div className={`text-xl md:text-3xl max-w-2xl uppercase text-blue-200`}>{slide?.preHeading}</div>
                <div className={`text-5xl md:text-8xl font-extrabold max-w-2xl`}>{slide?.heading}</div>
                <div className={`text-3xl md:text-5xl font-bold text-blue-200`}>{slide?.subHeading}</div>
                <div className={`text-5xl md:text-8xl font-extrabold max-w-2xl uppercase`}>{slide?.postHeading}</div>
                <div className={`text-lg md:text-xl max-w-2xl`}>{slide?.description}</div>
                <button
                  onClick={() => router.push(slide?.link)}
                  className={`text-white uppercase font-sm font-semibold py-4 px-6 w-fit rounded-sm bg-blue-500 hover:bg-blue-600 transition-colors`}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0  w-fit xl:right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 z-10"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 w-fit xl:right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 z-10"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white/90" : "bg-white/50 hover:bg-white/75"}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
