import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'

import '../index.css'

import logo from '../assets/LOGO.svg'

export default function Menu(){
    const [isLogged, setIsLogged] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const admin = localStorage.getItem('admin');

        setIsAdmin(admin)

        console.log(isAdmin);


        const login = localStorage.getItem('user_id');

        !isNaN(parseInt(login)) ? setIsLogged(true) : setIsLogged(false);

        console.log(isLogged)

    }, [isAdmin, isLogged]);

    window.onscroll = function (e) {
        const scrollPos = document.body.getBoundingClientRect().top;
        
        if(scrollPos <= 40){
            document.getElementsByClassName('navbar')[0].style.backgroundColor = "#004166";
        }

        else{
            document.getElementsByClassName('navbar')[0].style.backgroundColor = "#005d93";
        }
    }



    function handleLogout(){
        window.location.reload(false);

        localStorage.clear();
    }


    return(
        <div> 
            <nav className="navbar navbar-expand-lg navbar-light menu-color" >

                <Link className="navbar-brand logo-link mr-2" to="/"> <img src={logo} alt="Logo Give a Hand" className="img-logo"/> </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav d-flex w-100 mr-auto">
                        <li className="nav-item active p-2">
                            <Link className="nav-link text-white" to="/">Página Inicial <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item p-2">
                            <Link className="nav-link text-white" to="/sobre">Sobre</Link>
                        </li>
                        <li className="nav-item p-2">
                            <Link className="nav-link text-white" to="/pedidos">Pedidos</Link>
                        </li>
                        <li className="nav-item ml-auto p-2">
                            {isLogged
                            ?
                                <button className="nav-link text-white bg-transparent border-0" onClick={handleLogout}>Sair <span className="sr-only">(current)</span></button>

                            :
                                <Link className="nav-link text-white" to="/login">Login <span className="sr-only">(current)</span></Link>
                            }
                        </li>

                        {isAdmin
                        ?
                            <li className="nav-item p-2">
                                <Link className="nav-link text-white" to="/admin">Admin <span className="sr-only">(current)</span></Link>
                            </li>
                        :
                            <></>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
}