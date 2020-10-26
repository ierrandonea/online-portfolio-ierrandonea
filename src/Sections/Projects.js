import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import DesProjectCard from '../Components/DesProjectCard';
import DevProjectCard from '../Components/DevProjectCard';
import { Context } from '../store/appContext';

const Projects = () => {
    const { store } = useContext(Context);
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-8 col-lg-4 bg-black text-white my-5 text-center">
                    <h1 className="my-3">Como desarrollador:</h1>
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
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-6 col-lg-4 bg-black text-white my-5 text-center">
                    <h1 className="my-3">Como diseñador:</h1>
                </div>
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