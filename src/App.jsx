import React from "react";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/About";
import Services from "./components/Services";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import { sectionalHeading } from "./components/db.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About title={sectionalHeading.about} />
      <Services title={sectionalHeading.service} />
      <Featured title={sectionalHeading.features} />
      <Footer />
    </div>
  );
};

export default App;
