import { useState } from "react";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Visitor from "./Components/Visitor";
import Projects from "./Components/Projects";

function App() {
  const [showIcons, setShowIcons] = useState(false);
  function aboutIsCliked() {
    setShowIcons(true);
  }
  return (
    <>
      <Header aboutClicked={showIcons} />
      <Visitor isClicked={aboutIsCliked} />
      {showIcons === true ? (
        <div>
          <Hero />
          <Projects />
        </div>
      ) : null}

      <Footer />
    </>
  );
}

export default App;
