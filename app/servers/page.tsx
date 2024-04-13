import React from "react";
import ServerMonitoringSection from "../section/ServerMonitoringSection";

export async function generateMetadata({}) {
  return { title: "Cервера | UkraineHorizon" };
}

const page = () => {
  return (
    <>
      <ServerMonitoringSection />
    </>
  );
};

export default page;
