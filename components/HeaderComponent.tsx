"use client";
import React from "react";
import Link from "next/link";
import { headerLinks } from "@/data";
import Logo from "@/images/Logo.svg";
import Circule from "@/images/circle.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ButtonComponent from "./ButtonComponent";
import { FaWindows, FaLinux, FaDiscord, FaTelegramPlane } from "react-icons/fa";

const HeaderComponent = () => {
  const pathname = usePathname();

  return (
    <header className="container flex flex-col items-center gap-[30px] md:gap-[50px]">
      <div className="pt-[20px] md:pt-[40px] flex items-center justify-center md:justify-between w-full">
        <div className="hidden md:block left-[-3px] absolute">
          <Image
            src={Circule}
            alt="Image"
            className="h-[150px] lg:h-[200px] xl:h-[250px] w-auto z-0"
          />
          <div className="absolute w-auto left-[60%] lg:left-[80%] top-[30%] h-auto bg-transparent z-1">
            <p className="w-[170px] lg:w-[260px] text-[18px] lg:text-[24px] xl:text-[28px] text-white font-light">
              Приєднуйся до гри
            </p>
            <p className="text-[18px] lg:text-[24px] xl:text-[28px] font-bold text-white uppercase">
              прямо зараз!
            </p>
          </div>
        </div>
        <div className="hidden md:block w-[200px] h-full"></div>
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            className="h-[180px] lg:h-[250px] xl:h-[300px] w-auto drop-shadow-2xl"
          />
        </Link>
        <div className="hidden md:flex flex-col gap-[3px]">
          <p className="text-white font-bold text-[16px] xl:text-[20px] uppercase">
            Завантажуй лаунчер!
          </p>
          <div className="flex flex-col gap-[15px]">
            <ButtonComponent
              typeButton="download"
              image={FaWindows}
              title="Windows"
              href="https://drive.google.com/file/d/1nZVrY5VtUCLZFDI6PqyE_3TQYws4G-WC/view?usp=sharing"
              tag="a"
              className=""
            />
            {/* <ButtonComponent
              typeButton="download"
              image={FaLinux}
              title="Linux / Mac OS"
              tag="a"
            /> */}
          </div>
        </div>
        <div className="hidden absolute right-[10px] top-[5px] md:flex gap-[10px]">
          <Link href="https://discord.gg/6QyZgXYr" target="_blank">
            <FaDiscord className=" text-white w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] " />
          </Link>
          <Link href="https://t.me/Ukrainehorizon" target="_blank">
            <FaTelegramPlane className=" text-white w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] " />
          </Link>
        </div>
      </div>
      <ul className="w-full flex items-center justify-center gap-[20px] sm:gap-[45px] lg:gap-[35px]">
        {headerLinks.map((item, index) => (
          <li key={index} className="flex flex-col items-center w-auto">
            {item.icon && (
              <item.icon className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] text-orange-300 opacity-95" />
            )}
            <Link
              key={index}
              href={item.href}
              className={`${
                pathname === item.href &&
                "before:opacity-100 before:animate-line-slide-up"
              } w-full  text-white font-bold text-[14px] sm:text-[16px] lg:text-[22px] xl:text-[28px] flex justify-center relative hover:before:opacity-100 hover:before:animate-line-slide-up hover:before:absolute hover:before:w-full hover:before:h-[3px] hover:before:bottom-[-3px] hover:before:bg-orange-300 before:opacity-0 before:absolute before:w-full before:h-[3px] before:bottom-[-3px] before:bg-orange-300`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default HeaderComponent;
