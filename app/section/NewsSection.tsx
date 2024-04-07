"use client";
import React, { useEffect, useRef, useState } from "react";
import CartNewsComponent from "@/components/servers-section/CartNewsComponent";
import { MantineProvider, Pagination } from "@mantine/core";
import useScrollToTop from "@/hook/useScrollToTop";
import { news } from "@/data";

const NewsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * 5;
  const limitedNews = news.slice(startIndex, startIndex + 5);
  const paginationRef = useRef(null);
  const { setScrollToTop, scrollRef } = useScrollToTop();

  const handleClickPage = (page: any) => {
    setCurrentPage(page);
    setScrollToTop(true);
  };

  useEffect(() => {
    if (paginationRef.current) {
      const divElement = paginationRef.current as HTMLElement;
      const buttonActive = divElement.querySelector<HTMLButtonElement>(
        "button[data-active=true]"
      );
      const buttonDisabled = divElement.querySelector<HTMLButtonElement>(
        "button[data-disabled=true]"
      );

      buttonActive &&
        buttonActive.insertAdjacentHTML(
          "beforeend",
          `<style>
          button[data-active=true]{
            background-color: rgb(253 186 116);
            color: #fff;
          }
        </style>`
        );

      buttonDisabled &&
        buttonDisabled.insertAdjacentHTML(
          "beforeend",
          `<style>
          button[data-disabled=true]{
            opacity: 0.4;
            cursor: not-allowed
          }
        </style>`
        );
    }
  });

  return (
    <MantineProvider>
      <div
        className="flex flex-col gap-[90px] mt-[25px] scroll-mt-[100px]"
        ref={scrollRef}
      >
        {limitedNews.map((item, index) => (
          <CartNewsComponent
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
        {news.length > 5 ? (
          <Pagination
            total={Math.ceil(news.length / 5)}
            value={currentPage}
            onChange={handleClickPage}
            ref={paginationRef}
            classNames={{
              root: "flex items-center justify-center *:flex *:gap-[15px]",
              control:
                "flex justify-center items-center rounded-[5px] bg-white h-[2rem] min-w-[2rem] text-orange-300 border-small border-orange-300 *:text- *:!h-[18px] *:!w-[18px]",
            }}
          />
        ) : null}
      </div>
    </MantineProvider>
  );
};

export default NewsSection;
