import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const GhibliApp = () => {
    const history = useHistory();
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
            <h2 className="py-5">Studio Ghibli Visual Guide</h2>
            <div className="row">
                <div className="col-12">
                    <img src="/static/projects/ghibli-visual-guide/ghibli-banner-1280x92.jpg" className="img-fluid pb-5" />
                    <p className="text-justify mt-3">
                        Una aplicación simple realizada con React y Bootstrap.
                        A través de peticiones al Studio Ghibli API, permite visualizar de forma dinámica
                        la información sobre los filmes producidos por Studio Ghibli, así como también sus personajes y lugares.
                        <br /> <br />
                        Incluye iconos y elementos visuales complementarios para generar una experiencia de navegación más completa.
                    </p>
                </div>
            </div>
            <h5 className="py-5">
                Tecnologías usadas en este proyecto:
            </h5>
            <div className="row d-flex justify-content-around">
                <div className="col-10">
                    <img src="/static/projects/ghibli-visual-guide/ghibli-techs-1280x200.png" className="img-fluid" />
                </div>
            </div>
            <h3 className="py-5">Contenido:</h3>
            <div className="row">
                <div className="col-12">
                    <p className="text-justify text-md-left pt-lg-auto">
                        La página se compone de 4 secciones principales en donde se pueden visualizar respectivamente:
                    </p>
                </div>
            </div>
            <div className="row card bg-light py-3 d-flex flex-row justify-content-center">
                <div className="col-12 col-lg-6 mb-5">
                    <p className="card-title text-center">Home</p>
                    <img src="/static/projects/ghibli-visual-guide/ghibli-views-640x440.jpg" className="img-fluid" />
                </div>
                <div className="col-12 col-lg-6 mb-5">
                    <p className="card-title text-center">Películas</p>
                    <img src="/static/projects/ghibli-visual-guide/ghibli-views2-640x440.jpg" className="img-fluid" />
                </div>
                <div className="col-12 col-lg-6 mb-5 mb-lg-0">
                    <p className="card-title text-center">Personajes</p>
                    <img src="/static/projects/ghibli-visual-guide/ghibli-views3-640x440.jpg" className="img-fluid" />
                </div>
                <div className="col-12 col-lg-6">
                    <p className="card-title text-center">Locaciones</p>
                    <img src="/static/projects/ghibli-visual-guide/ghibli-views4-640x440.jpg" className="img-fluid" />
                </div>
            </div>
            <div className="row card bg-light d-flex justify-content-center py-3 mt-5">
                <p className="card-title text-center">Adicionalmente se incluye un gif animado en 404:</p>
                <div className="col-12 c">
                    <a href="https://ghiblivisualguide.vercel.app/error" target="_blank">
                        <img src="/static/projects/ghibli-visual-guide/ghibli-views5-640x440.jpg" className="img-fluid" />
                    </a>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <p className="text-muted">click en la imagen para ir al demo <i class="fas fa-arrow-up"></i></p>
            </div>
            <div className="row mt-3 pt-5">
                <p className="">Adicionalmente, se desarrolló la aplicación con atención en la responsividad de todos sus componentes.</p>
            </div>
            <div className="row">
                <div className="col-12">
                    <img src="/static/projects/ghibli-visual-guide/ghibli-responsive-1920x1080.jpg" className="img-fluid" />
                </div>
            </div>
            <hr />
            <h3 className="py-5">Puedes visitar el repositorio y demo de este proyecto aquí:</h3>
            <div className="row mb-5 d-flex justify-content-around">
                <a href="https://github.com/ierrandonea/Studio-Ghibli-Reading-App" className="col-5 btn btn-sm btn-outline-dark d-flex justify-content-center align-items-baseline pt-2" target="_blank">
                    <h4 className="mr-2">Repositorio</h4><i class="fab fa-github fa-2x"></i>
                </a>
                <a href="https://ghiblivisualguide.vercel.app" className="col-5 btn btn-sm btn-outline-dark d-flex justify-content-center align-items-baseline pt-2" target="_blank">
                    <h4 className="mr-2">Demo</h4><i class="fas fa-globe fa-2x"></i>
                </a>
            </div>
        </div>
    )
}

export default GhibliApp;