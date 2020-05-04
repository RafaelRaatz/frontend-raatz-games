import React from 'react';
import './style.css'
import './global.css'

import logo from './images/logo.png'
import firstImg from './images/assassins.jpg.jpg'
import secondImg from './images/uncharted.jpg'
import thirdImg from './images/god-of-war.jpg'
import fourthimage from './images/mario1.jpg'
import fifthimage from './images/fifa-20.png'
import sixthimage from './images/pubg.jpg'

export default function App() {
  return (

    <body>

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


      <div class="menu">

        <div class="container">

          <ul>
            <li>Home</li>
            <li>Games </li>
            <li> Consoles </li>
            <li> Playstation </li>
            <li> Xbox </li>
            <li> Nintendo </li>
            <li> PC </li>
          </ul>

        </div>

      </div>





      <section class="main">

        <div class="container">



          <h2 class="title-article">Destaques do mês</h2>

          <div class="first-article">

            <article class="first-article-first-game">

              <div>
                <img className="first-article-thumb" src={firstImg} alt="Assassins creed news" />

              </div>

              <div class="first-article-description">
                <p class="first-title">Assassin's Creed Odyssey </p>
                <p class="first-description">Assassin's Creed Odyssey é, tranquilamente, o melhor game da
                franquia desde o final da saga de Ezio Auditore. Com maestria, soube aprofundar conceitos
                ainda
                introduzidos à série por meio de Origins e transformou completamente a ideia de experiência
                de
                viver
                            na pele de um Assassino . </p>
              </div>
            </article>

            <article class="first-article-second-game">
              <div>
                <img class="first-article-thumb" src={secondImg} alt="Uncharted news" />

              </div>

              <div class="first-article-description">
                <p class="first-title">Uncharted 4 </p>
                <p class="first-description"> "Sir Parvis Magna", lema muito citado em Uncharted, significa
                exatamente a bela evolução de qualidade nos quase 10 anos entre Drake's Fortune e A
                Thief's End:
                grandes coisas vêm de pequenos começos. Positivamente diferente de seus bons antecessores,
                Uncharted 4 o final perfeito para a história de Nathan
                            Drake. </p>
              </div>

            </article>




          </div>

        </div>

        <div class="first-news clearfix">


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

        </div>

        <div class="container">



          <hr />

          <h2 class="title-article">Destaques da semana</h2>

          <p>Fifa 20 leva a melhor no PS4 e Xbox-one entre games de esporte, Mario kart no Switch continua
          imbativel pela quarta semana seguida e Pubg ainda reina no PC, embora o numero de players tenha
          caido consideravelmente.
            </p>

          <div class="third-article">


            <article class="third-article">


              <img class="third-article-thumb" src={fourthimage} alt="Mario news" />


              <img class="third-article-thumb" src={fifthimage} alt="Fifa news" />

              <img class="third-article-thumb" src={sixthimage} alt="PUBG news" />

            </article>

          </div>


        </div>

      </section>

    </body>
  );
}

