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
        desc="Wallet Wise is an online wallet simulator, allows users to transfer funds between each other in different currencies. The application also includes an additional exchange rate api - Frankfurter API, allowing users to convert between different currencies on the market and transfer funds to others directly in the chosen currency. It has widely developed user data modification, including avatar, and other unique data, such as nickname."
        technologies="React, Styled Components, Supabase"
        link="https://github.com/JudiJudi6/WalletWise"
        bgText="Wallet"
        liveLink="https://wallet-wise-five.vercel.app/"
      />
      <ProjectDescription
        type="left"
        title="Wallet Simulator"
        text={
          <p>
            Each user has his <span className="text-blue-500">mailbox</span>{" "}
            made in <span className="text-blue-500">Supabase</span>, which
            awaits on transfer orders, when it receives a notification, the
            header displays{" "}
            <span className="text-blue-500">real-time information</span> about
            recived transfer. The history of each transaction and transfer is
            also <span className="text-blue-500">collected</span> and for
            viewing in the stats tab where user can see more specific
            information. Each user also has his own{" "}
            <span className="text-blue-500">list of friends</span> to be able to
            order transfers even faster. The project is open to further{" "}
            <span className="text-blue-500">modifications</span>, which I may
            develop in the future.
          </p>
        }
        img="/wallet/ph1.png"
      />
      <ProjectGallery img="/wallet/ph2.png" />
      <Next
        link="/three-animation"
        projectName="Interactive Robots Animation"
      />
      <Footer />
    </div>
  );
}
