import React from 'react';
import './style.css'




const SmallArticle = ({ text, Img, Img2, Img3 }) => {
    return (

        <div className="container">

            <p>{text}</p>

            <div className="smallArticle">


                <article className="smallArticle">


                    <img className="thumb" src={Img} alt="Mario news" />

                    <img className="thumb" src={Img2} alt="Fifa news" />

                    <img className="thumb" src={Img3} alt="PUBG news" />

                </article>

            </div>
            <hr />

        </div>


    );
}

export default SmallArticle;