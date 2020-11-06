import React from 'react';
import Me from '../static/portrait.svg';
import { Link as Nav, animateScroll as scroll } from 'react-scroll';

const Banner = () => {
    return (
        <div className="container-fluid font-pridi" id="home">
            <div className="row card rounded-0 border-0">
                <img src="/static/misc/main-cover.jpg" className="card-img img-fluid cover" />
                <div className="col-12 card-img-overlay text-center d-flex flex-column justify-content-center align-items-center px-5 pb-5">
                    <img src={Me} alt="" className="w-10 my-3" />
                    <h3>¡Hola!</h3>
                    <h1 className="text-info">Me llamo
                            <br />
                        <strong className="font-mitr font-weight-bold">IÑAKI ERRANDONEA</strong>
                    </h1>
                    <h3>Diseñador de Productos & FullStack Developer</h3>
                    <Nav
                        className="btn btn-outline-dark rounded-sm mb-5"
                        to="projects"
                        activeClass="selected"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={2000}>
                        <i class="fas fa-caret-down mr-2"></i>¡Mira mis proyectos!<i class="fas fa-caret-down ml-2"></i>
                    </Nav>
                </div>
            </div>
        </div>
    )
}

export default Banner;