import React from "react";
import ProjectHeader from "../ui/ProjectHeader";
import AboutProject from "../ui/AboutProject";
import Footer from "../ui/Footer";
import Next from "../ui/Next";

export default function Bitchain() {
  return (
    <div>
      <ProjectHeader
        title="Project Bitchain"
        desc="Copy of a cryptocurrency exchange containing all the mechanics of a real exchange"
        role="/ Front-end Developer"
        leader={true}
        context="Group Project at"
        skni={true}
        time="in progress for 4 months"
        img="/bitchain/bitchain.jpg"
      />
      <AboutProject
        desc="Bitchain Project is a cryptocurrency exchange simulator, whose main task is to teach users how to trade, without risk, on fictitious funds. The final project will include all the functionalities of a real stock exchange, at the moment the following have been done: markets, home page, login and registration, individual currency pages, modification of user data, support for an external api for cryptocurrencies and much more."
        technologies="React, Typescript, Tailwind, Django, Rest API"
        link="https://github.com/skni-kod/Bitchain-Frontend"
        bgText="Bitchain"
        deployed={false}
      />
      <div className="h-screen"></div>
      <Next />
      <Footer />
    </div>
  );
}
