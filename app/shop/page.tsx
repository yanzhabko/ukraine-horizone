import React from "react";
import ShopSection from "../section/ShopSection";

export async function generateMetadata({}) {
  return { title: "Магазин | ukrainehorizon" };
}

const page = () => {
  return (
    <>
      <ShopSection />
    </>
  );
};

export default page;
