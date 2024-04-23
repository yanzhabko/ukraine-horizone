"use client";
import React from "react";
import SocialCardComponent from "./SocialCardComponent";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";

const social = [
  {
    name: "Discord",
    icon: <FaDiscord className="w-[42px] h-[42px] text-indigo-500" />,
    href: "https://discord.gg/6QyZgXYr",
  },
  {
    name: "Telegram",
    icon: <FaTelegramPlane className="w-[42px] h-[42px] text-sky-500" />,
    href: "https://t.me/Ukrainehorizon",
  },
];

const SocialNetworkComponent = () => {
  return (
    <div className="bg-white relative flex justify-center pb-6 pt-10 rounded-2xl shadow-lg px-[20px]">
      <h1 className="bg-orange-300 px-5 py-3 rounded-[2rem] absolute top-[-25px] text-white font-bold">
        Соціольні мережі
      </h1>
      <div className="flex flex-col w-full gap-[10px] justify-center items-center">
        {social.map((item, index) => (
          <SocialCardComponent
            key={index}
            name={item.name}
            icon={item.icon}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialNetworkComponent;
