"use client";

import { Facebook, Linkedin, Mail, Phone, Plane, Twitter, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { data } from "@/data";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Tour & Travel Packages", path: "/packages/tour" },
  { name: "Trackings", path: "/packages/trackings" },
  { name: "Biking & Cycling", path: "/packages/biking" },
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const activeLink = useCallback((value) => pathname === value, [pathname]);
  const [isOpen, isOpenSet] = useState(false);

  return (
    <div className="bg-black/80 text-white py-8 absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto max-w-7xl px-4 flex flex-col gap-8">
        <div className="hidden xl:flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-6">
            {data.NAVBAR.PHONE.map((phone, index) => {
              return (
                <div key={index} className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="text-sm">{phone}</span>
                </div>
              );
            })}
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span className="text-sm">{data.NAVBAR.EMAIL}</span>
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

        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center gap-2">
            <Plane className="size-5 text-blue-500" />
            <span className="text-xl font-bold uppercase">
              <span className="text-blue-500">Royal</span> Explorers
            </span>
          </div>
          <nav className="hidden xl:flex items-center justify-end gap-8">
            {links.map((link, index) => {
              const active = activeLink(link.path);
              return (
                <Link href={link.path} key={index} className={`${active ? "border-b-2 border-blue-500" : "hover:text-blue-500 transition-colors"}`}>
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <button onClick={() => isOpenSet((pre) => !pre)} className="flex xl:hidden">
            <Menu size={30} />
          </button>

          <CollapsibleNavbar isOpen={isOpen} isOpenSet={isOpenSet} activeLink={activeLink} />
        </div>
      </div>
    </div>
  );
}

function CollapsibleNavbar({ isOpen, isOpenSet, activeLink }) {
  const router = useRouter();
  function navigate(e, path) {
    e.preventDefault();
    isOpenSet((pre) => !pre);
    router.push(path);
  }
  return (
    <div className="absolute left-0 right-0 top-[90] w-full flex xl:hidden bg-black/80 backdrop-blur-lg">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="overflow-hidden flex flex-col gap-4 w-full items-center p-6"
          >
            <button onClick={() => isOpenSet(!isOpen)} className="absolute right-3 top-3 text-white">
              <X size={20} />
            </button>
            {links.map((link, index) => {
              const active = activeLink(link.path);
              return (
                <Link
                  href="#"
                  onClick={(e) => navigate(e, link.path)}
                  key={index}
                  className={`${active ? "border-b-2 border-blue-500" : "hover:text-blue-500 transition-colors"}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
