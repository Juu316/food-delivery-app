"use client";

import Header from "./home/header/page";
import Footer from "./home/footer/page";
import Menu from "./home/menu/page";
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
          objectFit="cover"
          className="fullWidthImage"
        />
      </div>
      <Menu />
      <Footer />
    </>
  );
}
