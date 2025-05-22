import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Mission from "./components/Mission";
import Journey from "./components/Journey";
import WhatWeDo from "./components/WhatWeDo";
import Testimonial from "./components/Testimonial";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Partner from "./components/Partner";
import Impact from "./components/Impact";
import "./index.css";

import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <main>
      <div id="webcrumbs">
        <Navbar />
        <div className="px-3 md:px-6 font-sans">
          <Home />
          <Mission />
          <Journey />
          <WhatWeDo />
          <Impact />
          <Testimonial />
          <Partner />
          <Newsletter />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default App;
