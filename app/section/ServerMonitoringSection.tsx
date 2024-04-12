"use client";
import React, { useEffect, useState } from "react";
import ServersCartComponent from "@/components/servers-section/ServersCartComponent";
import { fetchServerStatus } from "@/service/fetchServerStatus";
import { useRouter } from "next/navigation";
import { serversMinecraft } from "@/data";

const ServerMonitoringSection = () => {
  const [onlineUsers, setOnlineUsers] = useState(0);
  const [maxOnlineUsers, setMaxOnlineUsers] = useState(0);
  const router = useRouter();

  const handleServerClick = (name: string) => {
    router.push(`/servers/${name}`);
  };

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
    <div className="px-[40px] bg-white rounded-2xl py-[40px] relative shadow-lg mt-[25px]">
      <h1 className="absolute bg-orange-300 w-[70%] left-[15%] top-[-25px] text-center px-[20px] py-[10px] rounded-[20px] text-white font-bold">
        Сервера майкрафт
      </h1>
      {serversMinecraft.map((item, index) => (
        <ServersCartComponent
          key={index}
          nameServer={item.nameServer}
          title={item.category}
          onlineUsers={onlineUsers}
          maxOnlineUsers={maxOnlineUsers}
          onClick={() => handleServerClick(item.nameServer)}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default ServerMonitoringSection;
