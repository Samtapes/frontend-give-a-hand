import React, { useEffect, useState } from 'react';

import './styles.css';



import Footer from '../Footer';


import api from '../../services/api';


export default function Sobre() {

    const [pedidosResolvidos, setPedidosResolvidos] = useState(0);

    useEffect(() => {
        async  function getSolvedRequests(){
            const resolvidosRes = await api.get('casos_resolvidos');
            setPedidosResolvidos(resolvidosRes.data.quantity);
        }

        getSolvedRequests();
    }, [])


    return(
        <div className="position-relative" style={{marginTop: -40}}>
            <header>
                <div className="image-container-sobre d-flex align-items-center justify-content-center">
                    <h1 className="text-white" style={{fontSize: '8vh'}}>Sobre</h1>
                </div>
            </header>

            <main className="my-5 position-relative mt-5">
                <div className="my-5 text-container">
                    <p style={{fontSize: '2.2vh'}}>Sobre Nós</p>
                    <p className="mb-5" style={{fontSize: '2.2vh'}}>Um site do governo municipal para ajudar a cidade e com grande foco na acessibilidades à aqueles com alguma tipo de deficiência! Nosso foco é fazer com que suas necessidades ganhem voz, com nossa plataforma, espalhe suas ideias para melhorar a vida de milhares de pessoas na cidade que pode se tornar realidade!  <br/> <br/> Pessoas não são deficientes, suas cidades são</p>
                </div>


                <div className="line-separator mt-5 mb-5"/>


                <h2 className="text-center mb-5 text-casos">{pedidosResolvidos} {pedidosResolvidos === 1 ? "caso" : "casos"} {pedidosResolvidos === 1 ? "Resolvido" : "Resolvidos"}</h2>


                <div className="line-separator mt-5 mb-5"/>

                <h2 className="text-center mb-5">Principais Cargos do Governo</h2>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-5">
                            <img className="img-fluid" src="https://i.ibb.co/bWCdvx1/image2.png" alt=""/>
                            <h2 className="text-center mt-2">Prefeito Martin Lutério</h2>
                            <p className="text-center mt-2 text-cargo">“Nosso foco é fazer uma cidade realmente acessivel”</p>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <img className="img-fluid" src="https://i.ibb.co/1z5Wm60/image3.png" alt=""/>
                            <h2 className="text-center mt-2">Vice-prefeito Josef Keredyto</h2>
                            <p className="text-center mt-2 text-cargo">“Nosso foco é fazer uma cidade realmente acessivel”</p>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <img className="img-fluid" src="https://i.ibb.co/pvFGdtd/image3-1.png" alt=""/>
                            <h2 className="text-center mt-2">Vereadora Briana Van</h2>
                            <p className="text-center mt-2 text-cargo">“Nosso foco é fazer uma cidade realmente acessivel”</p>
                        </div>
                    </div>
                </div>

            </main>
        
            <Footer/>
        </div>
    );
}