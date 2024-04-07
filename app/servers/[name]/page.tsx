import React from "react";
import { serversDescription } from "@/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const servers = [{ name: "ANIGMA" }, { name: "GGG" }, { name: "GG2G" }];
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

  console.log(server);
  return <div>{params.name}</div>;
}
