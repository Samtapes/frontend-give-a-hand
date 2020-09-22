import React from 'react';

import './styles.css';


export default function Sobre() {

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


                <h2 className="text-center mb-5 text-casos">214 casos resolvidos</h2>


                <div className="line-separator mt-5 mb-5"/>

                <h2 className="text-center mb-5">Principais Cargos do Governo</h2>

                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 mb-5">
                            <img class="img-fluid" src="https://i.ibb.co/bWCdvx1/image2.png" alt=""/>
                            <h2 class="text-center mt-2">Prefeito Martin Lutério</h2>
                            <p class="text-center mt-2 text-cargo">“Nosso foco é fazer uma cidade realmente acessivel”</p>
                        </div>
                        <div class="col-lg-4 mb-5">
                            <img class="img-fluid" src="https://i.ibb.co/1z5Wm60/image3.png" alt=""/>
                            <h2 class="text-center mt-2">Vice-prefeito Josef Keredyto</h2>
                            <p class="text-center mt-2 text-cargo">“Nosso foco é fazer uma cidade realmente acessivel”</p>
                        </div>
                        <div class="col-lg-4 mb-5">
                            <img class="img-fluid" src="https://i.ibb.co/pvFGdtd/image3-1.png" alt=""/>
                            <h2 class="text-center mt-2">Vereadora Briana Van</h2>
                            <p class="text-center mt-2 text-cargo">“Nosso foco é fazer uma cidade realmente acessivel”</p>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}