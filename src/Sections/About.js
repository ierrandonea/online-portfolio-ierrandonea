import React, { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="row d-flex justify-content-center mx-0 px-0">
                <div className="col bg-black text-white text-center">
                    <h3 className="py-2">Sobre mí:</h3>
                </div>
            </div>
            <div className="container font-pridi" id="about">
                <div className="row d-flex justify-content-center justify-content-lg-between">
                    <div className="col-8 col-lg-6 my-lg-auto">
                        <img className="img-fluid" src="/static/misc/IMG_20190226_171618.jpg" alt="" />
                    </div>
                    <div className="col-sm-12 col-lg-6 my-5 mt-lg-auto">
                        <h5 className="text-justify text-md-justify font-weight-normal">
                            Diseñador de Productos y Desarrollador Fullstack.
                            Soy muy curioso y quisiera saberlo todo sobre lo que hago, pero mi mayor interés está en entender y gestionar
                            las  experiencias de las personas y su relación con su entorno visual y digital.
                        <br /><br />
                        Me apasiona construir puentes entre las personas, el diseño y la tecnología.
                        <br /><br />
                        </h5>
                        <h5>
                            Los lenguajes, software y tecnologías que conozco:
                    </h5>
                        <img src="/static/main/techs.svg" alt="" className="py-2" />
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12">
                        <h2 className="text-center font-weight-bold">Si te llamé la atención, tal vez podrías...</h2>
                        <div className="d-flex flex-column flex-md-row justify-content-center my-5">
                            <a href="https://www.linkedin.com/in/ierrandonea" class="btn btn-outline-dark rounded-sm btn-lg mx-5 mx-md-3 mx-lg-5 mt-3 d-flex justify-content-center align-items-center" target="_blank">Conectar en<i class="fab fa-linkedin fa-2x ml-2"></i></a>
                            <a href="/static/misc/resumen-inaki-errandonea.pdf" class="btn btn-outline-dark rounded-sm btn-lg mx-5 mx-md-3 mx-lg-5 mt-3 d-flex justify-content-center align-items-center" target="_blank">Descargar mi CV<i class="fas fa-file-pdf fa-2x ml-2"></i></a>
                            <a href="https://github.com/ierrandonea" class="btn btn-outline-dark rounded-sm btn-lg mx-5 mx-md-3 mx-lg-5 mt-3 d-flex justify-content-center align-items-center" target="_blank">Visitar mi<i class="fab fa-github-square fa-2x ml-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row" id="contact">
                    <div className="col-12">
                        <h4 className="text-center text-secondary">También puedes contactarme en:</h4>
                    </div>
                </div>
                {/* <div className="row mx-3 py-5 d-none">
                <div className="col-12 col-md-10">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" id="contactName" placeholder="Tu nombre" name="name" />
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" id="contactMail" placeholder="Tu email" name="email" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="contactName" placeholder="Asunto" name="subject" />
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Tu mensaje..." name="message"></textarea>
                        </div>
                        <button class="btn btn-primary btn-lg mb-2" onClick={e => onSubmit(e)}>Enviar!</button>
                    </form>
                </div>
            </div> */}
                <div className="row">
                    <div className="col-12 d-flex flex-column flex-lg-row justify-content-around align-items-center align-items-lg-baseline">
                        <a href="https://wa.link/0a5vjc" className="mt-5 mb-1 d-flex align-items-baseline"><i class="fab fa-whatsapp fa-2x mr-2"></i><h4>(+56) 9 77 97 8155</h4></a>
                        <a href="mailto:ierrandoneag@gmail.com" className="mb-1 d-flex align-items-baseline"><i class="far fa-envelope fa-2x mr-2"></i><h4>ierrandoneag@gmail.com</h4></a>
                        <a href="https://www.instagram.com/ierrandonea/" className="mb-1 d-flex align-items-baseline"><i class="fab fa-instagram fa-2x mr-2"></i><h4>@ierrandonea</h4></a>
                    </div>
                </div>
                <p className="text-center font-weight-normal text-muted mt-4">¡Haré mi mayor esfuerzo para contactarte enseguida!</p>
            </div>
        </>
    )
}

export default About;