import React from "react";
import Slider from "./../homeComponent/Slider/Slider";
import About from "./../homeComponent/About/About";

const Home = () => {
  return (
    <>
      <div className="home__containter">
        <Slider />
        <About />
      </div>
    </>
  );
};

export default Home;
