import { HiXMark } from "react-icons/hi2";
import Button from "./Button";
import { useUserWidth } from "../hooks/useUserWidth";
import { FaReact } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiThreedotjs } from "react-icons/si";
import { Link } from "react-router-dom";

interface AboutProps {
  onCloseModal: () => void;
}

export default function About({ onCloseModal }: AboutProps) {
  const width = useUserWidth();
  const [technology, setTechnology] = useState<string>("");

  return (
    <div className="flex flex-col md800:flex-row w-full h-full shadow-2xl">
      <motion.div
        className="relative w-full bg-modalWhite p-6 h-1/2 md800:h-full overflow-y-auto flex flex-col justify-between items-center"
        animate={{ translateY: 0, opacity: 1 }}
        initial={{ translateY: "-150px", opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      >
        <div>
          <p className="absolute text-modalSecWhite font-bold t-32 right-0 text-9xl">
            About
          </p>
          <div className="relative z-10">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-2xl">About me</h3>
              {width < 800 && (
                <button
                  onClick={onCloseModal}
                  className="p-2 rounded-full  text-2xl"
                >
                  <HiXMark />
                </button>
              )}
            </div>
            <h3 className="font-light text-sm">Front-end Developer.</h3>
          </div>
          <div className="mt-3 ">
            <p className="relative  z-10 text-xs xss:text-sm md600:text-base">
              I am Łukasz Michnik, a{" "}
              <span className="text-red1">20 years old guy</span> who decided to
              become a <span className="text-red1">full stack developer</span>.
              I am currently learning web technologies{" "}
              <span className="text-red1">for almost 1.5 year.</span> I am also
              a <span className="text-red1">student</span> at Rzeszów University
              of Technology in my second year. <br />
              In my free time, I like to build new projects and develop existing
              ones, not necessarily finish... but someday I will{" "}
              <span className="text-red1">definitely finish</span> all of them
              ;)
              <br />
              I am interested in calisthenics and cars btw. <br />
              <br />I am <span className="text-red1">
                currently looking
              </span>{" "}
              for my first job.
            </p>
          </div>
        </div>
        {width > 800 && (
          <div className="w-full flex flex-col gap-4">
            <div className="flex h-10  w-full justify-evenly items-start ">
              <motion.div
                className="flex flex-col justify-center w-[60px] items-center hover:text-cyan-500 transition-colors duration-300"
                onHoverStart={() => setTechnology("react")}
                onHoverEnd={() => setTechnology("")}
              >
                <span className="text-3xl">
                  <FaReact />
                </span>
                {technology === "react" && (
                  <motion.p
                    className="font-semibold text-xs"
                    animate={{ opacity: 1, translateY: 0 }}
                    initial={{ opacity: 0, translateY: "10px" }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                  >
                    React
                  </motion.p>
                )}
              </motion.div>
              <motion.div
                className="flex flex-col justify-center w-[60px] items-center hover:text-[#2d79c7] transition-colors duration-300"
                onHoverStart={() => setTechnology("typescript")}
                onHoverEnd={() => setTechnology("")}
              >
                <span className="text-3xl">
                  <BiLogoTypescript />
                </span>
                {technology === "typescript" && (
                  <motion.p
                    className="font-semibold text-xs"
                    animate={{ opacity: 1, translateY: 0 }}
                    initial={{ opacity: 0, translateY: "10px" }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                  >
                    TypeScript
                  </motion.p>
                )}
              </motion.div>
              <motion.div
                className="flex flex-col justify-center w-[60px] items-center hover:text-[#07b5d5] transition-colors duration-300"
                onHoverStart={() => setTechnology("tailwind")}
                onHoverEnd={() => setTechnology("")}
              >
                <span className="text-3xl">
                  <SiTailwindcss />
                </span>
                {technology === "tailwind" && (
                  <motion.p
                    className="font-semibold text-xs"
                    animate={{ opacity: 1, translateY: 0 }}
                    initial={{ opacity: 0, translateY: "10px" }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                  >
                    Tailwind
                  </motion.p>
                )}
              </motion.div>
              <motion.div
                className="flex flex-col justify-center w-[60px] items-center hover:text-[#cd6799] transition-colors duration-300"
                onHoverStart={() => setTechnology("sass")}
                onHoverEnd={() => setTechnology("")}
              >
                <span className="text-3xl">
                  <SiSass />
                </span>
                {technology === "sass" && (
                  <motion.p
                    className="font-semibold text-xs"
                    animate={{ opacity: 1, translateY: 0 }}
                    initial={{ opacity: 0, translateY: "10px" }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                  >
                    Sass
                  </motion.p>
                )}
              </motion.div>
              <motion.div
                className="flex flex-col justify-center w-[60px] items-center hover:text-[#333333] transition-colors duration-300"
                onHoverStart={() => setTechnology("three")}
                onHoverEnd={() => setTechnology("")}
              >
                <span className="text-3xl">
                  <SiThreedotjs />
                </span>
                {technology === "three" && (
                  <motion.p
                    className="font-semibold text-xs"
                    animate={{ opacity: 1, translateY: 0 }}
                    initial={{ opacity: 0, translateY: "10px" }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                  >
                    Three.js
                  </motion.p>
                )}
              </motion.div>
            </div>
            <Link
              to=""
              className="text-xs self-end hover:text-red1 transition-colors duration-300 p-2"
            >
              Of course, that's not all skills...
            </Link>
          </div>
        )}
      </motion.div>
      <motion.div
        className="relative w-full bg-modalDark p-6 text-white h-1/2 md800:h-full overflow-hidden"
        animate={{ translateY: 0, opacity: 1 }}
        initial={{ translateY: "150px", opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      >
        <p className="absolute text-modalSecDark font-bold bottom-0 right-0 text-9xl z-0">
          Contact
        </p>
        <div className="relative z-10">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl">Let's talk.</h3>
            {width > 800 && (
              <button
                onClick={onCloseModal}
                className="p-2 rounded-full  text-2xl"
              >
                <HiXMark />
              </button>
            )}
          </div>
          <p className="relative mt-5 z-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aut
            asperiores aliquid consequatur accusamus eveniet dicta vero eum
            natus corrupti, quaerat numquam, obcaecati odit! Quo quae
            reprehenderit magni delectus et?
          </p>
          <Button>Send message</Button>
        </div>
      </motion.div>
    </div>
  );
}
