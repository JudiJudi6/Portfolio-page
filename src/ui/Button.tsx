import { motion } from "framer-motion";
import React, { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <motion.button
      className="relative flex justify-center items-center w-[150px] h-[50px] z-10"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      onFocus={() => setIsHover(true)}
      onBlur={() => setIsHover(false)}
      onClick={onClick}
    >
      <div className="absolute w-full h-full  bg-gradient-to-r from-red1 to-red2 overflow-hidden">
        <motion.div
          animate={isHover ? { translateX: "100%" } : { translateX: "-100%" }}
          transition={{ ease: "easeInOut" }}
          className="absolute w-full h-full bg-gradient-to-r from-blue1 to-blue2 -translate-x-full"
        ></motion.div>
      </div>
      <p className="relative z-10 tracking-wide font-semibold">{children}</p>
      <motion.div
        animate={isHover ? { translateX: "30%" } : { translateX: "0%" }}
        className="absolute -right-4 text-3xl"
      >
        <HiArrowLongRight />
      </motion.div>
    </motion.button>
  );
}
