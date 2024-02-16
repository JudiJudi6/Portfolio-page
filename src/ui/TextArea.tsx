import { useState } from "react";
import { motion } from "framer-motion";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface TextAreaProps {
  register: UseFormRegister<FieldValues>;
  id: string;
}

export default function TextArea({ register }: TextAreaProps) {
  const [focus, setFocus] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);

  return (
    <motion.div
      className={`relative flex justify-between items-start w-full   flex-col text-white `}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <div
        className={`relative flex flex-col justify-center items-start w-full`}
      >
        <div className="flex flex-col justify-center items-start w-full">
          <label htmlFor="messsage" className="text-xs pb-1">
            Message *
          </label>
          <textarea
            id="message"
            className="text-sm bg-transparent w-full outline-none h-[70px] md800:h-[200px] lg:h-[150px]"
            {...register("message", { required: true })}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white"></div>
        <motion.div
          className={`absolute bottom-0 left-0  w-full h-[2px] bg-gradient-to-r from-blue1 to-blue2 scale-0 origin-left`}
          animate={hover || focus ? { scaleX: 1 } : { scaleX: 0 }}
          initial={{ scaleX: 0 }}
          transition={{ ease: "easeInOut", duration: 0.4 }}
        ></motion.div>
        <motion.div
          className={`absolute bottom-0 left-0  w-full h-[2px] bg-gradient-to-r from-red1 to-red2 scale-0 origin-left`}
          animate={hover || focus ? { scaleX: 1 } : { scaleX: 0 }}
          initial={{ scaleX: 0 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
        ></motion.div>
      </div>
    </motion.div>
  );
}
