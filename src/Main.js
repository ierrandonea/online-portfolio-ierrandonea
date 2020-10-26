import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// context provider vvv
import injectContext from './store/appContext';

// sections vvv
import Home from './Sections/Home';
import Projects from './Sections/Projects';
import About from './Sections/About';
import Contact from './Sections/Contact';
import NotFound from './Sections/NotFound';

// sub-sections vvv
import LaColonia from './Sections/Subsections/LaColonia';
import Cuncumen from './Sections/Subsections/Cuncumen';
import KeepRunners from './Sections/Subsections/KeepRunners';
import GhibliApp from './Sections/Subsections/GhibliApp';
import CoffeeClub from './Sections/Subsections/CoffeeClub';


// components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const Main = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/la-colonia-entobakery" component={LaColonia} />
          <Route exact path="/projects/agua-cuncumen" component={Cuncumen} />
          <Route exact path="/projects/keeprunners-a-kr" component={KeepRunners} />
          <Route exact path="/projects/ghibli-visual-guide" component={GhibliApp} />
          <Route exact path="/projects/coffee-club" component={CoffeeClub} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default injectContext(Main);
