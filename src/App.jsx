import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Customize from "./pages/Customize";
// import OurStory from "./pages/OurStory";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/customize" element={<Customize />} />
          {/* <Route path="/our-story" element={<OurStory />} /> */} 
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
