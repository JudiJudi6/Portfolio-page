import { motion } from "framer-motion";

interface SectionTitleProps {
  text: string;
}

export default function SectionTitle({ text }: SectionTitleProps) {
  return (
    <motion.div
      className="w-full pt-24 pb-20"
      whileInView={{ translateY: "0px", opacity: 1 }}
      initial={{ translateY: "30px", opacity: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ ease: "easeInOut", delay: 0.5, duration: 0.4 }}
    >
      <h2 className="text-center font-bold text-2xl md600:text-3xl">{text}</h2>
    </motion.div>
  );
}
