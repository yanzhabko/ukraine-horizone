"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MantineProvider } from "@mantine/core";
import { useForm, SubmitHandler } from "react-hook-form";
import UserIcon from "@/images/icons/user.svg";
import LockIcon from "@/images/icons/lock.svg";
import ButtonComponent from "@/components/ButtonComponent";
import { InputComponent } from "../InputComponent";

interface LoginFormValues {
  login: string;
  password: string;
}

const LoginComponent: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<LoginFormValues>();
  const [focus, setFocus] = useState<null | "login" | "password">(null);

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log(data);
    reset();
  };

  const handleFocus = (field: "login" | "password") => {
    setFocus(field);
  };

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
          <div className="flex flex-col gap-4">
            <InputComponent
              name="login"
              register={register}
              icon={UserIcon}
              placeholder="Введіть логін"
              onFocused={() => handleFocus("login")}
              focused={focus}
            />
            <InputComponent
              name="password"
              register={register}
              icon={LockIcon}
              placeholder="Введіть пароль"
              onFocused={() => handleFocus("password")}
              focused={focus}
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
              className="flex-1 text-center"
              typeButton="default"
              href="/register"
              tag="a"
            />
            <ButtonComponent
              title="Увійти"
              className="flex-1"
              typeButton="default"
              onClick={() => {
                handleSubmit(onSubmit)();
              }}
            />
          </div>
        </form>
      </div>
    </MantineProvider>
  );
};

export default LoginComponent;
