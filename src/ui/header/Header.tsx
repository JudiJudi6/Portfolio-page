import { motion } from "framer-motion";
import Navigation from "./Navigation";
import Button from "../Button";
import Image from "./Image";
import ShapesMask from "./ShapesMask";
import WavyText from "../WavyText";
import Loader from "./Loader";
import { HiArrowLongRight } from "react-icons/hi2";
import Modal from "../Modal";
import About from "./About";
import ContactButtons from "./ContactButtons";

export default function Header() {
  return (
    <div className="relative bg-bg w-full h-screen overflow-hidden" id="header">
      <div className="relative max-w-7xl h-full w-full  mx-auto ">
        <Navigation />
        <div className="w-full h-[calc(100vh-88px)] flex  justify-between items-center  px-8 xm:px-20  text-white max-w-7xl pb-[88px] gap-12">
          <div className="flex flex-col">
            <WavyText text="Łukasz Michnik" type="h1" delay={1.6} />
            <WavyText text="Front-end Developer" type="h3" delay={1.6} />
            <Modal>
              <Modal.Open opens="about">
                <Button>About Me</Button>
              </Modal.Open>
              <Modal.Window name="about">
                <About onCloseModal={undefined as never} />
              </Modal.Window>
            </Modal>
          </div>
          <div className="hidden slg:block rounded-full mr-32">
            <Image />
          </div>
        </div>
        <ShapesMask />
      </div>
      <motion.button
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center text-white text-xs p-1"
        initial={{ translateY: "0px", translateX: "-50%" }}
        whileHover={{ translateY: "-16px", translateX: "-50%" }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
      >
        <p>Projects</p>
        <span className=" rotate-90 text-4xl ">
          <HiArrowLongRight />
        </span>
      </motion.button>
      <Loader />
      <ContactButtons />
    </div>
  );
}
