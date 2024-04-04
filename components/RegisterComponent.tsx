"use client";
import React, { useState } from "react";
import { Input, MantineProvider, Checkbox, Anchor } from "@mantine/core";
import ButtonComponent from "./ButtonComponent";
import User from "@/images/icons/user.svg";
import Email from "@/images/icons/mail.svg";
import Lock from "@/images/icons/lock.svg";
import Image from "next/image";
import Link from "next/link";

interface RegisterComponentProps {
  setState: (type: "login" | "registration") => void;
}

const RegisterComponent: React.FC<RegisterComponentProps> = ({ setState }) => {
  const [focus, setFocus] = useState<
    null | "userName" | "email" | "password" | "confirmedPassword"
  >(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <MantineProvider>
      <div className="bg-white flex justify-center w-auto relative h-auto rounded-2xl pb-6 pt-10 px-2 shadow-lg">
        <h1 className="bg-orange-300 px-5 py-3 rounded-[2rem] absolute top-[-25px] text-white font-bold">
          Регістрація
        </h1>
        <form className="flex flex-col gap-[10px] text-end">
          <Input
            leftSection={
              <Image src={User} alt="" className="w-[20px] h-[20px]" />
            }
            placeholder="Введіть нікнейм"
            classNames={{
              wrapper: `${
                focus === "userName" && "!border-orange-400"
              } py-2 border border-orange-300 flex items-center gap-[15px] bg-orange-300 rounded-s-[15px] rounded-e-[15px] px-2`,
              section: "",
              input:
                "bg-orange-300 text-white outline-none placeholder:text-white",
            }}
            onFocus={() => setFocus("userName")}
          />
          <Input
            leftSection={
              <Image src={Email} alt="" className="w-[20px] h-[20px]" />
            }
            placeholder="Введіть емаіл"
            classNames={{
              wrapper: `${
                focus === "email" && "!border-orange-400"
              } py-2 border border-orange-300 flex items-center gap-[15px] bg-orange-300 rounded-s-[15px] rounded-e-[15px] px-2`,
              section: "",
              input:
                "bg-orange-300 text-white outline-none placeholder:text-white",
            }}
            onFocus={() => setFocus("email")}
          />
          <Input
            leftSection={
              <Image src={Lock} alt="" className="w-[20px] h-[20px]" />
            }
            placeholder="Введіть пароль"
            classNames={{
              wrapper: `${
                focus === "password" && "!border-orange-400"
              } py-2 border border-orange-300 flex items-center gap-[15px] bg-orange-300 rounded-s-[15px] rounded-e-[15px] px-2`,
              section: "",
              input:
                "bg-orange-300 text-white outline-none placeholder:text-white",
            }}
            onFocus={() => setFocus("password")}
          />
          <Input
            leftSection={
              <Image src={Lock} alt="" className="w-[20px] h-[20px]" />
            }
            placeholder="Повторіть пароль"
            classNames={{
              wrapper: `${
                focus === "confirmedPassword" && "!border-orange-400"
              } py-2 border border-orange-300 flex items-center gap-[15px] bg-orange-300 rounded-s-[15px] rounded-e-[15px] px-2`,
              section: "",
              input:
                "bg-orange-300 text-white outline-none placeholder:text-white",
            }}
            onFocus={() => setFocus("confirmedPassword")}
          />
          <div className="ps-[5px] flex gap-[5px] items-center justify-end">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="checked:text-orange-300"
            />
            <div className="flex flex-col">
              <p className="text-[11px] w-full">
                Я прочитав і згоден з{" "}
                <Link href="/rules" className="text-blue-300">
                  правилами
                </Link>
                <span> та </span>
                <Link href="/privacy-policy" className="text-blue-300">
                  політикою конфіденційності
                </Link>
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-[15px]">
            <ButtonComponent
              title="Назад"
              type="button"
              className="flex-1"
              onClick={() => setState("login")}
              typeButton="default"
            />
            <ButtonComponent
              title="Регістрація"
              className="flex-1"
              typeButton="default"
            />
          </div>
        </form>
      </div>
    </MantineProvider>
  );
};

export default RegisterComponent;
