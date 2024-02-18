import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";

interface NextProps {
  projectName: string;
  link: string;
}

export default function Next({ link, projectName }: NextProps) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      className="  relative overflow-hidden bg-[#ffffff] w-full h-[140px] border-t-[1px] border-solid border-blue1 hover:text-white transition-colors duration-300"
    >
      <Link
        to={link}
        className="relative flex justify-between flex-col w-full h-full p-6 z-10 md600:px-10"
      >
        <p className="text-sm uppercase">next project</p>
        <div className=" flex justify-between items-end">
          <p className="text-2xl md800:text-4xl font-bold pb-4 underline underline-offset-3 decoration-blue-500">
            {projectName}
          </p>
          <motion.div
            className=" hidden md600:block text-7xl "
            animate={
              hover
                ? {
                    translateX: 0,
                  }
                : {
                    translateX: "-50px",
                  }
            }
            initial={{
              translateX: "-50px",
            }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
          >
            <span>
              <HiArrowLongRight />
            </span>{" "}
          </motion.div>
        </div>
      </Link>
      <motion.div
        className="absolute w-full h-full top-0 left-0 bg-bg -translate-y-full"
        transition={{ ease: "easeInOut", duration: 0.3 }}
        animate={{ translateY: hover ? 0 : "-105%" }}
        initial={{ translateY: "-105%" }}
        exit={{ translateY: "-105%" }}
      ></motion.div>
      <motion.div
        className="absolute w-full h-full top-0 left-0 bg-blue-500 -translate-y-full"
        transition={{ ease: "easeInOut", duration: 0.5 }}
        animate={{ translateY: hover ? 0 : "-105%" }}
        initial={{ translateY: "-105%" }}
        exit={{ translateY: "-105%" }}
      ></motion.div>
    </motion.div>
  );
}
