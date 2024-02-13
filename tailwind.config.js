/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      bg: "#1c1d25",
      white: "#f0f0f0",

      //gradients

      red1: "#ef4c3f",
      red2: "#f06148",

      blue1: "#2358a3",
      blue2: "#214083",
    },
    screens: {
      xs: "320px",
      xm: "440px",
      md600: "600px",
      md800: "800px",
    },
    gridTemplateRows: {
      layout: " auto",
    },
    backgroundImage: { rightArrow: 'url("/arrow.svg")' },
  },
};
export const plugins = [];
