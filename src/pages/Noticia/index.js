import React from 'react';

import './styles.css';

import { Link } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';



export default function Home() {

    // Matéria da notícia
    const text = " &nbsp &nbsp O novíssimo parque, inaugurado recentemente nesta semana, é sem dúvida um lugar maravilhoso para visitar com a sua família! Possui mais de 25 tipos de árvores, uma lagoa, um playground para as crianças brincarem e diversas flores!<br><br>- 2km quadrados<br>- Lago enorme<br>- Grande variedade de flores<br>- Grande variedade de árvores<br>- Playground para crianças<br><br>E muito mais!<br><br>Esse é o lugar ideal para quem já está cansado da pandemia e quer entrar em contato com a natureza! Mas claro, tomando os devidos cuidados"

    function createMarkup(text) {
        return {__html: text};
    }
    
    
    function Materia() {
    return <div dangerouslySetInnerHTML={createMarkup(text)} />;
    }



    React.useEffect(() => {
        const body = document.querySelector('#root');
    
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
    
    }, []);
      


    return(
        <div className="position-relative" style={{marginTop: -45}}>
            <header id="header">
                <div className="image-container d-flex align-items-center justify-content-center">
                    <h1 className="text-white text-center" style={{fontSize: '8vh'}}>Novo Parque</h1>
                </div>
            </header>

            <main className="mt-5 position-relative">
                <Link to="/"><FaArrowLeft className="ml-5 mb-5" size="35" color="#000"/></Link>
            

                <p className="mx-5" style={{fontSize: '2vh'}}>
                    <Materia/>
                </p>



                <div style={{marginTop: '7%'}} className="line-separator mt-5 mb-5"/>




                <h2 className="text-center mb-5">Principais notícias</h2>

                <div className="container-news text-center mb-5">

                    <div className="card news-card">
                        <img className="card-img-top card-personalized-img"  src="https://imagens.ebc.com.br/H-be40PXKynDHnP5DSeQhm1RK4Q=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/17_07_2020_covid_ibirapuera-2.jpg?itok=w3ttZtAZ" alt="Card"/>
                        <div className="card-body"> 
                            <h5 className="card-title text-white">Novo Parque</h5>
                            <p className="card-text text-white">O novíssimo parque, inaugurado recentemente nesta semana, é sem dúvida um lugar maravilhoso para visitar com...</p>
                            <Link to="/noticia" className="text-white card-news-link"><b>Ver notícia</b></Link>
                        </div>
                    </div>

                    <div className="card news-card">
                        <img className="card-img-top card-personalized-img"  src="https://tutores.com.br/blog/wp-content/uploads/2018/09/arte1-820x455.jpg" alt="Card"/>
                        <div className="card-body"> 
                            <h5 className="card-title text-white">Bienal de artes</h5>
                            <p className="card-text text-white">Prepare-se pois está chegando a bienal de artes na nossa cidade! Com diversos artistas e tipos de artes!</p>
                            <Link to="/noticia" className="text-white card-news-link"><b>Ver notícia</b></Link>
                        </div>
                    </div>

                    <div className="card news-card">
                        <img className="card-img-top card-personalized-img"  src="https://voceconcursado.com.br/wp-content/uploads/2019/10/PCD.jpg" alt="Card"/>
                        <div className="card-body"> 
                            <h5 className="card-title text-white">Reformas na cidade</h5>
                            <p className="card-text text-white">Diversas reformas estão sendo feitas atendendo pedidos de muitod deficientes para...</p>
                            <Link to="/noticia" className="text-white card-news-link"><b>Ver notícia</b></Link>
                        </div>
                    </div>

                </div>

            </main>
        </div>
    );
}