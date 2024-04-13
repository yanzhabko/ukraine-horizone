import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CategoriesCardProps {
  href: string;
  image: string;
  alt: string;
  title: string;
  subTitle: string;
}

const CategoriesCardComponent: React.FC<CategoriesCardProps> = ({
  href,
  image,
  alt,
  title,
  subTitle,
}) => {
  return (
    <Link
      href={href}
      className="w-full flex items-center justify-start p-[10px] gap-[10px] lg:gap-[20px] scale-95 hover:rounded-[8px] hover:bg-zinc-100 hover:scale-100 border-b"
    >
      <Image
        src={image}
        alt={alt}
        className="w-[80px] h-[80px] md:w-auto md:h-auto"
      />
      <div className="flex flex-col">
        <h1 className="font-bold text-orange-300 lg:text-[24px]">{title}</h1>
        <p className="lg:text-[18px] text-orange-300">{subTitle}</p>
      </div>
    </Link>
  );
};

export default CategoriesCardComponent;
