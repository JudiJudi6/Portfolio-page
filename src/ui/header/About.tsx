import Button from "../Button";
import { useUserWidth } from "../../hooks/useUserWidth";
import { FaReact } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiThreedotjs } from "react-icons/si";
import { Link } from "react-router-dom";
import FormInput from "../FormInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import TextArea from "../TextArea";
import CloseButton from "../CloseButton";
import emailjs from "@emailjs/browser";
import Spinner from "../Spinner";
import { HashLink } from "react-router-hash-link";

interface AboutProps {
  onCloseModal: () => void;
}

export default function About({ onCloseModal }: AboutProps) {
  const [send, setSend] = useState<boolean>(false);
  const [sendSuccess, setSendSuccess] = useState<boolean>(false);
  const [sendError, setSendError] = useState<boolean>(false);
  const width = useUserWidth();
  const [technology, setTechnology] = useState<string>("");
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setSend(true);
    setTimeout(() => {
      setSend(false);
    }, 2000);
    reset();
    emailjs.init({
      publicKey: "Xe7hZsEW-yAVY6NtF",
      blockHeadless: true,
      limitRate: {
        id: "app",
        throttle: 10000,
      },
    });
    emailjs.send("service_rfwg5bm", "template_3ng9u77", data).then(
      () => {
        setSendSuccess(true);
        setTimeout(() => {
          setSend(false);
          setSendSuccess(false);
        }, 3000);
      },
      () => {
        setSendError(true);
        setTimeout(() => {
          setSend(false);
          setSendError(false);
        }, 3000);
      }
    );
  };

  return (
    <div className="flex flex-col md800:flex-row w-full h-full shadow-2xl">
      <motion.div
        className="relative w-full bg-modalWhite p-6 md800:p-10 lg:p-16 h-1/2 md800:h-full overflow-y-auto flex flex-col justify-between items-center"
        animate={{ translateY: 0, opacity: 1 }}
        initial={{ translateY: "-150px", opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      >
        <div>
          <p className="absolute text-modalSecWhite font-bold t-32 right-0 text-9xl">
            About
          </p>
          <div className="relative z-10">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-2xl">About me</h3>
              {width < 800 && <CloseButton onClick={onCloseModal} />}
            </div>
            <h3 className="font-light text-sm">Front-end Developer.</h3>
          </div>
          <div className="mt-3 ">
            <p className="relative  z-10 text-sm xss:text-sm md600:text-[15px] lg:text-base ">
              I am Łukasz Michnik, a{" "}
              <span className="text-red1">20 years old guy</span> who decided to
              become a <span className="text-red1">full stack developer</span>.
              I am currently learning web technologies{" "}
              <span className="text-red1">for almost 1.5 year.</span> I am also
              a <span className="text-red1">student</span> at Rzeszów University
              of Technology in my second year. <br />
              In my free time, I like to build new projects and develop existing
              ones, not necessarily finish... but someday I will{" "}
              <span className="text-red1">definitely finish</span> all of them
              ;)
              <br />
              I am interested in calisthenics and cars btw. <br />
              <br />I am <span className="text-red1">
                currently looking
              </span>{" "}
              for my first job.
            </p>
          </div>
        </div>
        {width > 800 && (
          <div className="w-full flex flex-col gap-4">
            <div className="flex h-10  w-full justify-evenly items-start ">
              <motion.div
                className="flex flex-col justify-center w-[60px] items-center hover:text-cyan-500 transition-colors duration-300"
                onHoverStart={() => setTechnology("react")}
                onHoverEnd={() => setTechnology("")}
              >
                <span className="text-3xl">
                  <FaReact />
                </span>
                {technology === "react" && (
                  <motion.p
                    className="font-semibold text-xs"
                    animate={{ opacity: 1, translateY: 0 }}
                    initial={{ opacity: 0, translateY: "10px" }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                  >
                    React
                  </motion.p>
                )}
              </motion.div>
              <motion.div
                className="flex flex-col justify-center w-[60px] items-center hover:text-[#2d79c7] transition-colors duration-300"
                onHoverStart={() => setTechnology("typescript")}
                onHoverEnd={() => setTechnology("")}
              >
                <span className="text-3xl">
                  <BiLogoTypescript />
                </span>
                {technology === "typescript" && (
                  <motion.p
                    className="font-semibold text-xs"
                    animate={{ opacity: 1, translateY: 0 }}
                    initial={{ opacity: 0, translateY: "10px" }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                  >
                    TypeScript
                  </motion.p>
                )}
              </motion.div>
              <motion.div
                className="flex flex-col justify-center w-[60px] items-center hover:text-[#07b5d5] transition-colors duration-300"
                onHoverStart={() => setTechnology("tailwind")}
                onHoverEnd={() => setTechnology("")}
              >
                <span className="text-3xl">
                  <SiTailwindcss />
                </span>
                {technology === "tailwind" && (
                  <motion.p
                    className="font-semibold text-xs"
                    animate={{ opacity: 1, translateY: 0 }}
                    initial={{ opacity: 0, translateY: "10px" }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                  >
                    Tailwind
                  </motion.p>
                )}
              </motion.div>
              <motion.div
                className="flex flex-col justify-center w-[60px] items-center hover:text-[#cd6799] transition-colors duration-300"
                onHoverStart={() => setTechnology("sass")}
                onHoverEnd={() => setTechnology("")}
              >
                <span className="text-3xl">
                  <SiSass />
                </span>
                {technology === "sass" && (
                  <motion.p
                    className="font-semibold text-xs"
                    animate={{ opacity: 1, translateY: 0 }}
                    initial={{ opacity: 0, translateY: "10px" }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                  >
                    Sass
                  </motion.p>
                )}
              </motion.div>
              <motion.div
                className="flex flex-col justify-center w-[60px] items-center hover:text-[#333333] transition-colors duration-300"
                onHoverStart={() => setTechnology("three")}
                onHoverEnd={() => setTechnology("")}
              >
                <span className="text-3xl">
                  <SiThreedotjs />
                </span>
                {technology === "three" && (
                  <motion.p
                    className="font-semibold text-xs"
                    animate={{ opacity: 1, translateY: 0 }}
                    initial={{ opacity: 0, translateY: "10px" }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                  >
                    Three.js
                  </motion.p>
                )}
              </motion.div>
            </div>
            <HashLink
              to="/#skills"
              smooth
              className="text-xs self-end hover:text-red1 transition-colors duration-300 p-2"
            >
              Of course, that's not all skills...
            </HashLink>
          </div>
        )}
      </motion.div>
      <motion.div
        className="relative w-full bg-modalDark p-6 md800:p-10 lg:p-16 pb-0 md800:pb-0 lg:pb-0 text-white h-1/2 md800:h-full  overflow-y-auto overflow-x-hidden"
        animate={{ translateY: 0, opacity: 1 }}
        initial={{ translateY: "150px", opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
      >
        <p className="absolute text-modalSecDark font-bold bottom-10 right-0 text-9xl z-0">
          Contact
        </p>
        <div className="relative z-10">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl">Let's talk.</h3>
            {width > 800 && <CloseButton onClick={onCloseModal} />}
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-start gap-4 md800:gap-8 py-4"
          >
            <FormInput
              id="name"
              placeholder="Name *"
              inputType="text"
              error={errors?.name?.message}
              register={register}
            />
            <FormInput
              id="email"
              placeholder="E-mail *"
              inputType="email"
              error={errors?.email?.message}
              register={register}
              validateFunction={() => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(getValues().email))
                  return "Incorrect e-mail";
                else return true;
              }}
            />
            <TextArea id="message" register={register} />
            <Button>Send message</Button>
          </form>
        </div>

        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red1 to-red2 z-50 -translate-x-full"
          animate={send ? { translateX: 0 } : { translateX: "-105%" }}
          initial={{ translateX: "-105%" }}
          transition={{ ease: "easeInOut", duration: 0.4 }}
        ></motion.div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue1 to-blue2 z-50 flex justify-center items-center"
          animate={send ? { translateX: 0 } : { translateX: "-105%" }}
          initial={{ translateX: "-105%" }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
        >
          <Spinner />
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[#06d6a0] z-50 flex justify-center items-center "
          animate={sendSuccess ? { translateX: 0 } : { translateX: "-105%" }}
          initial={{ translateX: "-105%" }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
        >
          <div className="flex flex-col justify-center items-start p-8 text-lg sm:text-2xl font-semibold gap-3">
            <p>Thank You!</p>
            <p>Your message has been sent...</p>
          </div>
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-red-400 z-50 flex justify-center items-center "
          animate={sendError ? { translateX: 0 } : { translateX: "-105%" }}
          initial={{ translateX: "-105%" }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
        >
          <div className="flex flex-col justify-center items-start p-8 text-lg sm:text-2xl font-semibold gap-3">
            <p>Error!</p>
            <p>There is some problems, please try later...</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
