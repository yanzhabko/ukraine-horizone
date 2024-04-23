import React from "react";

interface ButtonProps {
  title: string;
  className?: string;
  onClick?: (name?: any) => void;
  type?: "submit" | "button" | "reset";
  image?: React.ComponentType<{
    src: string;
    alt?: string;
    className?: string;
  }>;
  typeButton: "default" | "download" | "news" | "servers" | "shop";
  tag?: "a" | "button";
  href?: string;
  disabled?: boolean;
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
  disabled,
}) => {
  const Tag = tag;
  const buttonContent = () => {
    if (typeButton === "default") {
      return (
        <Tag
          type={type}
          onClick={onClick}
          href={href}
          className={`${className} ${
            disabled == false && "cursor-not-allowed"
          } hover:opacity-90 active:opacity-90 cursor-pointer py-2 text-8 text-gray-600 bg-neutral-300 rounded-[10px]`}
        >
          {title}
        </Tag>
      );
    } else if (typeButton === "download") {
      return (
        <Tag
          type={type}
          onClick={onClick}
          target="blank"
          href={href}
          className={`${className} hover:opacity-90 active:opacity-90 cursor-pointer flex justify-center gap-[15px] items-center py-3 text-8 text-orange-300 font-bold bg-white rounded-[10px]`}
        >
          {IconComponent && (
            <IconComponent
              src=""
              alt=""
              className="w-[20px] h-[20px] lg:w-[32px] lg:h-[32px]"
            />
          )}
          {title}
        </Tag>
      );
    } else if (typeButton === "news") {
      <Tag
        type={type}
        onClick={onClick}
        href={href}
        className={`${className} hover:opacity-90 text-orange-300 py-2 bg-red-500`}
      >
        {title}
      </Tag>;
    } else if (typeButton === "servers") {
      return (
        <Tag
          type={type}
          onClick={onClick}
          href={href}
          className={`${className} hover:opacity-90 active:opacity-80 cursor-pointer flex justify-center gap-[10px] items-center px-3 py-3 text-[12px] xl:text-[16px] text-white font-bold bg-orange-300 rounded-[15px]`}
        >
          {title}
          {IconComponent && (
            <IconComponent
              src=""
              alt=""
              className="w-[14px] h-[14px] xl:w-[18px] lg:h-[18px] animate-bounce-x"
            />
          )}
        </Tag>
      );
    } else if (typeButton === "shop") {
      return (
        <Tag
          type={type}
          onClick={onClick}
          href={href}
          className={`${className} hover:opacity-90 active:opacity-80 cursor-pointer flex justify-center gap-[10px] items-center px-3 py-3 text-[12px] xl:text-[16px] text-white font-bold bg-orange-300 rounded-[10px]`}
        >
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
