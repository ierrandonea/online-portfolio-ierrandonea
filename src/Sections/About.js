import React from 'react';

const About = () => {
    return (
        <div className="container-fluid font-pridi">
            <div className="row row-cols-sm-1 row-cols-lg-2">
                <div className="col-md-5 col-lg-6 d-sm-none d-none d-md-block mt-md-3">
                    <img className="img-fluid" src="https://place-hold.it/500x750" alt="" />
                </div>
                <div className="col-sm-12 col-md-7 col-lg-6 mt-3">
                    <h4 className="text-justify text-md-right mx-2 mr-md-3 mr-lg-0 font-weight-normal">
                        I am a Product Designer with knowledge in multiple design related areas, from analogue to ditigal. Printed media, fashion and objects to UI, UX or brand visual identity as a whole, I love to know and take part in all design related work.
                    </h4>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p className="text-justify font-weight-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit reiciendis maiores perspiciatis modi rem,
                        quasi, sapiente libero eveniet facilis alias nihil
                        ea inventore quisquam, et quod non mollitia deserunt incidunt.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Provident maxime, quasi voluptatibus laborum eum et reprehenderit
                        similique ducimus ullam doloribus a dolor illum mollitia atque
                        animi earum tempora ratione ea.
                    </p>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-12">
                    <h2 className="text-center text-secondary">Maybe you could...</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-center">
                        <a href="https://www.linkedin.com/in/ierrandonea" class="btn btn-primary mx-5 mx-md-1 mx-lg-5 mt-3">Connect on <i class="fi-snsuxl-linkedin"></i></a>
                        <a href="https://www.instagram.com/ierrandonea/" class="btn btn-danger mx-5 mx-md-1 mx-lg-5 mt-3">See my resume <i class="fi-swluxl-left-align-wide"></i></a>
                        <a href="https://github.com/ierrandonea" class="btn btn-secondary mx-5 mx-md-1 mx-lg-5 mt-3">Check my <i class="fi-snsuxl-github-alt"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;