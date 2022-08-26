import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import Product from "./components/Pages/Product";
import Services from "./components/Pages/Services";
import About from "./components/Pages/About";
import Career from "./components/Pages/Career";
import Contact from "./components/Pages/Contact";

// product
import Ecommerce from "./components/Pages/Productpage/ecom/Ecommerce";
import Erpof from "./components/Pages/Productpage/erm/Erpof";
import Bbhrm from "./components/Pages/Productpage/biometri/Bbhrm";
import Minibanking from "./components/Pages/Productpage/minibank/Minibanking";
import Travelerp from "./components/Pages/Productpage/travelerp/Travelerp";
import Pos from "./components/Pages/Productpage/posbill/Pos";
import Glm from "./components/Pages/Productpage/goldloan/Glm";
import Medicalbilling from "./components/Pages/Productpage/medibill/Medicalbilling";

//services
import Customize from "./components/Pages/Servicepage/customize/Customize";
import Webdesign from "./components/Pages/Servicepage/webdesign/Webdesign";
import Webhosting from "./components/Pages/Servicepage/webhosting/Webhosting";
import Androidapp from "./components/Pages/Servicepage/androidapp/Androidapp";
import Iosappdev from "./components/Pages/Servicepage/iosapp/Iosappdev";
import Bulksms from "./components/Pages/Servicepage/bulksms/Bulksms";
import Crmdev from "./components/Pages/Servicepage/crm/Crmdev";
import Erpdev from "./components/Pages/Servicepage/erp/Erpdev";
import Hrmdev from "./components/Pages/Servicepage/hrm/Hrmdev";
import Notfound from "./components/Pages/Notfound";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/product" element={<Product />} exact></Route>
        <Route path="/service" element={<Services />} exact></Route>
        <Route path="/about" element={<About />} exact></Route>
        <Route path="/career" element={<Career />} exact></Route>
        <Route path="/contact" element={<Contact />} exact></Route>

        <Route path="/ecommerce" element={<Ecommerce />} exact></Route>
        <Route path="/officecrm" element={<Erpof />} exact></Route>
        <Route path="/biohrm" element={<Bbhrm />} exact></Route>
        <Route path="/minibank" element={<Minibanking />} exact></Route>
        <Route path="/travelerp" element={<Travelerp />} exact></Route>
        <Route path="/posbill" element={<Pos />} exact></Route>
        <Route path="/goldloan" element={<Glm />} exact></Route>
        <Route path="/medibill" element={<Medicalbilling />} exact></Route>

        <Route path="/cutomize" element={<Customize />} exact></Route>
        <Route path="/webdesign" element={<Webdesign />} exact></Route>
        <Route path="/webhosting" element={<Webhosting />} exact></Route>
        <Route path="/androidapp" element={<Androidapp />} exact></Route>
        <Route path="/iosapp" element={<Iosappdev />} exact></Route>
        <Route path="/bulksms" element={<Bulksms />} exact></Route>
        <Route path="/crm" element={<Crmdev />} exact></Route>
        <Route path="/erp" element={<Erpdev />} exact></Route>
        <Route path="/hrm" element={<Hrmdev />} exact></Route>
        <Route path="*" element={<Notfound />} exact></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
