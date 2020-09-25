import React from 'react';


import Footer from '../Footer';


export default function NovaNoticia(){

    const title = React.useRef();
    const content = React.useRef();
    const photo = React.useRef();

    function handleCreateNewNews(e){
        e.preventDefault();

        console.log(title.current.value);
        console.log(content.current.value);
        console.log(photo.current.files[0]);
        

        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('blah')
                .src(e.target.result)
                .width(150)
                .height(200);
        };

        reader.readAsDataURL(photo.current.files[0])
    }

    return(
        <div>
            <div className="mx-30p my-5 text-center">
                <h1 className="text-blue my-5 text-center">Nova Notícia</h1>

                <form className="form-group" onSubmit={handleCreateNewNews}>
                    <input type="text" className="form-control mb-1" id="inputTitulo" aria-describedby="tituloHelp" placeholder="Título" ref={title}/>
                    <textarea className="form-control my-3" id="inputConteudo" rows="3" placeholder="Conteúdo" style={{minHeight: 100}} ref={content}></textarea>

                    <div className="d-flex justify-content-left ">
                        <label htmlFor="inputFoto">Foto:</label>
                    </div>
                        <input type="file" className="form-control-file mb-4" id="inputFoto" accept="image/*" ref={photo}/>
                    
                    <input type="submit" className="btn btn-blue py-2 px-5" value="Criar Notícia"/>

                    <img src="#" alt="#" id="blah"/>
                </form>
            </div>
            
            <Footer style={{position: 'absolute'}}/>
        </div>
    );
}