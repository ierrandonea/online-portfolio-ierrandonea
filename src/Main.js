import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// sections vvv
import Home from './Sections/Home';
import Projects from './Sections/Projects';
import About from './Sections/About';
import Contact from './Sections/Contact';
import Project1 from './Sections/Subsections/Project1';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import NotFound from './Sections/NotFound';

// styles vvv
import './Main.css';

const Main = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/la-colonia-entobakery" component={Project1} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Main;
