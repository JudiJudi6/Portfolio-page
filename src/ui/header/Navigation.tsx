import DeskNav from "./DeskNav";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

interface NavigationProps {
  type?: "main" | "project";
}

export default function Navigation({ type = "main" }: NavigationProps) {
  return (
    <motion.div
      className="relative z-50 w-full"
      animate={{ translateY: 0, opacity: 1 }}
      initial={{ translateY: -88, opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.4, delay: 0.3 }}
    >
      <div className="hidden sm:block w-full">
        <DeskNav type={type} />
      </div>
      <div className="sm:hidden w-full">
        <MobileNav />
      </div>
    </motion.div>
  );
}
