import React from 'react';
import './style.css'
import thirdImg from '../../images/god-of-war.jpg'



const LargeArticle = () => {
    return (

        <div className="container">
            <hr />
            <div>
                <img className="thumbLargeArticle" src={thirdImg} alt="God of war news" />
            </div>

            <div className="textLargeArticle">
                <p>"Eu vivi nas sombras dos deuses por tempo demais! <br /> O tempo dos deuses chegou ao fim!"

                    </p>
            </div>

            <div className="secondTextLargearticle">
                <p> Kratos - God of War </p>


            </div>
            <hr />
        </div>



    );
}

export default LargeArticle;