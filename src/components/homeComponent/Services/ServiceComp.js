import React from "react";
import { Link } from "react-router-dom";
import "./ServiceComp.css";

const ServiceComp = () => {
  return (
    <section className="service">
      <div className="service__container">
        <div className="section__content">
          <h2>IT Agency Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            dolorem alias veniam accusamus praesentium numquam eius blanditiis
            quaerat voluptatem, dicta fuga dolor eos libero rem! Harum minus
            quae porro sed.
          </p>
        </div>
        <div className="section__row">
          <div className="row__item">
            <div className="row__icon">
              <div className="icon__shape1">
                <i class="fa-solid fa-laptop web__icon"></i>
              </div>
            </div>
            <h3>Web Development</h3>
            <p>
              Websites are the most important channels for presenting your
              product and services and most significant part of business.
            </p>

            <Link to="/service">Read more</Link>
          </div>

          <div className="row__item">
            <div className="row__icon">
              <div className="icon__shape2">
                <i class="fa-solid fa-mobile-screen-button web__icon"></i>
              </div>
            </div>
            <h3>App Development</h3>
            <p>
              Want to develop your digital or enterprise assistants on mobile?
              Emerging of smart phones users demanding the mobile apps.
            </p>

            <Link to="/service">Read more</Link>
          </div>
          <div className="row__item">
            <div className="row__icon">
              <div className="icon__shape3">
                <i class="fa-solid fa-bullhorn web__icon"></i>
              </div>
            </div>
            <h3>Digital Marketing</h3>
            <p>
              Want to promote your product or services on digital platform? Our
              knowledges on SEO, SMO, PPC helps you to develop business.
            </p>

            <Link to="/service">Read more</Link>
          </div>
          <div className="row__item">
            <div className="row__icon">
              <div className="icon__shape4">
                <i class="fa-solid fa-square-poll-vertical web__icon"></i>
              </div>
            </div>
            <h3>CRM Development</h3>
            <p>
              CRM software deploys technology to organize, automate, and
              synchronize sales, marketing, customer service, and technical
              support plus manage customers, records, and their surveys.
            </p>

            <Link to="/service">Read more</Link>
          </div>
          <div className="row__item">
            <div className="row__icon">
              <div className="icon__shape5">
                <i class="fa-solid fa-user web__icon"></i>
              </div>
            </div>
            <h3>HRM Development</h3>
            <p>
              HRM offers you wide solutions for HR department making it possible
              for other department to access specific employee data
            </p>

            <Link to="/service">Read more</Link>
          </div>
          <div className="row__item">
            <div className="row__icon">
              <div className="icon__shape6">
                <i class="fa-solid fa-gears web__icon"></i>
              </div>
            </div>
            <h3>ERP Development</h3>
            <p>
              Enterprise Resource Planning (ERP) is business management software
              that integrates all the data on business processes and resources.
            </p>

            <Link to="/service">Read more</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComp;
