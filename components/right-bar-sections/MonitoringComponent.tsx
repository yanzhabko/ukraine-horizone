"use client";
import React, { useState, useEffect } from "react";
import MonitoringCartComponent from "./MonitoringCartComponent";
import { serversMinecraft } from "@/data";
import { fetchServerStatus } from "@/service/fetchServerStatus";``

const MonitoringComponent = () => {
  const [onlineUsers, setOnlineUsers] = useState(0);
  const [maxOnlineUsers, setMaxOnlineUsers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const { onlineUsers, maxOnlineUsers } = await fetchServerStatus();
      setOnlineUsers(onlineUsers);
      setMaxOnlineUsers(maxOnlineUsers);
    };
    fetchData();

    const intervalId = setInterval(fetchData, 60000);

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
