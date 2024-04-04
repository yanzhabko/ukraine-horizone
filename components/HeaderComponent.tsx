"use client";
import React from "react";
import Link from "next/link";
import { headerLinks } from "@/data";
import Logo from "@/images/Logo.svg";
import Download from "@/images/icons/download.svg";
import Circule from "@/images/circle.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@mantine/hooks";
import ButtonComponent from "./ButtonComponent";
import { FaWindows, FaLinux, FaDiscord, FaTelegramPlane } from "react-icons/fa";

const HeaderComponent = () => {
  const pathname = usePathname();
  const mobile = useMediaQuery("(max-width:1024px)");

  return (
    <header className="container flex flex-col items-center gap-[50px]">
      <div className="pt-[40px] flex items-center justify-center md:justify-between w-full">
        <Image
          src={Circule}
          alt="Image"
          className="hidden md:block left-[-3px] absolute lg:h-[200px] xl:h-[300px] w-auto z-0"
        />
        <div className=" hidden md:block h-auto bg-transparent w-auto z-10">
          <p className="text-[18px] lg:text-[24px] xl:text-[28px] text-white font-light">
            Приєднуйся до гри
          </p>
          <p className="text-[18px] lg:text-[24px] xl:text-[28px] font-bold text-white uppercase">
            прямо зараз!
          </p>
        </div>
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            className="h-[180px] lg:h-[250px] xl:h-[350px] w-auto drop-shadow-2xl"
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
              href="@/images/launcher/Ukraine_Horizon.exe"
              tag="a"
              className=""
            />
            <ButtonComponent
              typeButton="download"
              image={FaLinux}
              title="Linux / Mac OS"
              tag="a"
            />
          </div>
        </div>
        <div className="hidden absolute right-[10px] top-[5px] md:flex gap-[10px]">
          <Link href="https://discord.gg/xtGnGvrR" target="_blank">
            <FaDiscord className=" text-white w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] " />
          </Link>
          <Link href="https://t.me/Ukrainehorizon" target="_blank">
            <FaTelegramPlane className=" text-white w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] " />
          </Link>
        </div>
      </div>
      <ul className="w-full flex items-center justify-center gap-[20px] sm:gap-[45px] lg:gap-[35px]">
        {headerLinks.map((item, index) => (
          <li
            key={index}
            className={`${
              pathname === item.href &&
              "before:opacity-100 before:animate-slide-up"
            } flex flex-col items-center relative before:opacity-0 before:absolute before:w-[80%] before:h-[3px] before:bottom-[-5px] before:bg-orange-400`}
          >
            <Image
              src={item.icon}
              alt="icons"
              className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]"
            />
            <Link
              key={index}
              href={item.href}
              className="text-white font-bold text-[14px] sm:text-[16px] lg:text-[22px] xl:text-[28px]"
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
