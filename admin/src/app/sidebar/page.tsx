import Image from "next/image";
import { LayoutDashboard, Truck, Settings } from "lucide-react";
import { useState } from "react";
export default function Sidebar() {
  const [selectedButton, setSelectedButton] = useState("foodMenu");
  return (
    <>
      <div className="flex">
        <div className="w-[14vw] h-[100vh] flex flex-col items-center bg-blue-300">
          <div className="flex mt-9 items-center w-[12vw]">
            <div className="mr-3">
              <Image src={"/logo.png"} alt="logo" width={46} height={37.3} />
            </div>
            <div className="text-[#71717a] text-xs">
              <div className="font-semibold text-lg tracking-[-2.5%] text-foreground">
                NomNom
              </div>
              Swift delivery
            </div>
          </div>
          <div className="mt-10 w-[12vw]">
            <button
              onClick={() => setSelectedButton("foodMenu")}
              className={`pl-6 h-10 w-full rounded-full flex items-center text-sm font-medium gap-[0.625rem] transition-colors mb-6 hover:bg-red-500 hover:text-[#BDBDBD] ${
                selectedButton === "foodMenu"
                  ? "bg-black text-white"
                  : "hover:bg-red-500 hover:text-[#BDBDBD]"
              }`}>
              <LayoutDashboard width={22} height={22} /> Food Menu
            </button>
            <button
              onClick={() => setSelectedButton("orders")}
              className={`pl-6 h-10 w-full rounded-full flex items-center text-sm font-medium gap-[0.625rem] transition-colors mb-6 hover:bg-red-500 hover:text-[#BDBDBD] ${
                selectedButton === "orders"
                  ? "bg-black text-white"
                  : "hover:bg-red-500 hover:text-[#BDBDBD]"
              }`}>
              <Truck width={22} height={22} /> Orders{" "}
            </button>
            <button
              onClick={() => setSelectedButton("settings")}
              className={`pl-6 h-10 w-full rounded-full flex items-center text-sm font-medium gap-[0.625rem] transition-colors hover:bg-red-500 hover:text-[#BDBDBD] ${
                selectedButton === "settings"
                  ? "bg-black text-white"
                  : "hover:bg-red-500 hover:text-[#BDBDBD]"
              }`}>
              <Settings width={22} height={22} /> Settings
            </button>
          </div>
        </div>

        <div className="w-full  bg-[#f4f4f5] ">
          <div className="absolute top-6 right-10 bg-slate-600 h-9 w-9 rounded-[50%]"></div>
          
          {/* <div className="mt-[5.25rem] mr-10 ml-6">New div</div> */}
        </div>
      </div>
    </>
  );
}
