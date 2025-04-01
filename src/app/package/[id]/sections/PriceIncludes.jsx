import { Check } from "lucide-react";
import Border from "../../../../components/Border";

export default function PriceIncludes({ tour }) {
  return !tour?.inclusions ? null : (
    <>
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Price Includes</p>
        <ul className="text-gray-600">
          {tour?.inclusions.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <Border />
    </>
  );
}
