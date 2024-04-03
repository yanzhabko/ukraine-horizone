// "use client";
// import React, { useState } from "react";
// import { useMediaQuery } from "@mantine/hooks";
// import Image from "next/image";
// import { motion } from "framer-motion";

// interface CartNewsProps {
//   title: string;
//   description: string;
//   image: string;
// }

// const CartNewsComponent: React.FC<CartNewsProps> = ({
//   title,
//   description,
//   image,
// }) => {
//   const [isFlipped, setFlipped] = useState(false);
//   const mobile = useMediaQuery("(max-width:640px)");

//   const handleClickFlip = () => {
//     setFlipped(!isFlipped);
//   };

//   return (
//     <div
//       className="w-full h-auto bg-white shadow-lg"
//       onClick={() => {
//         mobile ? handleClickFlip() : null;
//       }}
//     >
//       <div className="flex justify-between items-center bg-white h-[40px] ps-[15px]">
//         <p className="text-[24px] font-medium text-orange-300">{title}</p>
//         <button
//           className="h-full w-[150px] bg-zinc-50 text-orange-300 font-semibold hover:text-white hover:bg-orange-300"
//           onClick={handleClickFlip}
//         >
//           {isFlipped ? "Назад" : "Детальніше"}
//         </button>
//       </div>
//       {!isFlipped ? (
//         <Image
//           src={image}
//           alt="News Image"
//           width={100}
//           height={100}
//           className="bg-no-repeat bg-cover w-full h-[420px]"
//         />
//       ) : (
//         <div className="h-[420px] bg-white border-t-zinc-100 border-t-[2px] ps-[15px] pe-[30px]">
//           <p className="">{description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartNewsComponent;

"use client";
import React, { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import { motion } from "framer-motion";

interface CartNewsProps {
  title: string;
  description: string;
  image: string;
}

const CartNewsComponent: React.FC<CartNewsProps> = ({
  title,
  description,
  image,
}) => {
  const [isFlipped, setFlipped] = useState(false);
  const mobile = useMediaQuery("(max-width:640px)");

  const handleClickFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className="w-full h-auto bg-white shadow-2xl">
      <div className="flex justify-between items-center bg-white h-[40px] ps-[15px]">
        <p className="text-[24px] font-medium text-orange-300">{title}</p>
        <button
          className="h-full w-[150px] bg-zinc-50 text-orange-300 font-semibold hover:text-white hover:bg-orange-300"
          onClick={handleClickFlip}
        >
          {isFlipped ? "Назад" : "Детальніше"}
        </button>
      </div>
      {!isFlipped ? (
        <motion.div
          className="w-full h-[420px] relative"
          initial={{ opacity: 1 }}
          animate={{ opacity: isFlipped ? 0 : 1, scale: isFlipped ? 0.8 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full h-full bg-no-repeat bg-cover">
            <Image
              src={image}
              alt="News Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="h-[420px] bg-white border-t-zinc-100 border-t-[2px] ps-[15px] py-[10px] pe-[30px] overflow-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: isFlipped ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>{description}</p>
        </motion.div>
      )}
    </div>
  );
};

export default CartNewsComponent;
