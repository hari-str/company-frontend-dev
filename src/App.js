import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import Product from "./components/Pages/Product";
import Services from "./components/Pages/Services";
import About from "./components/Pages/About";
import Career from "./components/Pages/Career";
import Contact from "./components/Pages/Contact";
import Notfound from "./components/Pages/Notfound";
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
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
