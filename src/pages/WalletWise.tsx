import React from "react";
import ProjectHeader from "../ui/projectPage/ProjectHeader";
import AboutProject from "../ui/projectPage/AboutProject";
import ProjectDescription from "../ui/projectPage/ProjectDescription";
import ProjectGallery from "../ui/projectPage/ProjectGallery";
import Next from "../ui/projectPage/Next";
import Footer from "../ui/Footer";

export default function WalletWise() {
  return (
    <div>
      <ProjectHeader
        title="Wallet Wise"
        desc="Wallet simulator that allows to exchange and transfer funds between users"
        role="Author"
        leader={false}
        context="Private Project"
        skni={false}
        time="~ 4 months"
        img="/wallet/wallet.jpg"
      />
      <AboutProject
        desc="Wallet Wise is an online wallet simulator, allows users to transfer funds between each other in different currencies. It has widely developed user data modification, including avatar, and other unique data, such as nickname. The application also includes an additional exchange rate api - Frankfurter API, allowing users to convert between different currencies and transfer funds to others directly in the chosen currency."
        technologies="React, Styled Components, Supabase"
        link="https://github.com/JudiJudi6/WalletWise"
        bgText="Wallet Wise"
        liveLink="https://wallet-wise-five.vercel.app/"
      />
      <ProjectDescription
        type="left"
        title="Application Development"
        text={<p>kiedys cos tu napisze</p>}
        img="/wallet/wallet2.jpg"
      />
      <ProjectGallery img="/wallet/wallet.jpg" />
      <Next
        link="/three-animation"
        projectName="Interactive Robots Animation"
      />
      <Footer />
    </div>
  );
}
