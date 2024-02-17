import React, { useState } from "react";
import LinkItem from "../LinkItem";
import Modal from "../Modal";
import About from "./About";
import { motion } from "framer-motion";

interface DeskNavProps {
  type: string;
}

export default function DeskNav({ type }: DeskNavProps) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div className="flex justify-end items-center gap-4 p-6">
      {type === "main" ? (
        <>
          <LinkItem to="/#projects" title="Projects" type="hash" />
          <LinkItem to="/#skills" title="Skills" type="hash" />
        </>
      ) : (
        <>
          <LinkItem to="/" title="Back To Home" type="hash" />
          <LinkItem to="/#projects" title="All Projects" type="hash" />
        </>
      )}
      <Modal>
        <Modal.Open opens="about">
          <motion.button
            className="relative py-2 text-white font-semibold overflow-hidden"
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            onFocus={() => setHover(true)}
            onBlur={() => setHover(false)}
          >
            <p className="opacity-80 hover:opacity-100 transition-opacity duration-300">
              Contact
            </p>
            <motion.div
              className={`absolute bottom-[4px] left-0  w-full h-[2px] bg-gradient-to-r from-blue1 to-blue2 scale-0 ${
                hover ? "origin-left" : "origin-right"
              }`}
              animate={hover ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ ease: "easeInOut", delay: 0.2 }}
            ></motion.div>
            <motion.div
              className={`absolute bottom-[4px] left-0  w-full h-[2px] bg-gradient-to-r from-red1 to-red2 scale-0 ${
                hover ? "origin-left" : "origin-right"
              }`}
              animate={hover ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ ease: "easeInOut" }}
            ></motion.div>
          </motion.button>
        </Modal.Open>
        <Modal.Window name="about">
          <About onCloseModal={undefined as never} />
        </Modal.Window>
      </Modal>
    </div>
  );
}
