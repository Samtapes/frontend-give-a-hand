import React, {useEffect, useRef, useState} from 'react';

import './styles.css';

import { Link } from 'react-router-dom';

import SunIcon from '../../assets/Sun'

import HandIcon from '../../assets/mao'


import Footer from '../Footer';


import api from '../../services/api';





export default function Home() {
    const [noticias, setNoticias] = useState([]);

    const [temperatura, setTemperatura] = useState(0.00);

    const zona = useRef()

    useEffect(() => {
        api.get('noticias').then(res => {
            setNoticias(res.data)
        })

        api.get('https://api.openweathermap.org/data/2.5/weather?q=São Paulo&appid=4d8fb5b93d4af21d66a2948710284366&units=metric')
        .then(res => {
            setTemperatura(res.data.main.temp)
        });
    }, []);

    
    
    const name = localStorage.getItem('user_name');


    const [isLogged, setIsLogged] = useState(true);

    useEffect(() => {
        const login = localStorage.getItem('user_id');

        !isNaN(parseInt(login)) ? setIsLogged(true) : setIsLogged(false);

    }, [isLogged]);




    function handleGetTemp(){
        const zonaVal = zona.current.value;

        api.get('https://api.openweathermap.org/data/2.5/weather?q=' + zonaVal + '&appid=4d8fb5b93d4af21d66a2948710284366&units=metric')
        .then(res => {
            setTemperatura(res.data.main.temp)
        });
    }



    return(
        <div className="position-relative" style={{marginTop: -45}}>
            <header>
                <div className="image-container d-flex align-items-center justify-content-center">
                    <h1 className="text-white" style={{fontSize: '8vh'}}>Give-a-hand</h1>

                    <div className="temp-card text-center">
                        <select id="form-control" ref={zona} onChange={handleGetTemp}>
                            <option value="São Paulo">Zona Norte</option>
                            <option value="Santa Catarina">Zona Sul</option>
                            <option value="Belo Horizonte">Zona Leste</option>
                            <option value="Rio de Janeiro">Zona Oeste</option>
                            <option value="Brasília">Zona Central</option>
                        </select>

                        <p className="text-white mb-0 mt-3" style={{fontSize: '7vh'}}>{temperatura}°C</p>

                        <SunIcon width="81" height="81"/>
                    </div>
                </div>
            </header>

            <main className="mt-5 position-relative">

                <div className="text-container">
                    { isLogged
                    ?
                        <p style={{fontSize: '2.2vh'}}>Bem-vindo(a) {name}, ao Give-a-hand</p>
                    :
                        <p style={{fontSize: '2.2vh'}}>Bem-vindo(a) ao Give-a-hand</p>
                    }
                    <p className="mb-5" style={{fontSize: '2.2vh'}}>Um site do governo municipal para ajudar a cidade e com grande foco na acessibilidades à aqueles com alguma deficiência!</p>
                    <Link to="/sobre" className="text-white" style={{fontSize: '2.2vh'}}><b>Ler mais</b></Link>
                </div>


                <div className="line-separator mt-5 mb-5"/>


                <h2 className="text-center mb-5">Tem alguma ideia para melhor a cidade?</h2>

                <Link to="/perfil">
                <div className="card-personalized">
                    <HandIcon width="40%" height="40%"/>
                    <p className="card-personalized-text" style={{fontSize: '2.2vh'}}><b>Clique aqui para fazer um pedido</b></p>
                </div>
                </Link>
            


                {noticias.length > 0
                ?
                    <>
                    <div className="line-separator mt-5 mb-5"/>



                    <h2 className="text-center mb-5">Principais notícias</h2>

                    <div className="container-news text-center mb-5">

                        {noticias.map(noticia => (
                            <div className="card news-card mb-5" key={noticia.id}>
                                <img className="card-img-top card-personalized-img"  src={noticia.photo} alt="Card"/>
                                <div className="card-body"> 
                                    <h5  className="card-title text-white">{noticia.title}</h5>
                                    <p className="card-text text-white" style={{height: '96px', overflow: 'hidden'}}>{noticia.content}</p>
                                    <Link to={"/noticia/" + noticia.id} className="text-white card-news-link"><b>Ver notícia</b></Link>
                                </div>
                                
                            </div>
                        ))}

                    </div>
                    </>
                :
                    <></>
                }

            </main>

            <Footer/>
        </div>
    );
}