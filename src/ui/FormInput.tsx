import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from "react-hook-form";

interface FormInputProps {
  inputType: "text" | "email";
  placeholder: string;
  error:
    | string
    | FieldError
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  register: UseFormRegister<FieldValues>;
  id: string;
  validateFunction?: () => boolean | string;
}

export default function FormInput({
  error,
  id,
  register,
  placeholder,
  inputType,
  validateFunction,
}: FormInputProps) {
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
        <label
          htmlFor={id}
          className="flex justify-center items-center text-xs"
        >
          {placeholder}
        </label>
        <input
          id={id}
          className="w-full bg-transparent outline-none py-1  text-sm mt-[1px]"
          type={inputType}
          {...register(id, {
            required: "This field is required",
            validate: validateFunction,
          })}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
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
