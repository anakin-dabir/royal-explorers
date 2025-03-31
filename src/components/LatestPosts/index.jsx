import { getPackagePrice } from "@/utils/getPackagePrice";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LatestPosts({ packages }) {
  return (
    <div className="flex flex-col gap-4">
      {packages.map((tour, index, arr) => {
        return (
          <React.Fragment key={index}>
            <Link href={`/package/${tour?.slug}`} className="flex items-start gap-3">
              <div className="relative size-16">
                <Image src={tour?.images?.[0] || "/images/venezia.jpg"} alt={tour?.name} fill className="object-cover" />
              </div>

              <div className="flex flex-col gap-2">
                <div className="font-medium">{tour.name}</div>
                <div className="text-gray-500">
                  From <span className="font-medium text-blue-600">{getPackagePrice(tour)}</span>
                </div>
              </div>
            </Link>
            {index !== arr.length - 1 && <div className="border-b border-b-gray-200" />}
          </React.Fragment>
        );
      })}
    </div>
  );
}
