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
        context="Group University Project"
        skni={false}
        time="1 month"
        img="/baza/ph2.jpg"
        descBg={false}
      />
      <AboutProject
        desc="Group project done in cooperation with the faculty of management, which managed a team of programmers, namely us. The project is a culinary blog for browsing recipes and articles. It has the ability to add your own recipe or article after logging in, and later edit or delete them. Additionally, a meal planner for planning meals for the following days has also been implemented. Each recipe and article has its own comment section, recipes can also be liked."
        technologies="React, Typescript, Tailwind, Express.js, PostgreSQL"
        link="https://github.com/Skalik2/KulinarnaBaza"
        bgText="Kulinarna"
        liveLink=""
      />
      <ProjectDescription
        type="left"
        title="My Contribution"
        text={
          <p>
            I am responsible for creating{" "}
            <span className="text-blue-500"> most of the frontend part</span>,
            recipe and article page, adding new recipes and articles, rankings,
            page with liked and added by the user recipes and articles,
            management of added content, comments sections, and the{" "}
            <span className="text-blue-500">
              whole supervision of the correct operation of the frontend
            </span>{" "}
            such as routing. In addition, I have my contribution to the backend
            part in <span className="text-blue-500">fixing bugs</span> of
            individual methods that did not work properly, and{" "}
            <span className="text-blue-500">database planning</span>.{" "}
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
