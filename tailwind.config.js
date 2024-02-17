/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      bg: "#1c1d25",
      white: "#ececec",
      pureWhite: "#ffffff",

      modalWhite: "#ececec",
      modalSecWhite: "#e1e1e1",

      modalDark: "#1c1d25",
      modalSecDark: "#23242c",

      //gradients

      red1: "#ef4c3f",
      red2: "#f06148",

      blue1: "#2358a3",
      blue2: "#214083",

      blue3: "#1e4676",
      blue4: "#082b78",
    },
    screens: {
      xs: "320px",
      xss: "400px",
      xm: "440px",
      md600: "600px",
      md800: "800px",
      md900: "900px",
      slg: "1170px",
    },
    gridTemplateRows: {
      layout: " auto",
    },
    backgroundImage: {
      rightArrow: 'url("/arrow.svg")',
    },
  },
};
export const plugins = [];
