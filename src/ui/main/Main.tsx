import { BiLogoTypescript } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import {
  FaCss3Alt,
  FaHtml5,
  FaPencilAlt,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { MdOutlineMore } from "react-icons/md";
import { PiFileSqlLight } from "react-icons/pi";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiJest,
  SiNextdotjs,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
} from "react-icons/si";
import SectionTitle from "../SectionTitle";
import MainItem from "./MainItem";
import SkillItem from "./SkillItem";
import SmallProjectItem from "./SmallProjectItem";

export default function Main() {
  return (
    <main className="w-full px-4 xm:px-8 md600:px-14 md900:px-20 flex flex-col justify-center items-center mx-auto mb-20 overflow-hidden">
      <section
        id="projects"
        className="w-full flex flex-col justify-center items-center"
      >
        <SectionTitle text="Best Projects" />
        <div className="flex flex-col justify-center items-center gap-16  w-full">
          <MainItem
            img="/firedesk/ph1.jpg"
            link="/firedesk"
            title="FireDesk"
            type="left"
            desc="Huge project created in cooperation with Xebia Company and Rzeszów University of Technology, based on the creation of MVP application for office management and workstation bookings."
          />
          <MainItem
            img="/bitchain/bitchain.jpg"
            link="/bitchain"
            title="Project Bitchain"
            type="right"
            desc="Copy of a cryptocurrency exchange containing all the mechanics of a real exchange"
          />
          <MainItem
            img="/baza/ph2.jpg"
            link="/baza"
            title="Kulinarna Baza"
            type="left"
            desc="A website with recipes where anyone logged in can add their recipes and articles"
          />
          <MainItem
            img="/wallet/wallet.jpg"
            link="/wallet-wise"
            title="Wallet Wise"
            type="right"
            desc="Wallet simulator that allows to exchange and transfer funds between users"
          />
        </div>
      </section>
      <section
        id="small-projects"
        className="w-full flex flex-wrap
         justify-center items-center"
      >
        <SectionTitle text="Small, but also nice" />
        <div className="flex flex-wrap justify-center items-center gap-16 ">
          <SmallProjectItem
            img="/three/three.jpg"
            link="/three-animation"
            title="Interactive Robots Animation"
            desc="Interactive animation in Three.js allowing users to fully control it"
            delay={0}
          />
          <SmallProjectItem
            img="/cnn/ph2.jpg"
            link="/cnn-handwritten-digits"
            title="CNN Model"
            desc="Project containing cnn model to recognize digits written by user"
            delay={0.2}
          />
          <SmallProjectItem
            img="/useless/useless.jpg"
            link="/useless-tools"
            title="Useless Tools"
            desc="Project containing random tools, mainly solving problems related to tasks at the university"
            delay={0.4}
          />
        </div>
      </section>
      <section id="skills" className="w-full px-8 max-w-[800px]">
        <SectionTitle text="Skills" />
        <div className="flex flex-col justify-center items-start md:items-center gap-5">
          <SkillItem
            skill="Next.js"
            libs="App router, Page router, Server actions, NextAuth, Cache managing, Optimistic Design, and much more UX optimizations"
            icon={<SiNextdotjs />}
            color="#444444"
          />
          <SkillItem
            skill="React"
            libs="React Query, React Redux, React Router, React Testing Library, Framer Motion, React Three Fiber, ReCharts, React Hook Form, Material UI, HighCharts.js, and other libraries. HOC pattern and Compound Components Pattern"
            icon={<FaReact />}
            color="#66dbfb"
          />
          <div className="grid grid-cols-1 md:grid-cols-2  justify-items-start">
            <SkillItem
              skill="TypeScript"
              libs="Interfaces, Union Types and Generics..."
              icon={<BiLogoTypescript />}
              color="#2f74c0"
            />
            <SkillItem
              skill="JavaScript"
              libs="OOP, Async/await, Promises and more"
              icon={<RiJavascriptFill />}
              color="#efd81d"
            />
            <SkillItem
              skill="Tailwind"
              libs=""
              icon={<SiTailwindcss />}
              color="#38bdf8"
            />
            <SkillItem
              skill="Three.js"
              libs=""
              icon={<SiThreedotjs />}
              color="#333333"
            />
            <SkillItem
              skill="Styled Components"
              libs=""
              icon={<SiStyledcomponents />}
              color="#de7496"
            />
            <SkillItem skill="Sass" libs="" icon={<FaSass />} color="#cd6799" />
            <SkillItem skill="Jest" libs="" icon={<SiJest />} color="#c8431b" />
            <SkillItem
              skill="Supabase"
              libs=""
              icon={<SiSupabase />}
              color="#44d093"
            />
            <SkillItem
              skill="SQL"
              libs=""
              icon={<PiFileSqlLight />}
              color="#dc7939"
            />
            <SkillItem
              skill="MongoDB"
              libs=""
              icon={<DiMongodb />}
              color="#55ad47"
            />
            <SkillItem
              skill="HTML"
              libs=""
              icon={<FaHtml5 />}
              color="#e5532d"
            />
            <SkillItem
              skill="CSS"
              libs=""
              icon={<FaCss3Alt />}
              color="#2d53e5"
            />
          </div>
          <SkillItem
            skill="Currently learning"
            libs="Node.js, Express.js, Docker"
            icon={<MdOutlineMore />}
            color="#5ce708"
          />
        </div>
        <SkillItem
          skill="Where did I learn from?"
          libs=" I spent my free time learning from courses on Udemy and Youtube
            materials. I also built my own projects to learn, how to use the
            knowledge from them in practice"
          icon={<FaPencilAlt />}
          color="#0011ff"
          last={true}
        />
      </section>
    </main>
  );
}
