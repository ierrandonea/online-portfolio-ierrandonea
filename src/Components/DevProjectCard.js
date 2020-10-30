import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const DevProjectCard = (project, linkRoute) => {
    const [state, setState] = useState(" d-none");

    return (
        <div className="col-12 col-md-4 px-0 py-3 my-1 my-md-0" onMouseOver={() => setState(" d-flex animate__fadeIn")} onMouseLeave={() => setState(" animate__fadeOut d-flex")}>
            <div className="card border-0 rounded-0 d-flex justify-content-center">
                <img src={`/static/covers/${project.project.cover}`} className="card-img img-fluid rounded-0" alt="..." />
                <div className={"card-img-overlay text-white rounded-0 p-2 animate__animated flex-column justify-content-center align-items-center" + state} >
                    <h1 className="text-dark text-center">{project.project.name}</h1>
                    <Link to={`/projects/${project.project.route}`} className="btn btn-outline-dark text-center w-25">ver más...</Link>
                    <a href={`https://github.com/ierrandonea/${project.project.github_front}`} className="btn btn-sm btn-outline-dark w-25 my-2" target="_blank">Repositorio front:<i class="fab fa-github ml-1"></i></a>
                    <a href={`https://github.com/ierrandonea/${project.project.github_back}`} className={"btn btn-sm btn-outline-dark w-25 mb-2"+(project.project.github_back === "" ? " d-none": "")} target="_blank">Repositorio back:<i class="fab fa-github ml-1"></i></a>
                    <a href={project.project.website} className={"btn btn-sm btn-outline-dark w-25"+(project.project.website === "" ? " d-none": "")} target="_blank">Demo <i class="fas fa-globe"></i></a>
                </div>
            </div>
        </div>
    ) 
}
 
export default DevProjectCard;