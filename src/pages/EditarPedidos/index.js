import React from 'react';

import './styles.css';

import { Link } from 'react-router-dom';

import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash, FaCheck  } from 'react-icons/fa';


import Footer from '../Footer';


export default function Pedidos() {

    return(
        <div className="position-relative" style={{marginTop: -45}}>
            <header>
                <div className="image-container-pedidos d-flex align-items-center justify-content-center">
                    <h1 className="text-white" style={{fontSize: '8vh', textShadow: '1px 3px 10px #000000'}}>Editar Pedidos</h1>
                </div>
            </header>

            <main className="my-5 position-relative mt-5">

                <div class="d-flex justify-content-center mb-5">
                    <h2 class="mr-5">214 Casos Resolvidos</h2>
                    <h2>4 Casos Excluídos</h2>
                </div>

                <div className="d-flex justify-content-around flex-wrap">

                    <div className="card pedido-card mb-5" style={{width: '400px'}}>
                        <img src="https://live.staticflickr.com/3393/3182574799_162a2fd13c_b.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Tirem essa elevação na calçada, me atrapalha todo dia no caminho do trabalho!</h5>
                            <p className="card-text">Por Carla Almeida</p>

                            <div>
                                <h5 className="">
                                    <button class="btn-pedido"><FaRegArrowAltCircleUp size="35" color="#000"/></button>
                                    2.745
                                    <button class="btn-pedido"><FaRegArrowAltCircleDown size="35" color="#000"/></button>
                                    <Link to="#" className="lerMais-link float-right pr-4">Editar</Link>
                                </h5>

                                <div class="d-flex justify-content-center">
                                    <button class="btn-pedido my-2"><FaCheck size="35" color="#000"/></button>
                                    <button class="btn-pedido"><FaTrash size="35" color="#000"/></button>
                                </div>
                            </div>

                        </div>
                    </div>

                

                    {/* COMECO */}
                    <div className="card pedido-card mb-5" style={{width: '400px'}}>
                        <img src="https://live.staticflickr.com/3393/3182574799_162a2fd13c_b.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Tirem essa elevação na calçada, me atrapalha todo dia no caminho do trabalho!</h5>
                            <p className="card-text">Por Carla Almeida</p>

                            <div>
                                <h5 className="">
                                    <button class="btn-pedido"><FaRegArrowAltCircleUp size="35" color="#000"/></button>
                                    2.745
                                    <button class="btn-pedido"><FaRegArrowAltCircleDown size="35" color="#000"/></button>
                                    <Link to="#" className="lerMais-link float-right pr-4">Editar</Link>
                                </h5>

                                <div class="d-flex justify-content-center">
                                    <button class="btn-pedido my-2"><FaCheck size="35" color="#000"/></button>
                                    <button class="btn-pedido"><FaTrash size="35" color="#000"/></button>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* FIM */}

                    

                    {/* COMECO */}
                    <div className="card pedido-card mb-5" style={{width: '400px'}}>
                        <img src="https://live.staticflickr.com/3393/3182574799_162a2fd13c_b.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Tirem essa elevação na calçada, me atrapalha todo dia no caminho do trabalho!</h5>
                            <p className="card-text">Por Carla Almeida</p>

                            <div>
                                <h5 className="mb-3">
                                    <button class="btn-pedido"><FaRegArrowAltCircleUp size="35" color="#000"/></button>
                                    2.745
                                    <button class="btn-pedido"><FaRegArrowAltCircleDown size="35" color="#000"/></button>
                                    <Link to="#" className="lerMais-link float-right pr-4">Editar</Link>
                                </h5>

                                <div class="d-flex justify-content-center">
                                    <button class="btn-pedido my-2"><FaCheck size="35" color="#000"/></button>
                                    <button class="btn-pedido"><FaTrash size="35" color="#000"/></button>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* FIM */}


                </div>

            </main>
        
            <Footer/>
        </div>
    );
}