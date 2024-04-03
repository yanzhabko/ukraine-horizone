import RulesComponent from "@/components/RulesComponent";
import React from "react";
import { rules } from "@/data";

const page = () => {
  return (
    <>
      <RulesComponent rules={rules} />
    </>
  );
};

export default page;
