import React from "react";
import "./Creative.css";

const Creative = () => {
  return (
    <>
      <section className="creative">
        <div className="creative__container">
          <div className="creative__row">
            <div className="creative__content">
              <h3>
                How To Generate <span>Creative</span> Ideas For Your IT Business
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidiunt labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus do umsan lacus vel
                facilisis.Lorem Ipsum is simply dummy text of the industry.
                Lorem Ipsum has been the industry's.
              </p>
              <div className="creative__skill">
                <div className="skill__item">
                  <h3>Development</h3>
                  <div className="skill__percentage">90%</div>
                  <div className="progress">
                    <div className="progress__bar1"></div>
                  </div>
                </div>
                <div className="skill__item">
                  <h3>Design</h3>
                  <div className="skill__percentage">80%</div>
                  <div className="progress">
                    <div className="progress__bar2"></div>
                  </div>
                </div>
                <div className="skill__item">
                  <h3>Marketing</h3>
                  <div className="skill__percentage">70%</div>
                  <div className="progress">
                    <div className="progress__bar3"></div>
                  </div>
                </div>
                <div className="skill__item">
                  <h3>Support</h3>
                  <div className="skill__percentage">75%</div>
                  <div className="progress">
                    <div className="progress__bar4"></div>
                  </div>
                </div>
                <div className="skill__item">
                  <h3>Review</h3>
                  <div className="skill__percentage">90%</div>
                  <div className="progress">
                    <div className="progress__bar5"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="creative__img"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Creative;
