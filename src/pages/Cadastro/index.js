import React from 'react';
import { Link } from 'react-router-dom'

// import './styles.css'

export default function Cadastro(){
    return(
        <div className="mx-30p">
            <h1 className="text-blue my-5 text-center">Cadastro</h1>

            <div className="form-group ">
                <input type="name" className="form-control" id="inputNome" aria-describedby="nameHelp" placeholder="Nome"/>
                <input type="email" className="form-control my-4" id="inputEmail" aria-describedby="emailHelp" placeholder="Email"/>
                <input type="password" className="form-control mb-4" id="inputSenha" placeholder="Senha"/>
                <button type="submit" className="btn btn-blue py-2 px-5">Cadastrar</button>
            </div>
            <Link to="#" className="cadastro-link">Já tem uma conta?</Link>

        </div>
    );
}