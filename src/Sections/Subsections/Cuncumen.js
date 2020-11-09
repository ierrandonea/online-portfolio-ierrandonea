import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Cuncumen = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="container font-pridi animate__animated animate__fadeInDown">
            <div className="row pb-3 pt-4">
                <Link
                    className="btn btn-secondary"
                    to="/#projects">
                    Volver
                </Link>
            </div>
            <div className="row">
                <div className="col-12">
                    <img className="img-fluid" src="/static/projects/cuncumen/cuncumen-banner-1920x1080.jpg" alt="" />
                </div>
            </div>
            <div className="row mt-3 py-5">
                <div className="col-12">
                    <p className="text-justify">
                        Cuncumen es un proyecto conceptual para el desarrollo de agua de vertiente con extracto de murta.
                    </p>
                </div>
            </div>
            <div className="row py-5 d-flex justify-content-center">
                <div className="col-12">
                    <img className="img-fluid" src="/static/projects/cuncumen/cuncumen-presentation-1280x720.jpg" alt="" />
                </div>
            </div>
            <div className="row mt-3 py-5">
                <div className="col-12">
                    <p className="text-justify">
                        La murta o murtilla, es una baya endémica del sur de Chile. Contiene grandes concentraciones de vitamínas, antioxidantes y compuestos relajantes, además de particulares atributos analgésicos y antiinflamatorios.
                    </p>
                </div>
            </div>
            <div className="row mt-3 pt-5 py-lg-5">
                <div className="col-12 col-md-6 col-lg-6">
                    <img className="img-fluid" src="/static/projects/cuncumen/cuncumen-front-closeup-1280x720.jpg" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-6 mt-3 mt-md-0">
                    <img className="img-fluid" src="/static/projects/cuncumen/cuncumen-back-closeup-1280x720.jpg" alt="" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <img className="img-fluid" src="/static/projects/cuncumen/cuncumen-wrapper-1280x720.jpg" alt="" />
                </div>
            </div>
            <div className="row mt-3 py-5">
                <div className="col-12">
                    <p className="text-justify">
                    Desarrollé un completo storytelling basado en una propuesta que aprovechaba el arte como soporte, incluía tanto naming basado en el mapudungún, como además todos los elementos gráficos complementarios, y finalmente un storytelling basado en el la zona austral y sus "secretos".
                    </p>
                </div>
            </div>
            <div className="row pb-5 d-flex justify-content-center">
                <div className="col-12">
                    <img className="img-fluid" src="/static/projects/cuncumen/cuncumen-billboard-1280x720.jpg" alt="" />
                </div>
            </div>
            <hr />
            <div className="row mt-3 py-5">
                <div className="col-12">
                    <h3>Etiquetas</h3>
                    <img className="img-fluid pt-5" src="/static/projects/cuncumen/cuncumen-tags-1280x720.jpg" alt="" />
                    <img className="img-fluid" src="/static/projects/cuncumen/cuncumen-logo-1280x720.jpg" alt="" />
                </div>
            </div>
            <hr />
            <div className="row mt-5 py-5">
                <div className="col-12 col-md-6 p-1">
                    <img className="img-fluid" src="/static/projects/cuncumen/cuncumen-logo-1280x1080.png" alt="" />
                </div>
                <div className="col-12 col-md-6 p-4">
                    <img className="img-fluid" src="/static/projects/cuncumen/cuncumen-bottle-640x640.jpg" alt="" />
                </div>
            </div>
            <div className="row mt-1">
                <div className="col-4 AC-color1"><span className="text-white">· Pantone 711 C</span></div>
                <div className="col-4 AC-color2"><span className="text-white">· Pantone 612 C</span></div>
                <div className="col-4 AC-color3"><span className="text-white">· Pantone 2736 C</span></div>
            </div>
            <div className="row mt-0">
                <div className="col-6 AC-color4"><span className="text-dark">· Pantone 705 C</span></div>
                <div className="col-6 AC-color5"><span className="text-white">· Pantone 349 C</span></div>
            </div>
        </div>
    )
}

export default Cuncumen;