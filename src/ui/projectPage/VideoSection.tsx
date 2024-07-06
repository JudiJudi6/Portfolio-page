import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface VideoSectionProps {
  src: string;
}

export default function VideoSection({ src }: VideoSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const phRef = useRef(null);
  const inViewPh = useInView(phRef);

  return (
    <div className="flex flex-col justify-center items-center p-6 md800:p-10 md800:pb-4 text-center max-w-[1170px] mx-auto overflow-hidden">
      <motion.p
        ref={ref}
        animate={inView && { translateX: 0, opacity: 1 }}
        initial={{
          translateX: "100px",
          opacity: 0,
        }}
        transition={{ ease: "easeInOut", duration: 0.4, delay: 0.4 }}
        className="text-xl font-bold md600:text-2xl md900:text-3xl text-center py-5 pt-12"
      >
        Showcase
      </motion.p>
      <motion.div
        ref={phRef}
        animate={inViewPh && { translateY: 0, opacity: 1 }}
        initial={{
          translateY: "80px",
          opacity: 0,
        }}
        transition={{ ease: "easeInOut", duration: 0.8, delay: 0.6 }}
        className="flex justify-center items-center p-0 xm:p-10 md800:p-20 max-w-[1000px] mx-auto drop-shadow-[0_0_20px_rgba(0,0,0,0.5)] "
      >
        <video controls width="100%" src={src} />
      </motion.div>
    </div>
  );
}
