import React from "react";
import Image from "next/image";

interface ButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  image: React.ComponentType<{ src: string; alt?: string; className?: string }>;
  typeButton: "default" | "download";
  tag?: "a" | "button";
  href?: string;
}
const ButtonComponent: React.FC<ButtonProps> = ({
  title,
  onClick,
  type = "submit",
  className,
  image: IconComponent,
  typeButton,
  tag = "button",
  href,
}) => {
  const Tag = tag;
  const buttonContent = () => {
    if (typeButton === "default") {
      return (
        <Tag
          type={type}
          onClick={onClick}
          href={href}
          className={`${className} py-1 text-8 text-white font-bold bg-zinc-300 rounded-sm`}
        >
          {title}
        </Tag>
      );
    } else if (typeButton === "download") {
      return (
        <Tag
          type={type}
          onClick={onClick}
          href={href}
          download
          className={`${className} flex justify-center gap-[5px] items-center py-2 text-8 text-orange-400 font-bold bg-white rounded-[5px]`}
        >
          <IconComponent
            src=""
            alt=""
            className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]"
          />
          {title}
        </Tag>
      );
    } else {
      return null;
    }
  };

  return <>{buttonContent()}</>;
};

export default ButtonComponent;