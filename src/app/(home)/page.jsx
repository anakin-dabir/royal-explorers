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
      heading: "Special",
      subHeading: "7 Days in Leh Ladakh",
      description: "Ride the Himalayas - Conquer Ladakh, Embrace the Adventure",
      location: "Swiss Alps, Matterhorn, Jungfrau, Zermatt",
      buttonText: "LEARN MORE",
      link: "/packages",
    },
    {
      image: "/images/venezia.jpg",
      alt: "Scenic mountain landscape",
      heading: "Special",
      subHeading: "7 Days in Leh Ladakh",
      description: "Ride the Himalayas - Conquer Ladakh, Embrace the Adventure",
      location: "Swiss Alps, Matterhorn, Jungfrau, Zermatt",
      buttonText: "LEARN MORE",
      link: "/packages",
    },
    {
      image: "/images/venezia.jpg",
      alt: "Scenic mountain landscape",
      heading: "Special",
      subHeading: "7 Days in Leh Ladakh",
      description: "Ride the Himalayas - Conquer Ladakh, Embrace the Adventure",
      location: "Swiss Alps, Matterhorn, Jungfrau, Zermatt",
      buttonText: "LEARN MORE",
      link: "/packages",
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
