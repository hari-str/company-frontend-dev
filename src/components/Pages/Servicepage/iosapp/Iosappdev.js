import React from "react";
import { Link } from "react-router-dom";
import "./Iosappdev.css";

const Iosappdev = () => {
  return (
    <>
      <section>
        <div className="iosappdev__container">
          <div className="iosappdev__title">
            <h3>IOS </h3>
            <ul>
              <li>
                <Link to="/">Home </Link>
              </li>
              /<li>IOS </li>
            </ul>
          </div>
        </div>
        <div className="iosappdev__content">
          <h1>IOS App Development</h1>
          <p>
            With iOS commanding a massive growth in terms of monetization,
            businesses need professional iphone app development company as their
            partner to execute mobile strategy, which keeps them ahead of curve.
            At MobileAPPtelligence, we deliver winning iPhone apps.
            <p>
              we develop best in class native and cross platform mobile apps.
              iPhone app development is considered as most important component
              of mobile strategy because of highest penetration, which iphone
              has created. We are helping companies and individuals by
              developing and deploying best in class iphone apps. Not only we
              develop great iphone apps, but we also support in terms of app
              marketing and monetization. With ready to use framework and robust
              team of iphone app developers in place, we pace up the process of
              app development and deploy the project as per planned schedule..
            </p>
          </p>

          <div className="android__img">
            <img
              className="android__img"
              src="https://www.kitkatsoftwaretechnologies.com/images/img18.jpg"
              alt="img"
            />

            <p>
              We define a clear outline in terms of app design document,
              wireframe, functional document, UIs design, programming, testing
              and deployment. At the project commencement, one of our business
              analysts has a detailed meeting to finalize the draft. Our mobile
              UI designers work closely with client and design the layout, which
              is 100% in accordance to client needs. After the design approval,
              programming is started and intermediate deliveries are
              set.Enterprise-to-consumer apps are fueling demand of cross
              platform app development to rapidly develop and deploy mobile apps
              on several mobile platforms. Being an award winning cross platform
              mobile development company, we specialize in developing business,
              enterprise & idea centric cross platform mobile apps using
              frameworks like Titanium or Phonegap.
            </p>
            <p>
              Mobile application development has become a part of strategy for
              branding and marketing. Our cross platform app development
              experience, flexible business model and fine-tuned cross platform
              app development process translate to high quality, faster
              time-to-market and performance centric cross platform app.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Iosappdev;
