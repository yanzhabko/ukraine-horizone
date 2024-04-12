import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

interface ServerInformationProps {
  name: string;
  category: string;
  information: {
    information: string;
    name: string;
    icon: any;
  }[];
  description: string;
  image: StaticImageData;
  mods: string[];
}

const ServerInformationSection: React.FC<ServerInformationProps> = ({
  name,
  category,
  information,
  description,
  image,
  mods,
}) => {
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="px-[15px] lg:px-[40px] bg-white rounded-2xl py-[40px] shadow-lg mt-[25px]">
        <div
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            zIndex: "-1",
            borderRadius: "4px",
          }}
          className="flex flex-col gap-[2.5px] items-center py-[90px]"
        >
          <h1 className="text-white font-bold text-[24px] lg:text-[32px]">
            Сервер {name}
          </h1>
          <p className="text-white text-[14px]">{category}</p>
        </div>
        <div className="shadow-xl mx-auto flex flex-col md:flex-row bg-white mt-[-45px] w-full md:w-[90%] rounded-[15px] z-10">
          {information.map((item, index) => (
            <div
              key={index}
              className="px-[5px] pt-[25px] pb-[15px] flex flex-col items-center border-b-[1px] md:border-b-[0px] md:border-r-[1px] last:border-none border-[#e6e6e6] w-full md:w-[calc(30%-11px)]"
            >
              <Image
                src={item.icon}
                alt="Icon"
                className="w-[50%] my-[20px] mx-[20%]"
              />
              <p className="text-[12px] xl:text-[15px] font-bold text-orange-300">
                {item.information}
              </p>
              <p className="text-[12px] text-center xl:text-[14px]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center mt-[35px]">{description}</p>
        <div className="flex flex-col gap-[20px] mt-[40px]">
          <p className="text-[16px] font-medium text-center">
            Модифікацій серверу
          </p>
          <div className="flex flex-wrap gap-[10px]">
            {mods.map((item, index) => (
              <p
                key={index}
                className="p-[8px] bg-zinc-200 text-center text-[14px] rounded-[5px] text-gray-900 cursor-pointer hover:bg-zinc-300"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerInformationSection;
