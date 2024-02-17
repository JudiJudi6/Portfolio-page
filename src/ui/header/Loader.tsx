import { motion } from "framer-motion";
import Spinner from "../Spinner";
import { useEffect, useState } from "react";

export default function Loader() {
  const [timer, setTimer] = useState<boolean>(true);

  useEffect(function () {
    setTimeout(() => {
      setTimer(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (timer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [timer]);
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-bg z-[60] overflow-hidden "
      animate={{
        opacity: 0,
        transitionEnd: {
          display: "none",
        },
      }}
      initial={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 1.6 }}
    >
      <motion.div
        className="h-full w-full bg-gradient-to-r from-blue3 to-blue4 flex justify-center items-center"
        animate={{ translateX: "100%" }}
        initial={{ translateX: 0 }}
        transition={{ duration: 0.4, delay: 1.2 }}
      >
        <Spinner />
      </motion.div>
    </motion.div>
  );
}
