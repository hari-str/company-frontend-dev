import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import Product from "./components/Pages/Product";
import Services from "./components/Pages/Services";
import About from "./components/Pages/About";
import Career from "./components/Pages/Career";
import Contact from "./components/Pages/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/service" element={<Services />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/career" element={<Career />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
