import { MapPin, DollarSign, Users, Calendar } from "lucide-react";
import ImageCarousel from "@/components/ImageCarousel";
import TourPackages from "@/components/PackageSlider";
import Image from "next/image";

export default function TravelTour() {
  const SLIDES = [
    {
      image: "/images/venezia.jpg",
      alt: "Scenic mountain landscape",
      title: "Breathtaking Landscapes",
      description: "Discover the world's most mesmerizing views with our curated travel experiences",
    },
    {
      image: "/images/venezia.jpg",
      alt: "Beach sunset",
      title: "Tropical Paradise",
      description: "Relax and unwind on pristine beaches with crystal clear waters",
    },
    {
      image: "/images",
      alt: "Forest view",
      title: "Natural Wonders",
      description: "Explore the hidden treasures of ancient forests and majestic wildlife",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Slider */}
      <ImageCarousel slides={SLIDES} />

      {/* Features Section */}
      <div className="bg-blue-500 text-white py-10">
        <div className="container mx-auto p-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">500+ DESTINATIONS</h3>
                <p className="text-sm opacity-80">Morbi leo risus, porta ac</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <DollarSign size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">BEST PRICE GUARANTEE</h3>
                <p className="text-sm opacity-80">Morbi leo risus, porta ac</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Users size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">GREAT CUSTOMER</h3>
                <p className="text-sm opacity-80">Morbi leo risus, porta ac</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Calendar size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">SUPER FAST BOOKING</h3>
                <p className="text-sm opacity-80">Morbi leo risus, porta ac</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Packages */}
      <TourPackages />

      {/* AD */}
      <div className="relative w-full h-[500px] flex items-center overflow-hidden">
        <Image src="/images/venezia.jpg" alt="ad-image" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-300/50 to-blue-500/50 backdrop-blur-xs">
          <div className="container h-full mx-auto px-4 flex justify-end items-center">
            <div className="w-1/2 flex flex-col gap-6 text-white">
              <h2 className="text-5xl font-bold">
                <span className="text-yellow-300">Discount</span> 10-30% Off
              </h2>

              <p className="text-lg opacity-80">
                Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus,
                nisi erat porttitor ligula, eget lacinia odio sem nec elit.
              </p>

              <button className="bg-white w-fit text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">
                See Promotion Tours
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="bg-blue-500 text-white flex">
        <div className="container mx-auto px-4 max-w-7xl py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4">
              <div className="text-xl font-medium">Why Book With Us?</div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <DollarSign size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">BEST PRICE GUARANTEE</h3>
                <p className="text-sm opacity-80">Morbi leo risus, porta ac</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Users size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">GREAT CUSTOMER</h3>
                <p className="text-sm opacity-80">Morbi leo risus, porta ac</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Calendar size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">SUPER FAST BOOKING</h3>
                <p className="text-sm opacity-80">Morbi leo risus, porta ac</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
