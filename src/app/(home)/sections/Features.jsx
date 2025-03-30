import features from "@/data/features.json";
import Image from "next/image";

export default function Features() {
  return (
    <div className="bg-blue-500 text-white py-10">
      <div className="container mx-auto p-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            return (
              <div key={index} className="flex items-start space-x-4">
                <div className="size-10 p-3 shrink-0 overflow-hidden relative">
                  <Image src={feature.icon} alt={feature.title} fill className="size-full object-contain absolute inset-0" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-sm opacity-80">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
