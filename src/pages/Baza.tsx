import ProjectHeader from "../ui/projectPage/ProjectHeader";
import AboutProject from "../ui/projectPage/AboutProject";
import Footer from "../ui/Footer";
import Next from "../ui/projectPage/Next";
import ProjectDescription from "../ui/projectPage/ProjectDescription";
import ProjectGallery from "../ui/projectPage/ProjectGallery";

export default function Baza() {
  return (
    <div>
      <ProjectHeader
        title="Kulinarna Baza"
        desc="A website with recipes where anyone logged in can add their recipes and articles"
        role="Full-stack Developer"
        leader={false}
        context="Group Project"
        skni={false}
        time="1 month"
        img="/baza/ph2.jpg"
        descBg={false}
      />
      <AboutProject
        desc="Bubububuu"
        technologies="React, Typescript, Tailwind, Express.js, PostgreSQL"
        link="https://github.com/Skalik2/KulinarnaBaza"
        bgText="Kulinarna"
        liveLink=""
      />
      <ProjectDescription
        type="left"
        title="Application Development"
        text={
          <p>
            As the <span className="text-blue-500">Project Leader</span>, I am
            responsible for application development, ideas and design, team
            management and distribution of tasks. The project works on real-time
            data from{" "}
            <a
              href="https://docs.coincap.io/"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Coin Cap API
            </a>{" "}
            using react query. The backend is built with Python Django, using
            <span className="text-blue-500"> Rest API</span>. The project is
            built in the Students IT Club "Kod" and will be deployed on their
            server, but at the moment after 4 months of work it is not suitable
            for it, so there in no Live Demo :(
          </p>
        }
        img="/baza/ph4.png"
      />
      <ProjectGallery img="/baza/ph3.png" />
      <Next link="/wallet-wise" projectName="Wallet Wise" />
      <Footer />
    </div>
  );
}
