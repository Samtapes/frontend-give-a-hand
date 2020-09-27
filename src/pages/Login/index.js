import React from 'react';
import { Link, useHistory } from 'react-router-dom'

import './styles.css'


import Footer from '../Footer';


import api from '../../services/api';



export default function Login(){
    const name = React.useRef();
    const password = React.useRef();

    const history = useHistory();


    async function handleLogin(e){
        e.preventDefault();

        if(name.current.value === ""){return alert("Coloque um nome válido!")}
        else if(password.current.value === ""){return alert("Coloque uma senha válida!")}

        const data = {
            name: name.current.value,
            password: password.current.value,
        }

        try{
            const res = await api.post('login', data);

            if(res.data.permission === "permited"){
                localStorage.setItem('user_id', res.data.id);
                localStorage.setItem('admin', res.data.admin);
                localStorage.setItem('user_name', res.data.name);

                console.log(res.data.admin);

                history.push('/');
                window.location.reload(false);
            }
        }
        catch(err){
            alert("Nome ou senha incorretos!")
        }
    }
    
    return(
        <div> 
            <div className="mx-30p text-center mt-5">
                <h1 className="text-blue my-5 text-center">Login</h1>

                <form className="form-group" onSubmit={handleLogin}>
                    <input type="name" className="form-control" id="inputNome" aria-describedby="nameHelp" placeholder="Nome" ref={name}/>
                    <input type="password" className="form-control my-4" id="inputSenha" placeholder="Senha" ref={password}/>
                    <input type="submit" value="Login" className="btn btn-blue py-2 px-5"/>
                </form>
                <Link to="/cadastro" className="cadastro-link">Não possui uma conta?</Link>
            </div>

            <Footer style={{position: 'absolute'}}/>
        </div>
    );
}