"use client";

import Lottie from "lottie-react";
import { data } from "@/data";
import phoneAnimation from "./phone.json";

export default function CallButton() {
  return (
    <a
      href={`tel:${data.NAVBAR.CALL_BUTTON_PHONE}`}
      aria-label="Call Royal Explorers"
      className="fixed bottom-4 left-4 z-50 flex h-16 w-16 items-center justify-center"
    >
      <Lottie animationData={phoneAnimation} loop autoplay style={{ width: "100%", height: "100%" }} />
    </a>
  );
}
