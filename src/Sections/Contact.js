import React from 'react';

const Contact = () => {
    return (
        <div className="container-fluid text-center font-pridi">
            <div className="row">
                <div className="col-12">
                    <h1 className="my-5 font-weight-bold">It would be amazing to be part of the amazing project you have in mind...</h1>
                    <h3 className="my-5 px-3">You can tell me what you have in mind and I can tell you how can I help ;)</h3>
                </div>
            </div>
            <div className="row mx-3 d-md-flex justify-content-center">
                <div className="col-12 col-md-8">
                    <form>
                        <div class="form-group">
                            <input type="email" class="form-control" id="contactMail" placeholder="your mail..." />
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="your message..."></textarea>
                        </div>
                        <div class="form-group form-check d-flex justify-content-start">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Urgent</label>
                        </div>
                        <button type="submit" class="btn btn-primary mb-2">Send!</button>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h5 className="my-5 font-weight-normal">Also, if you don't trust in robots,<br /> you can contact me directly by any of this channels:</h5>
                    <a href="tel:+56977978155" className="mt-5 mb-1 d-flex align-items-center justify-content-center"><i class="fi-xnsuxl-whatsapp mr-2"></i>(+56) 9 77 97 8155</a>
                    <a href="mailto:ierrandoneag@gmail.com" className="mb-1 d-flex align-items-center justify-content-center"><i class="fi-xwluxl-envelope-wide mr-2"></i>ierrandoneag@gmail.com</a>
                    <a href="https://www.instagram.com/ierrandonea/" className="mb-1 d-flex align-items-center justify-content-center"><i class="fi-xnsuxl-instagram mr-2"></i>@ierrandonea</a>
                    <a href="https://www.linkedin.com/in/ierrandonea" className="mb-5 d-flex align-items-center justify-content-center"><i class="fi-snsuxl-linkedin mr-2"></i>/ierrandonea</a>
                    <p className="my-5 font-weight-normal text-muted">I'll do my best to reach you ASAP</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;