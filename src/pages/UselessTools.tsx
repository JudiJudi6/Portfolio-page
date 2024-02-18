import React from "react";
import ProjectHeader from "../ui/projectPage/ProjectHeader";
import AboutProject from "../ui/projectPage/AboutProject";
import ProjectDescription from "../ui/projectPage/ProjectDescription";
import ProjectGallery from "../ui/projectPage/ProjectGallery";
import Next from "../ui/projectPage/Next";
import Footer from "../ui/Footer";

export default function UselessTools() {
  return (
    <div>
      <ProjectHeader
        title="Useless Tools"
        desc="Project containing random tools, mainly solving problems related to tasks at the university"
        role="Front-end Developer"
        leader={false}
        context="Group Project at"
        skni={true}
        time="~ 4 months (never completed)"
        img="/useless/useless.jpg"
      />
      <AboutProject
        desc="Useless Tools was my first big project, which makes it not perfect, and it's here because I have sentiment for it. The project contains tools useful for people at the university, solves tasks when given data. Includes algorithms that solve Chomsky, Greibach grammar tasks and Cocke–Younger–Kasami algorithm. There is also a complex password generator. Plans for the project in general were ambitious, but we quickly realized that our technology stack would not be able to handle it."
        technologies="Html, Css, JavaScript, Django"
        link="https://github.com/skni-kod/Useless-Tools"
        bgText="Useless"
        liveLink="https://ut.skni.edu.pl/home"
      />
      <ProjectDescription
        type="left"
        title="As Frontend Developer"
        text={
          <p>
            I am responsible for building the homepage, navigation, background
            animation on each page, and the login and registration pages, along
            with the animation on them.
          </p>
        }
        img="/useless/ph1.png"
      />

      <ProjectGallery img="/useless/ph2.png" />
      <Next link="/bitchain" projectName="Project Bitchain" />
      <Footer />
    </div>
  );
}
