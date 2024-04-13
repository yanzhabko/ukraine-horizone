import React from "react";
import Image from "next/image";
import { Input } from "@mantine/core";

interface InputComponentProps {
  name: string;
  register: any;
  icon: any;
  placeholder: string;
  onFocused: () => void;
  focused: any;
}

export const InputComponent: React.FC<InputComponentProps> = ({
  name,
  register,
  icon,
  placeholder,
  onFocused,
  focused,
}) => {
  return (
    <>
      <Input
        {...register(name)}
        leftSection={<Image src={icon} alt="" width={20} height={20} />}
        placeholder={placeholder}
        classNames={{
          wrapper: `${
            focused === name ? "!border-orange-400" : ""
          } py-2 border border-orange-300 flex items-center gap-[15px] bg-orange-300 rounded-s-[10px] rounded-e-[10px] px-3`,
          input: "bg-orange-300 text-white outline-none placeholder:text-white",
        }}
        onFocus={onFocused}
      />
    </>
  );
};
