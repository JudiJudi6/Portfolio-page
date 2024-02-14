import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full bg-bg z-50 overflow-hidden "
      animate={{
        opacity: 0,
        transitionEnd: {
          display: "none",
        },
      }}
      initial={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.4 }}
    >
      <motion.div
        className="h-full w-full bg-gradient-to-r from-blue3 to-blue4"
        animate={{ translateX: "100%" }}
        initial={{ translateX: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      ></motion.div>
    </motion.div>
  );
}
