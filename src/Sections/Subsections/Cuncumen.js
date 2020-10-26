import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Cuncumen = () => {
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="container-fluid font-pridi">
            <div className="row pb-3 pt-4 px-3">
                <span className="btn btn-secondary" onClick={() => { history.push("/projects") }}>Volver</span>
            </div>
            <div className="row">
                <div className="col-12">
                    <img className="img-fluid" src="/static/projects/cuncumen/cuncumen-banner-1920x1080.jpg" alt="" />
                </div>
            </div>
            <div className="row mt-3 px-3 py-5">
                <div className="col-12">
                    <p className="text-justify px-5">
                        Cuncumen es un proyecto conceptual para el desarrollo de agua de vertiente con extracto de murta.
                    </p>
                </div>
            </div>
            <div className="row px-3 py-5 d-flex justify-content-center">
                <div className="col-10">
                    <img className="img-fluid" src="/static/projects/cuncumen/cuncumen-presentation-1280x720.jpg" alt="" />
                </div>
            </div>
            <div className="row mt-3 px-3 py-5">
                <div className="col-12">
                    <p className="text-justify px-5">
                        La murta o murtilla, es una baya endémica del sur de Chile. Contiene grandes concentraciones de vitamínas, antioxidantes y compuestos relajantes, además de particulares atributos analgésicos y antiinflamatorios.
                    </p>
                </div>
            </div>
            <div className="row mt-3 px-3 pt-5 py-lg-5">
                <div className="col-12 col-md-6 col-lg-6 px-5 px-md-3 pl-md-5">
                    <img className="img-fluid" src="/static/projects/cuncumen/cuncumen-front-closeup-1280x720.jpg" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-6 mt-3 mt-md-0 px-5 px-md-3 pr-md-5">
                    <img className="img-fluid" src="/static/projects/cuncumen/cuncumen-back-closeup-1280x720.jpg" alt="" />
                </div>
            </div>
            <div className="row mt-3 px-3">
                <div className="col px-5">
                    <img className="img-fluid" src="/static/projects/cuncumen/cuncumen-wrapper-1280x720.jpg" alt="" />
                </div>
            </div>
            <div className="row mt-3 px-3 py-5">
                <div className="col-12">
                    <p className="text-justify px-5">
                    Desarrollé un completo storytelling basado en una propuesta que aprovechaba el arte como soporte, incluía tanto naming basado en el mapudungún, como además todos los elementos gráficos complementarios, y finalmente un storytelling basado en el la zona austral y sus "secretos".
                    </p>
                </div>
            </div>
            <div className="row px-3 pb-5 d-flex justify-content-center">
                <div className="col-10">
                    <img className="img-fluid" src="/static/projects/cuncumen/cuncumen-billboard-1280x720.jpg" alt="" />
                </div>
            </div>
            <hr />
            <div className="row mt-3 px-3 py-5">
                <div className="col-12">
                    <h3>Etiquetas</h3>
                    <img className="img-fluid pt-5" src="/static/projects/cuncumen/cuncumen-tags-1280x720.jpg" alt="" />
                    <img className="img-fluid" src="/static/projects/cuncumen/cuncumen-logo-1280x720.jpg" alt="" />
                </div>
            </div>
            <hr />
            <div className="row mt-5 px-3 py-5">
                <div className="col-6 p-1 pl-3">
                    <img className="img-fluid" src="/static/projects/cuncumen/cuncumen-logo-1280x1080.png" alt="" />
                </div>
                <div className="col-6 p-4">
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