import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PortfolioList from "./components/PortofolioList";
import About from "./components/About";
import Contact from "./components/Contact";
import Advice from "./components/Advice";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="page-top">
      <Navbar />
      <Hero />
      <PortfolioList />
      <About />
      <Contact />
      <Advice />
      <Footer />
    </div>
  );
}

export default App;
