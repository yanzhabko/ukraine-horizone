"use client";
import React from "react";
import SelectCategoriesSection from "./SelectCategoriesSection";
import { useSearchParams } from "next/navigation";

const ShopSection = () => {
  const searchParams = useSearchParams();
  const params = searchParams.get("tab");
  const title =
    params === null
      ? "Магазин"
      : params === "privileges"
      ? "Список привілегій"
      : "Магазин ресурсів";

  return (
    <div className="px-[12px] lg:px-[40px] bg-white rounded-2xl py-[40px] relative shadow-lg mt-[25px]">
      <div className="absolute bg-orange-300 w-[95%] sm:w-[70%] right-[2.5%] sm:left-[15%] top-[-25px] flex items-center text-center px-[20px] py-[10px] rounded-[20px]">
        <h1 className="flex-1 text-white font-bold">{title}</h1>
      </div>
      {params === null && <SelectCategoriesSection />}
      {params === "privileges"}
      {params === "items"}
    </div>
  );
};

export default ShopSection;
