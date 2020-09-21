import React from 'react';

import { Link } from 'react-router-dom'

import '../index.css'

import logo from '../assets/LOGO.png'

export default function Menu(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light menu-color" >

            <Link class="navbar-brand logo-link mr-2" to="/"> <img src={logo} alt="Logo Give a Hand" class="img-logo"/> </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav d-flex w-100 mr-auto">
                    <li class="nav-item active p-2">
                        <Link class="nav-link text-white" to="/">Página Inicial <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item p-2">
                        <Link class="nav-link text-white" to="#">Sobre</Link>
                    </li>
                    <li class="nav-item p-2">
                        <Link class="nav-link text-white" to="#">Pedidos</Link>
                    </li>
                    <li class="nav-item active ml-auto p-2">
                        <Link class="nav-link text-white" to="/login">Login <span class="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </div>
        </nav>        
    );
}