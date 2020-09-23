import React from 'react';


import Footer from '../Footer';


export default function NovaNoticia(){
    return(
        <div>
            <div className="mx-30p my-5 text-center">
                <h1 className="text-blue my-5 text-center">Nova Notícia</h1>

                <div className="form-group ">
                    <input type="text" className="form-control mb-1" id="inputTitulo" aria-describedby="tituloHelp" placeholder="Título"/>
                    <textarea class="form-control my-3" id="inputConteudo" rows="3" placeholder="Conteúdo" style={{minHeight: 100}}></textarea>
                    <div className="d-flex justify-content-left ">
                        <label for="inputFoto">Foto:</label>
                    </div>
                        <input type="file" class="form-control-file mb-4" id="inputFoto" accept="image/*"/>
                    
                    <button type="submit" className="btn btn-blue py-2 px-5">Criar Notícia</button>
                </div>

            </div>
            
            <Footer style={{position: 'absolute'}}/>
        </div>
    );
}