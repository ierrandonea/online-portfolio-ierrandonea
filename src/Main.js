import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// context provider vvv
import injectContext from './store/appContext';

// sections vvv
import Home from './Sections/Home';
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
import FintualSim from './Sections/Subsections/FintualSim';
import PosterOscar from './Sections/Subsections/PosterOscar';

const Main = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/la-colonia-entobakery" component={LaColonia} />
          <Route exact path="/agua-cuncumen" component={Cuncumen} />
          <Route exact path="/keeprunners-a-kr" component={KeepRunners} />
          <Route exact path="/poster-oscar-rios" component={PosterOscar} />
          <Route exact path="/ghibli-visual-guide" component={GhibliApp} />
          <Route exact path="/coffee-club" component={CoffeeClub} />
          <Route exact path="/fintual-investment-simulator" component={FintualSim} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default injectContext(Main);
