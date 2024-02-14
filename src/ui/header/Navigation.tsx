import React from "react";
import DeskNav from "./DeskNav";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <motion.div
      className="relative z-50 w-full"
      animate={{ translateY: 0, opacity: 1 }}
      initial={{ translateY: -88, opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.4, delay: 1.2 }}
    >
      <div className="hidden sm:block w-full">
        <DeskNav />
      </div>
      <div className="sm:hidden w-full">
        <MobileNav />
      </div>
    </motion.div>
  );
}
