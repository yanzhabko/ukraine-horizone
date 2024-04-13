import React from "react";
import RegisterSection from "../section/RegisterSection";

export async function generateMetadata({}) {
  return { title: "Регістрація | UkraineHorizon" };
}

const Register = () => {
  return (
    <>
      <RegisterSection />
    </>
  );
};

export default Register;
