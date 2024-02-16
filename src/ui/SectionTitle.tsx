import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionTitleProps {
  text: string;
}

export default function SectionTitle({ text }: SectionTitleProps) {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <motion.div
      className="w-full pt-20 pb-10"
      ref={ref}
      animate={inView && { translateY: "0px", opacity: 1 }}
      initial={{ translateY: "30px", opacity: 0 }}
      transition={{ ease: "easeInOut", delay: 0.5, duration: 0.4 }}
    >
      <h2 className="text-center font-bold text-2xl md600:text-3xl">{text}</h2>
    </motion.div>
  );
}
