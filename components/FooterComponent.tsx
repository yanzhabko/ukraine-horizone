import React from "react";

const FooterComponent = () => {
  return (
    <footer className="border-t-[2px] border-white h-auto text-neutral-600">
      <div className="container py-[50px] relative">
        <div className="w-[50%] grid gap-[20px]">
          <p>
            <b>UA</b> - Сервер Ukraine Horizon ніяк не повязаний з Mojang. Дохід
            з магазину передається власнику сервісу для підтримки сервера.
          </p>
          <p>
            <b>EN</b> - The Ukraine Horizon server is in no way associated with
            Mojang. Revenue from the store is transferred to the service owner
            to support the server.
          </p>
          <p className="font-bold">© Ukraine Horizon Усі права захищені</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
