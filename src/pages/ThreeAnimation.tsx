import ProjectHeader from "../ui/projectPage/ProjectHeader";
import AboutProject from "../ui/projectPage/AboutProject";
import ProjectDescription from "../ui/projectPage/ProjectDescription";
import ProjectGallery from "../ui/projectPage/ProjectGallery";
import Next from "../ui/projectPage/Next";
import Footer from "../ui/Footer";
import { useUserWidth } from "../hooks/useUserWidth";

export default function ThreeAnimation() {
  const width = useUserWidth();
  return (
    <div>
      {width > 500 ? (
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
      ) : (
        <ProjectHeader
          title="Interactive Animation"
          desc="Interactive animation in Three.js allowing users to fully control it"
          role="Author"
          leader={false}
          context="Subject exemption at university"
          skni={false}
          time="~ 2 months"
          img="/three/three.jpg"
          descBg={false}
        />
      )}
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
            The welding animation includes a system of{" "}
            <span className="text-blue-500">animated particles</span>, as well
            as a <span className="text-blue-500">smoke effect</span> and{" "}
            <span className="text-blue-500">flashing lights</span>. The whole
            project is also responsive, but the performance of 3D graphics on
            mobile devices is not good. A{" "}
            <span className="text-blue-500">Free camera</span> has also been
            implemented, so that user can view the entire scene and the
            construction of robots from his own perspective.
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
