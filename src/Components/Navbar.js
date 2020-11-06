import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Link as Nav, animateScroll as scroll } from 'react-scroll';
import { Context } from '../store/appContext';

const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark font-mitr sticky-top">
      <Link className="navbar-brand font-weight-bold" to="/">
        IÑAKI ERRANDONEA
        </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className={"nav-item" + (store.activeTabs === "home" ? " active" : "")}>
            <Nav
              className="nav-link"
              to="home"
              activeClass="selected"
              spy={true}
              smooth={true}
              offset={100}
              duration={2000}>
              Inicio
            </Nav>
          </li>
          <li class="nav-item">
            <Nav
              className="nav-link"
              to="projects"
              activeClass="selected"
              spy={true}
              smooth={true}
              offset={-50}
              duration={2000}>
              Proyectos
             </Nav>
          </li>
          <li className="nav-item">
            <Nav
            className="nav-link"
            to="about"
            activeClass="selected"
            spy={true}
            smooth={true}
            offset={-110}
            duration={2000}>
              Acerca de
            </Nav>
          </li>
          <li className="nav-item">
            <Nav
            className="nav-link"
            to="contact"
            activeClass="selected"
            spy={true}
            smooth={true}
            offset={-450}
            duration={2000}>
            Contacto
            </Nav>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;