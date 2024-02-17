import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowLongRight } from "react-icons/hi2";

interface AboutProjectProps {
  desc: string;
  link: string;
  deployed: boolean;
  technologies: string;
  bgText: string;
}

export default function AboutProject({
  deployed,
  desc,
  link,
  bgText,
  technologies,
}: AboutProjectProps) {
  const [isHover, setIsHover] = useState<boolean>(false);

  const MotionLink = motion(Link);

  return (
    <div className="relative w-full p-6 py-24 bg-[#0c0c10] text-white text-center flex justify-center items-center overflow-hidden">
      <p className="absolute -bottom-8 left-[10%] text-9xl uppercase text-modalSecDark font-semibold">
        {bgText}
      </p>
      <div className="max-w-[600px] lg:max-w-[800px]">
        <p className="text-2xl font-bold xm:text-3xl lg:text-4xl sm:p-4">
          About The Project
        </p>
        <p className="text-sm py-3 xm:text-base md600:py-6 lg:text-lg">
          {desc}
        </p>
        <p className="text-sm xm:text-base">
          <span className="text-blue-500 ">Technologies: </span>
          {technologies}
        </p>
        <MotionLink
          to={link}
          target="_blank"
          rel="noopener noreferrer"
          onHoverStart={() => setIsHover(true)}
          onHoverEnd={() => setIsHover(false)}
          onFocus={() => setIsHover(true)}
          onBlur={() => setIsHover(false)}
          className="relative block p-4 max-w-[170px]  my-10 mx-auto border-2 border-solid border-white font-semibold  transition-colors duration-300 hover:bg-white hover:text-black"
        >
          {deployed ? "Visit Website" : "Visit Repo"}
          <motion.div
            animate={
              isHover
                ? { translateX: "30%", translateY: "-90%" }
                : { translateX: "0%", translateY: "-90%" }
            }
            initial={{ translateX: "0%", translateY: "-90%" }}
            transition={{ ease: "easeInOut" }}
            className="absolute -right-4 text-3xl text-white"
          >
            <HiArrowLongRight />
          </motion.div>
        </MotionLink>
      </div>
    </div>
  );
}
