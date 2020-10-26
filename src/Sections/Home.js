import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="container-fluid font-pridi my-5">
                <hr className="my-5" />
                <div className="row my-5 px-3">
                    <div className="col-12 col-md-6">
                        <h3 className="mt-5 text-muted">Hello!</h3>
                        <h1>My name is <strong className="font-mitr font-weight-bold">IÑAKI</strong></h1>
                        <h3 className="mb-3">And I'm a Product Designer <br /> & Fullstack Developer</h3>
                        <Link to="/projects" className="btn btn-primary mb-5">See my projects!</Link>
                    </div>
                    <div className="col-1 col-md-2 d-flex flex-column justify-content-between">
                        
                    </div>
                </div>
                <hr className="my-5" />
            </div>
        </>
    )
}

export default Home;