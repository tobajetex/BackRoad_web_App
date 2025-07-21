import React from "react";
import mainx from "../assets/images/main.jpeg";

const Hero = () => {
  return (
    <div>
      <section
        className="hero"
        id="home"
        style={{
          background: `
            linear-gradient(rgb(44, 174, 186, 0.7), rgba(0, 0, 0, 0.7)),url(${mainx})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className="hero-banner">
          <h1>continue exploring</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            explicabo debitis est autem dicta.
          </p>
          <a href="#tours" className="btn hero-btn">
            explore tours
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
