import React from 'react';
import './style.css'
import logo from '../../images/logo.png'



function Header() {
    return (
        <div class="container">

            <header>



                <div class="logo">

                    <img className="logoImg" src={logo} alt="" />

                </div>
                <div class="text-logo">

                    <span class="logo-title">Raatz Games &copy;</span>

                    <p>O melhor site de notícias de games do mundo.</p>

                </div>


            </header>

        </div>



    );
}

export default Header;