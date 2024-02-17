import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface NextProps {
  projectName: string;
  link: string;
}

export default function Next({ link, projectName }: NextProps) {
  const [hover, setHover] = useState<boolean>(false);

  const MotionLink = motion(Link);

  return (
    <MotionLink
      to={link}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      className="relative bg-[#ffffff] w-full"
    >
      <p className="text-xs uppercase">next project</p>
      <p>{projectName}</p>
    </MotionLink>
  );
}
