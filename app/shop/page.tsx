import React from "react";
import ShopSection from "../section/ShopSection";

export async function generateMetadata({}) {
  return { title: "Магазин | UkraineHorizon" };
}

const page = () => {
  return (
    <>
      <ShopSection />
    </>
  );
};

export default page;
