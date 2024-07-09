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
        desc="Bitchain Project is a cryptocurrency exchange simulator, whose main task is to teach users how to trade, without risk, on fictitious funds, with real data. The final project will include all the functionalities of a real stock exchange, at the moment the following have been done: markets, home page, login and registration, individual currency pages, modification of user data, support for an external api for cryptocurrencies and much more."
        technologies="React, Typescript, Tailwind, Django, Rest API"
        link="https://github.com/skni-kod/Bitchain-Frontend"
        bgText="Bitchain"
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
        img="/bitchain/ph1.png"
      />
      <ProjectDescription
        type="right"
        text={
          <p>
            I built <span className="text-blue-500">markets page</span>, where
            the user can view the stock prices of cryptocurrencies, filter them
            and search by name. There are also cards with the most popular
            currencies according to certain algorithms. Each row can take user
            to the{" "}
            <span className="text-blue-500">
              page with specific market data
            </span>{" "}
            about the currency , which I also made. I am also responsible for
            communicating with the external api and downloading data from it.
            For navigation, routing, login page and many other things,{" "}
            <span className="text-blue-500"> in general</span>, for most of the
            interface and mechanics shown in the pictures.
          </p>
        }
        title="As Frontend Developer"
        img="/bitchain/ph2.png"
      />
      <ProjectGallery img="/bitchain/ph3.png" />
      <Next link="/wallet-wise" projectName="Wallet Wise" />
      <Footer />
    </div>
  );
}
