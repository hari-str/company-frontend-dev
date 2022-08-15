import React from "react";
import { Link } from "react-router-dom";
import "./Careerpage.css";

const Careerpage = () => {
  return (
    <>
      <section>
        <div className="career__container">
          <div className="career__title">
            <h3>Career</h3>
            <ul>
              <li>
                <Link to="/">Home </Link>
              </li>
              /<li>Career</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careerpage;
