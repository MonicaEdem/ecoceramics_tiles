import React from 'react';

import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutProducts from './components/AboutProducts';
import AboutInnovator from './components/AboutInnovator';
import Footer from './components/Footer';

function App() {

  return (
    <>
     <NavBar/>
     <HeroSection/>
     <AboutProducts/>
     <AboutInnovator/>
     <Footer/>
    </>
  )
}

export default App
