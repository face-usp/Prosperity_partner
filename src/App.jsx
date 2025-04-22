import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Service from "./components/Services/Service";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Service />
      <Footer />
    </div>
  );
};

export default App;
