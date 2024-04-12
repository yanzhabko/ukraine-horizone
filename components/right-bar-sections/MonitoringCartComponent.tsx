import React from "react";
import { ProgressCircle } from "@tremor/react";
import Link from "next/link";

interface MonitoringCartProps {
  serverName: string;
  category: string;
  onlineUsers: number;
  maxOnlineUsers: number;
}

const MonitoringCartComponent: React.FC<MonitoringCartProps> = ({
  serverName,
  category,
  onlineUsers,
  maxOnlineUsers,
}) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex justify-center items-center gap-[20px]">
        <Link href="/servers/anigma">
          <ProgressCircle
            value={(onlineUsers / maxOnlineUsers) * 100}
            color="orange-300"
            className="*:h-[80px] *:w-[80px]"
            size="md"
          >
            <div className="flex flex-col justify-center items-center mx-auto">
              <span className="text-[1rem] font-semibold">{onlineUsers}</span>
              <span className="text-[0.7rem] text-neutral-600">
                {maxOnlineUsers}
              </span>
            </div>
          </ProgressCircle>
        </Link>
        <Link
          href="/servers/anigma"
          className="flex flex-col text-center w-[130px]"
        >
          <p className="font-semibold text-[20px] lg:text-[26px] uppercase">
            {serverName}
          </p>
          <p className="text-[14px]">{category}</p>
        </Link>
      </div>
    </div>
  );
};

export default MonitoringCartComponent;
