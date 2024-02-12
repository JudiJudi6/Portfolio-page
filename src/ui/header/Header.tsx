import React from "react";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="bg-bg w-full h-screen">
      <div className="max-w-7xl h-full  mx-auto">
        <Navigation />
        <div className="w-full h-full flex justify-center items-start flex-col pl-56 text-white max-w-7xl">
          <h1 className="text-">Łukasz Michnik</h1>
          <h3>Front-end Developer</h3>
          <button>about</button>
        </div>
        <div>{/* <img src="/p.jpg" alt="" /> */}</div>
      </div>
    </div>
  );
}
