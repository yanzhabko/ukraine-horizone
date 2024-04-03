import React, { useState, useEffect } from "react";
import { Card, ProgressCircle } from "@tremor/react";
import { serversMinecraft } from "@/data/index";

const MonitoringComponent = () => {
  const totalPlayers = (300 / 2000) * 100;

  return (
    <div className="bg-white relative flex justify-center pb-6 pt-10 rounded-2xl shadow-lg">
      <h1 className="bg-orange-300 px-5 py-3 rounded-[2rem] absolute top-[-25px] text-white font-bold">
        Моніторинг
      </h1>
      <div className="flex flex-col items-start gap-4">
        {serversMinecraft.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center gap-[20px]"
          >
            <ProgressCircle
              value={(item.online / item.totalNumber) * 100}
              color="orange-300"
            >
              <div className="flex flex-col items-center gap-0">
                <span className="text-[1rem] font-semibold">{item.online}</span>
                <span className="text-[0.7rem] text-neutral-600">
                  {item.totalNumber}
                </span>
              </div>
            </ProgressCircle>
            <div className="flex flex-col text-center w-[130px]">
              <p className="font-semibold text-[1.2rem]">{item.name}</p>
              <p className="text-[0.65rem]">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonitoringComponent;
