import React, { ReactNode } from "react";

export const ImageProvider = ({ children }: { children: ReactNode }) => {
  return <div className="body-image">{children}</div>;
};
