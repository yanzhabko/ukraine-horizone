import React from "react";
import RulesSection from "../section/RulesSection";
import { rules } from "@/data";

export async function generateMetadata({}) {
  return { title: "Правила | UkraineHorizon" };
}

const page = () => {
  return (
    <>
      <RulesSection rules={rules} />
    </>
  );
};

export default page;
