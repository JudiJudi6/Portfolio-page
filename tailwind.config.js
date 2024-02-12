/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      bg: "#1c1d25",
      white: "#f0f0f0",
    },
    screens: {
      xs: "320px",
      md600: "600px",
      md800: "800px",
    },
    gridTemplateRows: {
      layout: " auto",
    },
  },
};
export const plugins = [];
