"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

const Slider = ({ images }) => {
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 2 },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="relative size-full">
      <div ref={sliderRef} className="keen-slider flex h-full flex-1">
        {images?.map((image, index) => (
          <div key={index} className="keen-slider__slide flex flex-col shadow-lg bg-white flex-1 size-full hover:shadow-2xl relative">
            <div className="relative size-full">
              <Image src={image ?? "/images/venezia.jpg"} alt={`${index}-slider-image`} fill className="object-cover" />
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
  );
};

export default Slider;
