import { Star } from "lucide-react";
import React from "react";

export default function Reviews({ tour }) {
  return (
    <div id="reviews" className="scroll-mt-24 flex flex-col gap-8">
      <h2 className="text-2xl font-bold flex items-center space-x-2">
        <Star className="w-6 h-6 text-blue-600" />
        <span>Reviews</span>
      </h2>
      <div className="flex flex-col gap-6">
        <div className="flex gap-4 items-start">
          <div className="size-12 bg-gray-200 rounded-full"></div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Phil The Greek</p>
            <div className="flex flex-col gap-0">
              <p className="text-gray-600">Group Traveller - March 10, 2020</p>
              <p className="text-yellow-500 text-lg">★★★★☆ Good</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="size-12 bg-gray-200 rounded-full"></div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Phil The Greek</p>
            <div className="flex flex-col gap-0">
              <p className="text-gray-600">Couple Traveller - May 18, 2019</p>
              <p className="text-yellow-500 text-lg">★★★★★ Excellent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
