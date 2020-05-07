import React from 'react';
import './style.css'
import thirdImg from '../../images/god-of-war.jpg'



function SecondArticle() {
    return (

        <div class="container">
            <hr />
            <div>
                <img class="thumb-second-article" src={thirdImg} alt="God of war news" />
            </div>

            <div class="text-second-article">
                <p>"Eu vivi nas sombras dos deuses por tempo demais! <br /> O tempo dos deuses chegou ao fim!"

                    </p>
            </div>

            <div class="second-text-second-article">
                <p> Kratos - God of War </p>

            </div>

        </div>



    );
}

export default SecondArticle;