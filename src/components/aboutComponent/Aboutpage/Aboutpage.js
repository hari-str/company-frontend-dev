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
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          ratione facere eos! Harum, distinctio consequuntur, adipisci
          praesentium totam tempora sed reiciendis veniam quisquam, culpa
          laboriosam soluta animi magni. Doloremque, perferendis?
        </p>
      </section>
    </>
  );
};

export default Aboutpage;
