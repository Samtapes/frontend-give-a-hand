import React from 'react';

import { FaRegNewspaper, FaRegComment, FaRegPlusSquare } from 'react-icons/fa';
// Esse /fa é de Font Awesome

import { Link } from 'react-router-dom'


import './styles.css'


export default function Admin(){
    return(
        <div style={{textAlign:'center'}}>
            <h1 className="text-blue my-5 text-center">Administração</h1>

            <div className="container">
                <div className="row">
                    <div className="col-md-4 my-2">
                        <Link className="" to="#Login">
                            <button type="submit" className="btn btn-blue p-4 px-5" style={{width: '60%'}}> <FaRegComment size="64" color="#ffffff"/> <br/> Editar pedidos</button>
                        </Link>
                    </div>
                    <div className="col-md-4 my-2">
                        <Link className="" to="#Login">
                            <button type="submit" className="btn btn-blue p-4 px-5" style={{width: '60%'}}> <FaRegPlusSquare size="64" color="#ffffff"/> <br/> Criar Notícias</button>
                        </Link>
                    </div>
                    <div className="col-md-4 my-2">
                        <Link className="" to="#Login">
                            <button type="submit" className="btn btn-blue p-4 px-5" style={{width: '60%'}}> <FaRegNewspaper size="64" color="#ffffff"/>  <br/> Editar notícias</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}