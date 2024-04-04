"use client";
import React, { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import { motion } from "framer-motion";

interface CartNewsProps {
  title: string;
  description: string;
  image: string;
}

const CartNewsComponent: React.FC<CartNewsProps> = ({
  title,
  description,
  image,
}) => {
  const [isFlipped, setFlipped] = useState(false);
  const mobile = useMediaQuery("(max-width:768px)");

  const handleClickFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div
      className="w-full h-auto bg-white shadow-xl rounded-[15px] border-gray-3d00 border-[0.1px]"
      onClick={() => {
        mobile && handleClickFlip();
      }}
    >
      <div className="flex justify-between items-center bg-zinc-50 ps-[15px] h-[40px] rounded-t-[15px]">
        <p className="text-center text-[16px] md:text-[18px] lg:text-[22px] font-medium text-orange-300">
          {title}
        </p>
        <button
          className="hidden md:block h-full w-[150px] bg-zinc-100 text-orange-300 font-semibold hover:text-white hover:bg-orange-300 rounded-tr-[15px] z-20"
          onClick={() => {
            handleClickFlip();
            console.log(isFlipped);
          }}
        >
          {isFlipped ? "Назад" : "Детальніше"}
        </button>
      </div>
      {!isFlipped ? (
        <motion.div
          className="w-full h-[280px] lg:h-[420px] relative"
          initial={{ opacity: 1 }}
          animate={{ opacity: isFlipped ? 0 : 1, scale: isFlipped ? 0.8 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full h-full bg-no-repeat bg-cover">
            <Image
              src={image}
              alt="News Image"
              layout="fill"
              objectFit="cover"
              className="rounded-b-[15px]"
            />
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="h-[280px] lg:h-[420px] bg-white border-t-zinc-100 border-t-[2px] ps-[15px] py-[10px] pe-[30px] overflow-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: isFlipped ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>{description}</p>
        </motion.div>
      )}
    </div>
  );
};

export default CartNewsComponent;
