"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback(index => {
    setCurrentSlide(index);
  }, []);

  return (
    <div className="h-[calc(100vh-200px)] w-full relative overflow-hidden">
      {/* Carousel slides */}
      <div className="flex size-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="size-full flex shrink-0 relative">
            <Image src={slide.image} alt={slide.alt} fill priority={index === 0} className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/50 to-transparent text-white">
              <div className="flex mt-6 flex-col h-full justify-center container mx-auto max-w-7xl p-4 gap-6">
                <div className={`text-5xl font-bold`}>{slide.title}</div>
                <div className={`text-lg max-w-2xl`}>{slide.description}</div>
                <button className={`text-white uppercase font-sm font-semibold py-4 px-6 w-fit rounded-sm bg-blue-500 hover:bg-blue-600 transition-colors`}>
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
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 z-10"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 z-10"
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
