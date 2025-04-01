import React from "react";
import Border from "@/components/Border";
import { Check, MapPin } from "lucide-react";

export default function AdditionalInformation({ tour }) {
  return (
    <>
      {!tour?.bikeSizes ? null : (
        <>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Bike Sizes</p>
            <ul className="text-gray-600">
              {tour?.bikeSizes.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Border />
        </>
      )}
      {!tour?.terrain ? null : (
        <>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Terrain</p>
            <ul className="text-gray-600">
              {tour?.terrain.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Border />
        </>
      )}
      {!tour?.climate ? null : (
        <>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Climate</p>
            <ul className="text-gray-600">
              {tour?.climate.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Border />
        </>
      )}
      {!tour?.transportation_support ? null : (
        <>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Transportation Support</p>
            <ul className="text-gray-600">
              {tour?.transportation_support.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Border />
        </>
      )}
      {!tour?.food ? null : (
        <>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Food</p>
            <ul className="text-gray-600">
              {tour?.food.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-blue-600">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Border />
        </>
      )}
      {!tour?.best_time_for_rafting ? null : (
        <>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Best Time for River Rafting </p>
            <p className="text-gray-600">{tour?.best_time_for_rafting}</p>
          </div>
          <Border />
        </>
      )}

      {!tour?.popularStretches ? null : (
        <>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Popular River Rafting Stretches and Their Grades</p>
            <ul className="text-gray-600">
              {Object.entries(tour?.popularStretches).map(([item, value], index) => (
                <React.Fragment key={index}>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">●</span>
                    <span className="font-bold">{item}</span>
                  </li>
                  <div className="flex flex-col ml-4">
                    {value.map((val, j) => {
                      return (
                        <div key={j}>
                          <span className="text-blue-600">-</span> {val}
                        </div>
                      );
                    })}
                  </div>
                </React.Fragment>
              ))}
            </ul>
          </div>
          <Border />
        </>
      )}
      {!tour?.what_to_bring ? null : (
        <>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">What to bring</p>
            <ul className="text-gray-600">
              {Object.entries(tour?.what_to_bring).map(([item, value], index) => (
                <React.Fragment key={index}>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">●</span>
                    <span className="font-bold">{item}</span>
                  </li>
                  <div className="flex flex-col ml-4">
                    {value.map((val, j) => {
                      return (
                        <div key={j}>
                          <span className="text-blue-600">-</span> {val}
                        </div>
                      );
                    })}
                  </div>
                </React.Fragment>
              ))}
            </ul>
          </div>
          <Border />
        </>
      )}
      {!tour?.health_safety ? null : (
        <>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Safety Measures</p>
            <ul className="text-gray-600">
              {Object.entries(tour?.health_safety).map(([item, value], index) => (
                <React.Fragment key={index}>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">●</span>
                    <span className="font-bold">{item}</span>
                  </li>
                  <div className="flex flex-col ml-4">
                    {value.map((val, j) => {
                      return (
                        <div key={j}>
                          <span className="text-blue-600">-</span> {val}
                        </div>
                      );
                    })}
                  </div>
                </React.Fragment>
              ))}
            </ul>
          </div>
          <Border />
        </>
      )}
      {!tour?.additional_information ? null : (
        <>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Additional Information</p>
            <ul className="text-gray-600">
              {Object.entries(tour?.additional_information).map(([item, value], index) => (
                <React.Fragment key={index}>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">●</span>
                    <span className="font-bold">{item}</span>
                  </li>
                  <div className="flex flex-col ml-4">
                    {value.map((val, j) => {
                      return (
                        <div key={j}>
                          <span className="text-blue-600">-</span> {val}
                        </div>
                      );
                    })}
                  </div>
                </React.Fragment>
              ))}
            </ul>
          </div>
          <Border />
        </>
      )}
      {!tour?.included_services ? null : (
        <>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Included Services</p>
            <ul className="text-gray-600">
              {tour?.included_services.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Border />
        </>
      )}
    </>
  );
}
