import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillItemProps {
  icon: React.ReactNode;
  skill: string;
  libs?: string;
  color: string;
}

export default function SkillItem({
  icon,
  libs,
  skill,
  color,
}: SkillItemProps) {
  const [hover, sethover] = useState<boolean>(false);
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <motion.div
      className="w-full flex flex-col justify-evenly items-start py-4 md:p-5"
      onHoverStart={() => sethover(true)}
      onHoverEnd={() => sethover(false)}
      ref={ref}
      animate={inView && { translateY: "0px", opacity: 1 }}
      initial={{ translateY: "30px", opacity: 0 }}
      transition={{ ease: "easeInOut", delay: 0.5, duration: 0.4 }}
    >
      <div className="w-full flex justify-start items-center gap-5">
        <div className={`text-3xl`}>
          <span
            className="transition-colors duration-300"
            style={hover ? { color: color } : { color: "#000000" }}
          >
            {icon}
          </span>
        </div>
        <h5
          className="font-bold text-xl transition-colors duration-300"
          style={hover ? { color: color } : { color: "#000000" }}
        >
          {skill}
        </h5>
      </div>
      <p
        className={`text-sm   text-left w-full transition-colors duration-300 ${
          hover ? "text-black" : "text-stone-500"
        } ${libs && "mt-2"}`}
      >
        {libs}
      </p>
    </motion.div>
  );
}
