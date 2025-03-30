import ImageCarousel from "@/components/ImageCarousel";
import TourPackages from "@/components/PackageSlider";
import Image from "next/image";
import PopularDestinations from "./sections/PopularDestinations";
import WhyUs from "./sections/WhyUs";
import Ad from "./sections/Ad";
import TravelArticles from "./sections/TravelArticles";
import Features from "./sections/Features";

export default function TravelTour() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <ImageCarousel />
      <Features />
      <TourPackages />
      <PopularDestinations />
      <TravelArticles />
      <Ad />
      <WhyUs />
    </div>
  );
}
