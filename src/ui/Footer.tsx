import LinkItem from "./LinkItem";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
  const [topHover, setTopHover] = useState<boolean>(false);
  const refOne = useRef(null);
  const inViewOne = useInView(refOne);
  const refTwo = useRef(null);
  const inViewTwo = useInView(refTwo);

  return (
    <div className="relative h-[30vh] bg-bg mt-20 flex justify-center items-center flex-col gap-5 overflow-hidden">
      <motion.button
        className="absolute top-0 right-0 text-white opacity-60 text-xs italic p-5 transition-opacity duration-300 hover:opacity-100 flex justify-center items-center h-[80px]"
        onHoverStart={() => setTopHover(true)}
        onHoverEnd={() => setTopHover(false)}
        onFocus={() => setTopHover(true)}
        onBlur={() => setTopHover(false)}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        {topHover && (
          <div className=" rotate-[-90deg]">
            <motion.img
              src="/arrow.svg"
              alt=""
              className="h-[30px] origin-left"
              animate={
                topHover
                  ? {
                      scaleX: 1,
                    }
                  : {
                      scaleX: 0,
                    }
              }
              initial={{
                scaleX: 0,
              }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
            />
          </div>
        )}
        <p>Go to the top</p>
      </motion.button>
      <motion.div
        ref={refOne}
        className="flex gap-4"
        animate={inViewOne && { translateX: 0, opacity: 1 }}
        initial={{ translateX: "100px", opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
      >
        <LinkItem
          title="Github"
          to="https://github.com/JudiJudi6"
          type="link"
        />
        <LinkItem
          type="link"
          title="Linkedin"
          to="https://www.linkedin.com/in/%C5%82ukasz-michnik-98b8122ab/"
        />
      </motion.div>
      <motion.p
        ref={refTwo}
        className="italic text-xs md600:text-sm text-white opacity-60 text-center"
        animate={inViewTwo && { translateX: 0, opacity: 0.6 }}
        initial={{ translateX: "-100px", opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
      >
        {new Date().getFullYear()} Łukasz Michnik - Email - 7lukasz8@gmail.com
      </motion.p>
    </div>
  );
}
