import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, MapPin, Film, Star, Utensils, Bed } from "lucide-react";
import { getPackagePrice } from "@/app/utils/getPackagePrice";

const PackageCard = ({ tour }) => {
  return (
    <div className="flex flex-col bg-white shadow-md overflow-hidden w-full mx-auto">
      {/* Image Container with Overlay */}
      <div className="relative h-80 w-full">
        <Image src={tour?.imagePath || "/images/venezia.jpg"} alt={tour?.name} fill className="object-cover" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col xl:flex-row xl:justify-between gap-6 p-5 xl:p-8">
        <div className="flex flex-col gap-4">
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-800 uppercase">{tour?.name}</h2>

          {/* Tour Info */}
          <div className="space-y-2">
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2 text-blue-500" />
              <span>{tour?.duration}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Utensils className="w-4 h-4 mr-2 text-blue-500" />
              <span>Meal Plan: {tour?.mealPlan}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Bed className="w-4 h-4 mr-2 text-blue-500" />
              <span>Accommodation: {tour?.accommodation}</span>
            </div>
          </div>
          {/* Description */}
          <p className="text-gray-600 text-sm ">{tour?.description}</p>
        </div>

        {/* Price and Button */}
        <div className="flex flex-row justify-between xl:flex-col gap-4 xl:border-l border-l-gray-200 xl:pl-10 xl:justify-center items-center text-center">
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm">From</span>
            <span className="text-2xl font-bold text-gray-900">{getPackagePrice(tour)}</span>
          </div>

          {/* <div className="flex flex-col justify-center gap-2 text-gray-800">
            <div className="flex  gap-1 text-yellow-500">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <Star className="w-5 h-5 text-gray-300" />
            </div>
            <span className="text-gray-600 text-sm">(6 Reviews)</span>
          </div> */}
          <Link
            href={`${tour?.link}/${tour?.slug}`}
            className="bg-blue-500 min-w-[130px] shrink-0 flex hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300 uppercase text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
