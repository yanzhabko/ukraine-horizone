import React from "react";
import RulesSection from "../section/RulesSection";
import { rules } from "@/data";

const page = () => {
  return (
    <>
      <RulesSection rules={rules} />
    </>
  );
};

export default page;
