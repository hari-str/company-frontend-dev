import React from "react";
import "./DevelopmentArea.css";

const DevelopmentArea = () => {
  return (
    <>
      <section className="developarea">
        <div className="develop__container">
          <div className="develop__row">
            <div className="develop__img">
              <img
                src="https://luzon-react.envytheme.com/images/support.png"
                alt="developmentimage"
              />
            </div>
            <div className="develop__content">
              <div className="develop__head">
                <h3>
                  Web & Mobile <span>Development</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat impedit eveniet non temporibus tenetur. Quae iste
                  nulla quis a, amet facere nemo inventore cum. Repellendus
                  neque et optio in temporibus!
                </p>
              </div>

              <div className="develop__section">
                <div className="develop__item">
                  <div className="item__icon">
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <div className="item__title">
                    <h3>UI/UX</h3>
                    <p>
                      Engage with our professionals for output of your
                      innovative ideas with latest technologies and get support
                      of us.
                    </p>
                  </div>
                </div>
                <div className="develop__item">
                  <div className="item__icon">
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <div className="item__title">
                    <h3>Planning</h3>
                    <p>
                      Plan with our expertise with your needs and Engage with
                      them on further development with every possibilities of
                      development.Extend your needs with possibilities.
                    </p>
                  </div>
                </div>
                <div className="develop__item">
                  <div className="item__icon">
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <div className="item__title">
                    <h3>Develpoment</h3>
                    <p>
                      Our developers are experienced enough to give result what
                      you expect.They make your needs reality and user friendly
                      with latest born programming tools.
                    </p>
                  </div>
                </div>
                <div className="develop__item">
                  <div className="item__icon">
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                  <div className="item__title">
                    <h3>Responsive</h3>
                    <p>
                      Our developers develop accordingly , which is accessible
                      throung smart phone , laptop , tabulate ect with high user
                      experience which every user wishes to have.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </>
  );
};

export default DevelopmentArea;
