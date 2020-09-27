import React, { useEffect, useState } from 'react';


import Footer from '../Footer';

import api from '../../services/api';


import './styles.css'



export default function Pedido(props){
    const requestId = props.match.params.requestId

    const [request, setRequest] = useState({});

    useEffect(() => {
        async function getRequest(){
            const request = await api.get('pedido/' + requestId);
            console.log(request.data);

            setRequest(request.data);
        }

        getRequest();
    }, [requestId])



    function createMarkup(description) {
        return {__html: description};
    }      


    function RequestDescription(props) {
        return(
            <div style={{fontSize: '2vh', whiteSpace: 'pre-wrap'}} dangerouslySetInnerHTML={createMarkup(props.description)}></div>
        );
    }


    const [copiado, setCopiado] = useState(false);

    return(
        <div>
            <main>

                <div className="container">
                    <img src={request.photo !== null ? request.photo : 'https://i.ibb.co/3hDxD6F/da-a-mao-otario.png'} className="text-center w-100 mb-3 img-fluid request-img" alt="..."/>

                    <div className="m-auto w-100">
                        <p style={{fontSize: '2vh'}}><b>Por: {request.name}</b></p>

                        <p style={{fontSize: '2vh', display: request.adress !== null ? 'block' : 'none'}}>Local do Problema: {request.adress}</p>

                        <RequestDescription description={request.description}/>
                        
                        <div className="justify-content-center align-center text-center my-5">
                            <button className="btn btn-blue px-4 py-3" style={{backgroundColor: copiado ? 'green' : ''}} onClick={() => {navigator.clipboard.writeText(window.location.href); setCopiado(true)}}>Compartilhar</button>
                        </div>
                    </div>
                </div>



            </main>

            <Footer/>

        </div>
    );
}