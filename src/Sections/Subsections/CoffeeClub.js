import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const CoffeeClub = () => {
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="container-fluid font-pridi animate__animated animate__fadeInDown">
            <div className="row pb-3 pt-4 px-3">
                <span className="btn btn-secondary" onClick={() => { history.push("/") }}>Volver</span>
            </div>
            <h2 className="py-5">The Coffee Club</h2>
            <div className="row">
                <div className="col-12">
                    <p className="text-justify mt-3 px-5">
                        The Coffee Club es una tienda virtual, planificada para ser una boutique de café y experiencias en torno al mismo,
                        se trata de un proyecto en conjunto realizado como evaluación final en 4Geeks Academy.
                        <br /><br />
                        Al día de hoy es un proyecto en desarrollo para mejorar y complementar habilidades en programación.
                    </p>
                </div>
            </div>
            <h5 className="py-5 px-5 ">
                Tecnologías usadas en este proyecto:
            </h5>
            <div className="row d-flex justify-content-around">
                <div className="col-10">
                    <img src="/static/projects/coffee-club/coffee-techs-1280x400.png" className="img-fluid" />
                </div>
            </div>
            <h3 className="py-5">Preparación:</h3>
            <div className="row">
                <div className="col-12 px-5">
                    <p className="text-justify text-md-left pt-lg-auto">
                        Para el desarrollo del proyecto, se realizó una planificación que contempla la aplicación de metodologías ágiles.
                        Así como también se dispuso de una planificación kanban y un diseño básico de interfaces a través de wireframes.
                    </p>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-8 py-5">
                    <img src="/static/projects/coffee-club/coffee-wires-1280x450.jpg" className="img-fluid" />
                </div>
            </div>
            <div className="row py-5">
                <div className="col-12 px-5">
                    <p className="text-justify">
                        Se planificó y esquematizó la base de datos de este proyecto para tener un mejor entendimiento del flujo de datos a programar desde el back-end.
                    </p>
                </div>
            </div>
            <div className="row d-flex justify-content-center pb-5">
                <div className="col-8 px-5">
                    <img src="/static/projects/coffee-club/coffee-database-1280x720.jpg" className="img-fluid" />
                </div>
            </div>
            <hr />
            <h3 className="py-5">Contenido:</h3>
            <div className="row">
                <div className="col-12 px-5">
                    <h5 className="mb-3">
                        El proyecto en su estado actual permite las siguientes funcionalidades:
                    </h5>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-8 col-lg-6 px-5">
                    <ul>
                        <li>Navegación básica</li>
                        <li>Mostrar Información del producto al poscicionar mouse</li>
                        <li>Filtrar y ordenar productos dinámicamente</li>
                        <li>Ver detalles del producto</li>
                        <li>Agregar y eliminar items del carrito</li>
                        <li>Comprar como invitado</li>
                        <li>Registrarse</li>
                        <li>Administrar los datos de la cuenta</li>
                        <li>Pagar a través de PayPal</li>
                        <li>Redireccionar el pago exitoso/error en el pago</li>
                        <li>Agregar y editar nuevos productos</li>

                        <span className="text-small text-muted">*la gestión de productos está disponible sólo para el administrador.</span>

                    </ul>
                </div>
            </div>
            <div className="card bg-light m-5">
                <p className="card-title text-center text-muted pt-3">Uso de filtros dinámicos</p>
                <div className="card-body row d-flex justify-content-center">
                    <div className="col-4">
                        <img src="/static/projects/coffee-club/coffee-nav-800x450.jpg" className="img-fluid" />
                    </div>
                    <div className="col-1 d-flex justify-content-center align-items-center">
                        <i class="fas fa-angle-double-right fa-4x text-muted"></i>
                    </div>
                    <div className="col-4">
                        <img src="/static/projects/coffee-club/coffee-nav3-800x450.jpg" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="card bg-light m-5">
                <p className="card-title text-center text-muted pt-3">Uso de filtros dinámicos</p>
                <div className="card-body row d-flex justify-content-center">
                    <div className="col-3">
                        <img src="/static/projects/coffee-club/coffee-nav4-800x450.jpg" className="img-fluid" />
                    </div>
                    <div className="col-1 d-flex justify-content-center align-items-center">
                        <i class="fas fa-angle-double-right fa-2x text-muted"></i>
                    </div>
                    <div className="col-3">
                        <img src="/static/projects/coffee-club/coffee-nav5-800x450.jpg" className="img-fluid" />
                    </div>
                    <div className="col-1 d-flex justify-content-center align-items-center">
                        <i class="fas fa-angle-double-right fa-2x text-muted"></i>
                    </div>
                    <div className="col-3">
                        <img src="/static/projects/coffee-club/coffee-nav6-800x450.jpg" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="row mt-3 pt-5 d-flex justify-content-center align-items-center px-5">
                <p className="col-12 col-lg-3">El usuario también puede visualizar los detalles de un producto, además de agregar y eliminar objetos de su carro de compra</p>
                <div className="card col-12 col-lg-7 bg-light d-flex flex-row">
                    <div className="w-50">
                        <img src="/static/projects/coffee-club/coffee-nav2-800x450.jpg" className="img-fluid pr-2 py-2" />
                    </div>
                    <div className="w-50">
                        <img src="/static/projects/coffee-club/coffee-nav7-800x450.jpg" className="img-fluid py-2" />
                    </div>
                </div>
            </div>
            <div className="row mt-3 pt-5 text-center">
                <p className="col-12 pt-5">Adicionalmente, puede crear una cuenta o autenticarse si ya tiene una, además de modificar su información personal</p>
            </div>
            <div className="card bg-light m-5">
                <p className="card-title text-center text-muted pt-3">Vista de registro, login y cuenta</p>
                <div className="card-body row d-flex justify-content-center">
                    <div className="col-4">
                        <img src="/static/projects/coffee-club/coffee-nav10-800x450.jpg" className="img-fluid" />
                    </div>
                    <div className="col-4">
                        <img src="/static/projects/coffee-club/coffee-nav8-800x450.jpg" className="img-fluid" />
                    </div>
                    <div className="col-4">
                        <img src="/static/projects/coffee-club/coffee-nav11-800x450.jpg" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="row mt-3 pt-5 text-center">
                <p className="col-12 pt-5">También es posible realizar pagos a través de la plataforma PayPal</p>
            </div>
            <div className="card bg-light m-5">
                <p className="card-title text-center text-muted pt-3">Ejemplo de pago</p>
                <div className="row d-flex justify-content-center">
                    <div className="col-4">
                        <img src="/static/projects/coffee-club/coffee-pay-800x450.jpg" className="img-fluid" />
                    </div>
                </div>
                <div className="row d-flex justify-content-center mb-3 pt-5">
                    <div className="col-3">
                        <img src="/static/projects/coffee-club/coffee-pay2-800x450.jpg" className="img-fluid" />
                    </div>
                    <div className="col-1 d-flex justify-content-center align-items-center">
                        <i class="fas fa-angle-double-right fa-2x text-muted"></i>
                    </div>
                    <div className="col-3">
                        <img src="/static/projects/coffee-club/coffee-pay3-800x450.jpg" className="img-fluid" />
                    </div>
                    <div className="col-1 d-flex justify-content-center align-items-center">
                        <i class="fas fa-angle-double-right fa-2x text-muted"></i>
                    </div>
                    <div className="col-3">
                        <img src="/static/projects/coffee-club/coffee-pay4-800x450.jpg" className="img-fluid" />
                    </div>
                </div>                
                <p className="card-title text-center text-muted pt-3">Dependiendo del resultado del pago el usuario es redirigido</p>
                <div className="row d-flex justify-content-center mb-5">
                    <div className="col-4">
                        <img src="/static/projects/coffee-club/coffee-pay5-800x450.jpg" className="img-fluid" />
                    </div>
                    <div className="col-4">
                        <img src="/static/projects/coffee-club/coffee-pay6-800x450.jpg" className="img-fluid" />
                    </div>                    
                </div>
            </div>
            <div className="row mt-3 pt-5 text-center">
                <p className="col-12 pt-5">Por último, el administrador puede gestionar los productos disponibles desde su cuenta:</p>
            </div>
            <div className="card bg-light m-5">
                <p className="card-title text-center text-muted pt-3">Gestión de productos</p>
                <div className="card-body row d-flex justify-content-center">
                    <div className="col-5">
                        <img src="/static/projects/coffee-club/coffee-admin-800x450.jpg" className="img-fluid" />
                    </div>
                    <div className="col-5">
                        <img src="/static/projects/coffee-club/coffee-admin2-800x450.jpg" className="img-fluid" />
                    </div>
                </div>
            </div>
            <hr />
            <h3 className="py-5">Puedes visitar los repositorios de este proyecto aquí:</h3>
            <div className="row mb-5 d-flex justify-content-around">
                <a href="https://github.com/ierrandonea/proyecto-final-4geeks-front" className="col-5 btn btn-sm btn-outline-dark d-flex justify-content-center align-items-baseline pt-2" target="_blank">
                    <h4 className="mr-2">Front</h4><i class="fab fa-github fa-2x"></i>
                </a>
                <a href="https://github.com/ierrandonea/proyecto-final-4geeks-back" className="col-5 btn btn-sm btn-outline-dark d-flex justify-content-center align-items-baseline pt-2" target="_blank">
                    <h4 className="mr-2">Back</h4><i class="fab fa-github fa-2x"></i>
                </a>
            </div>
        </div>
    )
}

export default CoffeeClub;