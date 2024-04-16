import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { BsDashLg } from "react-icons/bs";

interface BreadCrumpProps {
  links: {
    title: string;
    href: string;
  }[];
}

export const BreadCrumpComponent: React.FC<BreadCrumpProps> = ({ links }) => {
  return (
    <div className="flex items-center gap-[8px] w-full">
      <Link href="/">
        <FaHome className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] text-orange-300 hover:text-orange-400" />
      </Link>
      {links.map((item, index) => (
        <div key={index} className="flex items-center gap-[5px]">
          <BsDashLg className="text-orange-300" />
          {index === links.length - 1 ? (
            <Link
              href={item.href}
              className="opacity-60 text-[12px] md:text-[14px] cursor-not-allowed text-orange-300"
            >
              {item.title}
            </Link>
          ) : (
            <Link
              className="text-orange-300 text-[12px] md:text-[14px] opacity-100 hover:text-orange-400"
              href={item.href}
            >
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};
