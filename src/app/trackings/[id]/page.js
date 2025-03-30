import StickyScrollBar from "@/components/StickyTopBar";
import {
  Star,
  Clock,
  Calendar,
  MapPin,
  Users,
  User,
  Check,
  X,
  Camera,
  Tag,
  Heart,
  Utensils,
  Bed,
  Dot,
} from "lucide-react";
import Image from "next/image";
import data from "@/data/tours.json";
import React from "react";

export default async function PackagesPage({ params }) {
  const { id } = await params;
  const tour = data.find((data) => data.slug === id);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full h-[400px] flex relative overflow-hidden">
        <Image
          src="/images/venezia.jpg"
          alt="about-us-image"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-full bg-black/60 text-white">
          <div className="flex mt-[114] flex-col h-full justify-center container mx-auto max-w-7xl p-4 gap-3">
            <div className="text-5xl font-bold">{tour?.name}</div>
            {/* <div className="flex items-center space-x-2 text-gray-800">
              <div className="flex gap-1 text-yellow-500">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <Star className="w-5 h-5 text-gray-300" />
              </div>
              <span className="text-white text-sm">(6 Reviews)</span>
            </div> */}
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="grid grid-cols-2 gap-6 text-gray-800 container mx-auto max-w-7xl px-4 py-10">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span>{tour?.duration}</span>
          </div>

          <div className="flex items-center space-x-2">
            <Utensils className="w-5 h-5 text-blue-600" />
            <span>Meal Plan: {tour?.mealPlan}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Bed className="w-5 h-5 text-blue-600" />
            <span>Accommodation: {tour?.accommodation}</span>
          </div>
        </div>
      </section>

      <StickyScrollBar />

      <section className="relative max-w-7xl container mx-auto">
        <section className="py-10 px-6 max-w-3xl">
          {/* Title Section */}

          <div className="flex flex-col gap-6">
            {/** DETAIL */}
            <div id="detail" className="scroll-mt-24 flex flex-col gap-2">
              <h2 className="text-2xl font-bold flex items-center space-x-2">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span>Tour Details</span>
              </h2>
              <p className="text-gray-600">{tour?.details}</p>
            </div>

            <div className="border-t border-t-gray-200 flex-1" />

            {/* Package Cost */}
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Package Cost</p>
              <ul className="text-gray-600 flex flex-col gap-5">
                {Object.entries(tour?.packageCost || {}).map(
                  ([key, value], index) => {
                    return (
                      <React.Fragment key={index}>
                        <li className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-600">●</span>
                            <span className="uppercase font-bold text-sm">
                              {key}
                            </span>
                          </div>
                          <ul className="flex flex-col gap-2">
                            {Object.entries(value).map(
                              ([subKey, subValue], j) => {
                                return (
                                  <li
                                    key={j}
                                    className="flex flex-col gap-2 ml-4"
                                  >
                                    {subKey === "hotels" ? (
                                      <>
                                        <div className="flex items-center gap-2">
                                          <span className="text-blue-600">
                                            -
                                          </span>
                                          <span className="text-sm">
                                            Hotels Included{" "}
                                          </span>
                                        </div>
                                        <div className="flex flex-col gap-2 ml-8">
                                          {Object.entries(subValue).map(
                                            ([location, hotels], k) => {
                                              return (
                                                <div
                                                  key={k}
                                                  className="flex items-center gap-2 text-sm "
                                                >
                                                  <span className="font-bold">
                                                    {location}:{" "}
                                                  </span>
                                                  <span>{hotels}</span>
                                                </div>
                                              );
                                            },
                                          )}
                                        </div>
                                      </>
                                    ) : (
                                      <div className="flex items-center gap-2">
                                        <span className="text-blue-600">-</span>
                                        <span className="text-sm">
                                          {subKey}:{" "}
                                          <span className="text-blue-600">
                                            ₹ {subValue}
                                          </span>
                                        </span>
                                      </div>
                                    )}
                                  </li>
                                );
                              },
                            )}
                          </ul>
                        </li>
                      </React.Fragment>
                    );
                  },
                )}
              </ul>
            </div>

            <div className="border-t border-t-gray-200 flex-1" />

            {/* Price Includes */}
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

            <div className="border-t border-t-gray-200 flex-1" />

            {/* Price Excludes */}
            {tour?.exclusions ? (
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

                <div className="border-t border-t-gray-200 flex-1" />
              </>
            ) : null}

            {/* Booking Policy */}
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Booking Policy</p>
              <ul className="text-gray-600">
                {tour?.bookingPolicy.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-blue-600">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-t-gray-200 flex-1" />

            {/* Cancellation Policy */}
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Cancellation Policy</p>
              <ul className="text-gray-600">
                {tour?.cancellationPolicy.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-blue-600">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-t-gray-200 flex-1" />

            {/* Itinerary Section */}
            <div id="itinerary" className="scroll-mt-24 flex flex-col gap-4">
              <h2 className="text-2xl font-bold flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-blue-600" />
                <span>Itinerary</span>
              </h2>

              <div className="flex flex-col gap-3">
                {/* Day 1 */}
                {tour?.itinerary?.map((it, index) => {
                  return (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg">
                      <p className="font-semibold">
                        Day {it.day}
                        {": "}
                        <a href="#" className="text-blue-600">
                          {it.title}
                        </a>
                      </p>
                      <div className="text-gray-600">
                        <ul className="text-gray-600">
                          {it.activities.map((activity, j) => {
                            return (
                              <li
                                key={j}
                                className="flex items-start space-x-2"
                              >
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

            <div className="border-t border-t-gray-200 flex-1" />

            {/* Photos Section */}
            <div id="photos" className="scroll-mt-24 flex flex-col gap-2">
              <h2 className="text-2xl font-bold flex items-center space-x-2">
                <Camera className="w-6 h-6 text-blue-600" />
                <span>Photos</span>
              </h2>
              <div className="">
                <img
                  src="/images/venezia.jpg"
                  alt="Tour Highlights"
                  className="w-full"
                />
              </div>
            </div>

            <div className="border-t border-t-gray-200 flex-1" />
            {/* Reviews Section */}
            <div id="reviews" className="scroll-mt-24 flex flex-col gap-8">
              <h2 className="text-2xl font-bold flex items-center space-x-2">
                <Star className="w-6 h-6 text-blue-600" />
                <span>Reviews</span>
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <div className="size-12 bg-gray-200 rounded-full"></div>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold">Phil The Greek</p>
                    <div className="flex flex-col gap-0">
                      <p className="text-gray-600">
                        Group Traveller - March 10, 2020
                      </p>
                      <p className="text-yellow-500 text-lg">★★★★☆ Good</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="size-12 bg-gray-200 rounded-full"></div>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold">Phil The Greek</p>
                    <div className="flex flex-col gap-0">
                      <p className="text-gray-600">
                        Couple Traveller - May 18, 2019
                      </p>
                      <p className="text-yellow-500 text-lg">★★★★★ Excellent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:min-w-sm shrink-0 border border-gray-100 shadow-lg mx-4 lg:mx-0 lg:absolute top-0 right-0">
          <div className="w-full py-4 bg-blue-900 text-white flex items-center justify-center text-lg">
            Enquiry Form
          </div>
          <div className="w-full py-4 bg-white flex flex-col">
            <form className="grid grid-cols-1 gap-4 px-4 py-8">
              <input
                type="text"
                placeholder="Full Name*"
                className="bg-gray-100 p-4 w-full"
                required
              />
              <input
                type="email"
                placeholder="Email*"
                className="bg-gray-100 p-4 w-full"
                required
              />
              <input
                type="text"
                placeholder="Subject*"
                className="bg-gray-100 p-4 w-full"
                required
              />
              <textarea
                placeholder="Message*"
                className="bg-gray-100 p-4 w-full h-32 resize-none"
                required
              ></textarea>
              <button className="bg-blue-600 text-white font-medium w-full py-4 hover:bg-blue-700">
                Submit Enquiry
              </button>
            </form>
          </div>

          <button className="p-4 w-full flex items-center justify-center gap-2 border bg-gray-100 border-gray-200">
            <Heart size={20} />
            <div>Save to wishlist</div>
          </button>
        </section>
      </section>
    </div>
  );
}
