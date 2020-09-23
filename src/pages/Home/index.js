import React from 'react';

import './styles.css';

import { Link } from 'react-router-dom';

import SunIcon from '../../assets/Sun'

import HandIcon from '../../assets/mao'


import Footer from '../Footer';


export default function Home() {

    return(
        <div className="position-relative" style={{marginTop: -45}}>
            <header>
                <div className="image-container d-flex align-items-center justify-content-center">
                    <h1 className="text-white" style={{fontSize: '8vh'}}>Give-a-hand</h1>

                    <div className="temp-card text-center">
                        <select id="form-control">
                            <option value="zona-norte">Zona Norte</option>
                            <option value="zona-norte">Zona Sul</option>
                            <option value="zona-norte">Zona Lest</option>
                            <option value="zona-norte">Zona Oeste</option>
                            <option value="zona-norte">Zona Central</option>
                        </select>

                        <p className="text-white mb-0 mt-3" style={{fontSize: '7vh'}}>32°C</p>

                        <SunIcon width="81" height="81"/>
                    </div>
                </div>
            </header>

            <main className="mt-5 position-relative">

                <div className="text-container">
                    <p style={{fontSize: '2.2vh'}}>Bem-vindo ao Give-a-hand</p>
                    <p className="mb-5" style={{fontSize: '2.2vh'}}>Um site do governo municipal para ajudar a cidade e com grande foco na acessibilidades à aqueles com alguma deficiência!</p>
                    <Link to="/sobre" className="text-white" style={{fontSize: '2.2vh'}}><b>Ler mais</b></Link>
                </div>


                <div className="line-separator mt-5 mb-5"/>


                <h2 className="text-center mb-5">Tem alguma ideia para melhor a cidade?</h2>

                <Link to="/add-pedido">
                <div className="card-personalized">
                    <HandIcon width="40%" height="40%"/>
                    <p className="card-personalized-text" style={{fontSize: '2.2vh'}}><b>Clique aqui para fazer um pedido</b></p>
                </div>
                </Link>
            

                <div className="line-separator mt-5 mb-5"/>



                <h2 className="text-center mb-5">Principais notícias</h2>

                <div className="container-news text-center mb-5">

                    <div className="card news-card mb-5">
                        <img className="card-img-top card-personalized-img"  src="https://imagens.ebc.com.br/H-be40PXKynDHnP5DSeQhm1RK4Q=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/17_07_2020_covid_ibirapuera-2.jpg?itok=w3ttZtAZ" alt="Card"/>
                        <div className="card-body"> 
                            <h5 className="card-title text-white">Novo Parque</h5>
                            <p className="card-text text-white">O novíssimo parque, inaugurado recentemente nesta semana, é sem dúvida um lugar maravilhoso para visitar com...</p>
                            <Link to="/noticia#header" className="text-white card-news-link"><b>Ver notícia</b></Link>
                        </div>
                    </div>

                    <div className="card news-card mb-5">
                        <img className="card-img-top card-personalized-img"  src="https://tutores.com.br/blog/wp-content/uploads/2018/09/arte1-820x455.jpg" alt="Card"/>
                        <div className="card-body"> 
                            <h5 className="card-title text-white">Bienal de artes</h5>
                            <p className="card-text text-white">Prepare-se pois está chegando a bienal de artes na nossa cidade! Com diversos artistas e tipos de artes!</p>
                            <Link to="/noticia" className="text-white card-news-link"><b>Ver notícia</b></Link>
                        </div>
                    </div>

                    <div className="card news-card mb-5">
                        <img className="card-img-top card-personalized-img"  src="https://voceconcursado.com.br/wp-content/uploads/2019/10/PCD.jpg" alt="Card"/>
                        <div className="card-body"> 
                            <h5 className="card-title text-white">Reformas na cidade</h5>
                            <p className="card-text text-white">Diversas reformas estão sendo feitas atendendo pedidos de muitod deficientes para...</p>
                            <Link to="/noticia" className="text-white card-news-link"><b>Ver notícia</b></Link>
                        </div>
                    </div>

                </div>

            </main>

            <Footer/>
        </div>
    );
}