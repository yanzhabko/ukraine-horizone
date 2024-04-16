import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PrivilegeCardProps {
  name: string;
  price: string;
  image: any;
  alt: string;
  onClick: () => void;
}

const PrivilegeCardComponent: React.FC<PrivilegeCardProps> = ({
  name,
  price,
  image,
  alt,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${
        name === "Vip"
          ? "to-orange-300 from-yellow-200"
          : name === "Premium"
          ? "to-emerald-400 from-green-300"
          : "to-purple-500 from-violet-300"
      } scale-95 hover:scale-100 relative bg-gradient-to-t rounded-[10px] gap-[5px] w-full sm:w-[48%] md:w-[45%] lg:w-[48%] xl:w-auto flex flex-col items-center py-[20px] animate-pulse`}
    >
      <Image
        src={image}
        alt={alt}
        className="w-[170px] h-[170px] lg:w-[200px] lg:h-[200px] xl:h-[252px] xl:w-[252px]"
      />
      <p className="absolute bg-[#c34343] px-[3px] rounded text-white font-medium -top-1 right-0">
        {price} (₴)
      </p>
      <div className="flex flex-col items-center justify-center gap-[8px]">
        <p className="text-[18px] font-bold text-black">{name}</p>
      </div>
    </button>
  );
};

export default PrivilegeCardComponent;
