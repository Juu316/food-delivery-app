import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
import { Plus } from "lucide-react";
//Front end deer hardcode hiihgui, backend eesee data avch front deeree gargadag bolgoh heregtei
export default function FoodMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="mt-[5.25rem] mr-10 ml-6 flex flex-col gap-6">
        <div className="w-full h-[11rem] rounded-xl bg-white p-6">
          <div className="font-semibold text-xl text-[#09090b] mb-4">
            Dishes category
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="allDishes">
              All Dishes
              <span className="quantityOfDishes">123</span>
            </div>
            <div className="w-[36px] h-[36px] rounded-full bg-red-500 flex justify-center items-center">
              <Plus color="#fafafa" width={16} height={16} />
            </div>
          </div>
        </div>
        <div className="w-full rounded-xl bg-white p-5 h-[582px]">
          <div className="font-semibold text-xl text-[#09090b]">Appetizers</div>
        </div>
        <div></div>
      </div>
    </>
  );
}
