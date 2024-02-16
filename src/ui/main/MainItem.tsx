import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { motion, useInView } from "framer-motion";

interface MainItemProps {
  img: string;
  title: string;
  type: "left" | "right";
  link: string;
  desc: string;
}

const MotionLink = motion(Link);

export default function MainItem({
  img,
  link,
  title,
  type,
  desc,
}: MainItemProps) {
  const [hover, setHover] = useState<boolean>(false);
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <MotionLink
      to={link}
      className={`relative flex justify-center items-end w-full max-w-3xl xl:max-w-4xl h-[290px] xm:h-[340px] md600:h-[420px] md900:h-[500px] overflow-hidden bg-bg pb-10  xm:p-12 md600:p-20 md900:p-28 shadow-[0_0_190px_0px_rgba(0,0,0,0.3)] ${
        type === "right" ? "lg:ml-32 pl-2 pr-6" : "lg:mr-32 pl-6 pr-2"
      }`}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <div
        className="absolute top-0 left-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className=" h-full w-full bg-black opacity-50"></div>
      </div>
      <motion.div
        className="absolute top-0 left-0 h-full w-full opacity-80  bg-gradient-to-r from-blue3 to-blue4 -translate-x-full "
        animate={hover ? { translateX: 0 } : { translateX: "-105%" }}
        initial={{ translateX: "-105%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className={`relative text-white z-10 w-full flex flex-col ${
          type === "right" ? "items-end" : "items-start"
        }`}
        animate={hover ? { scale: 1.03 } : { scale: 1 }}
        initial={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
      >
        <h3 className="font-bold text-xl md600:text-3xl">{title}</h3>
        <h5
          className={`italic text-xs md600:text-base py-5 font-semibold ${
            type === "right" ? "text-right" : "text-left"
          }`}
        >
          {desc}
        </h5>
        <Button>Show</Button>
      </motion.div>
      <motion.div
        ref={ref}
        className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue3 to-blue4 z-50"
        animate={inView && { translateX: "105%" }}
        initial={{ translateX: "0" }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
      ></motion.div>
    </MotionLink>
  );
}
