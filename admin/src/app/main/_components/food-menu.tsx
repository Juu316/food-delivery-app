import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
//Front end deer hardcode hiihgui, backend eesee data avch front deeree gargadag bolgoh heregtei
export default function FoodMenu() {
  return (
    <>
      <div className="mt-[5.25rem] mr-10 ml-6 flex flex-col gap-6">
        <div className="w-full h-[11rem] rounded-xl bg-white p-6">
          <div className="font-semibold text-xl text-[#09090b]">
            Dishes category
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
