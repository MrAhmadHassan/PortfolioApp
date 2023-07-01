import React, { Fragment } from 'react';
import Header from './Components/NavBar'
import Hero from './Components/Hero';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
const App = () => {
  return (
    <Fragment>
      <Header/>
      <BrowserRouter>
      <Routes>
      <Route index element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      </Routes>
      </BrowserRouter>
      <Footer/>

    </Fragment>
  );
};

export default App;
