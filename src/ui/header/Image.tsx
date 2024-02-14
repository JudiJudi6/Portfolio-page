import React from "react";
import { motion } from "framer-motion";

export default function Image() {
  return (
    <motion.img
      animate={{
        borderRadius: [
          "60% 40% 30% 70%/60% 30% 70% 40%",
          "30% 60% 70% 40%/50% 60% 30% 60%",
          "60% 30% 30% 70%/60% 30% 70% 40%",
        ],
      }}
      transition={{
        repeat: Infinity, 
        duration: 10,
        ease: "linear",
      }}
      className="rounded-full w-72 border-solid border-2 border-stone-900"
      src="/p.jpg"
      alt=""
    />
  );
}
