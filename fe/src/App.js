import "./App.css";
import Desktop15 from "./components/navBar";
import GetInTouch from "./components/sections/getInTouch";
import OurVision from "./components/sections/ourVision";
import Subcontent from "./components/sections/subcontent";
import TrustedBy from "./components/sections/trustedBy";

function App() {
  return (
    <div className="App">
      <title>KIDEO</title>
      <meta property="og:title" content="exported project" />
      <link
        rel="canonical"
        href="https://untitled-copy-lvr6i6.teleporthq.app/"
      />

      <Desktop15 />
      <Subcontent />
      <TrustedBy />
      <OurVision />

      <GetInTouch />
    </div>
  );
}

export default App;
