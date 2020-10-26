import React from 'react';

const GhibliApp = () => {
    return (
        <div className="container-fluid font-pridi">
            <h2 className="py-5">Studio Ghibli Visual Guide</h2>
            <div className="row">
                <div className="col-12">
                    <img src="/static/projects/ghibli-visual-guide/ghibli-banner-1280x92.jpg" className="img-fluid px-5 pb-5" />
                    <p className="text-justify mt-3 px-5">
                        Una aplicación simple realizada con React y Bootstrap.
                        A través de peticiones al Studio Ghibli API, permite visualizar de forma dinámica
                        la información sobre los filmes producidos por Studio Ghibli, así como también sus personajes y lugares.
                        <br /> <br />
                        Incluye iconos y elementos visuales complementarios para generar una experiencia de navegación más completa.
                    </p>
                </div>
            </div>
            <h5 className="py-5 px-5 ">
                Tecnologías usadas en este proyecto:
            </h5>
            <div className="row d-flex justify-content-around">
                <div className="col-10">
                    <img src="/static/projects/ghibli-visual-guide/ghibli-techs-1280x200.png" className="img-fluid" />
                </div>
            </div>
            <h3 className="py-5">Contenido:</h3>
            <div className="row">
                <div className="col-12 px-5">
                    <p className="text-justify text-md-left pt-lg-auto">
                        La página se compone de 4 secciones principales en donde se pueden visualizar respectivamente:
                    </p>
                </div>
            </div>
            <div className="row d-flex justify-content-center px-5 pt-5">
                <div className="col-6 col-lg-3 pl-0 pr-1">
                    <img src="/static/projects/ghibli-visual-guide/ghibli-views-640x440.jpg" className="img-fluid" />
                </div>
                <div className="col-6 col-lg-3 px-1">
                    <img src="/static/projects/ghibli-visual-guide/ghibli-views2-640x440.jpg" className="img-fluid" />
                </div>
                <div className="col-6 col-lg-3 px-1">
                    <img src="/static/projects/ghibli-visual-guide/ghibli-views3-640x440.jpg" className="img-fluid" />
                </div>
                <div className="col-6 col-lg-3 pl-1 pr-0">
                    <img src="/static/projects/ghibli-visual-guide/ghibli-views4-640x440.jpg" className="img-fluid" />
                </div>
            </div>
            <div className="row mt-3 pt-5">
                <p className="px-5">Adicionalmente se incluye un gif animado en 404:</p>
            </div>
            <div className="row d-flex justify-content-center mt-3">
                <div className="col-6 col-lg-5">
                    <a href="https://ghiblivisualguide.vercel.app/error" target="_blank">
                        <img src="/static/projects/ghibli-visual-guide/ghibli-views5-640x440.jpg" className="img-fluid"/>
                    </a>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <p className="px-5 text-muted">click en la imagen para ir al demo <i class="fas fa-arrow-up"></i></p>
            </div>
            <div className="row mt-3 pt-5">
                <p className="px-5">Además, se desarrolló la aplicación con atención en la responsividad:</p>
            </div>
            <div className="row">
                <div className="col">
                    <img src="/static/projects/ghibli-visual-guide/ghibli-responsive-1920x1080.jpg" className="img-fluid" />
                </div>
            </div>
            <hr />
            <h3 className="py-5">Puedes visitar el repositorio y demo de este proyecto aquí:</h3>
            <div className="row mb-5 d-flex justify-content-around">
                <a href="https://github.com/ierrandonea/Studio-Ghibli-Reading-App" className="col-5 btn btn-sm btn-outline-dark d-flex justify-content-center align-items-baseline pt-2" target="_blank">
                    <h4 className="mr-2">Repositorio</h4><i class="fab fa-github fa-2x"></i>
                </a>
                <a href="https://ghiblivisualguide.vercel.app"className="col-5 btn btn-sm btn-outline-dark d-flex justify-content-center align-items-baseline pt-2" target="_blank">
                    <h4 className="mr-2">Demo</h4><i class="fas fa-globe fa-2x"></i>
                </a>
            </div>
        </div>
    )
}

export default GhibliApp;