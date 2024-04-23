import React from "react";
import LoginComponent from "@/components/right-bar-sections/LoginComponent";
import MonitoringComponent from "@/components/right-bar-sections/MonitoringComponent";
import SocialNetworkComponent from "@/components/right-bar-sections/SocialNetworkComponent";

const RightNavigation = () => {
  return (
    <aside className="hidden lg:block lg:flex-2 lg:w-[320px] xl:w-[350px] mt-[25px]">
      <nav className="flex flex-col gap-[70px]">
        <LoginComponent />
        <MonitoringComponent />
        <SocialNetworkComponent />
      </nav>
    </aside>
  );
};

export default RightNavigation;
