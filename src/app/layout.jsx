import { Inter } from "next/font/google";
import "./globals.css";
import "keen-slider/keen-slider.min.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Tawkto from "@/components/Tawkto";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Royal Explorers",
  description: "Travel and Tour guide agency",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body suppressHydrationWarning className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Tawkto />
        <Footer />
      </body>
    </html>
  );
}
