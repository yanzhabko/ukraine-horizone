import React from "react";
import Exclamation from "@/images/icons/exclamation.svg";
import Image from "next/image";

const DevelopmentComponent = () => {
  return (
    <div className="animate-bounce flex justify-center items-center h-auto w-auto">
      <h1 className="text-[18px] lg:text-[40px] font-bold text-white">
        Увага сторінка в розробці
      </h1>
      <Image
        src={Exclamation}
        className="h-[50px] w-[50px]"
        alt="Attention, the page is under development"
      />
    </div>
  );
};

export default DevelopmentComponent;
