import React, { useEffect, useState } from 'react';

import './styles.css';

import { Link } from 'react-router-dom';

import { FaRegTrashAlt } from 'react-icons/fa';



import Footer from '../Footer';


import api from '../../services/api';



export default function Home() {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        api.get('noticias').then(res => {
            console.log(res.data);
            setNoticias(res.data)
        })
    }, []);


    async function handleDelete(id){
        try{
            await api.delete('noticias/' + id);

            setNoticias(noticias.filter(noticia => noticia.id !== id));
        }

        catch(err){
            alert(err)
        }
    }


    return(
        <div className="position-relative" style={{marginTop: -45}}>
            <header>
                <div className="image-container d-flex align-items-center justify-content-center">
                    <h1 className="text-white" style={{fontSize: '8vh'}}>Editar Notícias</h1>
                </div>
            </header>


            <main className="mt-5 position-relative">

                <div className="text-center my-5">
                    <Link to="/add-noticia" className="btn btn-blue px-4 py-3">Criar Notícia</Link>
                </div>

                <div className="container-news text-center mb-5">
                    
                    {noticias.map(noticia => (
                        <div className="card news-card mb-5" key={noticia.id}>
                            <FaRegTrashAlt size="36" color="red" style={{position: 'absolute', cursor: 'pointer', right: '10', top: '10'}} onClick={() => handleDelete(noticia.id)}/>

                            <img className="card-img-top card-personalized-img"  src={noticia.photo} alt="Card"/>
                            <div className="card-body"> 
                                <h5  className="card-title text-white">{noticia.title}</h5>
                                <p className="card-text text-white" style={{height: '96px', overflow: 'hidden'}}>{noticia.content}</p>
                                <Link to={"/noticia/" + noticia.id} className="text-white card-news-link"><b>Ver notícia</b></Link>
                            </div>
                            
                        </div>
                    ))}

                </div>

            </main>
            
            <Footer/>
        </div>
    );
}