import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Service from "./components/Services/Service";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="services">
        <Service />
      </div>
      <div id="about">
        <Footer />
      </div>
    </div>
  );
};

export default App;
