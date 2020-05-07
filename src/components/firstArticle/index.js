import React from 'react';
import './style.css'
import firstImg from '../../images/assassins.jpg.jpg'
import secondImg from '../../images/uncharted.jpg'



function FirstArticle() {
    return (
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



    );
}

export default FirstArticle;