import React from "react";
import ShopSection from "../section/shops-section/ShopSection";

export async function generateMetadata({}) {
  return { title: "Магазин | UkraineHorizon" };
}

const Shop = () => {
  return (
    <>
      <ShopSection />
    </>
  );
};

export default Shop;
