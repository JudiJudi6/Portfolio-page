import React from "react";
import Navigation from "./Navigation";
import Button from "../Button";

export default function Header() {
  return (
    <div className="bg-bg w-full h-screen">
      <div className="max-w-7xl h-full w-full  mx-auto ">
        <Navigation />
        <div className="w-full h-[calc(100vh-88px)] flex  justify-between items-center  px-8 xm:px-20  text-white max-w-7xl pb-[88px] gap-12">
          <div className="flex flex-col">
            <h1 className="text-3xl md600:text-4xl md800:text-5xl font-bold tracking-wide">
              Łukasz Michnik
            </h1>
            <h3 className="text-lg md600:text-xl  py-4 text italic mb-3">
              Front-end Developer
            </h3>
            <Button>About Me</Button>
          </div>
          <div className="hidden lg:block rounded-full mr-32">
            <img className="rounded-full w-72" src="/p.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
