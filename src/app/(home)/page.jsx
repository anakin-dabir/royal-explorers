import ImageCarousel from "@/components/ImageCarousel";
import TourPackages from "@/components/PackageSlider";
import Image from "next/image";
import PopularDestinations from "./sections/PopularDestinations";
import WhyUs from "./sections/WhyUs";
import Ad from "./sections/Ad";
import TravelArticles from "./sections/TravelArticles";
import Features from "./sections/Features";

export default function TravelTour() {
  const SLIDES = [
    {
      image: "/images/venezia.jpg",
      alt: "Scenic mountain landscape",
      tagline: "Find your perfect ADVENTURE",
      location: "Swiss Alps, Matterhorn, Jungfrau, Zermatt",
      description:
        "Discover the world's most mesmerizing views with our curated travel experiences.",
      buttonText: "LEARN MORE",
    },
    {
      image: "/images/venezia.jpg",
      alt: "Beach sunset",
      tagline: "Escape to PARADISE",
      location: "Maldives, Bora Bora, Seychelles, Bali",
      description:
        "Relax and unwind on pristine beaches with crystal-clear waters.",
      buttonText: "EXPLORE NOW",
    },
    {
      image: "/images/venezia.jpg",
      alt: "Forest view",
      tagline: "Explore the WILDERNESS",
      location: "Amazon Rainforest, Yosemite, Black Forest, Borneo",
      description:
        "Immerse yourself in nature’s untouched beauty and majestic wildlife.",
      buttonText: "DISCOVER MORE",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <ImageCarousel slides={SLIDES} />
      <Features />
      <TourPackages />
      <PopularDestinations />
      <TravelArticles />
      <Ad />
      <WhyUs />
    </div>
  );
}
