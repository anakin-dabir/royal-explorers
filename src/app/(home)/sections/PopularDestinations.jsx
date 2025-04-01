import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Eye } from "lucide-react";
import destinationsData from "@/data/popular-destinations.json";

const PopularDestinations = () => {
  return (
    <div className="flex flex-col gap-10 pt-10">
      <div className="container mx-auto px-4 flex flex-col gap-4 max-w-7xl">
        <div className="flex items-start flex-col gap-2 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <MapPin className="text-blue-500" />
            <h2 className="text-2xl font-medium text-gray-800">Popular Destinations</h2>
          </div>
        </div>

        <p className="text-gray-500 max-w-4xl">
          Leh City, Nubra Valley, Pangong Lake, Leh Palace, and Shanti Stupa offer a breathtaking tour. From the vibrant culture of Leh City to the serene
          beauty of Pangong Lake, each destination showcases nature, history, and tranquility, making it a must-visit experience.
        </p>
      </div>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {destinationsData.map((destination, index) => (
          <div key={index} className="relative h-96 group overflow-hidden group">
            <Image
              src={destination.image}
              alt={`${destination.region} landscape`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
              <div className="flex items-center mb-2">
                <MapPin size={18} className="mr-1" />
                <span className="font-medium">{destination.region}</span>
              </div>
              <div className="flex justify-between items-center">
                {/* <span>{destination.tours} tours</span> */}
                <Link href="/tours" className="bg-blue-600 text-xs px-2 py-1 rounded uppercase lg:group-hover:opacity-100 lg:opacity-0  transition-opacity">
                  View all tours
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
