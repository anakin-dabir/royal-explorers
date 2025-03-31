import { X } from "lucide-react";
import Border from "./Border";

export default function PriceExcludes({ tour }) {
  return tour?.exclusions ? (
    <>
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Price Excludes</p>
        <ul className="text-gray-600">
          {tour?.exclusions.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <X className="w-5 h-5 text-red-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <Border />
    </>
  ) : null;
}
