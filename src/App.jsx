import { useState } from "react";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Visitor from "./Components/Visitor";
import Projects from "./Components/Projects";
import Techstack from "./Components/Techstack";
import Topintro from "./Components/Topintro";

function App() {
  const [showIcons, setShowIcons] = useState(false);
  function aboutIsCliked() {
    setShowIcons(true);
  }
  return (
    <>
      <Header aboutClicked={showIcons} />
      {!showIcons ? <Visitor isClicked={aboutIsCliked} /> : null}

      {showIcons === true ? (
        <div>
          <Topintro/>
          <Hero />
          <hr className="break"/>
          <Techstack />
          <Projects />
        </div>
      ) : null}

      <Footer />
    </>
  );
}

export default App;
