import React from "react";
import Image from "next/image";
import Emoji from "@/images/icons/kissing_heart.png";
import CategoriesCardComponent from "@/components/shop-section/CategoriesCardComponent";
import { categories } from "@/data/index";

const SelectCategoriesSection = () => {
  return (
    <>
      <div className="flex flex-col gap-[20px]">
        {categories.map((item, index) => (
          <CategoriesCardComponent
            key={index}
            href={item.href}
            image={item.image}
            alt={item.alt}
            title={item.title}
            subTitle={item.subTitle}
          />
        ))}
      </div>
      <p className="rounded-[8px] relative text-center mx-auto mt-[40px] py-[25px] px-[15px] xl:py-[20px] xl:px-[15px] h-auto bg-gradient-to-t w-full md:bg-gradient-to-r from-emerald-300 to-yellow-200 md:w-[90%]">
        <Image
          src={Emoji}
          alt="Emoji"
          width={100}
          height={100}
          className="absolute -left-[10px] -top-[20px] w-[50px] h-[50px]"
        />
        Донат - це матеріальне пожертвування для розвитку проєкту. Будь-якому
        проєкту потрібна така підтримка. Вона допомагає розробці нових
        модифікацій та виправлення багів. Над проектом працює велика команда
        розробників, яка прагне зробити гру максимальною приємною для кожного
        гравця. За пожертвування проекту ви можете отримати привілеї з
        додатковими можливостями, унікальні ігрові речі.
      </p>
    </>
  );
};

export default SelectCategoriesSection;
