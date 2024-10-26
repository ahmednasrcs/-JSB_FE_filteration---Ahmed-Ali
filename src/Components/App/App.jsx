import React from 'react';
import styles from './App.module.css'
import image_first from'../Images/First.jpg'
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Services from '../Services/Services';
import Testy from '../Testy/Testy';
import Footer from '../Footer/Footer';
 
const App = () => {
  return (
    <>
      <Home/>
      <About/>
      <Services/>
      <Testy/>
      <Contact/>
      <Footer/>
      Foo
    </>
  );
}

export default App;
