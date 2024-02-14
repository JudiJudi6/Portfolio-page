import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ShapesMask() {
  const [xValue, setXValue] = useState<number>(0);
  const [yValue, setYValue] = useState<number>(0);

  useEffect(() => {
    function parallax(e: MouseEvent) {
      const movingValue = 3;
      setXValue((e.clientX * movingValue) / 100);
      setYValue((e.clientY * movingValue) / 100);
    }

    document.addEventListener("mousemove", parallax);

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  return (
    <div className="hidden sm:block absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSvgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 800 800"
        className="absolute w-10 h-10 top-40 left-32"
        id="element"
        data-value="-2"
        style={{ translateX: `-${xValue}px`, translateY: `${yValue}px` }}
      >
        <polygon
          points="400,250 250,550 550,550"
          strokeWidth="40"
          stroke="#ffff00"
          fill="none"
          opacity="1"
          transform="rotate(45, 400, 400)"
        />
      </motion.svg>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSvgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 800 800"
        className="absolute w-10 h-10 top-92 left-96"
        id="element"
        data-value="-2"
        style={{ translateX: `-${xValue}px`, translateY: `${yValue}px` }}
      >
        <polygon
          points="400,250 250,550 550,550"
          strokeWidth="40"
          stroke="#6b97ff"
          fill="none"
          opacity="1"
          transform="rotate(90, 400, 400)"
        />
      </motion.svg>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSvgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 800 800"
        className="absolute w-10 h-10 top-20 right-10"
        id="element"
        data-value="-2"
        style={{ translateX: `${xValue}px`, translateY: `${yValue}px` }}
      >
        <polygon
          points="400,250 250,550 550,550"
          strokeWidth="40"
          stroke="#00ffff"
          fill="none"
          opacity="1"
          transform="rotate(0, 400, 400)"
        />
      </motion.svg>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSvgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 800 800"
        className="absolute w-10 h-10 top-40 right-32"
        id="element"
        data-value="-2"
        style={{ translateX: `${xValue}px`, translateY: `${yValue}px` }}
      >
        <polygon
          points="400,250 250,550 550,550"
          strokeWidth="40"
          stroke="#6b97ff"
          fill="none"
          opacity="1"
          transform="rotate(0, 400, 400)"
        />
      </motion.svg>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSvgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 800 800"
        className="absolute w-10 h-10 bottom-40 right-32"
        id="element"
        data-value="-2"
        style={{ translateX: `${xValue}px`, translateY: `${yValue}px` }}
      >
        <circle
          r="150"
          cx="400"
          cy="400"
          stroke-width="40"
          stroke="#f06449"
          fill="none"
          opacity="1"
          transform="rotate(0, 400, 400)"
        ></circle>
      </motion.svg>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSvgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 800 800"
        className="absolute w-10 h-10 top-32 left-20"
        id="element"
        data-value="-2"
        style={{ translateX: `${xValue}px`, translateY: `${yValue}px` }}
      >
        <circle
          r="150"
          cx="400"
          cy="400"
          stroke-width="40"
          stroke="#6b97ff"
          fill="none"
          opacity="1"
          transform="rotate(0, 400, 400)"
        ></circle>
      </motion.svg>

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSvgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 800 800"
        className="absolute w-10 h-10 bottom-28 left-20"
        id="element"
        data-value="-2"
        style={{ translateX: `${xValue}px`, translateY: `${-yValue}px` }}
      >
        <rect
          width="300"
          height="300"
          x="250"
          y="250"
          stroke-width="40"
          stroke="#6b97ff"
          fill="none"
          opacity="1"
          transform="rotate(0, 400, 400)"
        ></rect>
      </motion.svg>

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSvgjs="http://svgjs.dev/svgjs"
        viewBox="20 0 800 800"
        className="absolute w-10 h-10 bottom-16 right-80"
        id="element"
        data-value="-2"
        style={{ translateX: `${xValue}px`, translateY: `${-yValue}px` }}
      >
        <path
          d="M400 226.795166015625L550.0000095849032 313.3975856398686V486.60242488835587L400 573.2048445125995L249.99999041509682 486.60242488835587V313.3975856398686L400 226.795166015625Z "
          stroke-width="40"
          stroke="#00ffff"
          fill="none"
          opacity="1"
          transform="rotate(0, 400, 400)"
        ></path>
      </motion.svg>
    </div>
  );
}
