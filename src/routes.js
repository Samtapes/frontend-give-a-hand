import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Menu from './pages/Menu'

import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Noticia from './pages/NovaNoticia';
import Pedido from './pages/NovoPedido';
import Admin from './pages/Admin';



export default function Routes() {
    return (
        <BrowserRouter>
            <div>
                <Menu/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/cadastro" exact component={Cadastro} />
                    <Route path="/add-noticia" exact component={Noticia} />
                    <Route path="/add-pedido" exact component={Pedido} />
                    <Route path="/admin" exact component={Admin} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}