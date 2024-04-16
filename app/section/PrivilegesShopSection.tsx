import React, { useState } from "react";
import { BreadCrumpComponent } from "@/components/BreadCrumpComponent";
import PrivilegeCardComponent from "@/components/PrivilegeCardComponent";
import Vip from "@/images/donate/vip.webp";
import Premium from "@/images/donate/premium.webp";
import Deluxe from "@/images/donate/deluxe.webp";
import ModalInformationComponent from "@/components/ModalInformationComponent";

const privileges = [
  {
    name: "Vip",
    price: "120",
    image: Vip,
    alt: "Vip",
  },
  {
    name: "Premium",
    price: "350",
    image: Premium,
    alt: "Premium",
  },
  {
    name: "Deluxe",
    price: "500",
    image: Deluxe,
    alt: "Deluxe",
  },
];

const PrivilegesShopSection = () => {
  const [open, setOpen] = useState(0);

  const handleClick = (index: number) => {
    setOpen(index);
  };

  return (
    <div className="flex flex-col items-center gap-[35px]">
      <BreadCrumpComponent
        links={[
          { title: "Магазин", href: "/shop" },
          { title: "Привілегії", href: "" },
        ]}
      />
      <div className="flex flex-wrap gap-[15px] lg:justify-center items-center">
        {privileges.map((item, index) => (
          <PrivilegeCardComponent
            key={index}
            name={item.name}
            price={item.price}
            image={item.image}
            alt={item.alt}
            onClick={() => handleClick(index + 1)}
          />
        ))}
      </div>
      {open !== 0 && (
        <ModalInformationComponent opened={open} close={setOpen} />
      )}
    </div>
  );
};

export default PrivilegesShopSection;
