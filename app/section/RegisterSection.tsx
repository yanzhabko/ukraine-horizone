"use client";
import React, { useState } from "react";
import { Input, MantineProvider } from "@mantine/core";
import ButtonComponent from "@/components/ButtonComponent";
import User from "@/images/icons/user.svg";
import Email from "@/images/icons/mail.svg";
import Lock from "@/images/icons/lock.svg";
import Image from "next/image";
import Link from "next/link";

const RegisterSection: React.FC = () => {
  const [focus, setFocus] = useState<
    null | "userName" | "email" | "password" | "confirmedPassword"
  >(null);
  return (
    <MantineProvider>
      <div className="bg-white flex justify-center w-auto relative h-auto rounded-2xl pb-8 pt-10 px-2 shadow-lg mt-[25px]">
        <h1 className="bg-orange-300 px-5 py-3 rounded-[2rem] absolute top-[-25px] text-white font-bold">
          Регістрація
        </h1>
        <form className="flex flex-col gap-[15px] text-end w-[280px] lg:w-[420px]">
          <Input
            leftSection={
              <Image src={User} alt="" className="w-[20px] h-[20px]" />
            }
            placeholder="Введіть нікнейм"
            classNames={{
              wrapper: `${
                focus === "userName" && "!border-orange-400"
              } py-2 border border-orange-300 flex items-center gap-[15px] bg-orange-300 rounded-s-[10px] rounded-e-[10px] px-2`,
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
              } py-2 border border-orange-300 flex items-center gap-[15px] bg-orange-300 rounded-s-[10px] rounded-e-[10px] px-2`,
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
              } py-2 border border-orange-300 flex items-center gap-[15px] bg-orange-300 rounded-s-[10px] rounded-e-[10px] px-2`,
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
              } py-2 border border-orange-300 flex items-center gap-[15px] bg-orange-300 rounded-s-[10px] rounded-e-[10px] px-2`,
              section: "",
              input:
                "bg-orange-300 text-white outline-none placeholder:text-white",
            }}
            onFocus={() => setFocus("confirmedPassword")}
          />
          <div className="flex justify-center items-center gap-[5px] flex-wrap text-center">
            <p className="text-[11px] text-center w-[90%]">
              Реєструючись на нашому проекті, ви автоматично погоджуєтесь з{" "}
              <Link href="/rules" className="text-blue-300 text-[11px]">
                правилами{" "}
              </Link>
              та{" "}
              <Link
                href="/privacy-policy"
                className="text-blue-300 text-[11px] "
              >
                {" "}
                політикою конфіденційності
              </Link>
            </p>
          </div>
          <ButtonComponent
            title="Регістрація"
            className="w-[50%] mx-auto"
            typeButton="default"
          />
        </form>
      </div>
    </MantineProvider>
  );
};

export default RegisterSection;
