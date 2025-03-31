import Border from "./Border";
import React from "react";

export default function TourPrice({ tour }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Package Cost</p>
        <ul className="text-gray-600 flex flex-col gap-5">
          {Object.entries(tour?.packageCost || {}).map(([key, value], index) => {
            return (
              <React.Fragment key={index}>
                <li className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">●</span>
                    <span className="uppercase font-bold text-sm">{key}</span>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {Object.entries(value).map(([subKey, subValue], j) => {
                      return (
                        <li key={j} className="flex flex-col gap-2 ml-4">
                          {subKey === "hotels" ? (
                            <>
                              <div className="flex items-center gap-2">
                                <span className="text-blue-600">-</span>
                                <span className="text-sm">Hotels Included </span>
                              </div>
                              <div className="flex flex-col gap-2 ml-8">
                                {Object.entries(subValue).map(([location, hotels], k) => {
                                  return (
                                    <div key={k} className="flex items-center gap-2 text-sm ">
                                      <span className="font-bold">{location}: </span>
                                      <span>{hotels}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </>
                          ) : (
                            <div className="flex items-center gap-2">
                              <span className="text-blue-600">-</span>
                              <span className="text-sm">
                                {subKey}: <span className="text-blue-600">₹ {subValue}</span>
                              </span>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
      <Border />
    </>
  );
}
