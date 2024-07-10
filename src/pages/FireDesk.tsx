import ProjectHeader from "../ui/projectPage/ProjectHeader";
import AboutProject from "../ui/projectPage/AboutProject";
import Footer from "../ui/Footer";
import Next from "../ui/projectPage/Next";
import ProjectDescription from "../ui/projectPage/ProjectDescription";
import ProjectGallery from "../ui/projectPage/ProjectGallery";
import VideoSection from "../ui/projectPage/VideoSection";

export default function FireDesk() {
  return (
    <div>
      <ProjectHeader
        title="FireDesk"
        desc="Huge project created in cooperation with Xebia Company and Rzeszów University of Technology, based on the creation of MVP application for office management and workstation bookings."
        role="/ Full-stack Developer"
        leader={true}
        context="Group University Project"
        skni={false}
        time="MVP done in 5 months"
        img="/firedesk/ph1.jpg"
        descBg={false}
      />
      <AboutProject
        desc="FireDesk is office management app made in coop with Xebia Company and Rzeszów University of Technology as a college subject. The project consisted of creating a mvp that allows users to manage the office and book individual workstations, our team developed this idea with a 3d creator that allows each logged-in user to build their own model of the office. The application also includes admin options that allows to view and modify all the reservations of users added to the office through the invitation code."
        technologies="Next.js, Express.js, MongoDB, Typescript, Tailwind, React Three Fiber"
        link="https://github.com/JudiJudi6/ICE-office-management-frontend"
        bgText="FireDesk"
        liveLink=""
      />
      <ProjectDescription
        type="left"
        title="My contribution to this project"
        text={
          <p>
            As the <span className="text-blue-500">Project Leader</span>, I was
            responsible for all aspects of application development, ideas and
            design, team management and distribution of tasks. My task was also
            plan the entire database using MongoDB, made{" "}
            <span className="text-blue-500"> ERD diagrams</span> and present it
            to our <span className="text-blue-500">supervisors</span> from
            Xebia, who were our support and organized meetings in the scrum
            methodology. I build{" "}
            <span className="text-blue-500">the entire frontend part</span> of
            the application including 3d office creator, main view, desks
            interactions etc. The backend is built with Express.js, here i also
            have my contribution with
            <span className="text-blue-500"> several methods </span>i have
            written. The project is only MVP and is so buggy so it is not
            suitable for Live Demo, MVP features work and are shown in the{" "}
            <span className="text-blue-500">video below.</span>
          </p>
        }
        img="/firedesk/ph2.png"
      />
      <VideoSection src="/firedesk/showcase.mp4" />
      <ProjectGallery img="/firedesk/ph3.png" />
      <Next link="/bitchain" projectName="Project Bitchain" />
      <Footer />
    </div>
  );
}
