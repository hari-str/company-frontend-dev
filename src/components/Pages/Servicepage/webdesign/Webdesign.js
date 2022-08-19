import React from "react";
import { Link } from "react-router-dom";
import "./Webdesign.css";

const Webdesign = () => {
  return (
    <>
      <section>
        <div className="webdesign__container">
          <div className="webdesign__title">
            <h3>Webdesign & Development</h3>
            <ul>
              <li>
                <Link to="/">Home </Link>
              </li>
              /<li>Webdesign</li>
            </ul>
          </div>
        </div>
        <div className="webdesign__content">
          <h1>Web Designing And Web Development</h1>
          <p>
            Images With our affordable custom web site design service you can
            professionally design your web site and boost your profit potential
            within a week! At service Technologies we specialize in affordable
            small web site design templates as well as corporate web site design
            services that turn web site viewers into customers. Easy-to-use
            layouts, stylish designs and effective ecommerce solutions all go
            together to create a money-making business web site design. So, why
            not allow service, a professional corporate web site design company
            to design your custom web site? Its easy great value for money and
            could just be the key to increased profit! Contact Us NOW for a FREE
            consultation!
            <p>
              Pleasing and delighting you, as our customer, is something we take
              pleasure in doing. We are dedicated and driven to seeing your
              business grow and thrive. The team at service Technologies
              continue to do this with exceptional enthusiasm, drive and spirit,
              pushing boundaries and discovering new dynamic ways to put you and
              your business way above the rest. In just 14 years, we have
              managed to maintain an outstanding customer service record, and
              stayed consistent in delighting customer after customer. We are
              proud of our excellent reputation, and continue to maintain and
              build on it. Why not take a look at some of these testimonials and
              see for yourself that service Technologies is the kind of company
              that delivers, and delivers with excellence.
            </p>
          </p>

          <div>
            <img
              src="https://www.kitkatsoftwaretechnologies.com/images/img14.jpg"
              alt="img"
            />

            <p>
              This stage is where your website gets a life. Our web developers
              team orchestrates all behind-the-scenes magic keeping in mind the
              speed by which pages and images load, animations and interactions
              as well as the responsiveness of your website. We also furnish
              your website with the technical SEO including code structure, meta
              tags, and sitemaps. These factors give your website the best start
              on all the search engines. We design websites that are creative,
              mobile responsive, lag-free, eye-catching and SEO friendly. We
              provide custom mobile web design services in coimbatore.
              Affordable costs are our specialty, and we achieve it through an
              open source content management system (CMS). Hire us to work on
              your website to make it beautiful and profitable.
              <br />
              <p>
                We work to deliver highly optimized mobile responsive web
                applications across all verticals. We are specialized in
                developing custom websites that includes various features to
                integrated with business intelligence. we are highly proficient
                in delivering web development solutions tailor-made for your
                business model. We create professional static websites for small
                businesses and start-ups with high levels of quality and
                reliability. We make attractive websites that are mobile
                friendly and all at affordable costs.
              </p>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Webdesign;
