import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const FintualSim = () => {
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="container-fluid font-pridi animate__animated animate__fadeInDown">
            <div className="row pb-3 pt-4 px-3">
                <span className="btn btn-secondary" onClick={() => { history.push("/") }}>Volver</span>
            </div>
            <h2 className="py-5">Simulador de Inversiones "What if"</h2>
            <div className="row">
                <div className="col-12">
                    <p className="text-justify mt-3 px-5">
                        Una aplicación que permite al usuario saber cuanto dinero tendría hoy si hubiese invertido una cantidad determinada en el pasado.
                        Consume los datos entregados por la API de Fintual para obtener el valor de las cuotas de inversión, y luego realiza la conversión desde la app,
                        entregando al usuario su balance como su ganancia/perdida.
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
            <div className="row">
                <div className="col-12 px-5 py-5">
                    <p className="text-justify text-md-left pt-lg-auto">
                        La interacción con el usuario es realmente simple, primero se ingresa un monto, una fecha del pasado y se distribuye el 100%
                        de los fondos entre los tres portafolios de inversión(riesgoso, moderado y conservador), finalmente, se presiona el botón de simular y 
                        la aplicación entrega el resultado con el balance y la ganancia.
                    </p>
                </div>
            </div>
            <div className="row d-flex justify-content-center px-5 py-5">
                <div className="col-6 col-lg-5 pl-0 pr-1">
                    <img src="/static/projects/fintual-investment-simulator/fintual-investment-simulator-1280x720.jpg" className="img-fluid" />
                </div>
                <div className="col-6 col-lg-5 px-1">
                    <img src="/static/projects/fintual-investment-simulator/fintual-investment-simulator2-1280x720.jpg" className="img-fluid" />
                </div>
            </div>
            <hr />
            <h3 className="py-5">Este proyecto es más entretenido si lo ves en acción!
            <br/> Visita el repositorio y demo aquí:</h3>
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

export default FintualSim;