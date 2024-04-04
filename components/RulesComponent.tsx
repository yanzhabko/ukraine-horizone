"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Scales from "@/images/icons/scales-white.svg";
import Arrow from "@/images/icons/arrow.svg";

interface RuleProps {
  rules: {
    name: string;
    descriptions: {
      title: string;
      warning?: string;
    }[];
  }[];
}

const RulesComponent: React.FC<RuleProps> = ({ rules }) => {
  const [openRuleIndex, setOpenRuleIndex] = useState<number | null>(null);
  const openRuleRef = useRef<HTMLDivElement>(null);
  const correctRules = rules.slice(0, rules.length - 1);
  const lastRule = rules[rules.length - 1];

  const handleClickOpenRules = (index: number) => {
    setOpenRuleIndex(openRuleIndex === index ? null : index);
  };

  useEffect(() => {
    if (openRuleRef.current && openRuleIndex !== null) {
      openRuleRef.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }, [openRuleIndex]);

  return (
    <div className="px-[40px] bg-white rounded-2xl py-[40px] relative shadow-lg mt-[25px]">
      <div className="absolute bg-orange-300 w-[70%] left-[15%] top-[-25px] flex items-center text-center px-[20px] py-[10px] rounded-[20px]">
        <Image src={Scales} alt="Image" className="w-[28px] h-[28px]" />
        <h1 className="flex-1 text-white font-bold">Правила серверу</h1>
      </div>
      <div className="flex flex-col gap-[30px] w-full">
        {correctRules.map((rule, index: number) => (
          <div key={index} className="flex flex-col w-full">
            <div
              className="font-medium flex justify-between w-full cursor-pointer"
              key={index}
              onClick={() => handleClickOpenRules(index)}
            >
              <div>
                {index + 1}. {rule.name}
              </div>
              <Image src={Arrow} alt="Open rules" />
            </div>
            {openRuleIndex === index ? (
              <div
                className="flex flex-col gap-[15px] ps-3 mt-2 scroll-mt-[150px]"
                ref={openRuleRef}
              >
                {rule.descriptions.map((description, key: number) => (
                  <div key={key} className="flex flex-col gap-[5px]">
                    <p className="text-[18px]">
                      {index + 1}.{key + 1} {description.title}
                    </p>
                    <p className="text-[16px] font-medium text-orange-400">
                      {description.warning}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
        <div className="flex flex-col gap-[5px]">
          {lastRule?.descriptions.map((item, index) => (
            <p key={index}>{item.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RulesComponent;
