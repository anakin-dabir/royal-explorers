import { data } from "@/data";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="container mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-semibold text-white flex items-center gap-2 uppercase">
            <span className="text-blue-500">Royal</span> Explorers
          </h2>
          <p className="mt-4 text-sm">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>

        {/* Right Section */}
        <div className="md:max-w-sm">
          <h3 className="text-lg font-semibold text-white">Contact Info</h3>
          <p className="mt-4 text-sm">Address: {data.NAVBAR.ADDRESS}</p>
          {data.NAVBAR.PHONE.map((phone, index) => {
            return (
              <p className="mt-2 text-sm" key={index}>
                Phone {index + 1}: {phone}
              </p>
            );
          })}

          <p className="mt-2 text-sm">{data.NAVBAR.EMAIL}</p>
          <div className="mt-4 flex gap-4">
            <Facebook className="w-5 h-5 text-gray-400 hover:text-white" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center py-8 text-sm bg-footer-dark text-white/80">COPYRIGHT 2025 ROYAL EXPLORERS, ALL RIGHTS RESERVED</div>
    </footer>
  );
}
