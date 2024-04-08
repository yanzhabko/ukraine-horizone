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
  typeButton: "default" | "download" | "news" | "servers";
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
          className={`${className} active:opacity-90 cursor-pointer py-2 text-8 text-black bg-zinc-300 rounded-[15px]`}
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
          className={`${className} active:opacity-90 cursor-pointer flex justify-center gap-[15px] items-center py-3 text-8 text-orange-400 font-bold bg-white rounded-[15px]`}
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
        download
        className={`${className} text-orange-300 py-2 bg-red-500`}
      >
        {title}
      </Tag>;
    } else if (typeButton === "servers") {
      return (
        <Tag
          type={type}
          onClick={onClick}
          href={href}
          className={`${className} active:opacity-80 cursor-pointer flex justify-center gap-[10px] items-center px-3 py-3 text-[12px] xl:text-[16px] text-white font-bold bg-orange-300 rounded-[15px]`}
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
    } else {
      return null;
    }
  };

  return <>{buttonContent()}</>;
};

export default ButtonComponent;
