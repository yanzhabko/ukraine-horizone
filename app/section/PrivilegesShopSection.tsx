import React, { useState } from "react";
import { BreadCrumpComponent } from "@/components/BreadCrumpComponent";
import PrivilegeCardComponent from "@/components/PrivilegeCardComponent";
import Vip from "@/images/donate/vip.webp";
import Premium from "@/images/donate/premium.webp";
import Deluxe from "@/images/donate/deluxe.webp";
import ModalInformationComponent from "@/components/ModalInformationComponent";

import Bonus from "@/images/kit/bonus.png";
import VipKit from "@/images/kit/vip.png";
import PremiumKit from "@/images/kit/premium.png";
import DeluxeKit from "@/images/kit/deluxe.png";

const privileges = [
  {
    name: "Віп",
    price: "120",
    image: Vip,
    alt: "Vip",
    general: [
      "Використання кьолорового тексту на таблицях",
      "Відображення повідомлення в чаті від 3-ї особи",
      "3 регіона по 300к блоків",
    ],
    kits: [
      {
        title: "/kit bonus - 1 раз в 24 години",
        img: Bonus,
        alt: "/kit bonus",
      },
      {
        title: "/kit vip - 1 раз на місяць",
        img: VipKit,
        alt: "/kit vip",
      },
    ],
    additionalCommands: [
      "/back - повернення на місце смерті",
      "/clear - очищення інвентарю",
    ],
  },
  {
    name: "Преміум",
    price: "350",
    image: Premium,
    alt: "Premium",
    general: [
      "6 регіона по 300к блоків",
      "Можливість створити 4 точки дому",
      "Збереження очків досвіду",
      "Можливість телепортування за допомогою компасу",
      "Можливість зайти на заповнений сервер",
      "Створення точок варпів - 1 публічних та 5 приватних",
      "Всі можливості привілегії ВІП",
    ],
    kits: [
      {
        title: "/kit premium - 1 раз на місяць",
        img: PremiumKit,
        alt: "/kit premium",
      },
    ],
    additionalCommands: [
      "/heal - відновлення здоров'я",
      "/hat - надягнути предмет на голову",
      "/fly - режим польоту",
      "/feed - втамування голоду",
      "/ptime - змінити час доби",
      "/workbench - відкрити поратльний верстак",
      "/enderchest - відкрити ендер-скриню",
      "/pwather - змінити погоду",
    ],
  },
  {
    name: "Делюкс",
    price: "500",
    image: Deluxe,
    alt: "Deluxe",
    general: [
      "6 регіонів по 600к блоків",
      "Можливість встановити 6 точок дому",
      "Можливість полагодити інструменти та броню",
      "Створення точок варпів - 3 публічних та 10 приватних",
      "Можливість зайти на заповнений сервер",
      "Захист від АНТИ+АФК",
      "Всі можливості привілегії ВІП та ПРЕМІУМ",
    ],
    kits: [
      {
        title: "/kit deluxe - 1 раз на місяц",
        img: DeluxeKit,
        alt: "/kit deluxe",
      },
    ],
    additionalCommands: [
      "/tppos - телепортує вас до певного місця у світі",
      "/top - телепортує вас до найвищої точку світу",
      "/heal - відновлює ваше здоров'я без затримки",
      "/feed - втамовує ваш голод без затримки",
      "/repair - лагодження броні та інтсрументів також зберігаються усі зачарування",
      "/god - включення / вимкнення режиму бога",
    ],
  },
];

const PrivilegesShopSection = () => {
  const [open, setOpen] = useState(0);

  console.log(privileges[open - 1]);

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
      <div className="flex flex-wrap gap-[10px] w-full lg:justify-center items-center">
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
        <ModalInformationComponent
          opened={open}
          close={setOpen}
          prefix={privileges[open - 1].name}
          general={privileges[open - 1].general}
          kits={privileges[open - 1].kits}
          additionalCommands={privileges[open - 1].additionalCommands}
        />
      )}
    </div>
  );
};

export default PrivilegesShopSection;
