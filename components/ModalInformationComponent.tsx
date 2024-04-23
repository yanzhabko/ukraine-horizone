import React from "react";
import { MantineProvider, Modal } from "@mantine/core";
import Image from "next/image";

interface ModalInformationProps {
  opened: any;
  close: (number: number) => void;
  prefix: string;
  general: string[];
  kits: {
    title: string;
    img: any;
    alt: string;
  }[];
  additionalCommands: string[];
}

const ModalInformationComponent: React.FC<ModalInformationProps> = ({
  opened,
  close,
  prefix,
  general,
  kits,
  additionalCommands,
}) => {
  return (
    <MantineProvider>
      <Modal
        opened={opened}
        onClose={() => close(0)}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        classNames={{
          root: "fixed top-0 h-[100vh] w-[100vw]",
          overlay: "w-full h-full bg-black !opacity-30 z-10",
          inner: "w-full h-full z-1000",
          content:
            "w-[95%] sm:w-[80%] xl:w-[35%] mx-auto  py-[32px] md:px-[82px] absolute z-10 left-0 right-0 top-[10%] sm:top-[13%] flex flex-col h-auto bg-white shadow-lg rounded-[7px]",
          header: "flex items-end justify-end relative",
          close:
            "w-[35px] h-[35px] absolute -top-[25px] right-0 md:-right-[80px] *:text-orange-300 *:font-bold",
        }}
      >
        <div className="w-full flex-col gap-[5px] flex justify-center items-center">
          <h1 className="font-bold text-[32px]">{prefix.toUpperCase()}</h1>
          <p className="mb-[10px]">Детальніше про привілегію</p>
          <div className="flex flex-col gap-[15px] h-[500px] overflow-scroll px-[20px]">
            <div className="flex flex-col gap-[8px] bg-orange-300 px-[10px] py-[15px] rounded-md">
              <p className="text-black font-medium text-[18px] mb-[5px]">
                Загальні
              </p>
              <div className="flex flex-col gap-[8px] text-black ">
                <p className="bg-orange-200 rounded-md px-[8px] py-[7px]">
                  Префікс{" "}
                  <span
                    className={`${
                      prefix == "Віп"
                        ? "text-orange-500"
                        : prefix == "Преміум"
                        ? "text-violet-700"
                        : "text-green-500"
                    } font-medium`}
                  >
                    [{prefix.toUpperCase()}]
                  </span>
                </p>
                {general.map((_, index) => (
                  <p
                    key={index}
                    className="bg-orange-200 rounded-md px-[8px] py-[7px]"
                  >
                    {general[index]}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[8px] bg-orange-300 px-[10px] py-[15px] rounded-md text-black">
              <p className="text-black font-medium text-[18px] mb-[5px]">
                Кіти
              </p>
              {kits.map((item, index) => (
                <div
                  key={index}
                  className="bg-orange-200 rounded-md px-[8px] py-[7px]"
                >
                  <p>{item.title}</p>

                  <Image
                    src={item.img}
                    alt={item.alt}
                    className="h-[130px] w-[250px] bg-cover bg-no-repeat"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-[8px] bg-orange-300 px-[10px] py-[15px] rounded-md text-black">
              <p className="text-black font-medium text-[18px] mb-[5px]">
                Додаткові команди
              </p>
              {additionalCommands.map((item, index) => (
                <div
                  key={index}
                  className="bg-orange-200 rounded-md px-[8px] py-[7px]"
                >
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </MantineProvider>
  );
};

export default ModalInformationComponent;
