import React from "react";

type ServersProps = {
  params: {
    serverName: string;
  };
};

const Servers: React.FC<ServersProps> = ({ params }) => {
  console.log(params);
  return <div>{params.serverName}</div>;
};

export default Servers;
