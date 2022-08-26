import React from "react";
import { Link } from "react-router-dom";
import "./Customize.css";

const customize = () => {
  return (
    <>
      <section>
        <div className="customize__container">
          <div className="customize__title">
            <h3>Customized Web</h3>
            <ul>
              <li>
                <Link to="/">Home </Link>
              </li>
              /<li>customized Web</li>
            </ul>
          </div>
        </div>
        <div className="customize__content">
          <h1>Customized Web Development</h1>
          <p>
            With our affordable custom web site design service you can
            professionally design your web site and boost your profit potential
            within a week! At Panelcoder Technologies we specialize in
            affordable small web site design templates as well as corporate web
            site design services that turn web site viewers into customers.
            Easy-to-use layouts, stylish designs and effective ecommerce
            solutions all go together to create a money-making business web site
            design. So, why not allow panelcoder, a professional corporate web
            site design company to design your custom web site? Its easy great
            value for money and could just be the key to increased profit!
            Contact Us NOW for a FREE consultation!
            <p>
              Pleasing and delighting you, as our customer, is something we take
              pleasure in doing. We are dedicated and driven to seeing your
              business grow and thrive. The team at Panelcoder Technologies
              continue to do this with exceptional enthusiasm, drive and spirit,
              pushing boundaries and discovering new dynamic ways to put you and
              your business way above the rest. In just 14 years, we have
              managed to maintain an outstanding customer service record, and
              stayed consistent in delighting customer after customer. We are
              proud of our excellent reputation, and continue to maintain and
              build on it. Why not take a look at some of these testimonials and
              see for yourself that Panelcoder Technologies is the kind of
              company that delivers, and delivers with excellence.
            </p>
          </p>

          <div className="custom__img">
            <img
              src="https://www.kitkatsoftwaretechnologies.com/images/img9.jpg"
              alt="img"
            />

            <p>
              <h4>Search Engine Optimization (SEO)</h4> is the process of
              increasing the quality and quantity of website traffic by
              increasing visibility of a website or a web page to users of a web
              search engine. Web design in general has become one of the most
              needed services of most companies wishing to make an impression on
              their consumers. In the era of the internet, any web search by a
              consumer leads to links to websites. If you don’t have a sleek web
              design, chances are that the traffic on your website will be
              incredibly reduced and you will not be able to attract the
              audience that you need. Web designing becomes all the more
              integral for you if you are an ecommerce website. Your ecommerce
              website design must be striking enough to attract users and retain
              their attention. The more the viewers, the more chances for
              earning revenue.
              <br />
              <p>
                Custom website design solutions can be the right option for
                clients who want high quality designs and want their website to
                stand out of the competition. Solwin Infotech is a one stop
                destination for custom web design solutions. We would design the
                website as per your likings.Being an experienced and expert
                custom web design company, we have huge expertise in all the
                elements of web design including graphics, programming,
                animation, flash, usability and much more. We are backed up by a
                team of creative and skilled designers who create stunning and
                fruitful websites for all the projects. They have created
                thousands of deeply enriching, creative websites for our
                clients.
              </p>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default customize;
