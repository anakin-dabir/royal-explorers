import PackageCard from "@/components/PackageCard";
import Image from "next/image";

export default function BookingsPage() {
  const tours = [
    {
      id: 1,
      title: "Africa – Amazing African Safari",
      duration: "5 Hours",
      availability: "Jan 16' - Dec 16'",
      location: "Africa",
      description:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla [...]",
      price: "100",
      imagePath: "/images/venezia.jpg",
    },
    {
      id: 2,
      title: "Kenya – Wildlife Adventure",
      duration: "3 Days",
      availability: "Mar 1' - Nov 30'",
      location: "Kenya",
      description: "Experience the breathtaking wildlife of Kenya's national parks. Witness the great migration and the big five in their natural habitat.",
      price: "299",
      imagePath: "/images/venezia.jpg",
    },
    {
      id: 3,
      title: "Tanzania – Serengeti Explorer",
      duration: "7 Days",
      availability: "Year Round",
      location: "Tanzania",
      description: "Explore the vast plains of Serengeti and the magnificent Ngorongoro Crater. An unforgettable safari experience awaits you.",
      price: "450",
      imagePath: "/images/venezia.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full h-[400px] flex relative overflow-hidden">
        <Image src="/images/venezia.jpg" alt="about-us-image" fill className="object-cover" />
        <div className="absolute bottom-0 left-0 right-0 h-full bg-black/60 text-white">
          <div className="flex mt-[114] flex-col h-full justify-center container mx-auto max-w-7xl p-4 gap-3">
            <div className="text-5xl font-bold">Trackings</div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container mx-auto max-w-7xl px-4 py-10">
          <h1 className="text-3xl font-bold text-start text-blue-600 mb-8">Discover Our Safari Tours</h1>

          <div className="grid grid-cols-1 w-full gap-8">
            {tours.map(tour => (
              <PackageCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
