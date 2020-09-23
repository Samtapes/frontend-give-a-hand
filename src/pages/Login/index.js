import React from 'react';
import { Link} from 'react-router-dom'

import './styles.css'


import Footer from '../Footer';


export default function Login(){
    return(
        <div> 
            <div className="mx-30p text-center mt-5">
                <h1 className="text-blue my-5 text-center">Login</h1>

                <div className="form-group ">
                    <input type="name" className="form-control" id="inputNome" aria-describedby="nameHelp" placeholder="Nome"/>
                    <input type="password" className="form-control my-4" id="inputSenha" placeholder="Senha"/>
                    <button type="submit" className="btn btn-blue py-2 px-5">Login</button>
                </div>
                <Link to="/cadastro" className="cadastro-link">Não possui uma conta?</Link>
            </div>

            <Footer style={{position: 'absolute'}}/>
        </div>
    );
}