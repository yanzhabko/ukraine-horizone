import Link from "next/link";
import React from "react";

interface SocialCardProps {
  name: string;
  icon: any;
  href: string;
}

const SocialCardComponent: React.FC<SocialCardProps> = ({
  name,
  icon,
  href,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="w-[70%] bg-gradient-to-r from-orange-200 to-yellow-200 rounded-[10px] gap-[10px] flex justify-center items-center py-[7px] hover:scale-105"
    >
      {icon}
      <p className="text-white text-[22px] font-bold">{name}</p>
    </Link>
  );
};

export default SocialCardComponent;
