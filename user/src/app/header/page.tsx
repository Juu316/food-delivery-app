import Image from "next/image";
import { MapPin, ShoppingCart, ChevronRight, User } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="w-full h-[68px] bg-primary pt-3 pb-3 pl-[5.5rem] pr-[5.5rem] flex justify-between">
        <div className="flex">
          <div className="mr-3">
            <Image src={"/logo.png"} alt="logo" width={46} height={37.3} />
          </div>
          <div className="text-[white] text-xs">
            <div className="font-semibold text-xl tracking-[-2.5%]">
              Nom<span className="text-red-500">Nom</span>
            </div>{" "}
            Swift delivery
          </div>
        </div>
        <div className="flex h-[2.25rem] gap-3">
          <button className="flex w-auto h-full bg-white rounded-full pt-2 pb-2 pr-3 pl-3 gap-1">
            <MapPin width={20} height={20} color="red" />
            <span className="text-[0.82rem] text-red-500">
              Delivery address:
            </span>
            <span className="text-[0.82rem] text-muted-foreground ">
              Add Location
            </span>
            <ChevronRight
              width={20}
              height={20}
              style={{ color: "#18181B", opacity: 0.5 }}
            />
          </button>
          <button className="bg-[#f4f4f5] rounded-full pl-[0.6rem] h-full w-[2.25rem]">
            <ShoppingCart width={16} height={16} />
          </button>
          <button className="bg-red-500 rounded-full  h-full w-[2.25rem] flex justify-center items-center">
            <User width={16} height={16} style={{ color: "#fafafa" }} />
          </button>
        </div>
      </div>
    </>
  );
}
