import PackageCard from "@/components/PackageCard";
import { data } from "@/data";
import Image from "next/image";
import tours from "@/data/tours.json";

export default function TrackingsPage() {
  const packages = tours.filter(
    (tour) => tour.category === data.CATEGORIES.TOUR,
  );

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full h-[400px] flex relative overflow-hidden">
        <Image
          src="/images/venezia.jpg"
          alt="about-us-image"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-full bg-black/60 text-white">
          <div className="flex mt-[114] flex-col h-full justify-center container mx-auto max-w-7xl p-4 gap-3">
            <div className="text-5xl font-bold">Trackings</div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container mx-auto max-w-7xl px-4 py-10">
          <h1 className="text-3xl font-bold text-start text-blue-600 mb-8">
            Discover Our Safari Tours
          </h1>

          <div className="grid grid-cols-1 w-full gap-8">
            {packages.map((tour, index) => (
              <PackageCard key={index} tour={tour} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
