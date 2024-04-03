import Image from "next/image";
import BackgroundPrimary from "../images/header-bg.png";
import BackgroundLeft from "@/images/lines-left.png";

const BackgroundComponent = () => {
  return (
    <Image
      src={BackgroundLeft}
      alt="Images"
      className="absolute w-full h-[100vh] z-[-3] bg-no-repeat"
    />
  );
};

export default BackgroundComponent;
