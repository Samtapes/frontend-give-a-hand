import React from 'react';

import './styles.css';

import { Link } from 'react-router-dom';

import { FaTrash } from 'react-icons/fa';

export default function Home() {

    return(
        <div className="position-relative" style={{marginTop: -45}}>
            <header>
                <div className="image-container d-flex align-items-center justify-content-center">
                    <h1 className="text-white" style={{fontSize: '8vh'}}>Editar Notícias</h1>
                </div>
            </header>


            <main className="mt-5 position-relative">

                <div className="text-center my-5">
                    <Link to="/add-pedido" className="btn btn-blue px-4 py-3">Criar Notícia</Link>
                </div>

                <div className="container-news text-center mb-5">

                    <div className="card news-card mb-5">
                        <img className="card-img-top card-personalized-img"  src="https://imagens.ebc.com.br/H-be40PXKynDHnP5DSeQhm1RK4Q=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/17_07_2020_covid_ibirapuera-2.jpg?itok=w3ttZtAZ" alt="Card"/>
                        <div className="card-body"> 
                            <h5  className="card-title text-white">Novo Parque</h5>
                            <p className="card-text text-white">O novíssimo parque, inaugurado recentemente nesta semana, é sem dúvida um lugar maravilhoso para visitar com...</p>
                            <Link to="/noticia#header" className="text-white card-news-link"><b>Ver notícia</b></Link>
                            <button class="btn-noticia float-right"><FaTrash size="35" color="#fff"/></button>
                        </div>
                        
                    </div>

                    <div className="card news-card mb-5">
                        <img className="card-img-top card-personalized-img"  src="https://tutores.com.br/blog/wp-content/uploads/2018/09/arte1-820x455.jpg" alt="Card"/>
                        <div className="card-body"> 
                            <h5 className="card-title text-white">Bienal de artes</h5>
                            <p className="card-text text-white">Prepare-se pois está chegando a bienal de artes na nossa cidade! Com diversos artistas e tipos de artes!</p>
                            <Link to="/noticia" className="text-white card-news-link"><b>Ver notícia</b></Link>
                            <button class="btn-noticia float-right"><FaTrash size="35" color="#fff"/></button>
                        </div>
                    </div>

                    <div className="card news-card mb-5">
                        <img className="card-img-top card-personalized-img"  src="https://voceconcursado.com.br/wp-content/uploads/2019/10/PCD.jpg" alt="Card"/>
                        <div className="card-body"> 
                            <h5 className="card-title text-white">Reformas na cidade</h5>
                            <p className="card-text text-white">Diversas reformas estão sendo feitas atendendo pedidos de muitod deficientes para...</p>
                            <Link to="/noticia" className="text-white card-news-link"><b>Ver notícia</b></Link>
                            <button class="btn-noticia float-right"><FaTrash size="35" color="#fff"/></button>
                        </div>
                    </div>

                </div>

            </main>
        </div>
    );
}