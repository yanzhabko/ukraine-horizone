import React from "react";
import RegisterSection from "../section/RegisterSection";

export async function generateMetadata({}) {
  return { title: "Регістрація | ukrainehorizon" };
}

const page = () => {
  return (
    <>
      <RegisterSection />
    </>
  );
};

export default page;
