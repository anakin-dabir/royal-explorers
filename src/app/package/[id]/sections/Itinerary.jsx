import { Calendar } from "lucide-react";
import Border from "./Border";

export default function Itinerary({ tour }) {
  return (
    <>
      <div id="itinerary" className="scroll-mt-24 flex flex-col gap-4">
        <h2 className="text-2xl font-bold flex items-center space-x-2">
          <Calendar className="w-6 h-6 text-blue-600" />
          <span>Itinerary</span>
        </h2>

        <div className="flex flex-col gap-3">
          {tour?.itinerary?.map((it, index) => {
            return (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold">
                  {tour?.category === "river-rafting" ? "Option" : "Day"} {it.day}
                  {": "}
                  <a href="#" className="text-blue-600">
                    {it.title}
                  </a>
                </p>
                <div className="text-gray-600">
                  <ul className="text-gray-600">
                    {it.activities.map((activity, j) => {
                      return (
                        <li key={j} className="flex items-start space-x-2">
                          <span className="text-blue-600">●</span>
                          <span>{activity}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Border />
    </>
  );
}
