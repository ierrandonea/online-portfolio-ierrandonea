import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="container-fluid font-pridi">
                <div className="row my-5 card rounded-0 border-0">
                    <img src="/static/misc/main-cover.jpg" className="card-img img-fluid"/>
                    <div className="col-12 card-img-overlay d-flex flex-column justify-content-center px-5">
                        <h3 className="mt-5 text-muted">Hola!</h3>
                        <h1>Me llamo <strong className="font-mitr font-weight-bold">IÑAKI</strong></h1>
                        <h3 className="mb-3">Y soy Diseñador de Productos <br /> & Fullstack Developer</h3>
                        <Link to="/projects" className="btn btn-primary mb-5 w-25">Mira mis proyectos!</Link>
                    </div>
                    <div className="col-1 col-md-2 d-flex flex-column justify-content-between">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;