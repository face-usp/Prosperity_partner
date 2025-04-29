import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Service from "./components/Services/Service";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Feedback from "./components/About/FeedBack";

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
        <About />
      </div>
      <div id="feedback_1">
        <Feedback />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default App;
