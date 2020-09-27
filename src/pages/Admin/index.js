import React from 'react';

import { FaRegNewspaper, FaRegComment, FaRegPlusSquare } from 'react-icons/fa';


import { Link } from 'react-router-dom'


import Footer from '../Footer';

// Sempre tem q começar com maiuscula, pq é um componente


export default function Admin(){
    return(
        <div style={{textAlign:'center'}}>
            <h1 className="text-blue my-5 text-center">Administração</h1>

            <div className="container">
                <div className="row">
                    <div className="col-md-4 my-2">
                        <Link to="/admin/pedidos">
                            <button type="submit" className="btn btn-blue p-4 px-5" style={{width: '60%'}}> <FaRegComment size="64" color="#ffffff"/> <br/> Editar pedidos</button>
                        </Link>
                    </div>
                    <div className="col-md-4 my-2">
                        <Link to="/admin/noticias/nova">
                            <button type="submit" className="btn btn-blue p-4 px-5" style={{width: '60%'}}> <FaRegPlusSquare size="64" color="#ffffff"/> <br/> Criar Notícias</button>
                        </Link>
                    </div>
                    <div className="col-md-4 my-2">
                        <Link to="/admin/noticias">
                            <button type="submit" className="btn btn-blue p-4 px-5" style={{width: '60%'}}> <FaRegNewspaper size="64" color="#ffffff"/>  <br/> Editar notícias</button>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer style={{position: 'absolute'}}/>
        </div>
    );
}