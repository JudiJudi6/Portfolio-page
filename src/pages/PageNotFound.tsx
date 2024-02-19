import { motion } from "framer-motion";
import ShapesMask from "../ui/header/ShapesMask";
import Footer from "../ui/Footer";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <div className="relative bg-bg w-full h-screen overflow-hidden flex justify-center items-center">
        <ShapesMask />
        <div className="flex flex-col gap-3">
          <p className="text-6xl xs:text-8xl sm:text-9xl text-center text-white font-bold">
            404
          </p>
          <p className="text-sm xs:text-base sm:text-xl text-center text-white">
            What are you doing here &#129488;{" "}
          </p>
          <p className="text-white text-center">
            You are:{" "}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ ease: "linear", duration: 3, repeat: Infinity }}
              className="block m-10 text-4xl text-blue-500 font-bold"
            >
              SUS
            </motion.span>
          </p>
          <p className="relative text-white text-center z-10 text-sm xs:text-base sm:text-xl">
            Let's back to{" "}
            <Link
              to="/"
              className="hover:text-blue-500 transition-colors duration-300 underline underline-offset-4 decoration-blue-500"
            >
              Home
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
