import React from 'react';

import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutProducts from './components/AboutProducts';
import AboutInnovator from './components/AboutInnovator';
import Footer from './components/Footer';
import Products from './components/Products';

function App() {

  return (
    <div className='scroll-smooth overflow-y-auto h-screen'>
     <NavBar/>
     <HeroSection/>
     <AboutProducts/>
     <Products/>
     <AboutInnovator/>
     <Footer/>
    </div>
  )
}

export default App
