import React, { useState, useEffect } from "react";
import { Card, ProgressCircle } from "@tremor/react";
import { serversMinecraft } from "@/data/index";
import axios from "axios";

const MonitoringComponent = () => {
  const [onlineUsers, setOnlineUsers] = useState(0);
  const [maxOnlineUsers, setMaxOnlineUsers] = useState(0);

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await axios.get(
          "https://api.mcstatus.io/v2/status/java/195.35.56.205:25567"
        );
        setOnlineUsers(response.data.players.online);
        setMaxOnlineUsers(response.data.players.max);
      } catch (error) {
        console.error("Сталася помилка при отриманні даних:", error);
      }
    };
    fetchServerStatus();

    const intervalId = setInterval(fetchServerStatus, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white relative flex justify-center pb-6 pt-10 rounded-2xl shadow-lg">
      <h1 className="bg-orange-300 px-5 py-3 rounded-[2rem] absolute top-[-25px] text-white font-bold">
        Моніторинг
      </h1>
      <div className="flex flex-col items-start gap-4">
        <div className="flex justify-center items-center gap-[20px]">
          <ProgressCircle
            value={(onlineUsers / maxOnlineUsers) * 100}
            color="orange-300"
          >
            <div className="flex flex-col items-center gap-0">
              <span className="text-[1rem] font-semibold">{onlineUsers}</span>
              <span className="text-[0.7rem] text-neutral-600">
                {maxOnlineUsers}
              </span>
            </div>
          </ProgressCircle>
          <div className="flex flex-col text-center w-[130px]">
            <p className="font-semibold text-[1.2rem]">ANIGMA</p>
            <p className="text-[0.65rem]">Technomagic</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitoringComponent;
