import React, { useState } from 'react';

import { useHistory } from 'react-router-dom'


import api from '../../services/api';

import Footer from '../Footer';


export default function NovoPedido(){
    const [waitServerRes, setWaitServerRes] = useState(false);

    const request = React.useRef();
    const description = React.useRef();
    const adress = React.useRef();
    const photo = React.useRef();


    const history = useHistory();

    async function handleCreateRequest(e){
        e.preventDefault();

        console.log(request.current.value);
        console.log(description.current.value);
        console.log(adress.current.value);
        console.log(photo.current.files[0]);

        if(request.current.value !== "" && description.current.value !== "" && adress.current.value !== ""  && photo.current.files[0] !== undefined){
            var reader = new FileReader();
        
            reader.onload = async function(){
                var dataURL = reader.result;
                

                var bodyFormData = new FormData();
        
                bodyFormData.append('image', dataURL.slice(23));
        
                
                setWaitServerRes(true);
        
                api({
                    method: 'post',
                    url: 'https://api.imgbb.com/1/upload?key=bd9c29cb2ab757f924b03bf0dd6da99f',
                    data: bodyFormData,
                    headers: {'Content-Type': 'multipart/form-data' }
                    })
                    .then(async function (response) {
                        //handle success
                        console.log(response);
        
                        console.log(response.data.data.url);

                        const data = {
                            request: request.current.value,
                            description: description.current.value,
                            adress: adress.current.value,
                            photo: response.data.data.url
                        }

                        await api.post('pedidos', data, {headers: {Authorization: localStorage.getItem('user_id')}});

                        setWaitServerRes(false);

                        history.push('/seus-pedidos')
                    })
                    .catch(function (response) {
                        //handle error
                        console.log(response);
                    })
            };
        
            reader.readAsDataURL(photo.current.files[0]);
        }

        else if(request.current.value !== "" && description.current.value !== "" && adress.current.value !== ""  && photo.current.files[0] === undefined){
            const data = {
                request: request.current.value,
                description: description.current.value,
                adress: adress.current.value,
                photo: null
            }

            await api.post('pedidos', data, {headers: {Authorization: localStorage.getItem('user_id')}});

            history.push('/seus-pedidos')
        }

        else if(request.current.value !== "" && description.current.value !== "" && adress.current.value === ""  && photo.current.files[0] === undefined){
            const data = {
                request: request.current.value,
                description: description.current.value,
                adress: null,
                photo: null
            }

            await api.post('pedidos', data, {headers: {Authorization: localStorage.getItem('user_id')}});

            history.push('/seus-pedidos')
        }

        else{
            alert("Preencha todo o formulário!")
        }
    }

    return(
        <div> 
            <div className="mx-30p text-center">
                {waitServerRes === true
                ?
                    <h1 className="text-blue my-5 text-center">Aguarde Enquanto Criamos seu Pedido...</h1>
                :
                    <></>
                }

                
                <div style={{visibility: waitServerRes === true ? 'hidden' : 'visible' }}>
                    <h1 className="text-blue my-5 text-center">Novo Pedido</h1>

                    <form className="form-group" onSubmit={handleCreateRequest}>
                        <input type="text" className="form-control" id="inputPedido" aria-describedby="pedidoHelp" placeholder="Pedido" ref={request}/>
                        <textarea className="form-control my-4" id="inputDescricao" rows="3" placeholder="Descrição" style={{minHeight: 100}} ref={description}></textarea>
                        <input type="text" className="form-control mb-3" id="inputEndereco" aria-describedby="enderecoHelp" placeholder="Endereço do Local (opcional)" ref={adress}/>
                        <div className="d-flex justify-content-left ">
                            <label htmlFor="inputFoto">Foto:</label>
                        </div>
                            <input type="file" className="form-control-file mb-4" id="inputFoto" accept="image/*" ref={photo}/>
                        <button type="submit" className="btn btn-blue py-2 px-5">Criar</button>
                    </form>
                </div>

            </div>
            <Footer style={{position: 'absolute'}}/>

        </div>
    );
}