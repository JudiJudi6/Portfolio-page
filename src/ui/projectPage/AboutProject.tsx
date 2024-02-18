import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
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
  const refOne = useRef(null);
  const inViewOne = useInView(refOne, { once: true });

  const MotionLink = motion(Link);

  return (
    <div className="relative w-full p-6 py-24 bg-[#0c0c10] text-white text-center flex justify-center items-center overflow-hidden">
      <p className="absolute -bottom-8 left-[10%] text-9xl uppercase text-modalSecDark font-semibold">
        {bgText}
      </p>
      <div className="max-w-[600px] lg:max-w-[800px]">
        <motion.p
          ref={refOne}
          animate={inViewOne && { translateX: 0, opacity: 1 }}
          initial={{ translateX: "40px", opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
          className="text-2xl font-bold xm:text-3xl lg:text-4xl sm:p-4"
        >
          About The Project
        </motion.p>
        <motion.p
          ref={refOne}
          animate={inViewOne && { translateX: 0, opacity: 1 }}
          initial={{ translateX: "-40px", opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.3, delay: 0.4 }}
          className="text-sm py-3 xm:text-base md600:py-6 lg:text-lg"
        >
          {desc}
        </motion.p>
        <motion.p
          ref={refOne}
          animate={inViewOne && { translateX: 0, opacity: 1 }}
          initial={{ translateX: "40px", opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.3, delay: 0.6 }}
          className="text-sm xm:text-base"
        >
          <span className="text-blue-500 ">Technologies: </span>
          {technologies}
        </motion.p>
        <MotionLink
          to={link}
          target="_blank"
          rel="noopener noreferrer"
          animate={inViewOne && { translateY: 0, opacity: 1 }}
          initial={{ translateY: "80px", opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.3, delay: 0.8 }}
          className="relative block p-4 max-w-[170px]  my-10 mx-auto border-2 border-solid border-white font-semibold  transition-colors duration-300 hover:bg-white hover:text-black group"
        >
          {deployed ? "Visit Website" : "Visit Repo"}
          <motion.div className="absolute -right-4 text-3xl text-white group-hover:translate-x-1/3 -translate-y-[90%] transition-transform duration-300">
            <HiArrowLongRight />
          </motion.div>
        </MotionLink>
      </div>
    </div>
  );
}
