import React from "react";
import RegisterSection from "../section/RegisterSection";

export async function generateMetadata({}) {
  return { title: "Регістрація | UkraineHorizon" };
}

const page = () => {
  return (
    <>
      <RegisterSection />
    </>
  );
};

export default page;
