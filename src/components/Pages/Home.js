import React from "react";
import Slider from "./../homeComponent/Slider/Slider";
import About from "./../homeComponent/About/About";
import ServiceComp from "./../homeComponent/service/ServiceComp";
import Footer from "./../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="home__containter">
        <Slider />
        <About />
        <ServiceComp />
      </div>
      <>
        <Footer />
      </>
    </>
  );
};

export default Home;
