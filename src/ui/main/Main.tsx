import React from "react";
import SectionTitle from "../SectionTitle";
import MainItem from "./MainItem";

export default function Main() {
  return (
    <main className="w-full px-4 xm:px-8 md600:px-14 md900:px-20 max-w-7xl flex flex-col justify-center items-center mx-auto">
      <section
        id="projects"
        className="w-full flex flex-col justify-center items-center"
      >
        <SectionTitle text="Best Projects" />
        <div className="flex flex-col justify-center items-center gap-16">
          <MainItem
            img="/bitchain/bitchain.jpg"
            link="/bitchain"
            title="Project Bitchain"
            type="left"
            desc="Copy of a cryptocurrency exchange containing all the mechanisms of a real exchange"
          />
          <MainItem
            img="/bitchain/bitchain4.jpg"
            link="/bitchain"
            title="Project Bitchain"
            type="right"
            desc="Copy of a cryptocurrency exchange containing all the mechanisms of a real exchange"
          />
        </div>
      </section>
      <section id="skills">
        <SectionTitle text="Skills" />
      </section>
    </main>
  );
}
