import React from "react";
import { Link } from "react-router-dom";
import "./Aboutpage.css";

const Aboutpage = () => {
  return (
    <>
      <section>
        <div className="about__container">
          <div className="about__title">
            <h3>About</h3>
            <ul>
              <li>
                <Link to="/">Home </Link>
              </li>
              /<li>About</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutpage;
