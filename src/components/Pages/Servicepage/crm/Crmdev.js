import React from "react";
import { Link } from "react-router-dom";
import "./Crmdev.css";

const Crmdev = () => {
  return (
    <>
      <section>
        <div className="crmdev__container">
          <div className="crmdev__title">
            <h3>CRM </h3>
            <ul>
              <li>
                <Link to="/">Home </Link>
              </li>
              /<li>CRM </li>
            </ul>
          </div>
        </div>
        <div className="crmdev__content">
          <h1>Customer Relationship Management (CRM)</h1>
          <p>
            Companies rely heavily on customer relationship management(CRM)
            technology tools to manage interactions with current and future
            customers. CRM software deploys technology to organize, automate,
            and synchronize sales, marketing, customer service, and technical
            support plus manage customers, records, and their surveys.
          </p>

          <div className="android__img">
            <img
              className="android__img"
              src="https://www.kitkatsoftwaretechnologies.com/images/img28.jpg"
              alt="img"
            />
            <h3>
              Why should you opt for a Custom CRM development for your business?
            </h3>
            <p>
              If you are using a generic customer management platform, you may
              not be able to find your industry-specific solution and support
              from the platform. For increasing ROI and improved customer
              experience, you need to have a complete and advanced system that
              suits your unique business requirements. Customer relationship
              management (CRM) software solutions are the most important facet
              of business activities. It is the customers who will ultimately
              decide your success in business. The world of business today has
              changed its course, and dimension with the advent of technologies
              and management systems drive business excellence. The crm
              development company has a big role to play here. They do the crm
              development for their clients. These solutions are great for
              solving all the issues of customers. This leads to a greater
              customer satisfaction. Customer satisfaction is the key to the
              success of any business. Companies must make use of the best CRM
              solutions that are available for their business type. This would
              help them to stay in a proper position with respect to that of the
              competitors.
            </p>
            <h3>Benefits of CRM Development Services</h3>
            <ul>
              <li>CRM can track customer activity at each end point.</li>
              <li>CRM tracks customer’s Purchase and Sales habit.</li>
              <li>
                CRM can generate and record the history of Purchase Orders,
                Sales Orders, and Invoices.
              </li>
              <li>
                CRM enables Cross selling or Upselling by providing historical
                data.
              </li>
              <li>
                CRM systematically tracks customer communication, problems, and
                solutions.
              </li>
              <li>
                CRM helps to generate sales forecasts based on Customer Feedback
                and Communication.
              </li>
            </ul>
            <h3>Custom CRM Development & Customized Solutions</h3>
            <p>
              We can provide custom crm development relating to your business.
              Every business customer has issues that are very specific to that
              business. Our crm services will take care of these issues. When
              you rope in our services, we will prepare the software solutions
              in such a manner that they would be tailor-made. We even can
              prepare the best crm solutions for small business in the most
              effective and fruitful manner. Meeting all customer issues that
              are very unique will be relevant to being profitable and
              successful in the business.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Crmdev;
