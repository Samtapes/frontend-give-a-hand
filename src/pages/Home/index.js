import React from 'react';

import './styles.css';

import SunIcon from '../../assets/Sun'

export default function Home() {
    return(
        <div>
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

            
            <div className="text-container">
                <p>Opa marcão</p>
            </div>
        </div>
    );
}