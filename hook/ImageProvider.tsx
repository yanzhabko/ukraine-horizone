import React, { ReactNode } from "react";
import Image from "next/image";
import BackgroundLeft from "@/images/lines-left.png";

export const ImageProvider = ({ children }: { children: ReactNode }) => {
  return (
    <div className="body-image gap-[70px] lg:gap-[100px]">
      <Image
        src={BackgroundLeft}
        alt="Images"
        className="absolute w-full h-[100vh]  z-[0] bg-no-repeat"
      />
      {children}
    </div>
  );
};
