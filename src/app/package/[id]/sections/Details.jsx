import Border from "./Border";
import { MapPin } from "lucide-react";

export default function Details({ tour }) {
  return (
    <>
      <div id="detail" className="scroll-mt-24 flex flex-col gap-2">
        <h2 className="text-2xl font-bold flex items-center space-x-2">
          <MapPin className="w-6 h-6 text-blue-600" />
          <span>Tour Details</span>
        </h2>
        <p className="text-gray-600">{tour?.details}</p>
      </div>
      <Border />
    </>
  );
}
