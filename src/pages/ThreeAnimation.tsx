import ProjectHeader from "../ui/projectPage/ProjectHeader";
import AboutProject from "../ui/projectPage/AboutProject";
import ProjectDescription from "../ui/projectPage/ProjectDescription";
import ProjectGallery from "../ui/projectPage/ProjectGallery";
import Next from "../ui/projectPage/Next";
import Footer from "../ui/Footer";

export default function ThreeAnimation() {
  return (
    <div>
      {" "}
      <ProjectHeader
        title="Interactive Robots Animation"
        desc="Interactive animation in Three.js allowing users to fully control it"
        role="Author"
        leader={false}
        context="Subject exemption at university"
        skni={false}
        time="~ 2 months"
        img="/three/three.jpg"
        descBg={false}
      />
      <AboutProject
        desc="The animation is built with 4 robots, and 13 stages of animation. User can control each stage using arrows or interface. The animation can be moved forward and backward. The scene lighting consists of 6 lamps, also controlled by the user, lamps can be switched or brightened. Robots and camera animations are written in an additional library - Gsap.js. Doing the project allowed me to be exempt from a subject at university dealing with 3D graphics."
        technologies="React, Three.js, Gsap.js, Tailwind"
        link="https://github.com/JudiJudi6/Three-js-welding-robots-animation"
        bgText="Three.js"
        liveLink="https://three-js-welding-robots-animation.vercel.app/"
      />
      <ProjectDescription
        type="left"
        title="Implementation of Animation"
        text={
          <p>
            The welding animation includes a system of animated particles, as
            well as a smoke effect and flashing lights. The whole project is
            also responsive, but the performance of 3D graphics on mobile
            devices is not good. A Free camera has also been implemented, so
            that user can view the entire scene and the construction of robots
            from his own perspective.
          </p>
        }
        img="/three/ph2.png"
      />
      <ProjectGallery img="/three/ph1.png" />
      <Next link="/useless-tools" projectName="Useless Tools" />
      <Footer />
    </div>
  );
}
