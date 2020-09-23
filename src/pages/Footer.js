import React from 'react';

import '../index.css'

import { FaTwitter, FaInstagram, FaFacebook, FaYoutube  } from 'react-icons/fa';


export default function Footer(props) {
    return(
        <footer className='footer' style={props.style}>
            <div className="p-3">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <p className="text-footer">© Give-a-hand 2020. All rights reserved.</p>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <a href="https://pt-br.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size="35" color="#fff"/>
                        </a>

                        <a href="https://www.instagram.com/?hl=pt-br" target="_blank" rel="noopener noreferrer"> 
                            <FaInstagram size="35" color="#fff" className="mx-3"/>
                        </a>

                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"> 
                            <FaYoutube size="35" color="#fff" className="mr-3"/>
                        </a>

                        <a href="https://twitter.com/login?lang=pt" target="_blank" rel="noopener noreferrer"> 
                            <FaTwitter size="35" color="#fff"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>   
    );
}