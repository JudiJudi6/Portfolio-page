import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface SkillItemProps {
  icon: React.ReactNode;
  skill: string;
  libs?: string;
  color: string;
  last?: boolean;
}

export default function SkillItem({
  icon,
  libs,
  skill,
  color,
  last,
}: SkillItemProps) {
  const [hover, sethover] = useState<boolean>(false);

  return (
    <motion.div
      className="w-full flex flex-col justify-evenly items-start py-4 md:p-5"
      onHoverStart={() => sethover(true)}
      onHoverEnd={() => sethover(false)}
      whileInView={{ translateY: "0px", opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      initial={{ translateY: "30px", opacity: 0 }}
      transition={{ ease: "easeInOut", delay: 0.5, duration: 0.4 }}
    >
      <div className="w-full flex justify-start items-center gap-5">
        <div className={`text-3xl`}>
          <span
            className="transition-colors duration-300"
            style={hover ? { color: color } : { color: "#000000" }}
          >
            {icon}
          </span>
        </div>
        <h5
          className="font-bold text-xl transition-colors duration-300"
          style={hover ? { color: color } : { color: "#000000" }}
        >
          {skill}
        </h5>
      </div>
      <p
        className={`text-sm   text-left w-full transition-colors duration-300 ${
          hover ? "text-black" : "text-stone-500"
        } ${libs && "mt-2"}`}
      >
        {libs}
      </p>
      {last && (
        <div className="pt-6">
          <p
            className={`text-sm   text-left w-full transition-colors duration-300 mb-4 ${
              hover ? "text-black" : "text-stone-500"
            }`}
          >
            Full list of courses I have done (in order from the earliest):
          </p>
          <ul
            className={`text-sm   text-left w-full transition-colors duration-300 flex flex-col gap-3 ${
              hover ? "text-black" : "text-stone-500"
            } ${libs && "mt-2"}`}
          >
            <li>
              <Link
                to="https://www.udemy.com/course/od-zera-do-front-end-developera-cz1/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#0011ff]"
              >
                - Kurs Tworzenia Stron WWW cz.1 - 10h - Mateusz Maj
              </Link>
            </li>
            <li>
              <Link
                to="https://www.udemy.com/course/od-zera-do-front-end-developera-cz2/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#0011ff]"
              >
                - Kurs Tworzenia Stron WWW cz.2 - 10h - Mateusz Maj
              </Link>
            </li>
            <li>
              <Link
                to="https://mmcschool.teachable.com/p/kurs-tworzenia-stron-www-cz-3"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#0011ff]"
              >
                - Kurs Tworzenia Stron WWW cz.3 - 13h - Mateusz Maj
              </Link>
            </li>
            <li>
              <Link
                to="https://www.udemy.com/course/javascript-jedyny-kurs-ktorego-potrzebujesz/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#0011ff]"
              >
                - JavaScript - Jedyny Kurs, Którego Potrzebujesz - 10h - Mateusz
                Maj
              </Link>
            </li>
            <li>
              <Link
                to="https://www.udemy.com/course/10-projektow-w-czystym-javascript-cz-1/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#0011ff]"
              >
                - 10 projektów w czystym JavaScript - 9.5h - Mateusz Maj
              </Link>
            </li>
            <li>
              <Link
                to="https://mmcschool.teachable.com/p/kurs-tworzenia-stron-www-cz-4"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#0011ff]"
              >
                - Kurs Tworzenia Stron WWW cz.4 - 10h+ - Mateusz Maj
              </Link>
            </li>
            <li>
              <Link
                to="https://www.udemy.com/course/komponenty-na-strony-www/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#0011ff]"
              >
                - 15 Komponentów Na Strony WWW - 4.5h - Mateusz Maj
              </Link>
            </li>
            <li>
              <Link
                to="https://www.udemy.com/course/the-ultimate-react-course/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#0011ff]"
              >
                - The Ultimate React Course 2024: React, Next.js, Redux & More -
                84h - Jonas Schmedtmann
              </Link>
            </li>
            <li>
              <Link
                to="https://www.udemy.com/course/react-testing-library-and-jest/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#0011ff]"
              >
                - React Testing Library and Jest: The Complete Guide - 7.5h -
                Stephen Grider
              </Link>
            </li>
            <li>
              <Link
                to="https://www.udemy.com/course/understanding-typescript/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#0011ff]"
              >
                - Understanding TypeScript - 15h - Maximilian Schwarzmuller
              </Link>
            </li>
            <li>
              <Link
                to="https://www.udemy.com/course/react-typescript-the-practical-guide/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#0011ff]"
              >
                - React & TypeScript - The Practical Guide - 7.5h - Maximilian
                Schwarzmuller
              </Link>
            </li>
            <li>
              <Link
                to="https://www.udemy.com/course/nextjs-react-the-complete-guide/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#0011ff]"
              >
                - Next.js 14 & React - The Complete Guide - 32h - Maximilian
                Schwarzmuller
              </Link>
            </li>
          </ul>
          <p
            className={`text-sm text-left w-full transition-colors duration-300 my-4 mt-6 ${
              hover ? "text-black" : "text-stone-500"
            }`}
          >
            Courses in progress:
          </p>
          <ul
            className={`text-sm   text-left w-full transition-colors duration-300 flex flex-col gap-3 ${
              hover ? "text-black" : "text-stone-500"
            } ${libs && "mt-2"}`}
          >
            <li>
              <Link
                to="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#0011ff]"
              >
                - Node.js, Express, MongoDB & More: The Complete Bootcamp 2024 -
                42h - Jonas Schmedtmann
              </Link>
            </li>
          </ul>
        </div>
      )}
    </motion.div>
  );
}
