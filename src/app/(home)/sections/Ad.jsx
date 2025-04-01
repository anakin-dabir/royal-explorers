import Image from "next/image";
import Link from "next/link";

export default function Ad() {
  return (
    <div className="relative w-full h-96 flex items-center overflow-hidden">
      <Image src="/places/Leh City.jpeg" alt="ad-image" fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-300/50 to-blue-500/50 backdrop-blur-xs">
        <div className="container max-w-4xl h-full mx-auto px-4 flex justify-end items-center">
          <div className="flex flex-col items-center gap-6 text-white text-center">
            <h2 className="text-5xl font-bold">Royal Explorers Tour & Travel - Grand Opening!</h2>

            <p className="text-lg">
              Enjoy an exclusive 10-30% discount on unforgettable Leh Ladakh & Jammu & Kashmir tours. Book now and explore the beauty of the Himalayas with
              Ladakh's first women-led travel operator!
            </p>

            <Link href="/packages/tour" className="bg-white w-fit text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">
              See Promotion Tours
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
