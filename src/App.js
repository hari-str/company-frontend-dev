import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import Product from "./components/Pages/Product";
import Services from "./components/Pages/Services";
import About from "./components/Pages/About";
import Career from "./components/Pages/Career";
import Contact from "./components/Pages/Contact";
import Ecomcomp from "./components/Pages/Productpage/Ecomcomp/Ecomcomp";
import Customize from "./components/Pages/Servicepage/customize/Customize";
import Webdesign from "./components/Pages/Servicepage/webdesign/Webdesign";
import Webhosting from "./components/Pages/Servicepage/webhosting/Webhosting";
import Androidapp from "./components/Pages/Servicepage/androidapp/Androidapp";
import Iosappdev from "./components/Pages/Servicepage/iosapp/Iosappdev";
import Bulksms from "./components/Pages/Servicepage/bulksms/Bulksms";
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
        <Route path="/ecommerce" element={<Ecomcomp />}></Route>
        <Route path="/cutomize" element={<Customize />}></Route>
        <Route path="/webdesign" element={<Webdesign />}></Route>
        <Route path="/webhosting" element={<Webhosting />}></Route>
        <Route path="/androidapp" element={<Androidapp />}></Route>
        <Route path="/iosapp" element={<Iosappdev />}></Route>
        <Route path="/bulksms" element={<Bulksms />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
