import React from 'react';
import './style.css'
import logo from '../../images/logo.png'



const Header = () => {
    return (
        <div className="container">

            <header>



                <div className="logo">

                    <img className="logoImg" src={logo} alt="" />

                </div>
                <div className="text-logo">

                    <span className="logo-title">Raatz Games &copy;</span>

                    <p>O melhor site de notícias de games do mundo.</p>

                </div>


            </header>

        </div>



    );
}

export default Header;