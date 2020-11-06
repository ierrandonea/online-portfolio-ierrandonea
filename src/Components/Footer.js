import React from 'react';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 font-mitr">
            <hr/>
            <div className="container-fluid text-sm-center text-md-center text-lg-right mt-lg-3 d-flex flex-column py-3">
                <span className="font-weight-light my-2">2020 Iñaki Errandonea</span>
                <a className="font-weight-light my-2" href="https://github.com/ierrandonea/online-portfolio-ierrandonea" target="_blank">Repositorio de este proyecto<i class="fab fa-github ml-2"></i></a>
            </div>
        </footer>
    )
}

export default Footer;