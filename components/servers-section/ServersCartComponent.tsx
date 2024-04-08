import React from "react";
import { ProgressCircle } from "@tremor/react";
import ButtonComponent from "../ButtonComponent";
import { FaArrowRight } from "react-icons/fa6";
import type { StaticImageData } from "next/image";

interface ServersCartProps {
  nameServer: string;
  title: string;
  onlineUsers: number;
  maxOnlineUsers: number;
  onClick?: (name: any) => void;
  image: StaticImageData;
}

const ServersCartComponent: React.FC<ServersCartProps> = ({
  nameServer,
  title,
  onlineUsers,
  maxOnlineUsers,
  onClick,
  image,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="flex relative flex-col gap-[20px] py-[15px] sm:py-[25px] sm:gap-0 sm:flex-row sm:px-[40px] lg:px-[10px] xl:px-[40px] bg-red-200 items-center justify-between rounded-[15px]"
    >
      <ProgressCircle
        color="orange-300"
        className="*:h-[110px] *:w-[110px]"
        value={(onlineUsers / maxOnlineUsers) * 100}
      >
        <div className="flex flex-col justify-center items-center mx-auto">
          <span className="text-[24px] text-white font-semibold">
            {onlineUsers}
          </span>
          <span className="text-[10px] text-neutral-200">{maxOnlineUsers}</span>
        </div>
      </ProgressCircle>
      <div className="flex flex-col items-center">
        <p className="font-semibold text-white text-[20px] uppercase lg:text-[26px]">
          {nameServer}
        </p>
        <p className="text-[11px] lg:text-[14px] text-white">{title}</p>
      </div>
      <ButtonComponent
        title="Дізнатися більше"
        typeButton="servers"
        tag="a"
        image={FaArrowRight}
        onClick={onClick}
      />
    </div>
  );
};

export default ServersCartComponent;
