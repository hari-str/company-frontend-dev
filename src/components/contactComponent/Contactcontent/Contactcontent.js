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

          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="600"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=%20Sri%20Krishna%20Complex,%20No.70/77,1st%20floor,%20Kattoor%20Rd,%20Papanaickenpalayam,%20Coimbatore,%20Tamil%20Nadu%20641037&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                title="map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactcontent;
