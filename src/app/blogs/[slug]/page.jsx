import { Heart } from "lucide-react";
import Image from "next/image";
import blogs from "@/data/blog.json";
import React from "react";
import { notFound } from "next/navigation";
import Border from "@/components/Border";
import { data } from "@/data";

export async function generateStaticParams() {
  return data.BLOGS.map((blog) => ({ slug: blog }));
}

export default async function PackagesPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find((data) => data.slug === slug);
  if (!blog) notFound();

  return (
    <div className="flex flex-col min-h-screen text-justify">
      <section className="w-full h-[400px] flex relative overflow-hidden">
        <Image src={blog?.images?.[0]} alt="blog-image" fill className="object-cover" />
        <div className="absolute bottom-0 left-0 right-0 h-full bg-black/60 text-white">
          <div className="flex mt-[114] flex-col h-full justify-center container mx-auto max-w-5xl p-4 gap-3">
            <div className="text-2xl lg:text-4xl font-bold">{blog?.title}</div>
          </div>
        </div>
      </section>

      <section className="relative max-w-5xl container mx-auto">
        <section className="py-10 px-6">
          <div className="flex flex-col gap-6">
            <div className="relative h-96">
              <Image src={blog?.images?.[0]} alt={blog?.title} className="object-cover" fill />
            </div>
            {blog?.sections?.map((section, index, arr) => {
              return (
                <React.Fragment key={index}>
                  <div className="flex flex-col gap-2">
                    <div className="font-bold text-xl">{section?.name}</div>

                    {!section?.content ? null : <div className="text-gray-600">{section.content}</div>}

                    {!section?.options ? null : (
                      <div className="flex flex-col gap-3">
                        {section?.options?.map((option, j) => {
                          return (
                            <div className="flex flex-col gap-1" key={j}>
                              {typeof option === "string" ? (
                                <div className="flex items-start gap-2">
                                  <span className="text-blue-600">●</span>
                                  <span className="font-bold text-gray-600">{option}</span>
                                </div>
                              ) : (
                                <>
                                  <div className="flex items-start gap-2">
                                    <span className="text-blue-600">●</span>
                                    <span className="font-bold text-gray-800">{option?.mode}</span>
                                  </div>
                                  <div className="text-gray-600 ml-6">{option?.description}</div>
                                  <div className="flex flex-col gap-1">
                                    {option?.routes?.map((route, k) => {
                                      return typeof route === "string" ? (
                                        <div key={k} className="ml-10">
                                          <span className="text-blue-600">-</span> <span className="text-gray-600">{route}</span>
                                        </div>
                                      ) : (
                                        <div key={k} className="ml-10 flex flex-col gap-1">
                                          <div>
                                            <span className="text-blue-600">-</span> <span className="text-gray-600 font-bold">{route?.name}</span>
                                          </div>
                                          <div className="text-gray-600 ml-2">{route?.details}</div>
                                        </div>
                                      );
                                    })}
                                  </div>

                                  {!option?.warning ? null : (
                                    <div className="flex flex-col gap-1">
                                      <div className="flex items-start gap-2">
                                        <span className="text-blue-600">●</span>
                                        <span className="font-bold text-red-500">Warning: </span>
                                      </div>
                                      <div className="ml-6 text-gray-600">{option?.warning}</div>
                                    </div>
                                  )}
                                </>
                              )}
                            </div>
                          );
                        })}
                        {!section.tip ? null : (
                          <div className="flex flex-col gap-1">
                            <div className="flex items-start gap-2">
                              <span className="text-blue-600">●</span>
                              <span className="font-bold text-green-600">Tip: </span>
                            </div>
                            <div className="ml-6 text-gray-600">{section.tip}</div>
                          </div>
                        )}
                      </div>
                    )}

                    {!section?.attractions ? null : (
                      <div className="flex flex-col gap-3">
                        {section?.attractions?.map((attraction, j) => {
                          return typeof attraction === "string" ? (
                            <div className="flex flex-col gap-1" key={j}>
                              <div className="flex items-start gap-2">
                                <span className="text-blue-600">●</span>
                                <span className="text-gray-600">{attraction}</span>
                              </div>
                            </div>
                          ) : (
                            <div className="flex flex-col gap-1" key={j}>
                              <div className="flex items-start gap-2">
                                <span className="text-blue-600">●</span>
                                <span className="text-gray-800 font-bold">{attraction.name}</span>
                              </div>
                              <div className="flex flex-col gap-1 ml-4">
                                {attraction?.highlights?.map((highlight, k) => {
                                  return (
                                    <div key={k}>
                                      <span className="text-blue-600">-</span> <span className="text-gray-600">{highlight}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {!section?.activities ? null : (
                      <div className="flex flex-col gap-3">
                        {section.activities?.map((activity, j) => {
                          return (
                            <div className="flex flex-col gap-1" key={j}>
                              <div className="flex items-start gap-2">
                                <span className="text-blue-600">●</span>
                                <span className="text-gray-600">{activity}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {!section?.routes ? null : (
                      <div className="flex flex-col gap-3">
                        {section.routes?.map((route, j) => {
                          return (
                            <div className="flex flex-col gap-1" key={j}>
                              <div className="flex items-start gap-2">
                                <span className="text-blue-600">●</span>
                                <span className="text-gray-600 font-bold">{route.name}</span>
                              </div>

                              <div className="ml-4 flex flex-col gap-1">
                                <div className="text-gray-600 flex items-center gap-2">
                                  <span className="font-bold text-gray-600">Path: </span> <span>{route.path}</span>
                                </div>
                                <div className="text-gray-600 text-sm flex items-center gap-2">
                                  <span className="font-bold text-gray-600">Best Time: </span> <span>{route.bestTime}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {!section?.items ? null : (
                      <div className="flex flex-col gap-3">
                        {section.items?.map((item, j) => {
                          return (
                            <div className="flex flex-col gap-1" key={j}>
                              <div className="flex items-start gap-2">
                                <span className="text-blue-600">●</span>
                                <span className="text-gray-600">{item}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                    {!section?.challenges ? null : (
                      <div className="flex flex-col gap-3">
                        {section.challenges?.map((challenge, j) => {
                          return (
                            <div className="flex flex-col gap-1" key={j}>
                              <div className="flex items-start gap-2">
                                <span className="text-blue-600">●</span>
                                <span className="text-gray-600">{challenge}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                    {!section?.stops ? null : (
                      <div className="flex flex-col gap-3">
                        {section.stops?.map((stop, j) => {
                          return (
                            <div className="flex flex-col gap-1" key={j}>
                              <div className="flex items-start gap-2">
                                <span className="text-blue-600">●</span>
                                <span className="text-gray-600">{stop}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {!section?.monasteries ? null : (
                      <div className="flex flex-col gap-3">
                        {section.monasteries?.map((monastery, j) => {
                          return (
                            <div className="flex flex-col gap-1" key={j}>
                              <div className="flex items-start gap-2">
                                <span className="text-blue-600">●</span>
                                <span className="text-gray-800 font-bold">{monastery?.name}</span>
                              </div>
                              <div className="flex flex-col gap-1 ml-4">
                                {monastery?.highlights?.map((highlight, k) => {
                                  return (
                                    <div key={k}>
                                      <span className="text-blue-600">-</span> <span className="text-gray-600">{highlight}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {!section?.festivals ? null : (
                      <div className="flex flex-col gap-3">
                        {section.festivals?.map((festival, j) => {
                          return (
                            <div className="flex flex-col gap-1" key={j}>
                              <div className="flex items-start gap-2">
                                <span className="text-blue-600">●</span>
                                <span className="text-gray-800 font-bold">{festival?.name}</span>
                              </div>
                              <div className="flex flex-col gap-1 ml-4">
                                {festival?.description?.map((highlight, k) => {
                                  return (
                                    <div key={k}>
                                      <span className="text-blue-600">-</span> <span className="text-gray-600">{highlight}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {!section?.aspects ? null : (
                      <div className="flex flex-col gap-3">
                        {section.aspects?.map((aspect, j) => {
                          return (
                            <div className="flex flex-col gap-1" key={j}>
                              <div className="flex items-start gap-2">
                                <span className="text-blue-600">●</span>
                                <span className="text-gray-800 font-bold">{aspect?.category}</span>
                              </div>

                              <div className="ml-4 text-gray-600">
                                <span className="text-blue-600">-</span> <span className="text-gray-600">{aspect?.description}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {!section?.reasons ? null : (
                      <div className="flex flex-col gap-3">
                        {section?.reasons?.map((reason, j) => {
                          return (
                            <div className="flex flex-col gap-1" key={j}>
                              <div className="flex items-start gap-2">
                                <span className="text-blue-600">●</span>
                                <span className="text-gray-600">{reason}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {!section?.recommendations ? null : (
                      <div className="flex flex-col gap-3">
                        {section?.recommendations?.map((recommendation, j) => {
                          return (
                            <div className="flex flex-col gap-1" key={j}>
                              <div className="flex items-start gap-2">
                                <span className="text-blue-600">●</span>
                                <span className="text-gray-800 font-bold">{recommendation?.period}</span>
                              </div>
                              <div className="ml-4 text-gray-600">
                                <span className="text-blue-600">-</span> <span className="text-gray-600">{recommendation?.description}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {!section?.tips ? null : (
                      <div className="flex flex-col gap-3">
                        {section.tips?.map((top, j) => {
                          return (
                            <div className="flex flex-col gap-1" key={j}>
                              <div className="flex items-start gap-2">
                                <span className="text-blue-600">●</span>
                                <span className="text-gray-800 font-bold">{top?.title}</span>
                              </div>
                              <div className="flex flex-col gap-1 ml-4">
                                {top?.details?.map((detail, k) => {
                                  return (
                                    <div key={k}>
                                      <span className="text-blue-600">-</span> <span className="text-gray-600">{detail}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  {index !== arr.length - 1 && <Border />}
                </React.Fragment>
              );
            })}
          </div>
        </section>
      </section>
    </div>
  );
}
