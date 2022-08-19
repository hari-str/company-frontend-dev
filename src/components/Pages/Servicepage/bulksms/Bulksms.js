import React from "react";
import { Link } from "react-router-dom";
import "./Bulksms.css";

const Bulksms = () => {
  return (
    <>
      <section>
        <div className="bulksms__container">
          <div className="bulksms__title">
            <h3>Bulk SMS </h3>
            <ul>
              <li>
                <Link to="/">Home </Link>
              </li>
              /<li>Bulk SMS </li>
            </ul>
          </div>
        </div>
        <div className="bulksms__content">
          <h1>Bulk SMS</h1>
          <p>
            BULK SMS Marketing is one of the most effective, reliable and cost
            effective ways to market to your clients and businesses.This is the
            easiest way of promotion activities. this is used worldwide and has
            got a good response from the user.
          </p>

          <div className="android__img">
            <img
              className="android__img"
              src="https://www.kitkatsoftwaretechnologies.com/images/img26.png"
              alt="img"
            />
            <h3>Promotional sms services</h3>
            <p>
              Promotional bulk sms is one of the cheapest marketing solutions
              that is available in the market. You can create awareness about
              your brand, product or any offer in a second with a single click.
              You can also send your clients new offers, new products or any
              events right away. Alot SMS offers you promotional SMS that can be
              used for Brand Promotion, Offers, product marketing, general
              awareness.
            </p>
            <h3>Transactional SMS services</h3>
            <p>
              Transactional SMS services are ideal for sending
              alerts/reminders/updates to your existing clients. It is easy to
              send bulk SMS throughout the globe with user-friendly web
              interface.Any kind of information sharing sms comes under
              transactional sms.Government has declared certain categorizes to
              send Transactional sms
            </p>
            <h3>Branding SMS</h3>
            <p>
              Branding bulk sms is one of the cheapest marketing solutions that
              is available in the market. You can create awareness about your
              brand, product or any offer in a second with a single click. You
              can also send your clients new offers, new products or any events
              right away. Alot SMS offers you promotional SMS that can be used
              for Brand Promotion.You can send Promotional sms with your brand
              name and thus ths will lead to create a better awareness of
              product in selected market.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bulksms;
