import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

interface SmallProjectItemProps {
  img: string;
  title: string;
  desc: string;
  link: string;
  delay: number;
}

const MotionLink = motion(Link);

export default function SmallProjectItem({
  img,
  desc,
  link,
  title,
  delay,
}: SmallProjectItemProps) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <MotionLink
      to={link}
      className="relative flex justify-center items-center w-full max-w-3xl xm:max-w-[380px] h-[290px] xm:h-[340px] overflow-hidden bg-bg xm:p-12 shadow-[0_0_190px_0px_rgba(0,0,0,0.3)] "
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      whileInView={{ translateX: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      initial={{ translateX: "100px", opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.3, delay: delay }}
    >
      <div
        className="absolute top-0 left-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <motion.div
          animate={hover ? { opacity: 0.8 } : { opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className=" h-full w-full opacity-80  bg-gradient-to-r from-blue3 to-blue4 "
        ></motion.div>
      </div>
      <motion.div
        className="relative text-white z-10 w-full flex flex-col text-center px-4 gap-5"
        animate={hover ? { opacity: 1 } : { opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <h3 className="font-bold text-xl md600:text-2xl">{title}</h3>
        <h5 className="italic text-xs md600:text-base font-semibold ">
          {desc}
        </h5>
      </motion.div>
    </MotionLink>
  );
}
