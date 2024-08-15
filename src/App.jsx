import React, { useState } from "react";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Visitor from "./Components/Visitor";
import Projects from "./Components/Projects";

function App() {
  const [] = useState("");
  return (
    <>
      <Header />
      <Visitor />
      <Hero />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
