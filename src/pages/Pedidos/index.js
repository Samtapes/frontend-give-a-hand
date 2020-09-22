import React from 'react';

import './styles.css';

import { Link } from 'react-router-dom';

import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from 'react-icons/fa';

export default function Pedidos() {

    return(
        <div className="position-relative" style={{marginTop: -40}}>
            <header>
                <div className="image-container-pedidos d-flex align-items-center justify-content-center">
                    <h1 className="text-white" style={{fontSize: '8vh', textShadow: '1px 3px 10px #000000'}}>Pedidos</h1>
                </div>
            </header>

            <main className="my-5 position-relative mt-5">

                <div className="text-center mb-5">
                    <Link to="#" className="btn btn-blue px-4 py-3">Criar Pedido</Link>
                    <Link to="#" className="btn btn-blue px-4 py-3 ml-3">Seus Pedidos</Link>
                </div>

                <div class="d-flex justify-content-center">

                    <div class="row">
                        <div class="col-xl-4 col-md-6 mb-5">
                            
                            <div class="card pedido-card" style={{width: '30rem'}}>
                                <img src="https://live.staticflickr.com/3393/3182574799_162a2fd13c_b.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Tirem essa elevação na calçada, me atrapalha todo dia no caminho do trabalho!</h5>
                                    <p class="card-text">Por Carla Almeida</p>

                                    <div>
                                        <h5 class="">
                                            <Link to="#" class="lerMais-link pr-3"><FaRegArrowAltCircleUp size="35" color="#000"/></Link>
                                            2.745
                                            <Link to="#" class="lerMais-link pl-4"><FaRegArrowAltCircleDown size="35" color="#000"/></Link>
                                            <Link to="#" class="lerMais-link float-right pr-4">Ler mais</Link>
                                        </h5>
                                    </div>

                                </div>
                            </div>
 
                        </div>
                        
                        <div class="col-xl-4 col-md-6 mb-5">

                            {/* COMECO */}
                            <div class="card pedido-card" style={{width: '30rem'}}>
                                <img src="https://live.staticflickr.com/3393/3182574799_162a2fd13c_b.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Tirem essa elevação na calçada, me atrapalha todo dia no caminho do trabalho!</h5>
                                    <p class="card-text">Por Carla Almeida</p>

                                    <div>
                                        <h5 class="">
                                            <Link to="#" class="lerMais-link pr-3"><FaRegArrowAltCircleUp size="35" color="#000"/></Link>
                                            2.745
                                            <Link to="#" class="lerMais-link pl-4"><FaRegArrowAltCircleDown size="35" color="#000"/></Link>
                                            <Link to="#" class="lerMais-link float-right pr-4">Ler mais</Link>
                                        </h5>
                                    </div>

                                </div>
                            </div>
                            {/* FIM */}
                            
                        </div>

                        <div class="col-xl-4 col-md-6 mb-5">
                            
                             {/* COMECO */}
                             <div class="card pedido-card" style={{width: '30rem'}}>
                                <img src="https://live.staticflickr.com/3393/3182574799_162a2fd13c_b.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Tirem essa elevação na calçada, me atrapalha todo dia no caminho do trabalho!</h5>
                                    <p class="card-text">Por Carla Almeida</p>

                                    <div>
                                        <h5 class="">
                                            <Link to="#" class="lerMais-link pr-3"><FaRegArrowAltCircleUp size="35" color="#000"/></Link>
                                            2.745
                                            <Link to="#" class="lerMais-link pl-4"><FaRegArrowAltCircleDown size="35" color="#000"/></Link>
                                            <Link to="#" class="lerMais-link float-right pr-4">Ler mais</Link>
                                        </h5>
                                    </div>

                                </div>
                            </div>
                            {/* FIM */}

                        </div>
                        
                    </div>


                </div>

            </main>
        </div>
    );
}