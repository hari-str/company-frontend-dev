import { Link } from "react-router-dom";
import "./Erpof.css";

const Erpof = () => {
  return (
    <section className="erpof-section">
      <div className="erpof__container">
        <div className="erpof__title">
          <h3>Office ERM</h3>
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            /<li>office ERM</li>
          </ul>
        </div>
      </div>
      <div className="erpof_lists">
        <div className="erpof_cont">
          <div className="erpof_img">
            <img
              src="https://www.kitkatsoftwaretechnologies.com/images/erp.png"
              width="100%"
              alt="img"
            />
            <img
              src="https://www.kitkatsoftwaretechnologies.com/images/erp2.jpg"
              width="100%"
              className="noimg"
              alt="img"
            />
          </div>
          <div className="erpof_p">
            <h1 className="product_title">Enterprise Resource Planning</h1>
            <p className="cont_para_style">
              1) ERP (enterprise resource planning) describes software that lets
              an enterprise manage user access to its network resources
              efficiently. ERP software generally lets a user sign on to
              different enterprise systems and applications using the same
              password.
            </p>
            <p className="cont_para_style">
              2) ERP (enterprise resource planning) also describes software that
              manages all of a company's assets and resources, including such
              basic applications as general ledger, accounts payable and
              receivable, as well as manufacturing, inventory, and human
              resources.
            </p>
            <p className="cont_para_style">
              An Enterprise resource planning (ERP) software or system
              development helps organizations better manage their resources. The
              most vital aim to be achieved through ERP software is to integrate
              back office business processes and facilitating the information
              flow within an organization to take data-driven decisions. So
              enterprise resources planning software / system collects data from
              various levels of an organization and organizes it for business
              activities across departments. With a dedicated enterprise
              resource planning software / system development, an organization
              can standardize and automate its processes to achieve high level
              of efficiency in its operations. The ERP system ensures that all
              employees in an organization are working with the same data and
              watching the same key-performance indicators.
            </p>
            <img
              src="https://www.kitkatsoftwaretechnologies.com/images/erp2.jpg"
              width="100%"
              className="img1"
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Erpof;
