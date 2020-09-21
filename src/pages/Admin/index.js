import React from 'react';

import { FaRegNewspaper } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import { FaRegPlusSquare } from 'react-icons/fa';
// Esse /fa é de Font Awesome

import { Link } from 'react-router-dom'


import './styles.css'

export default function Admin(){
    return(
        <div className="mx-30p">
            <h1 className="text-blue my-5 text-center">Administração</h1>

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Link className="" to="#Login">
                            <button type="submit" className="btn btn-blue p-4 px-5"> <FaRegComment size="64" color="#ffffff"/> <br/> Editar pedidos</button>
                        </Link>
                    </div>
                    <div className="col-sm">
                        <Link className="" to="#Login">
                            <button type="submit" className="btn btn-blue py-4 px-5"> <FaRegPlusSquare size="64" color="#ffffff"/> <br/> Criar Notícia</button>
                        </Link>
                    </div>
                    <div className="col-sm">
                        <Link className="" to="#Login">
                            <button type="submit" className="btn btn-blue p-4 px-5 btn-adm"> <FaRegNewspaper size="64" color="#ffffff"/>  <br/> Editar notícias</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}