import React from "react";

interface InputProps {
  type: "text" | "password";
  title: string;
}

const InputComponent = () => {
  return (
    <div>
      <input>InputComponent</input>
    </div>
  );
};

export default InputComponent;
