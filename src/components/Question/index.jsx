import { data } from "@/data";
import { Phone } from "lucide-react";
import Image from "next/image";

export default function Question() {
  <div className="text-white py-10 px-6 w-full relative">
    <Image src="/images/venezia.jpg" alt="got-a-question" className="object-cover absolute inset-0" fill />
    <div className="absolute inset-0 z-[1] bg-blue-500/50 backdrop-blur-sm" />
    <div className="flex flex-col relative z-10">
      <h2 className="text-xl font-bold mb-2">Get a Question?</h2>
      <p className="mb-4">Do not hesitate to give us a call. We are an expert team and we are happy to talk to you.</p>
      <div className="flex items-center gap-2 text-yellow-300 font-semibold text-lg mb-4">
        <Phone size={20} />
        <span>{data.NAVBAR.PHONE[0]}</span>
      </div>
      <a href={data.NAVBAR.EMAIL} className="text-white font-semibold underline">
        {data.NAVBAR.EMAIL}
      </a>
    </div>
  </div>;
}
