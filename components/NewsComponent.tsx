import React from "react";
import CartNewsComponent from "./CartNewsComponent";

const news = [
  {
    title: "Update 2023",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto.",
    image:
      "https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Update-Aquatic_1280x768.jpg",
  },
  {
    title: "Update 2024",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto.",
    image:
      "https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Update-Aquatic_1280x768.jpg",
  },
  {
    title: "Update 2025",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto.",
    image:
      "https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Update-Aquatic_1280x768.jpg",
  },
  {
    title: "Update 2026",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iustoLorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iustoLorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iustoLorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iustoLorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nobis voluptates eaque reiciendis dicta labore, autem quia magni quas saepe veritatis minus at dolor unde mollitia cumque iure repellendus iusto",
    image:
      "https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Update-Aquatic_1280x768.jpg",
  },
];

const NewsComponent = () => {
  return (
    <div className="relative flex flex-col gap-[20px] pb-[50px] lx:pb-[100px]">
      <h1 className="text-[24px] text-center sm:text-[32px] text-orange-400 font-bold lg:text-start">
        Новини
      </h1>
      <div className="flex flex-col gap-[50px]">
        {news.map((item, index) => (
          <CartNewsComponent
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsComponent;
