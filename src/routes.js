import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Menu from './pages/Menu'

import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import NovaNoticia from './pages/NovaNoticia';
import NovoPedido from './pages/NovoPedido';
import Admin from './pages/Admin';
import Sobre from './pages/Sobre';
import Pedidos from './pages/Pedidos';
import Pedido from './pages/Pedido';
import Noticia from './pages/Noticia';
import EditarPedidos from './pages/EditarPedidos';
import SeusPedidos from './pages/SeusPedidos';
import EditarNoticia from './pages/EditarNoticias';


export default function Routes() {
    return (
        <BrowserRouter>
            <div>
                <Menu/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/cadastro" exact component={Cadastro} />
                    <Route path="/admin" exact component={Admin} />
                    <Route path="/admin/noticias/nova" exact component={NovaNoticia} />
                    <Route path="/admin/pedidos" exact component={EditarPedidos} />
                    <Route path="/sobre" exact component={Sobre} />
                    <Route path="/pedidos" exact component={Pedidos} />
                    <Route path="/pedido/:requestId" exact component={Pedido} />
                    <Route path="/perfil/novo-pedido" exact component={NovoPedido} />
                    <Route path="/perfil" exact component={SeusPedidos} />
                    <Route path="/noticia/:newsId" exact component={Noticia} />
                    <Route path="/admin/noticias" exact component={EditarNoticia} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}