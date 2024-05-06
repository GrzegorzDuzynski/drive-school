import React from "react";
import "./App.css";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reputation from "./components/Reputation";
import Stats from "./components/Stats";
import Offer from "./components/Offer";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Hero />
        <Offer />
        {/* <Registration /> */}
        <About />
        <Reputation />
        <Stats />
        {/* <Cooperations /> */}
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
