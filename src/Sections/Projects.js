import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import DesProjectCard from '../Components/DesProjectCard';
import DevProjectCard from '../Components/DevProjectCard';
import { Context } from '../store/appContext';

const Projects = () => {
    const { store } = useContext(Context); 
    return (
        <div className="container-fluid">
            <div className="row">
                <h2 className="display-6 mt-3 px-3">Como desarrollador, esoty feliz de poder mostrarte los proyectos que inician mi carrera:</h2>
            </div>
            <div className="row d-flex flex-wrap">
                {
                    !!store.projects &&
                    store.projects.map((projekt, index) => {
                        return (
                            <DevProjectCard project={projekt} key={index} />
                        )
                    })
                }
            </div>
            <div className="row">
                <h2 className="display-6 mt-3 px-3">Como diseñador, tengo experiencia en logos, marcas y comunicación visual:</h2>
            </div>
            <div className="row d-flex flex-wrap py-3">
                {
                    !!store.designProjects &&
                    store.designProjects.map((projekt, index) => {
                        return (
                            <DesProjectCard project={projekt} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects;