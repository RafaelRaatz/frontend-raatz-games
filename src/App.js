import React from 'react';
import './global.css'
import Header from './components/header'
import Menu from './components/menu'
import FirstArticle from './components/firstArticle'
import SecondArticle from './components/secondArticle';
import ThirdArticle from './components/thirdArticle';
import SectionTitle from './components/sectionTitle'
import Footer from './components/footer'


const App = () => {
  return (
    <div>


      <Header />

      <Menu />

      <section className="main">

        <SectionTitle text="Destaques do mês" />

        <FirstArticle />

        <SecondArticle />

        <SectionTitle text2="Destaques da semana" />

        <ThirdArticle />

        <section>
          <Footer />
        </section>


      </section>

    </div>



  );
}

export default App;
