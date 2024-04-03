import React, { ReactNode } from "react";

export const ImageProvider = ({ children }: { children: ReactNode }) => {
  return <div className="body-image gap-[70px] lg:gap-[100px]">{children}</div>;
};
