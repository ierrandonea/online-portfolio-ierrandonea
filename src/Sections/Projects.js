import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return(
        <div className="container-fluid">
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 no-gutters d-flex flex-wrap">
                <div className="col-sm-12 col-md-6 col-lg-4"><Link to="/projects/la-colonia-entobakery"><img src="/img/la-colonia-entobakery/la-colonia-entobakery-portada.png" alt="" className="img-fluid"/></Link></div>
                <div className="col-sm-12 col-md-6 col-lg-4"><Link to=""><img src="https://place-hold.it/640x640" alt="" className="img-fluid"/></Link></div>
                <div className="col-sm-12 col-md-6 col-lg-4"><Link to=""><img src="https://place-hold.it/640x640" alt="" className="img-fluid"/></Link></div>
                <div className="col-sm-12 col-md-6 col-lg-4"><Link to=""><img src="https://place-hold.it/640x640" alt="" className="img-fluid"/></Link></div>
                <div className="col-sm-12 col-md-6 col-lg-4"><Link to=""><img src="https://place-hold.it/640x640" alt="" className="img-fluid"/></Link></div>
                <div className="col-sm-12 col-md-6 col-lg-4"><Link to=""><img src="https://place-hold.it/640x640" alt="" className="img-fluid"/></Link></div>
            </div>
        </div>
    )
}

export default Projects;