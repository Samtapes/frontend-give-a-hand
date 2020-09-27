import React, {useState, useEffect} from 'react';

import './styles.css';

import { Link, useHistory } from 'react-router-dom';

import { FaRegTrashAlt, FaCheck  } from 'react-icons/fa';



import api from '../../services/api';

import Footer from '../Footer';


export default function Pedidos() {
    const [pedidos, setPedidos] = useState([]);

    const [pedidosResolvidos, setPedidosResolvidos] = useState(0);


    const user_id = localStorage.getItem('user_id');

    useEffect(() => {
        api.get('pedidos', {
            headers: {
                Authorization: user_id,
            }
        }).then(res => {
            setPedidos(res.data);
        });

        async  function getSolvedRequests(){
            const resolvidosRes = await api.get('casos_resolvidos');
            setPedidosResolvidos(resolvidosRes.data.quantity);
        }

        getSolvedRequests();

    }, [user_id]);


    async function handleDelete(id){
        try{
            await api.delete('pedidos/' + id, {
                headers: {
                    Authorization: user_id,
                }
            })

            setPedidos(pedidos.filter(pedido => pedido.id !== id));
        } 
        
        catch(err){
            alert("Erro... Tente novamente!");
        }
    }

    async function handleSolved(id){
        try{
            await api.put('casos_resolvidos/' + id);

            setPedidos(pedidos.filter(pedido => pedido.id !== id));

            setPedidosResolvidos(pedidosResolvidos + 1);
        } 
        
        catch(err){
            alert("Erro... Tente novamente!");
        }
    }




    const history = useHistory();

    const [isLogged, setIsLogged] = useState(true);
    const [isAdmin, setIsAdmin] = useState(true);

    useEffect(() => {
        const admin = localStorage.getItem('admin');

        admin === '1' ? setIsAdmin(true) : setIsAdmin(false)

        console.log(isAdmin);


        const login = localStorage.getItem('user_id');

        !isNaN(parseInt(login)) ? setIsLogged(true) : setIsLogged(false);

        console.log(isLogged)

    }, [isAdmin, isLogged]);


    if(!isAdmin){
        history.push('/');
    }


    return(
        <div style={{marginTop: -45}}>
            <header>
                <div className="image-container-pedidos d-flex align-items-center justify-content-center">
                    <h1 className="text-white text-center" style={{fontSize: '8vh', textShadow: '1px 3px 10px #000000'}}>Editar Pedidos</h1>
                </div>
            </header>

            <main className="my-5 position-relative mt-5">

                <div className="d-flex justify-content-center mb-5">
                    <h2 className="mr-5">{pedidosResolvidos} {pedidosResolvidos === 1 ? "Caso" : "Casos"} {pedidosResolvidos === 1 ? "Resolvido" : "Resolvidos"}</h2>
                </div>

                <div className="d-flex justify-content-around flex-wrap">

                    {/* Começo Card */}
                    {pedidos.map(pedido => (
                        <div className="card pedido-card mb-5" style={{width: '400px'}} key={pedido.id}>

                            <FaCheck className="check-btn" size="35" color="lightgreen" style={{cursor: 'pointer'}} onClick={() => handleSolved(pedido.id)}/>
                            <FaRegTrashAlt size="36" color="red" style={{position: 'absolute', cursor: 'pointer', right: '0'}} onClick={() => handleDelete(pedido.id)}/>

                            <img src={pedido.photo !== null ? pedido.photo : 'https://i.ibb.co/3hDxD6F/da-a-mao-otario.png'} className="card-img-top h-50 card-personalized-imgA" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{pedido.request}</h5>
                                <p className="card-text">{pedido.name}</p>

                                <div>
                                    <h5>
                                        <Link to={{ pathname: '/pedido/' + pedido.id}} className="lerMais-link float-right pr-4">Ler mais</Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </main>
        
            {pedidos.length === 0
            ?
                <Footer style={{position: 'absolute'}}/>
            :
                <Footer/>
            }
        </div>
    );
}