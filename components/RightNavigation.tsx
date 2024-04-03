"use client";
import React, { useState } from "react";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";
import MonitoringComponent from "./MonitoringComponent";

const RightNavigation = () => {
  const [changeForm, setChangeForm] = useState<"login" | "registration">(
    "login"
  );

  const handleClickChangeForm = (type: any) => {
    setChangeForm(type);
  };

  return (
    <aside className="hidden lg:block lg:flex-2 w-[275px]">
      <nav className="flex flex-col gap-[55px]">
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
