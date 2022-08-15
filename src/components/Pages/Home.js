import React from "react";
import Slider from "../homeComponent/Slider/Slider";
// import About from "../homeComponent/About/About";
import ServiceComp from "../homeComponent/Services/ServiceComp";
import Feature from "../homeComponent/Feature/Feature";
import Creative from "../homeComponent/Creative/Creative";
import Footer from "../Footer/Footer";
import DevelopmentArea from "../homeComponent/Development/DevelopmentArea";

const Home = () => {
  return (
    <>
      <div className="home__containter">
        <Slider />
        {/* <About /> */}
        <Feature />
        <Creative />
        <ServiceComp />
        <DevelopmentArea />
      </div>
      <>
        <Footer />
      </>
    </>
  );
};

export default Home;
