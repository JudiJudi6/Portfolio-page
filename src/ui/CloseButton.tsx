import React, { useState } from "react";
import { motion } from "framer-motion";

interface CloseButtonProps {
  onClick: () => void;
}

export default function CloseButton({ onClick }: CloseButtonProps) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <motion.button
      className="relative p-5"
      onClick={onClick}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <motion.div
        className={`absolute top-1/2 left-1/2  w-8 h-[3px] rounded-full transition-colors duration-300 ${
          hover ? "bg-red1" : "bg-bg md800:bg-white"
        }`}
        animate={
          hover
            ? { rotate: "45deg", translateX: "-50%", translateY: "-50%" }
            : { rotate: "-45deg", translateX: "-50%", translateY: "-50%" }
        }
        transition={{ ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className={`absolute top-1/2 left-1/2 w-8 h-[3px] rounded-full transition-colors duration-300 ${
          hover ? "bg-red1" : "bg-bg md800:bg-white"
        }`}
        animate={
          hover
            ? { rotate: "-45deg", translateX: "-50%", translateY: "-50%" }
            : { rotate: "45deg", translateX: "-50%", translateY: "-50%" }
        }
        transition={{ ease: "easeInOut" }}
      ></motion.div>
    </motion.button>
  );
}
