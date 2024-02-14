import React, { useState } from "react";
import { motion } from "framer-motion";

interface LinkItemProps {
  title: string;
}

export default function LinkItem({ title }: LinkItemProps) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <motion.button
      className="relative py-2 text-white font-semibold overflow-hidden"
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      <p className="opacity-60 hover:opacity-100 transition-opacity duration-300">
        {title}
      </p>
      <motion.div
        className={`absolute bottom-[4px] left-0  w-full h-[2px] bg-gradient-to-r from-blue1 to-blue2 scale-0 ${
          hover ? "origin-left" : "origin-right"
        }`}
        animate={hover ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ ease: "easeInOut", delay: 0.2 }}
      ></motion.div>
      <motion.div
        className={`absolute bottom-[4px] left-0  w-full h-[2px] bg-gradient-to-r from-red1 to-red2 scale-0 ${
          hover ? "origin-left" : "origin-right"
        }`}
        animate={hover ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ ease: "easeInOut" }}
      ></motion.div>
    </motion.button>
  );
}
