import React from 'react';

const About = () => {
    return (
        <div className="container-fluid font-pridi">
            <div className="row row-cols-sm-1 row-cols-lg-2">
                <div className="col-md-6 my-md-auto">
                    <img className="img-fluid resp-img" src="/static/misc/IMG_20190226_171618.jpg" alt="" />
                </div>
                <div className="col-sm-12 col-md-6 my-5 my-md-auto">
                    <h4 className="text-justify text-md-right mx-2 mr-md-3 mr-lg-0 font-weight-normal">
                        Diseñador de Productos y Desarrollador Fullstack.
                        Soy muy curioso y quisiera saberlo todo sobre lo que hago, pero mi mayor interes está en entender y gestionar
                        a las personas y su relación con su entorno visual y experiencia.
                        <br /><br />
                        Me apasiona construir puentes entre las personas, el diseño y la tecnología.
                        </h4>
                </div>
            </div>
            <div className="row mt-md-5">
                <div className="col-12">
                    <p className="text-justify font-weight-light">
                        Durante mi carrera he logrado adquirir experiencia en múltiples áreas del diseño,
                        desde lo análogo hasta lo digital, indumentaria, objetos, hasta interfaces, diseño instruccional
                        y identidad visual corporativa. Y recientemente, pude adquirir habilidades para poder gestionar proyectos desde la programación.
                    <br/><br/>
                        Me encanta todo lo relacionado al diseño y el código!
                    </p>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-12">
                    <h2 className="text-center text-secondary">Si te llamé la atención, tal vez podrías...</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-center my-5">
                        <a href="https://www.linkedin.com/in/ierrandonea" class="btn btn-primary btn-lg mx-5 mx-md-3 mx-lg-5 mt-3 d-flex align-items-center" target="_blank">Conectar en<i class="fab fa-linkedin fa-2x ml-2"></i></a>
                        <a href="/static/misc/resumen_inaki_errandonea.pdf" class="btn btn-danger btn-lg mx-5 mx-md-3 mx-lg-5 mt-3 d-flex align-items-center">Descargar mi CV<i class="fas fa-file-pdf fa-2x ml-2"></i></a>
                        <a href="https://github.com/ierrandonea" class="btn btn-secondary btn-lg mx-5 mx-md-3 mx-lg-5 mt-3 d-flex align-items-center" target="_blank">Visitar mi<i class="fab fa-github-square fa-2x ml-2"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;