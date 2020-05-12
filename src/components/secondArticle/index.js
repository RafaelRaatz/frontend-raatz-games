import React from 'react';
import './style.css'
import thirdImg from '../../images/god-of-war.jpg'



const SecondArticle = () => {
    return (

        <div className="container">
            <hr />
            <div>
                <img className="thumb-second-article" src={thirdImg} alt="God of war news" />
            </div>

            <div className="text-second-article">
                <p>"Eu vivi nas sombras dos deuses por tempo demais! <br /> O tempo dos deuses chegou ao fim!"

                    </p>
            </div>

            <div className="second-text-second-article">
                <p> Kratos - God of War </p>


            </div>
            <hr />
        </div>



    );
}

export default SecondArticle;