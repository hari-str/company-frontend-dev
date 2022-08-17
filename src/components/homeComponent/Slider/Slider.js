import React from "react";
import { Link } from "react-router-dom";
import "./Slider.css";

const Slider = () => {
  return (
    <>
      <section className="slider__section">
        <div className="slider__img">
          <div className="slider__container">
            <div className="slider__content">
              <h1>Make Real-Life Connections With IT</h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                nemo recusandae, veritatis magnam veniam unde vel commodi
                voluptatibus voluptates iure beatae ipsam pariatur.
              </p>
              <div className="banner__btn">
                <Link to="/contact" className="default__btn">
                  Getstated
                </Link>
              </div>
            </div>
            <div className="slider__animate">
              <img
                src="https://luzon-react.envytheme.com/images/home-one/home-1-img1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
