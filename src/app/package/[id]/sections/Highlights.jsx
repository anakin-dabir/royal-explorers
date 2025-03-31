import Border from "./Border";
import React from "react";

export default function Highlights({ tour }) {
  return !tour.highlights ? null : (
    <>
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Highlights</p>
        <ul className="text-gray-600">
          {tour?.highlights.map((item, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-blue-600">●</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <Border />
    </>
  );
}
