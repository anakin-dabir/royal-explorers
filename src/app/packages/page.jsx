import { Star, Clock, Calendar, MapPin, Users, User, Check, X, Camera, Tag, Heart } from "lucide-react";
import Image from "next/image";

export default function PackagesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full h-[400px] flex relative overflow-hidden">
        <Image src="/images/venezia.jpg" alt="about-us-image" fill className="object-cover" />
        <div className="absolute bottom-0 left-0 right-0 h-full bg-black/60 text-white">
          <div className="flex mt-[114] flex-col h-full justify-center container mx-auto max-w-7xl p-4 gap-3">
            <div className="text-5xl font-bold">Dubai</div>
            <div className="flex items-center space-x-2 text-gray-800">
              <div className="flex gap-1 text-yellow-500">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <Star className="w-5 h-5 text-gray-300" /> {/* Half-star effect */}
              </div>
              <span className="text-white text-sm">(6 Reviews)</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="grid grid-cols-2 gap-6 text-gray-800 container mx-auto max-w-7xl px-4 py-10">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span>8 Hours</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span>Availability: Jan 16’ - Dec 16’</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span>Dubai</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span>Dubai</span>
          </div>
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5 text-blue-600" />
            <span>Min Age: 11+</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-blue-600" />
            <span>Max People: 40</span>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 p-4 rounded-lg sticky top-0 z-50">
        <div className="flex items-center gap-10 text-gray-600  font-medium container mx-auto max-w-7xl p-4">
          <button className="relative text-black font-bold">
            Detail
            <div className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-600"></div>
          </button>
          <button className="text-gray-500 transition-colors hover:text-blue-600">Itinerary</button>
          <button className="text-gray-500 transition-colors hover:text-blue-600">Map</button>
          <button className="text-gray-500 transition-colors hover:text-blue-600">Photos</button>
          <button className="text-gray-500 transition-colors hover:text-blue-600">Reviews</button>
        </div>
      </section>

      <section className="relative max-w-7xl container mx-auto">
        <section className="py-10 px-6 max-w-3xl">
          {/* Title Section */}

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold flex items-center space-x-2">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span>Tour Details</span>
              </h2>
              <p className="text-gray-600">
                Sit at ease with a blend of comfort and adventure. Experience the beauty of travel like never before. The journey is designed to offer
                breathtaking scenery and a seamless travel experience.
              </p>
              <p className="text-gray-600">
                Enjoy picturesque landscapes and cultural interactions. This tour is carefully curated to immerse you in the heart of the destination.
              </p>
            </div>

            <div className="border-t border-t-gray-200 flex-1" />

            {/* Departure Details */}
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Departure & Return Location</p>
              <p className="text-gray-600">
                John F.K. International Airport (
                <a href="#" className="text-blue-600">
                  Google Map
                </a>
                )
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Departure Time</p>
              <p className="text-gray-600">3 Hours Before Flight Time</p>
            </div>

            <div className="border-t border-t-gray-200 flex-1" />

            {/* Price Includes */}
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Price Includes</p>
              <ul className="text-gray-600">
                {["Air fares", "3 Nights Hotel Accommodation", "Tour Guide", "Entrance Fees", "All transportation in destination location"].map(
                  (item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="border-t border-t-gray-200 flex-1" />

            {/* Price Excludes */}
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Price Excludes</p>
              <ul className="text-gray-600">
                {["Guide Service Fee", "Driver Service Fee", "Any Private Expenses"].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <X className="w-5 h-5 text-red-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-t-gray-200 flex-1" />

            {/* Itinerary Section */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-blue-600" />
                <span>Itinerary</span>
              </h2>

              <div className="flex flex-col gap-3">
                {/* Day 1 */}
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-semibold">
                    Day 1{": "}
                    <a href="#" className="text-blue-600">
                      Arrive in Zürich, Switzerland
                    </a>
                  </p>
                  <p className="text-gray-600">
                    We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk
                    through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No
                    bus. Walking: light.
                  </p>
                </div>

                {/* Day 2 */}
                <div className=" bg-gray-100 p-4 rounded-lg">
                  <p className="font-semibold">
                    Day 2{": "}
                    <a href="#" className="text-blue-600">
                      Zürich–Biel/Bienne–Neuchâtel–Geneva
                    </a>
                  </p>
                  <p className="text-gray-600">
                    Enjoy an orientation walk of Zürich’s OLD TOWN, Switzerland’s center of banking and commerce. Then, leave Zurich and start your Swiss
                    adventure. You’ll quickly discover that Switzerland isn’t just home to the Alps, but also to some of the most beautiful lakes. First, stop
                    at the foot of the Jura Mountains in the picturesque town of Biel, known as Bienne by French-speaking Swiss, famous for watch-making, and
                    explore the historical center. Next, enjoy a scenic drive to lakeside Neuchâtel, dominated by the medieval cathedral and castle. Take time
                    to stroll along the lake promenade before continuing to stunning Geneva, the second-largest city in Switzerland, with its fantastic lakeside
                    location and breathtaking panoramas of the Alps.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-t-gray-200 flex-1" />

            {/* Photos Section */}
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold flex items-center space-x-2">
                <Camera className="w-6 h-6 text-blue-600" />
                <span>Photos</span>
              </h2>
              <div className="">
                <img src="/images/venezia.jpg" alt="Tour Highlights" className="w-full" />
              </div>
            </div>

            <div className="border-t border-t-gray-200 flex-1" />
            {/* Reviews Section */}
            <div className="flex flex-col gap-8">
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
                      <p className="text-gray-600">Group Traveller - March 10, 2020</p>
                      <p className="text-yellow-500 text-lg">★★★★☆ Good</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="size-12 bg-gray-200 rounded-full"></div>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold">Phil The Greek</p>
                    <div className="flex flex-col gap-0">
                      <p className="text-gray-600">Couple Traveller - May 18, 2019</p>
                      <p className="text-yellow-500 text-lg">★★★★★ Excellent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col min-w-sm shrink-0 border border-gray-100 shadow-lg absolute top-0 right-0">
          <div className="w-full py-4 flex items-center justify-center text-lg uppercase font-bold bg-blue-900 text-white">Price</div>
          <div className="w-full py-8 flex items-center justify-center gap-2 bg-blue-500 text-white">
            <Tag size={25} />
            From
            <span className="font-bold text-lg">INR 30,000</span>
          </div>
          <div className="w-full py-4 bg-gray-100 flex items-center justify-center text-lg">Enquiry Form</div>
          <div className="w-full py-4 bg-white flex flex-col">
            <form className="grid grid-cols-1 gap-4 px-4 py-8">
              <input type="text" placeholder="Full Name*" className="bg-gray-100 p-4 w-full" required />
              <input type="email" placeholder="Email*" className="bg-gray-100 p-4 w-full" required />
              <input type="text" placeholder="Subject*" className="bg-gray-100 p-4 w-full" required />
              <textarea placeholder="Message*" className="bg-gray-100 p-4 w-full h-32 resize-none" required></textarea>
              <button className="bg-blue-600 text-white font-medium w-full py-4 hover:bg-blue-700">Submit Enquiry</button>
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
