import React from 'react';
import './global.css'
import Header from './components/header'
import Menu from './components/menu'
import FirstArticle from './components/firstArticle'
import SecondArticle from './components/secondArticle';
import ThirdArticle from './components/thirdArticle';


function App() {
  return (
    <div>


      <Header />

      <Menu />

      <section className="main">

        <FirstArticle />

        <SecondArticle />

        <ThirdArticle />


      </section>

    </div>



  );
}

export default App;
