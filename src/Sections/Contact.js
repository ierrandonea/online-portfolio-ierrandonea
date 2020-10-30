import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const onSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('gmail', process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
            .then(result => {
                alert('Mensaje envíado, pronto estaré en contacto contigo!', result.text);
            },
                error => {
                    alert('Ocurrió un error, por favor intentale denuevo', error.text)
                })
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="container-fluid text-center font-pridi">
            <div className="row">
                <div className="col-12">
                    <h3 className="my-5 font-weight-bold px-auto px-md-5">Si logré captar tu atención o tienes un proyecto en mente,
                     puedes contactarme en:</h3>
                </div>
            </div>
            <div className="row mx-3 py-5 d-none">
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
            </div>
            <div className="row">
                <div className="col-12">
                    <a href="tel:+56977978155" className="mt-5 mb-1 d-flex align-items-baseline justify-content-center"><i class="fab fa-whatsapp fa-2x mr-2"></i><h3>(+56) 9 77 97 8155</h3></a>
                    <a href="mailto:ierrandoneag@gmail.com" className="mb-1 d-flex align-items-baseline justify-content-center"><i class="far fa-envelope fa-2x mr-2"></i><h3>ierrandoneag@gmail.com</h3></a>
                    <a href="https://www.instagram.com/ierrandonea/" className="mb-1 d-flex align-items-baseline justify-content-center"><i class="fab fa-instagram fa-2x mr-2"></i><h3>@ierrandonea</h3></a>
                    <a href="https://www.linkedin.com/in/ierrandonea" className="mb-5 d-flex align-items-baseline justify-content-center"><i class="fab fa-linkedin-in fa-2x mr-2"></i><h3>/ierrandonea</h3></a>
                    <p className="my-5 font-weight-normal text-muted">Haré mi mayor esfuerzo para contactarte enseguida!</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;