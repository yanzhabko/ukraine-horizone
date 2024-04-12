import React from "react";
import { serversDescription } from "@/data";
import { notFound } from "next/navigation";
import ServerInformationSection from "@/app/section/ServerInformationSection";

export async function generateStaticParams() {
  const servers = [{ name: "anigma" }];
  return servers.map((server) => ({
    name: server.name.toString(),
  }));
}

function getServer(name: string) {
  const res = serversDescription.filter((server) => server.nameServer === name);
  return res;
}

export default function Servers({ params }: { params: any }) {
  const server = getServer(params.name);

  if (server.length === 0) {
    return notFound();
  }

  return (
    <>
      {server.map((item, index) => (
        <ServerInformationSection
          key={index}
          name={item.nameServer.toUpperCase()}
          category={item.category}
          information={item.information}
          description={item.desctiption}
          image={item.image}
          mods={item.mods}
        />
      ))}
    </>
  );
}
