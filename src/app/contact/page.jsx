import Image from "next/image";
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-[400px] flex relative overflow-hidden">
        <Image src="/images/venezia.jpg" alt="about-us-image" fill className="object-cover" />
        <div className="absolute bottom-0 left-0 right-0 h-full bg-black/60 text-white">
          <div className="flex mt-[114] flex-col h-full justify-center container mx-auto max-w-7xl p-4 gap-6">
            <div className="text-5xl font-bold">Contact Us</div>
          </div>
        </div>
      </div>

      <section className="bg-gray-100">
        <div className="py-10 px-4 container max-w-7xl mx-auto flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="lg:max-w-3xl lg:py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Leave Us Your Info</h2>
            <p className="text-gray-600 mb-6">
              A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
            </p>

            <form className="grid grid-cols-1 gap-4">
              <input type="text" placeholder="Full Name*" className="bg-white p-4 w-full" required />
              <input type="email" placeholder="Email*" className="bg-white p-4 w-full" required />
              <input type="text" placeholder="Subject*" className="bg-white p-4 w-full" required />
              <textarea placeholder="Message*" className="bg-white p-4 w-full h-32 resize-none" required></textarea>
              <button className="bg-blue-600 text-white font-semibold py-3 px-6 w-fit hover:bg-blue-700">SUBMIT NOW</button>
            </form>
          </div>

          <div className="lg:max-w-sm lg:py-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Location</h3>
            <div className="flex flex-col gap-4">
              <p className="text-gray-600 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0" /> 4 Apt, Flawing Street, The Grand Avenue, Liverpool, UK 33342
              </p>
              <p className="text-gray-600 flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" /> contact@infinitewptheme.com
              </p>
              <p className="text-gray-600 flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" /> +1-3524-3356
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container max-w-7xl mx-auto py-10 px-4 flex items-center gap-8 justify-center">
          <Link href="#" className="text-black hover:text-blue-400">
            <Facebook className="size-8" />
          </Link>
          <Link href="#" className="text-black hover:text-blue-400">
            <Linkedin className="size-8" />
          </Link>
          <Link href="#" className="text-black hover:text-blue-400">
            <Twitter className="size-8" />
          </Link>
        </div>
      </section>
    </div>
  );
}
