"use client";
import React, { useState } from "react";
import LoginComponent from "@/components/right-bar-sections/LoginComponent";
import RegisterComponent from "@/components/right-bar-sections/RegisterComponent";
import MonitoringComponent from "@/components/right-bar-sections/MonitoringComponent";

const RightNavigation = () => {
  const [changeForm, setChangeForm] = useState<"login" | "registration">(
    "login"
  );

  const handleClickChangeForm = (type: any) => {
    setChangeForm(type);
  };

  return (
    <aside className="hidden lg:block lg:flex-2 lg:w-[320px] xl:w-[350px] mt-[25px]">
      <nav className="flex flex-col gap-[70px]">
        {changeForm === "login" ? (
          <LoginComponent setState={handleClickChangeForm} />
        ) : (
          <RegisterComponent setState={handleClickChangeForm} />
        )}

        <MonitoringComponent />
      </nav>
    </aside>
  );
};

export default RightNavigation;
