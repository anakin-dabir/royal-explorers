import Image from "next/image";
import { Briefcase, DollarSign, Users, Award, Venus, ChartNoAxesCombined, Earth, Flower, Clock, LocateIcon, MapPin, Calendar1, Ribbon } from "lucide-react";
import data from "@/data/about.json";
import React from "react";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-[400px] flex relative overflow-hidden">
        <Image src="/places/Leh Palace.jpeg" alt="about-us-image" fill className="object-cover" />
        <div className="absolute bottom-0 left-0 right-0 h-full bg-black/60 text-white">
          <div className="flex mt-[114] flex-col h-full justify-center container mx-auto max-w-7xl p-4 gap-6">
            <div className="text-5xl font-bold">{data?.companyName}</div>
            <div className="text-xl font-bold text-yellow-300">{data?.tagline}</div>
          </div>
        </div>
      </div>

      <section className="bg-gray-100 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container max-w-7xl mx-auto py-10 px-4">
          <div className="flex flex-col gap-6">
            {/* OUR MISSION */}
            <div className="flex flex-col gap-4 justify-start">
              <h2 className="text-3xl font-bold text-blue-600">Our Mission</h2>
              <div className="flex flex-col gap-2">
                <p className="text-gray-600 text-xl font-bold">{data?.mission?.statement}</p>
                <p className="text-gray-600">{data?.mission?.description}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-600 text-xl font-bold">Our Approach</p>
                <p className="text-gray-600">{data?.mission?.approach}</p>
              </div>
            </div>

            {/* Focus & Offerings */}
            <div className="flex flex-col gap-4 justify-start">
              <h2 className="text-3xl font-bold text-blue-600">Focus & Offerings</h2>
              <div className="flex flex-col gap-2">
                <p className="text-gray-600 text-xl font-bold">{data?.tours?.focus}</p>
                <p className="text-gray-600">{data?.tours?.philosophy}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-600 text-xl font-bold">Offerings</p>
                <div className="flex flex-col gap-2">
                  {data?.tours?.offerings?.map((offer, index) => {
                    return (
                      <React.Fragment key={index}>
                        <div className="flex items-start gap-2">
                          <span className="text-blue-600">●</span>
                          <span className="font-bold text-gray-600">{offer?.type}</span>
                        </div>

                        {offer?.activities?.map((activity, j) => {
                          return (
                            <div key={j} className="flex items-center gap-2 ml-4">
                              <span className="text-blue-600">-</span>
                              <span className="text-gray-600">{activity}</span>
                            </div>
                          );
                        })}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-gray-900 text-white flex flex-col justify-center p-12 space-y-8">
            {data?.whyChooseUs?.map((choice, index) => {
              return (
                <div key={index} className="flex items-start space-x-4">
                  {index === 0 && <Venus className="text-yellow-400 shrink-0" size={32} />}
                  {index === 1 && <ChartNoAxesCombined className="text-orange-400 shrink-0" size={32} />}
                  {index === 2 && <Earth className="text-green-400 shrink-0" size={32} />}
                  {index === 3 && <Flower className="text-blue-400 shrink-0" size={32} />}
                  <div>
                    <h3 className="text-lg font-bold">{choice?.category}</h3>
                    <p className="text-gray-400">{choice?.details}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container max-w-7xl mx-auto py-14 px-4 flex flex-col gap-8 justify-start">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-blue-600">Foundation</h2>
            <div className="flex flex-col gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <div className="text-xl text-gray-600">{data?.founding?.distinction}</div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-6 text-blue-500" />
                <div>Since {data?.founding?.year}</div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-6 text-blue-500" />
                <div>Since {data?.founding?.location}</div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar1 className="size-6 text-blue-500" />
                <div>{data?.founding?.yearsInBusiness} in business</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center w-full gap-8">
            {data?.founders?.map((founder, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="relative size-40 bg-gray-100">
                  {/* <Image src={founder?.image} alt={founder?.name} fill className="bg-gray-100 object-cover" /> */}
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold">{founder?.name}</h3>
                  <p className="text-blue-600">{founder?.role}</p>
                  <p className="text-gray-600 max-w-sm">{founder?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="bg-gray-100 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container max-w-7xl mx-auto px-4">
          {data?.recognition?.map((award, index) => {
            return (
              <div key={index} className="text-center flex flex-col gap-4 items-center">
                {index === 0 && <Award className="text-blue-600" size={48} />}
                {index === 1 && <Ribbon className="text-blue-600" size={48} />}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <p className="text-green-600">{award.type}</p>
                    <h3 className="text-xl font-bold text-blue-600">{award.description}</h3>
                  </div>
                  <p className="text-gray-600">{award.significance}</p>
                  <p className="text-black">{award?.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative w-full h-96 flex items-center overflow-hidden">
        <Image src="/places/Shanti Stupa.jpg" alt="ad-image" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-300/50 to-blue-500/50 backdrop-blur-xs">
          <div className="gap-4 container max-w-7xl mx-auto py-20 px-4 flex flex-col">
            <div className="text-3xl font-bold text-white">{data?.invitation?.title}</div>
            <div className="text-gray-100">{data?.invitation?.message}</div>
            <div className="border-l-4 border-l-blue-600 text-lg text-white max-w-2xl pl-4 py-2">{data?.invitation?.promise}</div>
            <Link href="/contact" className="w-fit bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
