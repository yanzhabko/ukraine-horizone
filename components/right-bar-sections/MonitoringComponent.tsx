import React, { useState, useEffect } from "react";
// import { ProgressCircle } from "@tremor/react";
import axios from "axios";
import MonitoringCartComponent from "./MonitoringCartComponent";
import { serversMinecraft } from "@/data";
// import Link from "next/link";

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
      {serversMinecraft.map((server, index) => (
        <MonitoringCartComponent
          key={index}
          serverName={server.nameServer}
          category={server.category}
          maxOnlineUsers={maxOnlineUsers}
          onlineUsers={onlineUsers}
        />
      ))}
    </div>
  );
};

export default MonitoringComponent;
