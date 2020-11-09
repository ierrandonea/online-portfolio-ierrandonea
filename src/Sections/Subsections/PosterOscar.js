import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const PosterOscar = () => {
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="container font-pridi animate__animated animate__fadeInDown">
            <div className="row pb-3 pt-4 px-3">
                <Link
                    className="btn btn-secondary"
                    to="/#projects">
                    Volver
                </Link>
            </div>
            <div className="row mt-3 py-5">
                <div className="col-12">
                    <p className="text-justify">
                        Durante mi ultimo año de estudios universitarios, tuve la oportunidad de asistir a Óscar Ríos, destacado académico del diseño en chile,
                        como  su ayudante en el Taller de Comunicación Visual impartido hacia los estudiantes de la carrera de diseño gráfico de la Universidad Andrés Bello.
                        Debido a la influencia de Óscar, es que despertó mi curiosidad por el mundo de los afiches.
                        <br /><br />
                        En agradecimiento por todas sus enseñanzas y su amistad, decidí realizar un cartél a modo de homenaje de Óscar.
                    </p>
                </div>
            </div>
            <div className="row d-flex justify-content-center py-5">
                <div className="col-12 col-md-10 col-lg-6">
                    <img className="img-fluid" src="/static/projects/poster-oscar-rios/poster-1.png" alt="" />
                </div>
            </div>
            <div className="row mt-3 py-5">
                <div className="col-12">
                    <p className="text-justify">
                        Este cartel se basa en aquel producido por Óscar en 1973, para la exposición del trabajo del diseñador alemán Olaf Leu, quien fuera también maestro de Ríos.
                    </p>
                </div>
            </div>
            <div className="row mt-3 py-5 d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-10 col-lg-6">
                    <img className="img-fluid" src="img-fluid" src="/static/projects/poster-oscar-rios/poster-2.png" alt="" />
                </div>
            </div>            
            <div className="row mt-3 py-5">
                <div className="col-12">
                    <p className="text-justify">
                        Los principales cambios en el diseño se centran en un cambio de la cabeza en forma de "puño y lapiz" asociada al afiche de Leu, la cual se reemplazó por una
                        pipa y un marco de anteojos, en referencia al cambio de autor y figura central del cartél.
                    </p>
                </div>
            </div>
            <div className="row mt-3 py-5 d-flex justify-content-center align-items-center">
                <div className="col-6 col-lg-4">
                    <img className="img-fluid" src="img-fluid" src="/static/projects/poster-oscar-rios/poster-oscar-head.jpg" alt="" />
                </div>
                <div className="col-6 col-lg-4">
                    <img className="img-fluid" src="img-fluid" src="/static/projects/poster-oscar-rios/poster-oscar-head2.jpg" alt="" />
                </div>
            </div>            
            <div className="row mt-3 py-5">
                <div className="col-12">
                    <p className="text-justify">
                        Así mismo, se hizo un cambio en la elección tipográfica, que dejaba de lado la línea racionalista del tipo Helvetica por contraste de una Bodoni

                    </p>
                </div>
            </div>
            <div className="row mt-3 py-5 d-flex justify-content-center align-items-center">
                <div className="col-6 col-lg-4">
                    <img className="img-fluid" src="img-fluid" src="/static/projects/poster-oscar-rios/poster-oscar-type.png" alt="" />
                </div>
                <div className="col-6 col-lg-4">
                    <img className="img-fluid" src="img-fluid" src="/static/projects/poster-oscar-rios/poster-oscar-type2.png" alt="" />
                </div>
            </div>      
            <hr className="py-5"/>
            <div className="row mt-3 py-5 d-flex justify-content-center align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src="img-fluid" src="/static/projects/poster-oscar-rios/poster-1.png" alt="" />
                </div>
                <div className="col-4">
                    <img className="img-fluid" src="img-fluid" src="/static/projects/poster-oscar-rios/poster-2.png" alt="" />
                </div>
                <div className="col-4">
                    <img className="img-fluid" src="img-fluid" src="/static/projects/poster-oscar-rios/foto-oscar.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default PosterOscar;