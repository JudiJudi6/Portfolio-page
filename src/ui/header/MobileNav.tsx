import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function MobileNav() {
  const [open, setOpen] = useState<boolean>(false);
  const time = !open ? 0.8 : 0.4;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div className="relative p-4 w-full">
      <button
        className="relative flex justify-between items-end flex-col h-6 m-2 ml-auto z-50"
        onClick={() => setOpen((s) => !s)}
      >
        <motion.div
          className="h-[3px] w-[42px] bg-white"
          animate={
            open
              ? { translateY: "10px", rotate: "45deg" }
              : { translate: "(0, 0)" }
          }
        ></motion.div>
        <motion.div
          className="h-[3px] w-[35px] bg-white"
          animate={
            open
              ? { translateY: "2px", translateX: "-5px", rotate: "-45deg" }
              : { translate: "(0, 0)" }
          }
        ></motion.div>
        <motion.div
          className="h-[3px] w-[28px] bg-white"
          animate={
            open
              ? { translateY: "-16px", translateX: "-1px", rotate: "-45deg" }
              : { translate: "(0, 0)" }
          }
        ></motion.div>
      </button>
      <motion.div
        animate={open ? { translateX: 0 } : { translateX: "-100%" }}
        transition={{ ease: "easeInOut", duration: time }}
        className="absolute top-0 left-0 w-screen h-screen bg-gradient-to-r from-red1 to-red2 -translate-x-full z-20"
      ></motion.div>
      <motion.div
        animate={open ? { translateX: 0 } : { translateX: "-100%" }}
        transition={{ ease: "easeInOut", duration: 0.6 }}
        className="absolute top-0 left-0 w-screen h-screen bg-gradient-to-r from-blue1 to-blue2 -translate-x-full z-20 flex flex-col justify-center items-center"
      >
        <div className="flex flex-col justify-evenly items-center h-1/2 w-full">
          <Link
            to=""
            onClick={() => setOpen(false)}
            className={`text-2xl text-white font-medium p-2 hover:text-red1 transition-all duration-300 ${
              open
                ? "translate-y-0  duration-300 delay-[0.3s] opacity-100"
                : "translate-y-5 opacity-0"
            } `}
          >
            Home
          </Link>
          <Link
            to=""
            onClick={() => setOpen(false)}
            className={`text-2xl text-white font-medium p-2 hover:text-red1 transition-all duration-300 ${
              open
                ? "translate-y-0  duration-300 delay-[0.4s] opacity-100"
                : "translate-y-5 opacity-0"
            } `}
          >
            Projects
          </Link>
          <Link
            to=""
            onClick={() => setOpen(false)}
            className={`text-2xl text-white font-medium p-2 hover:text-red1 transition-all duration-300 ${
              open
                ? "translate-y-0  duration-300 delay-[0.5s] opacity-100"
                : "translate-y-5 opacity-0"
            } `}
          >
            Skills
          </Link>
          <Link
            to=""
            onClick={() => setOpen(false)}
            className={`text-2xl text-white font-medium p-2 hover:text-red1 transition-all duration-300 ${
              open
                ? "translate-y-0  duration-300 delay-[0.6s] opacity-100"
                : "translate-y-5 opacity-0"
            } `}
          >
            Contact
          </Link>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex gap-6 p-4">
          <Link
            to=""
            onClick={() => setOpen(false)}
            className={`text-3xl text-white  p-2 hover:text-red1 transition-all duration-300 ${
              open ? " duration-300 delay-[0.7s] opacity-100" : "opacity-0"
            } `}
          >
            <FaLinkedinIn />
          </Link>
          <Link
            to=""
            onClick={() => setOpen(false)}
            className={`text-3xl text-white p-2 hover:text-red1 transition-all duration-300 ${
              open ? "  duration-300 delay-[0.7s] opacity-100" : " opacity-0"
            } `}
          >
            <FaGithub />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
