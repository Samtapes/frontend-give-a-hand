import React from 'react';

import { Link } from 'react-router-dom'

export default function Menu(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light menu-color">
            <Link class="navbar-brand" to="/">Navbar</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link class="nav-link text-white" to="/">Página Inicial <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-white" to="#">Sobre</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-white" to="#">Pedidos</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}