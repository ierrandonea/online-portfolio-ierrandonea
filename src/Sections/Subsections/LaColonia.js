import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const LaColonia = () => {
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
                    <img className="img-fluid" src="/static/projects/la-colonia-entobakery/la-colonia-entobakery-banner-1920x1080.jpg" alt="" />
                </div>
            </div>
            <div className="row mt-3 px-3 py-5">
                <div className="col-12">
                    <p className="text-justify px-5">
                        Este proyecto se enfocaba en el desarrollo de alimentos en base a insectos, en un efuerzo por introducir este tipo de comida al mercado chileno.
                        <br /><br />
                        Los Chilenos son los segundos mayores consumidores de pan a nivel mundial, las panaderías están en todos lados y el pan es un elemento muy importante en la cultura chilena. Por los mismo, una estrategia sensata para permear los insectos como ingrediente sería a través del pan.

                    </p>
                </div>
            </div>
            <hr />
            <div className="row px-3 d-flex justify-content-center py-5">
                <div className="col-8">
                    <img className="img-fluid" src="/static/projects/la-colonia-entobakery/la-colonia-entobakery-bolsa-front-1280x720.jpg" alt="" />
                </div>
            </div>
            <div className="row mt-3 px-3 py-5">
                <div className="col-12">
                    <p className="text-justify px-5">
                        El proyecto incluyó el desarrollo gráfico completo, packaging, iconogafía complementaria, desarrollo del alimento y creación del modelo de negocios.
                    </p>
                </div>
            </div>
            <div className="row mt-3 px-3 d-flex justify-content-center align-items-center">
                <div className="col-12 col-lg-7">
                    <img className="img-fluid" src="/static/projects/la-colonia-entobakery/la-colonia-entobakery-bolsa-back-1280x720.jpg" alt="" />
                </div>
                <div className="col-12 col-lg-4 mt-3 mt-lg-0">
                    <img className="img-fluid" src="/static/projects/la-colonia-entobakery/la-colonia-entobakery-bolsa-closeup-720x720.jpg" alt="" />
                </div>
            </div>
            <div className="row mt-3 px-3 py-5 d-flex justify-content-center">
                <div className="col-8">
                    <img className="img-fluid" src="/static/projects/la-colonia-entobakery/la-colonia-entobakery-doypack-1280x720.jpg" alt="" />
                </div>
            </div>
            <div className="row mt-3 px-3 py-5">
                <div className="col">
                    <p className="text-justify px-5">
                        Para el desarrollo del packeging y la identidad visual, se consideró un diseño que resultase amigable
                        para el usuario, sin ocultarle información acerca del origen del alimento.
                        <br /><br />
                        Para esto, se utilizó una imagen caricaturesca del escarabajo del tenebrio molitor, que conecta los puntos
                        importantes de la información de una forma más lúdica y valiendose de colores vivos y alegres, con un tono juguetón.
                    </p>
                </div>
            </div>
            <div className="row cow-cols-sm-1 row-cols-lg-1 mt-3 px-3 py-5 d-flex align-items-center">
                <div className="col-12 col-lg-6 px-5 px-md-0 pl-md-5">
                    <img className="img-fluid" src="/static/projects/la-colonia-entobakery/la-colonia-entobakery-doypack-closeup-1280x720.jpg" alt="" />
                </div>
                <div className="col-12 col-lg-6 mt-3 mt-lg-0 px-5 px-md-3 pr-md-5">
                    <p className="text-justify">
                        Además de toda la información legal relacionada al alimento, se incluye una breve descripción a modo de storytelling, que ayuda a contextualizar al ususario sobre el consumo de insectos.
                    </p>
                </div>
            </div>
            <hr />
            <div className="row mt-3 px-3 py-5">
                <div className="col-12">
                    <h3>Packaging</h3>
                    <img className="img-fluid" src="/static/projects/la-colonia-entobakery/la-colonia-entobakery-packaging-plans-1280x720.png" alt="" />
                </div>
            </div>
            <hr />
            <div className="row mt-5 px-3">
                <div className="col-6 p-1">
                    <img className="img-fluid" src="/static/projects/la-colonia-entobakery/la-colonia-entobakery-logo-1280x1080.png" alt="" />
                </div>
                <div className="col-6 p-4">
                    <img className="img-fluid" src="/static/projects/la-colonia-entobakery/la-colonia-entobakery-doypack-single-540x540.jpg" alt="" />
                </div>
            </div>
            <div className="row mt-1 px-3">
                <div className="col-4 LCE-color1"><span className="text-white">· Pantone 7588 C</span></div>
                <div className="col-4 LCE-color2"><span className="text-white">· Pantone 7588 C</span></div>
                <div className="col-4 LCE-color3"><span className="text-white">· Pantone 7588 C</span></div>
            </div>
        </div>
    )
}

export default LaColonia;