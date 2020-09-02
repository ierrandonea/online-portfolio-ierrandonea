import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container-fluid font-pridi my-5 bg-dark text-white">
                <div className="row my-5 px-3">
                    <div className="col-11 col-md-10">
                        <h3 className="mt-5 text-danger">404!</h3>
                        <h1>Don't panic!</h1>
                        <h4 className="mb-3 text-muted">This may not be the right one, but there are other places you can go:</h4>
                        <Link to="/" class="btn btn-outline-light mb-5 mr-3">Go home</Link>
                        <Link to="/cool-stuff" class="btn btn-outline-light  mb-5">See my non-work projects</Link>
                    </div>
                </div>
                <hr className="my-5" />
            </div>
    )
}

export default NotFound;