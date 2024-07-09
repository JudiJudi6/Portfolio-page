import { motion } from "framer-motion";
import React from "react";

interface ProjectDescriptionProps {
  type: "right" | "left";
  title: string;
  text: React.ReactNode;
  img: string;
}

export default function ProjectDescription({
  img,
  text,
  title,
  type,
}: ProjectDescriptionProps) {
  return (
    <div className="flex flex-col md900:grid md900:grid-cols-2 p-6 md800:p-10 md800:pb-4 text-center md900:mt-10 max-w-[1170px] mx-auto overflow-hidden">
      {type === "left" && (
        <>
          <motion.div
            whileInView={{ translateX: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            initial={{
              translateX: "-100px",
              opacity: 0,
            }}
            transition={{ ease: "easeInOut", duration: 0.4, delay: 0.4 }}
            className="flex flex-col gap-6 text-xs md600:text-sm md800:text-base my-8 md900:px-14 md900:text-left"
          >
            <p className="text-xl font-bold md600:text-2xl md900:text-3xl">
              {title}
            </p>
            <div className="hidden md900:block w-1/4 h-1 bg-blue-500 my-2"></div>
            {text}
          </motion.div>
          <motion.div
            whileInView={{ translateX: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            initial={{
              translateX: "100px",
              opacity: 0,
            }}
            transition={{ ease: "easeInOut", duration: 0.4, delay: 0.4 }}
            className={`w-full h-auto drop-shadow-[0_0_20px_rgba(0,0,0,0.5)] p-2 xm:p-8 md600:p-14 md900:p-2 md900:py-8 md900:ml-10 md900:w-[90%]`}
          >
            <img src={img} alt="" />
          </motion.div>
        </>
      )}
      {type === "right" && (
        <>
          <motion.div
            whileInView={{ translateX: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            initial={{
              translateX: "-100px",
              opacity: 0,
            }}
            transition={{ ease: "easeInOut", duration: 0.4, delay: 0.4 }}
            className={`w-full h-auto drop-shadow-[0_0_20px_rgba(0,0,0,0.5)] p-2 xm:p-8 md600:p-14 md900:p-2 md900:py-8 md900:ml-10 md900:w-[90%] order-1 `}
          >
            <img src={img} />
          </motion.div>
          <motion.div
            whileInView={{ translateX: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            initial={{
              translateX: "100px",
              opacity: 0,
            }}
            transition={{ ease: "easeInOut", duration: 0.4, delay: 0.4 }}
            className="flex flex-col gap-6 md900:order-1 text-xs md600:text-sm md800:text-base my-8 md900:px-14 md900:text-left"
          >
            <p className="text-xl font-bold md600:text-2xl md900:text-3xl">
              {title}
            </p>
            <div className="hidden md900:block w-1/4 h-1 bg-blue-500 my-2"></div>
            {text}
          </motion.div>
        </>
      )}
    </div>
  );
}
