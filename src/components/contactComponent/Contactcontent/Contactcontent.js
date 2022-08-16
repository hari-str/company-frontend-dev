import React from "react";
import "./Contactcontent.css";

const Contactcontent = () => {
  return (
    <>
      <section className="contactcontent">
        <div className="contactcontent__container">
          <div className="contactcontent__row">
            <div className="rowcontent__item">
              <div className="icon1__shape">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <h2>Address</h2>
              <p>
                No.70/77,1st floor, Krishna complex, Kattor
                Road,Papanaickenpalayam, Coimbatore-641037, Tamil Nadu
              </p>
            </div>
            <div className="rowcontent__item">
              <div className="icon1__shape">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <h2>Email</h2>
              <p>kitkatsoftwaretechnologies@gmail.com.</p>
            </div>
            <div className="rowcontent__item">
              <div className="icon1__shape">
                <i class="fa-solid fa-phone"></i>
              </div>
              <h2>Phone</h2>
              <p>04224 957272</p>
              <p> +91 7010816299</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactcontent;
