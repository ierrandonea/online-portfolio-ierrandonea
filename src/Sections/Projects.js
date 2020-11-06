import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import DesProjectCard from '../Components/DesProjectCard';
import DevProjectCard from '../Components/DevProjectCard';
import { Context } from '../store/appContext';

const Projects = () => {
    const { store } = useContext(Context);
    return (
        <div className="container-fluid font-pridi" id="projects">
            <div className="row d-flex justify-content-center">
                <div className="col bg-black text-white text-center">
                    <h3 className="py-2">Aquí puedes ver algunos de mis proyectos como desarrollador y como diseñador:</h3>
                </div>
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
            <div className="row d-flex flex-wrap">
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