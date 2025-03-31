import { data } from "@/data";
import { getPackagePrice } from "@/utils/getPackagePrice";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LatestPosts({ packages }) {
  return (
    <div className="flex flex-col gap-8">
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

      <div className="text-white py-10 px-6 w-full relative">
        <Image src="/images/venezia.jpg" className="object-cover absolute inset-0" fill />
        <div className="absolute inset-0 z-[1] bg-blue-500/50 backdrop-blur-sm" />
        <div className="flex flex-col relative z-10">
          <h2 className="text-xl font-bold mb-2">Get a Question?</h2>
          <p className="mb-4">Do not hesitate to give us a call. We are an expert team and we are happy to talk to you.</p>
          <div className="flex items-center gap-2 text-yellow-300 font-semibold text-lg mb-4">
            <Phone size={20} />
            <span>{data.NAVBAR.PHONE[0]}</span>
          </div>
          <a href={data.NAVBAR.EMAIL} className="text-white font-semibold underline">
            {data.NAVBAR.EMAIL}
          </a>
        </div>
      </div>
    </div>
  );
}
