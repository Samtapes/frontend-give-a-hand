import React from 'react';

export default function NovoPedido(){
    return(
        <div className="mx-30p">
            <h1 className="text-blue my-5 text-center">Novo Pedido</h1>

            <div className="form-group ">
                <input type="text" className="form-control" id="inputPedido" aria-describedby="pedidoHelp" placeholder="Pedido"/>
                <textarea class="form-control my-4" id="inputDescricao" rows="3" placeholder="Descrição" style={{minHeight: 100}}></textarea>
                <input type="text" className="form-control mb-3" id="inputEndereco" aria-describedby="enderecoHelp" placeholder="Endereço do Local (opcional)"/>
                <div className="d-flex justify-content-left ">
                    <label for="inputFoto">Foto:</label>
                </div>
                    <input type="file" class="form-control-file mb-4" id="inputFoto" accept="image/*"/>
                <button type="submit" className="btn btn-blue py-2 px-5">Criar</button>
            </div>

        </div>
    );
}