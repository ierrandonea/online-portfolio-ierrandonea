import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const DesProjectCard = (project, linkRoute) => {
    const [state, setState] = useState(" d-none");

    return (
        <div className="col-12 col-md-6 col-lg-4 p-0" onMouseOver={() => setState(" d-flex animate__fadeIn")} onMouseLeave={() => setState(" animate__fadeOut d-flex")}>
            <div className="card border-0 rounded-0 d-flex justify-content-center">
                <img src={`/static/covers/${project.project.cover}`} className="card-img img-fluid rounded-0" alt="..." />
                <div className={"card-img-overlay text-white rounded-0 p-2 animate__animated flex-column justify-content-center align-items-center" + state} >
                    <h3 className="display-4 text-dark text-center">{project.project.name}</h3>
                    <Link to={`/projects/${project.project.route}`} className="btn btn-outline-dark text-center">ver más...</Link>
                </div>
            </div>
        </div>
    )
}
 
export default DesProjectCard;