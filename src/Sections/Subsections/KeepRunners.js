import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Cuncumen = () => {
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
            <div className="row">
                <div className="col-12">
                    <img className="img-fluid" src="/static/projects/kr/kr-banner-1280x720.jpg" alt="" />
                </div>
            </div>
            <div className="row mt-3 py-5">
                <div className="col-12">
                    <p className="text-justify">
                        KR es un club de actividades deportivas por subscripción en Santiago, Chile. Además de los entrenamientos, el club ofrece servicios de coaching profesional, planes de alimentación personalizados y monitoreo kinesológico.
                        <br /><br />
                        Con el objetivo de renovar su imagen corporativa y ampliar sus servicios a otros deportes, fuí comisionado a liderar el desarrollo de la nueva imagen del club.
                    </p>
                </div>
            </div>
            <div className="row d-flex justify-content-center py-5">
                <div className="col-12 col-lg-8 order-2 order-lg-1 mt-5 mt-lg-0">
                    <img className="img-fluid" src="/static/projects/kr/kr-old-logo1280x720.jpg" alt="" />
                </div>
                <div className="col-12 col-lg-4 order-1 order-lg-2">
                    <img className="img-fluid" src="/static/projects/kr/kr-development2-1280x720.jpg" alt="" />
                    <img className="img-fluid" src="/static/projects/kr/kr-development-1280x720.jpg" alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p className="text-justify">
                        La imagen original constaba de un logo y una mascota corporativa, bautizada por los miembros del club como "monito corriendo".
                        <br /><br />
                        El cliente deseaba rescatar elementos clave de sus logo y mascota para el desarrollo de la nueva imagen, por lo que se evaluaron opciones que consideraban las iniciales del grupo y una transformación de la mascota.
                    </p>
                </div>
            </div>
            <div className="row mt-3 py-5">
                <div className="col-12 mx-auto">
                    <img className="img-fluid" src="/static/projects/kr/kr-newbrandmark-1280x720.png" alt="" />
                </div>
            </div>
            <div className="row py-5">
                <div className="col-12">
                    <p className="text-justify">
                        Finalmente, se llegó a una evolución de la mascota corporativa, la cual sería utilizada como brandmark del logo completo, aportanto un elemeto simbólico distintivo a la marca.
                    </p>
                </div>
            </div>
            <div className="row mt-3 d-flex justify-content-center">
                <div className="col-12">
                    <img className="img-fluid" src="/static/projects/kr/kr-newlogo-1280x720.png" alt="" />
                </div>
            </div>
            <div className="row py-5 d-flex justify-content-center">
                <div className="col-12">
                    <img className="img-fluid" src="/static/projects/kr/kr-logo-1280x366.png" alt="" />
                </div>
            </div>
            <div className="row py-5 d-flex justify-content-center">
                <div className="col-12">
                    <img className="img-fluid" src="/static/projects/kr/kr-variations-1280x720.png" alt="" />
                </div>
            </div>
            <div className="row py-5">
                <div className="col-12">
                    <p className="text-justify">
                        Este nuevo logo no sólo considera la rama de runnig del club, sino que incluye a todas las demás disciplinas deportivas que participan, asignandoles a cada una una sub-identidad que converge con la marca principal y su nuevo enfoque en el entrenamiento colectivo.
                    </p>
                </div>
            </div>
            <h3 >Aplicaciones:</h3>
            <div className="row mt-3 py-5">
                <div className="col-12 col-lg-4">
                    <img className="img-fluid" src="/static/projects/kr/kr-demo-1280x720.jpg" alt="" />
                </div>
                <div className="col-12 col-lg-4">
                    <img className="img-fluid" src="/static/projects/kr/kr-demo2-1280x720.jpg" alt="" />
                </div>
                <div className="col-12 col-lg-4">
                    <img className="img-fluid" src="/static/projects/kr/kr-demo3-1280x720.jpg" alt="" />
                </div>
            </div>
            <hr />
            <div className="row py-5">
                <div className="col-12">
                    <p className="text-justify">
                        Adicionalmente, se reailzó el diseño de la indumentaria oficial del club, que consideraba una camiseta deportiva, trisuit, chaqueta ligera y shorts.
                        Este diseño consideraba las necesidades de cada rama deportiva, por lo que incluía cada logo dependiendo del deporte. La producción inicial consideró camisetas y trisuit.
                        <br /><br />
                        Se consideró un diseño de escamas en torno al compromiso de los participantes del club, que consideraban a KR una "segunda piel".
                    </p>
                </div>
            </div>
            <div className="row py-5 d-flex justify-content-center">
                <div className="col-12">
                    <img className="img-fluid" src="/static/projects/kr/kr-clothing-1280x720.jpg" alt="" />
                </div>
            </div>
            <div className="row mt-3 d-flex justify-content-center pb-5">
                <div className="col-12">
                    <img className="img-fluid" src="/static/projects/kr/kr-tees-1280x720.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Cuncumen;