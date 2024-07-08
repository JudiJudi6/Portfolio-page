import { motion } from "framer-motion";

interface ProjectGalleryProps {
  img: string;
}

export default function ProjectGallery({ img }: ProjectGalleryProps) {
  return (
    <div>
      <motion.p
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        initial={{
          translateX: "-100px",
          opacity: 0,
        }}
        transition={{ ease: "easeInOut", duration: 0.4, delay: 0.4 }}
        className="text-xl font-bold md600:text-2xl md900:text-3xl text-center py-5 pt-12"
      >
        Design
      </motion.p>
      <motion.div
        whileInView={{ translateY: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        initial={{
          translateY: "80px",
          opacity: 0,
        }}
        transition={{ ease: "easeInOut", duration: 0.8, delay: 0.6 }}
        className="p-6 xm:p-20 md800:p-24 max-w-[1170px] mx-auto drop-shadow-[0_0_20px_rgba(0,0,0,0.5)] mb-14"
      >
        <img src={img} alt="" />
      </motion.div>
    </div>
  );
}
