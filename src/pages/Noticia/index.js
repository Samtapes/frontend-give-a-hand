import React, { useEffect, useState } from 'react';

import './styles.css';

import { Link } from 'react-router-dom';





import Footer from '../Footer';

import api from '../../services/api';


export default function Home(props) {
    const [news, setNews] = useState({});
    
    const newsId = props.match.params.newsId
    
    useEffect(() => {
        const body = document.querySelector('#root');
    
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
    

        // Getting the news
        async function getNews(){
            const news = await api.get('noticia/' + newsId);

            setNews(news.data)
        }

        getNews();
    }, [newsId]);
      


    function createMarkup(description) {
        return {__html: description};
    }      


    function RequestDescription(props) {
        return(
            <div className="mx-5" style={{fontSize: '2vh', whiteSpace: 'pre-wrap'}} dangerouslySetInnerHTML={createMarkup(props.content)}></div>
        );
    }


    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        api.get('noticias').then(res => {
            setNoticias(res.data)
        })
    }, []);



    return(
        <div className="position-relative" style={{marginTop: -45}}>
            <header id="header">
                <div className="image-container d-flex align-items-center justify-content-center"  style={{backgroundImage: "url(" + news.photo + ")", textShadow: '1px 3px 10px #000000'}}>
                    <h1 className="text-white text-center" style={{fontSize: '8vh'}}>{news.title}</h1>
                </div>
            </header>

            <main className="mt-5 position-relative">           

                <RequestDescription content={news.content}/>


                <div style={{marginTop: '7%'}} className="line-separator mt-5 mb-5"/>




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

            </main>
      
            <Footer/>
        </div>
    );
}