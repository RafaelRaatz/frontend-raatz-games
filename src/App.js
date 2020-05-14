import React from 'react';
import './global.css'
import Header from './components/header'
import Menu from './components/menu'
import MediumArticle from './components/mediumArticle'
import LargeArticle from './components/largeArticle';
import SmallArticle from './components/smallArticle';
import SectionTitle from './components/sectionTitle'
import Footer from './components/footer'

import MediumArticleFirstImg from './images/assassins.jpg.jpg'
import MediumArticleSecondImg from './images/uncharted.jpg'

import ThirdArticleFirstImg from './images/mario1.jpg'
import ThirdArticleSecondImg from './images/fifa-20.png'
import ThirdArticleThirdImg from './images/pubg.jpg'

import FourthArticleFirstImg from './images/pokemon.jpg'
import FourthArticleSecondImg from './images/castlevania.jpg'
import FourthrticleThirdImg from './images/harvestMoon.jpg'


const App = () => {
  return (
    <div>

      <Header />

      <Menu />

      <section className="main">

        <SectionTitle text="Destaques do mês" />

        <div className="container">

          <div className="mediumArticle">

            <MediumArticle
              Img={MediumArticleFirstImg}
              Title="Assassin's Creed Odyssey"
              Description="Assassin's Creed Odyssey é, tranquilamente, o melhor game da franquia desde o final
        da saga de Ezio Auditore. Com maestria, soube aprofundar conceitos ainda introduzidos à série por 
        meio de Origins e transformou completamente a ideia de experiência de viver na pele de um Assassino ." />

            <MediumArticle
              Img={MediumArticleSecondImg}
              Title="Uncharted 4"
              Description="'Sir Parvis Magna', lema muito citado em Uncharted, significa exatamente a bela evolução 
        de qualidade nos quase 10 anos entre Drake's Fortune e A Thief's End: grandes coisas vêm de pequenos 
        começos. Positivamente diferente de seus bons antecessores, Uncharted 4 o final perfeito para a história 
        de Nathan Drake. "/>

          </div>
        </div>

        <LargeArticle />

        <SectionTitle text="Destaques da semana" />

        <SmallArticle
          text="Fifa 20 leva a melhor no PS4 e Xbox-one entre games de esporte, Mario kart no Switch continua
        imbativel pela quarta semana seguida e Pubg ainda reina no PC, embora o numero de players tenha
        caido consideravelmente."
          Img={ThirdArticleFirstImg}
          Img2={ThirdArticleSecondImg}
          Img3={ThirdArticleThirdImg} />

        <SectionTitle text="Nintendo" />

        <SmallArticle
          text="Nintendo DS segue sendo o lider de vendas da nintendo, Pokemon Ranger é o game mais vendido 
          da semana no console, seguido de perto por Castlevania Dawn of Sorrow, e no antigo console portátil 
          da Nintendo, Harvest Moon lidera a lista de vendas."
          Img={FourthArticleFirstImg}
          Img2={FourthArticleSecondImg}
          Img3={FourthrticleThirdImg} />

        <section>
          <Footer />
        </section>


      </section>

    </div>



  );
}

export default App;
