import React from "react";
import { Link } from "react-router-dom";
import "./Contactpage.css";

const Contactpage = () => {
  return (
    <>
      <section>
        <div className="contact__container">
          <div className="contact__title">
            <h3>Contact</h3>
            <ul>
              <li>
                <Link to="/">Home </Link>
              </li>
              /<li>Contact</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactpage;
