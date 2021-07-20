import React from 'react';
import Navb from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Cardd from './components/card';
import Contact from './components/Contact';
import Footer from './components/footer';
import Delete from './components/delete';
import Namelist from './components/namelist/namelist';
import Head from './components/header';
import Products from './components/product';

function App() {
  return (
    <>
      <Head />
      <Navb />
      <Hero /><br /><br /><br />
      <About /><br /><br />
      <Cardd /><br /><br />
      <Products /><br /><br />
      <Delete /><br /><br />
      <Contact /><br /><br />
      <Footer />
      <Namelist/>

      

    </>
  );
}

export default App;
