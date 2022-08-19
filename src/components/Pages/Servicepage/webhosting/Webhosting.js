import React from "react";
import { Link } from "react-router-dom";
import "./Webhosting.css";

const Webhosting = () => {
  return (
    <>
      <section>
        <div className="webhosting__container">
          <div className="webhosting__title">
            <h3>Webhosting</h3>
            <ul>
              <li>
                <Link to="/">Home </Link>
              </li>
              /<li>Web Hosting</li>
            </ul>
          </div>
        </div>
        <div className="webhosting__content">
          <h1>Web Designing And Web Development</h1>
          <p>
            Service Web offers a variety of Expert Shared Hosting Plans to fit
            any need. No matter whether you're starting a Blog with WordPress,
            installing a CMS solution with Drupal, opening a Forum with PHPBB,
            starting an Online Store with osCommerce, or any number ventures
            beyond those mentioned above, our Expert Web Hosting plans are
            exactly what you've been looking for. Web hosting is a service that
            allows organizations and individuals to post a website or web page
            onto the Internet. A web host, or web hosting service provider, is a
            business that provides the technologies and services needed for the
            website or webpage to be viewed in the Internet. Websites are
            hosted, or stored, on special computers called servers. When
            Internet users want to view your website, all they need to do is
            type your website address or domain into their browser. Their
            computer will then connect to your server and your webpages will be
            delivered to them through the browser.
            <p>
              In order to publish your website online, your business website
              requires a web hosting service. However, a web host gives business
              owners more than just web hosting services! For example, web
              hosting firms typically employ in-house technicians to make sure
              their clients' websites are up and running 24/7. Plus, when
              website owners are in need of help or troubleshooting (e.g. script
              debutting, email not able to send/receive, domain name renewal,
              and more), the web host's in-house support are the go-to people. A
              professional web hosting service ensures a hassle-free experience
              for business owners, so they can efficiently focus their time and
              effort on their businesses.
            </p>
          </p>

          <div>
            <img
              src="https://www.kitkatsoftwaretechnologies.com/images/img16.jpg"
              alt="img"
            />

            <p>
              A web hosting service is a type of Internet hosting service that
              allows individuals and organizations to make their website
              accessible via the World Wide Web. Web hosts are companies that
              provide space on a server owned or leased for use by clients, as
              well as providing Internet connectivity, typically in a data
              center
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Webhosting;
