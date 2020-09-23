import React from 'react';


import Footer from '../Footer';

import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from 'react-icons/fa';



export default function Pedido(){
    const imagem = "https://live.staticflickr.com/3393/3182574799_162a2fd13c_b.jpg";
    const nome = "Carla Almeida";
    const local = "Rua Almeida Magnolia 29";
    const descricao = "Já faz mais de 4 anos que todos os dias no caminho para o ponto de ônibus eu tenho dificuldade de  passar por essa parte da calçada onde tem uma escada no caminho, moro sozinha e não tenho ninguem para me ajudar a passar, todas as vezes sou obrigada a desviar pela rua. Por favor me ajudem!!";

    const avaliacao = 2.745



    return(
        <div>
            <main>

                <div className="container">
                    <img src={imagem} className="text-center w-100 mb-3 img-fluid" alt="..."/>

                    <div className="mb-3">
                        <h5>
                            <button to="#" className="lerMais-link pr-3 border-0 bg-transparent"><FaRegArrowAltCircleUp size="35" color="#000"/></button>
                            {avaliacao}
                            <button to="#" className="lerMais-link pl-4 border-0 bg-transparent"><FaRegArrowAltCircleDown size="35" color="#000"/></button>
                        </h5>
                    </div>

                    <div className="m-auto w-100">
                        <p style={{fontSize: '2vh'}}><b>Por: {nome}</b></p>

                        <p style={{fontSize: '2vh'}}>Local do Problema: {local}</p>

                        <p style={{fontSize: '2vh'}}>{descricao}</p>
                        
                        <div className="justify-content-center align-center text-center my-5">
                            <button className="btn btn-blue px-4 py-3">Criar Pedido</button>
                        </div>
                    </div>
                </div>



            </main>

            <Footer/>

        </div>
    );
}