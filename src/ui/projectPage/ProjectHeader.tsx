import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "../header/Navigation";
import WavyText from "../WavyText";

interface ProjectHeaderProps {
  img: string;
  title: string;
  desc: string;
  role: string;
  context: string;
  time: string;
  leader?: boolean;
  skni?: boolean;
  descBg?: boolean;
}

export default function ProjectHeader({
  context,
  desc,
  img,
  role,
  time,
  title,
  leader,
  skni,
  descBg = true,
}: ProjectHeaderProps) {
  return (
    <div className="relative bg-bg w-full h-screen overflow-hidden" id="header">
      <div
        className="absolute top-0 left-0 h-full w-full bg-cover bg-center shadow-[inset_0_-80px_60px_rgba(28,29,37,1)]"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className=" h-full w-full bg-black opacity-60"></div>
      </div>
      <div className="relative max-w-7xl h-full w-full  mx-auto ">
        <Navigation type="project" />
        <div className="relative w-full h-[calc(100vh-88px)] flex flex-col justify-center items-center text-white max-w-7xl p-6 pb-[88px] gap-12 z-20">
          <div className="flex flex-col justify-center items-center gap-6 md600:gap-10">
            <WavyText text={title} type="h1" delay={0.3} />
            <motion.h3
              className={`text-sm xm:text-base md600:text-lg italic text-center font-semibold opacity-30 p-2 ${
                descBg &&
                "bg-[#0c0c10] shadow-[0_0px_20px_20px_rgba(28,29,37,0.3)]"
              }`}
              animate={{ translateY: 0, opacity: 1 }}
              initial={{ translateY: "40px", opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
            >
              {desc}
            </motion.h3>
          </div>
        </div>
        <div className="absolute bottom-5 left-0 w-full p-6 flex flex-col md600:flex-row justify-between items-center gap-4 text-white text-center uppercase font-semibold text-xs md800:text-sm z-[30]">
          <motion.div
            animate={{ translateX: 0, opacity: 1 }}
            initial={{ translateX: "-50px", opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
          >
            <p>
              <span className="text-blue-500">Role</span>{" "}
              {leader && (
                <span className="text-yellow-500">Project Leader</span>
              )}{" "}
              {role}
            </p>
          </motion.div>
          <motion.div
            animate={{ translateY: 0, opacity: 1 }}
            initial={{ translateY: "50px", opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
          >
            <p>
              <span className="text-blue-500">Context</span> {context}{" "}
              {skni && (
                <Link
                  to="https://kod.prz.edu.pl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  Skni Kod
                </Link>
              )}
            </p>
          </motion.div>
          <motion.div
            animate={{ translateX: 0, opacity: 1 }}
            initial={{ translateX: "50px", opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
          >
            <p>
              {" "}
              <span className="text-blue-500">Work time</span> {time}{" "}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
