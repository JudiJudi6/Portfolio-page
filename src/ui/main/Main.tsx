import SectionTitle from "../SectionTitle";
import MainItem from "./MainItem";
import SkillItem from "./SkillItem";
import { FaReact } from "react-icons/fa";
import { MdOutlineMore } from "react-icons/md";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { SiThreedotjs } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

export default function Main() {
  return (
    <main className="w-full px-4 xm:px-8 md600:px-14 md900:px-20 max-w-7xl flex flex-col justify-center items-center mx-auto mb-20">
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
            desc="Copy of a cryptocurrency exchange containing all the mechanics of a real exchange"
          />
          <MainItem
            img="/wallet/wallet.jpg"
            link="/wallet-wise"
            title="Wallet Wise"
            type="right"
            desc="Wallet simulator that allows to exchange and transfer funds between users"
          />
          <MainItem
            img="/three/three.jpg"
            link="/three-animation"
            title="Interactive Robots Animation"
            type="left"
            desc="Interactive animation in Three.js allowing users to fully control it"
          />
          <MainItem
            img="/useless/useless.jpg"
            link="/useless-tools"
            title="Useless Tools"
            type="right"
            desc="Project containing random tools, mainly solving problems related to tasks at the university"
          />
        </div>
      </section>
      <section id="skills" className="w-full px-8 max-w-[800px]">
        <SectionTitle text="Skills" />
        <div className="flex flex-col justify-center items-start md:items-center gap-5">
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
            skill="Plans For The Future"
            libs="Next.js, Node.js, Express.js, MongoDB and maybe Vue.js"
            icon={<MdOutlineMore />}
            color="#77fb66"
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
