import React, { useState } from 'react';

import { useHistory } from 'react-router-dom'


import Footer from '../Footer';

import api from '../../services/api';



export default function NovaNoticia(){

    const [waitServerRes, setWaitServerRes] = useState(false);

    const title = React.useRef();
    const content = React.useRef();
    const photo = React.useRef();

    const history = useHistory();

    async function handleCreateNewNews(e){
        e.preventDefault();

        console.log(title.current.value);
        console.log(content.current.value);
        console.log(photo.current.files[0]);

        if(title.current.value !== "" && content.current.value !== "" && photo.current.files[0] !== undefined){
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
                            title: title.current.value,
                            content: content.current.value,
                            photo: response.data.data.url
                        }

                        await api.post('noticias', data);

                        setWaitServerRes(false);

                        history.push('/admin')
                    })
                    .catch(function (response) {
                        //handle error
                        console.log(response);
                    })
            };
        
            reader.readAsDataURL(photo.current.files[0]);
        }

        else{
            alert("Preencha todo o formulário!")
        }
    }
    

    return(
        <div>
            <div className="mx-30p my-5 text-center">
                {waitServerRes === true
                ?
                    <h1 className="text-blue my-5 text-center">Aguarde Enquanto Criamos a Notícia...</h1>
                :
                    <></>
                }

                <div style={{visibility: waitServerRes === true ? 'hidden' : 'visible' }}>
                    <h1 className="text-blue my-5 text-center">Nova Notícia</h1>

                    <form className="form-group" onSubmit={handleCreateNewNews}>
                        <input type="text" className="form-control mb-1" id="inputTitulo" aria-describedby="tituloHelp" placeholder="Título (máximo 25 caracteres)" ref={title} maxLength="25"/>
                        <textarea className="form-control my-3" id="inputConteudo" rows="3" placeholder="Conteúdo" style={{minHeight: 100}} ref={content}></textarea>

                        <div className="d-flex justify-content-left ">
                            <label htmlFor="inputFoto">Foto:</label>
                        </div>
                            <input type="file" className="form-control-file mb-4" id="inputFoto" accept="image/*" ref={photo} />
                        
                        <input type="submit" className="btn btn-blue py-2 px-5" value="Criar Notícia"/>
                    </form>
                </div>
            </div>
            
            <Footer style={{position: 'absolute'}}/>
        </div>
    );
}