import React, { useState } from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as Nav, animateScroll as scroll } from 'react-scroll';
import { Context } from '../store/appContext';

const Navbar = () => {
  const { store, actions } = useContext(Context);
  let location = useLocation().pathname
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
            {
              location === "/" ?
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
                :
                <Link
                  className="nav-link"
                  to="/" >
                  Inicio
                </Link>
            }
          </li>
          <li class="nav-item">
            {
              location === "/" ?
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
                :
                <Link
                  className="nav-link"
                  to="/#projects">
                  Proyectos
                </Link>
            }
          </li>
          <li className="nav-item">
            {
              location === "/" ?
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
                :
                <Link
                  className="nav-link"
                  to="/#about">
                  Acerca de
                </Link>
            }
          </li>
          <li className="nav-item">
            {
              location === "/" ?
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
                :
                <Link
                  className="nav-link"
                  to="/#contact">
                  Contacto
                </Link>
            }
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;