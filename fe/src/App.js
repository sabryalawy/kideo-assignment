import "./App.css";
import BackGroundCrums from "./components/backgroundCrums";
import Footer from "./components/footer";
import Desktop15 from "./components/navBar";
import ContentInfo from "./components/sections/contentInfo";
import GetInTouch from "./components/sections/getInTouch";
import OurVision from "./components/sections/ourVision";
import PreschoolApps from "./components/sections/preschoolApps";
import Subcontent from "./components/sections/subcontent";
import Team from "./components/sections/team";
import Testomonial from "./components/sections/testomonial/indedx";
import TrustedBy from "./components/sections/trustedBy";
import VocaTooki from "./components/sections/vocatooki";

function App() {
  return (
    <div className="App">
      {/* <title>KIDEO</title>
      <meta property="og:title" content="exported project" />
      <link
        rel="canonical"
        href="https://untitled-copy-lvr6i6.teleporthq.app/"
      /> */}
      <BackGroundCrums />
      <Desktop15 />
      <Subcontent />
      <TrustedBy />
      <img
        src="/rectangle16592-bb3q-200h.png"
        alt="Rectangle16592"
        className="desktop15-rectangle165"
      />
      <span className="desktop15-text291">Tittles font: Maku , Bold</span>
      <OurVision id={"Vision"} />
      <ContentInfo />
      <VocaTooki />
      <PreschoolApps />
      <Testomonial />
      <Team />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
