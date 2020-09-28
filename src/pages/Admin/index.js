import React, {useState, useEffect} from 'react';

import { FaRegNewspaper, FaRegComment, FaRegPlusSquare } from 'react-icons/fa';


import { Link, useHistory } from 'react-router-dom'


import Footer from '../Footer';



export default function Admin(){
    const history = useHistory();

    const [isLogged, setIsLogged] = useState(true);
    const [isAdmin, setIsAdmin] = useState(true);

    useEffect(() => {
        const admin = localStorage.getItem('admin');

        setIsAdmin(admin)

        console.log(isAdmin);


        const login = localStorage.getItem('user_id');

        !isNaN(parseInt(login)) ? setIsLogged(true) : setIsLogged(false);

        console.log(isLogged)

    }, [isAdmin, isLogged]);


    if(!isAdmin){
        history.push('/');
    }




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