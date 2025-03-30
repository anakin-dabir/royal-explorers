import Image from "next/image";

export default function Ad() {
  return (
    <div className="relative w-full h-96 flex items-center overflow-hidden">
      <Image
        src="/images/venezia.jpg"
        alt="ad-image"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-300/50 to-blue-500/50 backdrop-blur-xs">
        <div className="container h-full mx-auto px-4 flex justify-end items-center">
          <div className="xl:w-1/2 flex flex-col gap-6 text-white">
            <h2 className="text-5xl font-bold">
              <span className="text-yellow-300">Discount</span> 10-30% Off
            </h2>

            <p className="text-lg">
              Curabitur blandit tempus porttitor. Curabitur blandit tempus
              porttitor. Maecenas faucibus mollis interdum. Duis mollis, est non
              commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
              nec elit.
            </p>

            <button className="bg-white w-fit text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">
              See Promotion Tours
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
