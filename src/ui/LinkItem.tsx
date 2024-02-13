import React, { useState } from "react";
import { motion } from "framer-motion";

interface LinkItemProps {
  title: string;
}

export default function LinkItem({ title }: LinkItemProps) {
  const [hover, setHover] = useState<boolean>(false);
  const [hover2, setHover2] = useState<boolean>(false);

  return (
    <motion.button
      className="relative py-2 text-white font-semibold overflow-hidden"
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => {
        setHover(false);
        setHover2(true);
      }}
      onFocus={() => setHover(true)}
      onBlur={() => {
        setHover(false);
        setHover2(true);
      }}
    >
      <p className="opacity-60 hover:opacity-100 transition-opacity duration-300">
        {title}
      </p>
      <motion.div
        className="absolute bottom-[4px] left-0  w-full h-[2px] bg-gradient-to-r from-blue1 to-blue2 origin-right scale-0"
        animate={
          hover
            ? { scaleX: 1, transformOrigin: "left" }
            : { scaleX: 0, transformOrigin: "right" }
        }
        transition={{ ease: "easeInOut", delay: 0.2 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-[4px] left-0  w-full h-[2px] bg-gradient-to-r from-red1 to-red2 scale-0 origin-right"
        animate={
          hover
            ? { scaleX: 1, transformOrigin: "left" }
            : { scaleX: 0, transformOrigin: "right" }
        }
        transition={{ ease: "easeInOut" }}
      ></motion.div>
    </motion.button>
  );
}
