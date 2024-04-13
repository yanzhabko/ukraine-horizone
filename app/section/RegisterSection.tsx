"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Input, MantineProvider } from "@mantine/core";
import ButtonComponent from "@/components/ButtonComponent";
import UserIcon from "@/images/icons/user.svg";
import EmailIcon from "@/images/icons/mail.svg";
import LockIcon from "@/images/icons/lock.svg";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { InputComponent } from "@/components/InputComponent";

interface FormValues {
  userName: string;
  email: string;
  password: string;
  confirmedPassword: string;
}

const RegisterSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [focus, setFocus] = useState<
    "userName" | "email" | "password" | "confirmedPassword" | null
  >(null);
  const [disabled, setDisabled] = useState(false);

  const handleFocus = (
    field: "userName" | "email" | "password" | "confirmedPassword"
  ) => {
    setFocus(field);
  };

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <MantineProvider>
      <div className="bg-white flex justify-center w-auto relative h-auto rounded-2xl pb-8 pt-10 px-2 shadow-lg mt-[25px]">
        <h1 className="bg-orange-300 px-5 py-3 rounded-[2rem] absolute top-[-25px] text-white font-bold">
          Регістрація
        </h1>
        <form
          className="flex flex-col gap-[15px] text-end w-[280px] lg:w-[320px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputComponent
            name="userName"
            register={register}
            icon={UserIcon}
            placeholder="Введіть нікнейм"
            onFocused={() => handleFocus("userName")}
            focused={focus}
          />
          <InputComponent
            name="email"
            register={register}
            icon={EmailIcon}
            placeholder="Введіть емаіл"
            onFocused={() => handleFocus("email")}
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
          <InputComponent
            name="confirmedPassword"
            register={register}
            icon={LockIcon}
            placeholder="Введіть нікнейм"
            onFocused={() => handleFocus("confirmedPassword")}
            focused={focus}
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
            disabled={disabled}
            onClick={() => handleSubmit(onSubmit)()}
          />
        </form>
      </div>
    </MantineProvider>
  );
};

export default RegisterSection;
