import React from "react";
import Border from "./Border";

export default function BikesRides({ tour }) {
  return !tour?.bikesAndRiders ? null : (
    <>
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Bikes & Riders</p>
        <div className="text-gray-600 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-blue-600">●</span>
            <span className="font-bold text-sm">Total Bikes:</span>
            <span>{tour?.bikesAndRiders?.bikes}</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-blue-600">●</span>
              <span className="font-bold text-sm">Bike Models:</span>
            </div>
            <div className="flex flex-col ml-4">
              {tour?.bikesAndRiders?.bikeModels.map((model, index) => {
                return (
                  <span className="items-center flex gap-2" key={index}>
                    <span className="text-blue-600">-</span>
                    {model}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-600">●</span>
            <span className="font-bold text-sm">Total Riders:</span>
            <span>{tour?.bikesAndRiders?.totalRiders}</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-blue-600">●</span>
              <span className="font-bold text-sm">RIders Distribution:</span>
            </div>
            <div className="flex flex-col ml-4">
              {Object.entries(tour?.bikesAndRiders?.riderDistribution).map(([key, value], index) => {
                return (
                  <span className="items-center flex gap-2 text-sm" key={index}>
                    <span className="text-blue-600">-</span>
                    <span className="font-bold">{key}: </span>
                    <span>{value}</span>
                  </span>
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-600">●</span>
            <span className="font-bold text-sm">Room Sharing:</span>
            <span>{tour?.bikesAndRiders?.roomSharing}</span>
          </div>
        </div>
      </div>
      <Border />
    </>
  );
}
