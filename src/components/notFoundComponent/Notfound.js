import React from "react";
import "./Notfound.css";

const Notfound = () => {
  return (
    <>
      <section>
        <div className="notfound__container">
          <img
            src="https://luzon-react.envytheme.com/images/404.png"
            alt="404"
            width="600"
          />
          <h1>Page Not Found !</h1>
        </div>
      </section>
    </>
  );
};

export default Notfound;
