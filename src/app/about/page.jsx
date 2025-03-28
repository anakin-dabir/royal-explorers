import Image from "next/image";
import { Briefcase, DollarSign, Users, Award } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-[400px] flex relative overflow-hidden">
        <Image src="/images/venezia.jpg" alt="about-us-image" fill className="object-cover" />
        <div className="absolute bottom-0 left-0 right-0 h-full bg-black/60 text-white">
          <div className="flex mt-[114] flex-col h-full justify-center container mx-auto max-w-7xl p-4 gap-6">
            <div className="text-5xl font-bold">About Us</div>
          </div>
        </div>
      </div>

      <section className=" bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container max-w-7xl mx-auto py-10 px-4">
          {/* Left Section */}
          <div className=" text-black flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">About Services</h2>
            <p className="text-gray-600 mb-4">
              Our services are designed to provide top-notch solutions tailored to your needs. We ensure quality, efficiency, and reliability in every project
              we undertake.
            </p>
            <p className="text-gray-600 mb-4">
              We focus on delivering results that matter. With a dedicated team and innovative approaches, we help businesses thrive in a competitive market.
            </p>
            <button className="bg-black text-white px-6 py-2 rounded mt-4 w-fit">Get A Quote</button>
          </div>

          {/* Right Section */}
          <div className="bg-gray-900 text-white flex flex-col justify-center p-12 space-y-8">
            <div className="flex items-start space-x-4">
              <Briefcase className="text-yellow-400" size={32} />
              <div>
                <h3 className="text-lg font-bold">Professional Consultancy</h3>
                <p className="text-gray-400">We offer expert guidance to help businesses make informed decisions and achieve their goals effectively.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <DollarSign className="text-green-400" size={32} />
              <div>
                <h3 className="text-lg font-bold">Financial Solutions</h3>
                <p className="text-gray-400">Our financial strategies are tailored to maximize your profits and optimize resource allocation.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Users className="text-yellow-400" size={32} />
              <div>
                <h3 className="text-lg font-bold">Customer Support</h3>
                <p className="text-gray-400">We provide top-tier customer service to ensure your clients receive the best possible experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 container max-w-7xl mx-auto py-10 px-4">
        {/* Feature 1 */}
        <div className="text-center flex flex-col items-center">
          <Briefcase className="text-gray-700" size={48} />
          <h3 className="text-xl font-bold mt-4">We pride ourselves on innovation</h3>
          <p className="text-gray-600 mt-2">Our team constantly pushes the boundaries of creativity and technology to bring you cutting-edge solutions.</p>
        </div>

        {/* Feature 2 */}
        <div className="text-center flex flex-col items-center">
          <Award className="text-gray-700" size={48} />
          <h3 className="text-xl font-bold mt-4">We have won many awards</h3>
          <p className="text-gray-600 mt-2">Recognized globally for our excellence, we continue to set industry standards with our innovative work.</p>
        </div>

        {/* Feature 3 */}
        <div className="text-center flex flex-col items-center">
          <Users className="text-gray-700" size={48} />
          <h3 className="text-xl font-bold mt-4">We are a team of genius people</h3>
          <p className="text-gray-600 mt-2">Our talented professionals bring expertise and innovation to every project, ensuring outstanding results.</p>
        </div>
      </section>
    </div>
  );
}
