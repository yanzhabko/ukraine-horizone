"use client";
import React, { useState } from "react";
import Link from "next/link";
import ButtonComponent from "./ButtonComponent";
import User from "@/images/icons/user.svg";
import Lock from "@/images/icons/lock.svg";
import Image from "next/image";
import { Input, MantineProvider } from "@mantine/core";
import { useForm, SubmitHandler } from "react-hook-form";

interface LoginProps {
  login: string;
  password: string;
}

interface LoginComponentProps {
  setState: (type: "login" | "registration") => void;
}

const LoginComponent: React.FC<LoginComponentProps> = ({ setState }) => {
  const { register, handleSubmit } = useForm<LoginProps>();
  const [focus, setFocus] = useState<null | "login" | "password">(null);
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");

  const onSubmit: SubmitHandler<LoginProps> = (data) => {
    console.log(data);
  };

  // const handleClickRegister = () => {
  //   setState(true);
  // };

  return (
    <MantineProvider>
      <div className="bg-white flex justify-center w-auto relative h-auto rounded-2xl pb-6 pt-10 px-2 ">
        <h1 className="bg-orange-300 px-5 py-3 rounded-[2rem] absolute top-[-25px] text-white font-bold">
          Авторизація
        </h1>
        <form
          className="flex flex-col gap-[10px] text-end"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex  flex-col gap-4">
            <Input
              {...register("login")}
              leftSection={
                <Image src={User} alt="" className="w-[20px] h-[20px]" />
              }
              placeholder="Введіть логін"
              classNames={{
                wrapper: `${
                  focus === "login" && "!border-orange-400"
                } py-2 border border-orange-300 flex items-center gap-[15px] bg-orange-300 rounded-s-[15px] rounded-e-[15px] px-3`,
                section: "",
                input:
                  "bg-orange-300 text-white outline-none placeholder:text-white",
              }}
              onFocus={() => setFocus("login")}
            />
            <Input
              {...register("password")}
              leftSection={
                <Image src={Lock} alt="" className="w-[20px] h-[20px]" />
              }
              placeholder="Введіть пароль"
              classNames={{
                wrapper: `${
                  focus === "password" && "!border-orange-400"
                } py-2 border border-orange-300 flex items-center gap-[15px] bg-orange-300 rounded-s-[15px] rounded-e-[15px] px-3`,
                section: "",
                input:
                  " bg-orange-300 text-white outline-none placeholder:text-white",
              }}
              onFocus={() => setFocus("password")}
            />
          </div>
          <Link
            href="/"
            className="w-auto sm:text-[12px] lg:text-[14px] underline opacity-75"
          >
            Забули пароль
          </Link>
          <div className="flex justify-between gap-[15px]">
            <ButtonComponent
              title="Регістрація"
              type="button"
              className="flex-1"
              onClick={() => setState("registration")}
              typeButton="default"
            />
            <ButtonComponent
              title="Увійти"
              className="flex-1"
              typeButton="default"
            />
          </div>
        </form>
      </div>
    </MantineProvider>
  );
};

export default LoginComponent;
