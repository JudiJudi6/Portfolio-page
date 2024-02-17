import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

interface LinkItemProps {
  title: string;
  to: string;
  type: "link" | "hash" | "button";
}

const LinkButton = motion(Link);
const HashButton = motion(HashLink);

export default function LinkItem({ title, to, type }: LinkItemProps) {
  const [hover, setHover] = useState<boolean>(false);

  if (type === "link") {
    return (
      <LinkButton
        to={to}
        target="_blank"
        rel="noopener noreferrer"
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
      </LinkButton>
    );
  } else if (type === "hash") {
    return (
      <HashButton
        to={to}
        smooth
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
      </HashButton>
    );
  } else if (type === "button") {
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
}
