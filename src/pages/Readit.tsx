import Footer from "../ui/Footer";
import AboutProject from "../ui/projectPage/AboutProject";
import Next from "../ui/projectPage/Next";
import ProjectDescription from "../ui/projectPage/ProjectDescription";
import ProjectGallery from "../ui/projectPage/ProjectGallery";
import ProjectHeader from "../ui/projectPage/ProjectHeader";

export default function Readit() {
  return (
    <div>
      <ProjectHeader
        title="ReadIt"
        desc="A newly created project that takes part in the “VIA Express do sukcesu” contest for the best startup idea. The project is a site for sharing knowledge with others by creating your own thematic pages"
        role="/ Front-end Developer"
        leader={true}
        context="Group Competition Project"
        skni={false}
        time="in progress for 1 month"
        img="/readit/ph1.jpg"
        descBg={false}
      />
      <AboutProject
        desc="The project is a web application containing content created by users on a topic of their choice using our page builder.  Each creator can sell his materials or mark it as free in order to promote his profile. A system of observations and profile pages is implemented, a lot of things can be commented or rated. Browsing materials is simplified by a large number of filters and paginations. The site has user rankings and a lot of search engines. Users can modify the entire profiles, descriptions, skills or background photo and avatar. The project is still in the development phase, but the MVP version is ready and works correctly."
        technologies="Next.js, Fast API, Typescript, Tailwind, Redux Toolkit with Query, PostgreSQL"
        link="https://github.com/JudiJudi6/Readit-front/tree/main"
        bgText="ReadIt"
        liveLink="https://readit-visit.vercel.app/"
      />
      <ProjectDescription
        type="left"
        title="Project Development"
        text={
          <p>
            The project is still in the development stage and probably a lot
            will change here, so{" "}
            <span className="text-blue-500">see you later </span> with the final
            version...
          </p>
        }
        img=""
      />
      <ProjectGallery img="/readit/ph2.png" />
      <Next link="/firedesk" projectName="FireDesk" />
      <Footer />
    </div>
  );
}
