import { motion, Variants } from "framer-motion";

interface WavyTextProps {
  text: string;
  delay?: number;
  duration?: number;
  type: "h1" | "h3";
}

export default function WavyText({
  text,
  delay = 0,
  duration = 0.05,
  type,
}: WavyTextProps) {
  const letters = Array.from(text);

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  if (type === "h1") {
    return (
      <motion.h1
        className="flex overflow-hidden text-2xl xs:text-3xl md600:text-4xl md800:text-5xl font-bold tracking-wide"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span key={index} variants={child}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h1>
    );
  } else {
    return (
      <motion.h3
        className="text-base xs:text-lg md600:text-xl  py-4 text italic mb-3"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span key={index} variants={child}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h3>
    );
  }
}
