import React from 'react';

import './styles.css';

import { Link } from 'react-router-dom';

import SunIcon from '../../assets/Sun'

import HandIcon from '../../assets/mao'

export default function Home() {
    return(
        <div className="position-relative">
            <header>
                <div className="image-container d-flex align-items-center justify-content-center">
                    <h1 className="text-white" style={{fontSize: '8vh'}}>Give-a-hand</h1>

                    <div className="temp-card text-center">
                        <select id="form-control">
                            <option value="zona-norte">Zona Norte</option>
                            <option value="zona-norte">Zona Sul</option>
                            <option value="zona-norte">Zona Lest</option>
                            <option value="zona-norte">Zona Oeste</option>
                            <option value="zona-norte">Zona Central</option>
                        </select>

                        <p className="text-white mb-0 mt-3" style={{fontSize: '7vh'}}>32°C</p>

                        <SunIcon width="81" height="81"/>
                    </div>
                </div>
            </header>

            <main className="mt-5 position-relative">
                <div className="text-container">
                    <p style={{fontSize: '2.2vh'}}>Bem-vindo ao Give-a-hand</p>
                    <p className="mb-5" style={{fontSize: '2.2vh'}}>Um site do governo municipal para ajudar a cidade e com grande foco na acessibilidades à aqueles com alguma deficiência!</p>
                    <Link className="text-white" style={{fontSize: '2.2vh'}}><b>Ler mais</b></Link>
                </div>


                <div className="line-separator mt-5 mb-5"/>


                <h2 className="text-center mb-5">Tem alguma ideia para melhor a cidade?</h2>


                <div className="card">
                    <HandIcon width="40%" height="40%"/>
                    <p className="card-text" style={{fontSize: '2.2vh'}}><b>Clique aqui para fazer um pedido</b></p>
                </div>
            </main>
        </div>
    );
}