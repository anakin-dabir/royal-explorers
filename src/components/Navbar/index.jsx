"use client";

import { Facebook, Linkedin, Mail, Phone, Plane, Twitter } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Tour & Travel Packages", path: "/packages" },
  { name: "Trackings", path: "/tracking" },
  { name: "Boking & Cycling", path: "/booking" },
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const activeLink = useCallback(value => pathname === value, [pathname]);

  return (
    <div className="bg-black/80 text-white py-8 absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto max-w-7xl px-4 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm">1.820.3345.33</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span className="text-sm">Contact@TravelTourWP.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-white hover:text-blue-400">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-white hover:text-blue-400">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-white hover:text-blue-400">
              <Twitter className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2">
            <Plane className="size-5 text-blue-500" />
            <span className="text-xl font-bold uppercase">
              <span className="text-blue-500">Royal</span> Explorers
            </span>
          </div>
          <nav className="flex items-center justify-end gap-8">
            {links.map((link, index) => {
              const active = activeLink(link.path);
              return (
                <Link href={link.path} key={index} className={`${active ? "border-b-2 border-blue-500" : "hover:text-blue-500 transition-colors"}`}>
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
