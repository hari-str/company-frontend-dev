import React from "react";
import "./Feature.css";

const Feature = () => {
  return (
    <>
      <section className="feature__section">
        <div className="feature__container">
          <div className="feature__content">
            <h1>Creative Feature</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non velit
              culpa consequuntur consectetur autem at voluptas laborum magnam
              esse, molestiae sunt architecto, dolorem quasi itaque accusamus ex
              id nobis eligendi.
            </p>
            <div className="bar"></div>
          </div>

          <div className="feature__row">
            <div className="feature__item">
              <i class="fa-solid fa-laptop-code icon"></i>
              <h3>Great Design</h3>
              <p>
                Engage with our professionals for output of your innovative
                ideas with latest technologies and get support of us.
              </p>
            </div>
            <div className="feature__item">
              <i class="fa-solid fa-screwdriver-wrench icon"></i>
              <h3>Optimal choice</h3>
              <p>
                Plan with our expertise with your needs and Engage with them on
                further development with every possibilities of
                development.Extend your needs with possibilities.
              </p>
            </div>
            <div className="feature__item">
              <i class="fa-solid fa-shield-halved icon"></i>
              <h3>Finest Quality</h3>
              <p>
                Our developers are experienced enough to give result what you
                expect.They make your needs reality and user friendly with
                latest born programming tools.
              </p>
            </div>
            <div className="feature__item">
              <i class="fa-regular fa-calendar-check icon"></i>
              <h3>Time saving</h3>
              <p>
                Our developers develop accordingly , which is accessible throung
                smart phone , laptop , tabulate ect with high user experience
                which every user wishes to have
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
