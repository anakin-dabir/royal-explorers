import Slider from "@/components/Slider";
import { Camera } from "lucide-react";
import Border from "./Border";

export default function Photos({ tour }) {
  return (
    <>
      <div id="photos" className="scroll-mt-24 flex flex-col gap-2">
        <h2 className="text-2xl font-bold flex items-center space-x-2">
          <Camera className="w-6 h-6 text-blue-600" />
          <span>Photos</span>
        </h2>
        <div className="h-96">
          <Slider images={tour?.images} />
        </div>
      </div>
      <Border />
    </>
  );
}
