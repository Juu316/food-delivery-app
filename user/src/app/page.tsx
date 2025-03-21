"use client";

import Header from "./header/page";
import Footer from "./footer/page";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Header />
      <div className="imageContainer">
        <Image
          src="/Bg-main.png" // Replace with the path to your image
          alt="Full Width Image"
          fill
          className="fullWidthImage"
        />
      </div>
      <Footer />
    </>
  );
}
//15.6875rem BUTTON
