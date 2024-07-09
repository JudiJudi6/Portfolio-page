import { motion } from "framer-motion";

export default function Spinner() {
  return (
    <div className="flex flex-col gap-1">
      <motion.div
        className="w-[150px] h-6 bg-white origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1] }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: 0.6,
          repeatType: "reverse",
        }}
      ></motion.div>
      <motion.div
        className="w-[150px] h-6 bg-white origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1] }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: 0.6,
          repeatType: "reverse",
          delay: 0.3,
        }}
      ></motion.div>
      <motion.div
        className="w-[150px] h-6 bg-white origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1] }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: 0.6,
          repeatType: "reverse",
          delay: 0.6,
        }}
      ></motion.div>
    </div>
  );
}
