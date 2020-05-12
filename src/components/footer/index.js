import React from 'react';
import './style.css';
import '../../global.css'

import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className="container">
            <footer>
                <div className="logo">

                    <img className="logoImg" src={logo} alt="" />

                </div>

                <div className="text-logo">

                    <span className="logo-title">Raatz Games &copy;</span>

                    <p>O melhor site de notícias de games do mundo.</p>

                </div>
            </footer>
        </div>

    );
}

export default Footer;