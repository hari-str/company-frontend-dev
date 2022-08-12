import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="about__section">
        <div className="about__container">
          <div className="about__content">
            <h2>Kitkat Software Technologies</h2>
            <p className="p">
              KITKAT Software technologies is expertise in Web development,
              Application development, Mobile development, Creative design,
              Quality code awesome support Web development With sound domain
              knowledge we aim to deliver value to our customers through our
              innovative software solutions and services. It is highly essential
              factor for an business either online or offline is building an
              attractive and professional website which express the business
              offerings to the client in a smart way. Selecting the right
              technology solution is important for future growth and success.
              Many clients have a significant investment in their current
              technologies that need to be leveraged to meet their growing IT
              requirements, and other clients are seeking new state-of-the-art
              solutions to meet their needs. In either situation, panelcoder has
              the expertise to provide the technical solution to ensure the
              success of the client’s business strategy. Clients are made
              integral part of our team while executing the projects.
            </p>
            <div className="about__link">
              <Link to="/about">
                <Button variant="outlined">Read more</Button>
              </Link>
            </div>
          </div>

          <div className="about__img">
            <img
              src="https://i.insider.com/605e0515106eb50019d05d3b?width=1136&format=jpeg"
              alt="aboutimage"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
