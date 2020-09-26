import React from 'react';
import { Link, useHistory } from 'react-router-dom'


import Footer from '../Footer';

import api from '../../services/api';


export default function Cadastro(){

    const name = React.createRef();
    const email = React.createRef();
    const password = React.createRef();


    const history = useHistory();



    async function handleCadastro(e){
        e.preventDefault();

        if(name.current.value === ""){return alert("Coloque um nome válido!")}
        else if(email.current.value === ""){return alert("Coloque um email válido!")}
        else if(password.current.value === ""){return alert("Coloque uma senha válida!")}

        const data = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
            admin: false
        }

        try{
            await api.post('cadastro', data);

            history.push('/login');
        }
        catch(err){
            alert("Email inválido!")
        }
    }

    return(
        <div> 
            <div className="mx-30p mt-5 text-center">
                <h1 className="text-blue my-5 text-center">Cadastro</h1>

                <form onSubmit={handleCadastro} className="form-group ">
                    <input type="name" className="form-control" id="inputNome" aria-describedby="nameHelp" placeholder="Nome" ref={name}/>
                    <input type="email" className="form-control my-4" id="inputEmail" aria-describedby="emailHelp" placeholder="Email" ref={email}/>
                    <input type="password" className="form-control mb-4" id="inputSenha" placeholder="Senha" ref={password}/>
                    <input type="submit" value="Cadastrar" className="btn btn-blue py-2 px-5"/>
                </form>
                <Link to="/login" className="cadastro-link">Já tem uma conta?</Link>

            </div>

            <Footer style={{position: 'absolute'}}/>
        </div>
    );
}