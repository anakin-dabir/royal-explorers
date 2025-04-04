import { data } from "@/data";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import places from "@/data/popular-destinations.json";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="container mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left Section */}
        <div className="flex flex-col xl:flex-row gap-4 xl:gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2 uppercase">
              <span className="text-blue-500">Royal</span> Explorers
            </h2>
            <p className="text-sm md:max-w-sm">
              Royal Explorers is the first women-led tour operator in Ladakh, offering authentic cultural experiences, trekking adventures, and sustainable
              tourism across Leh Ladakh, Jammu & Kashmir. Founded in 1995 by Lobzang Tsendol & Kunzes Angmo, we are pioneers in empowering women in the travel
              industry. Experience Ladakh through our expert-guided, immersive, and unforgettable journeys!
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-white">Top Destinations</h3>
            <div className="flex flex-wrap items-center gap-4">
              {places?.map((place, index) => {
                return (
                  <Link href="/packages/tour" key={index} className="size-20 relative">
                    <Image alt={place.region} src={place.image} fill className="object-cover" />
                    <div className="absolute inset-0 z-10 flex bg-black/60 items-center text-center p-1 justify-center">
                      <div className="text-xs font-bold">{place.region}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:max-w-sm">
          <h3 className="text-lg font-semibold text-white">Contact Info</h3>
          <p className="mt-4 text-sm">Address: {data.NAVBAR.ADDRESS}</p>
          {data.NAVBAR.PHONE.map((phone, index) => {
            return (
              <p className="mt-2 text-sm" key={index}>
                Phone {index + 1}: {phone}
              </p>
            );
          })}

          <p className="mt-2 text-sm">{data.NAVBAR.EMAIL}</p>
          <div className="mt-4 flex gap-4">
            <Facebook className="w-5 h-5 text-gray-400 hover:text-white" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center py-8 text-sm bg-footer-dark text-white/80">COPYRIGHT 2025 ROYAL EXPLORERS, ALL RIGHTS RESERVED</div>
    </footer>
  );
}
