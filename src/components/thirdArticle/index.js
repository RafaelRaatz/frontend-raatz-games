import React from 'react';
import './style.css'
import fourthImg from '../../images/mario1.jpg'
import fifthImg from '../../images/fifa-20.png'
import sixthImg from '../../images/pubg.jpg'



function ThirdArticle() {
    return (

        <div class="container">



            <hr />

            <h2 class="title-article">Destaques da semana</h2>

            <p>Fifa 20 leva a melhor no PS4 e Xbox-one entre games de esporte, Mario kart no Switch continua
            imbativel pela quarta semana seguida e Pubg ainda reina no PC, embora o numero de players tenha
            caido consideravelmente.
            </p>

            <div class="third-article">


                <article class="third-article">


                    <img class="third-article-thumb" src={fourthImg} alt="Mario news" />


                    <img class="third-article-thumb" src={fifthImg} alt="Fifa news" />

                    <img class="third-article-thumb" src={sixthImg} alt="PUBG news" />

                </article>

            </div>


        </div>


    );
}

export default ThirdArticle;