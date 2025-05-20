import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About';
import Service from './components/Service';
import Project from './components/Project';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Partner from './components/Partner';

import icon from './assets/SNL_Logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  return (
  <main>
   <div id="webcrumbs"> 
      <div className=" px-6 font-sans">

        <Navbar/>
        <Home/>
        <About/>
        <Service/>
        <Project/>
        <Partner/>
        <Testimonial/>
        <Contact/>
        <Footer/>

      </div> 
   </div>
  </main>
  )
}

export default App