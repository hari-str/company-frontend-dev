import React from "react";
import "./Careercontent.css";

const Careercontent = () => {
  return (
    <>
      <section className="careercontent">
        <div className="careercontent__container">
          <p>
            If you are looking to work on challenging assignments in leading
            fortune 500 companies and looking to advance your professional
            career, you are at the right place.
          </p>

          <h4>
            At Kitkat Software Technologies , employees are our major assets. We
            believe in an open and informal relationship between employees and
            management. We attract the best and the brightest consultants.In
            addition to our handsome salary compensation, we offer excellent
            benefits and reimbursement of training costs. We also have a very
            generous employee referral program.Kitkat Software Technologies is
            looking for individuals with outstanding skills in software and
            business development. We offer careers in technology and business
            disciplines. Our clients know us for our leadership, determination,
            professionalism and commitment to quality. If you are interested in
            employment opportunities with Panelcoder Technologies, please e-mail
            us. We will be more than happy to help you.
          </h4>

          <div className="carrercontent__img">
            <div className="img__item">
              <img
                src="https://seeklogo.com/images/J/java-logo-7833D1D21A-seeklogo.com.png"
                alt="javalogo"
              />
            </div>
            <div className="img__item">
              <img
                src="https://www.php.net/images/logos/new-php-logo.svg"
                alt="phplogo"
              />
            </div>
            <div className="img__item">
              <img
                src="https://angular.io/assets/images/logos/angular/angular.png"
                alt="angularlogo"
              />
            </div>
            <div className="img__item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"
                alt="nodelogo"
              />
            </div>
          </div>

          <div className="career__skill">
            <div className="career__text">
              <p>Coimbatore Location</p>
              <p>Currently Hiring For :</p>
              <p>Freshers & 1+ Years Experience</p>
              <ul>
                <li>-Java Developers</li>
                <li>-PHP Developers</li>
                <li>-Angular JS</li>
                <li>-Node JS</li>
              </ul>
            </div>

            <div className="career__form">
              <h2>Upload your resume</h2>
              <form>
                <label>Name:</label>
                <input type="text" required></input>
                <label>Email:</label>
                <input type="email" required></input>
                <label>Resume:</label>
                <input type="file" require></input>
              </form>
              <button className="submit__btn">Upload</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careercontent;
