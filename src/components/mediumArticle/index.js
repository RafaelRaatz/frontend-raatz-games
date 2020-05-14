import React from 'react';
import './style.css'


const MediumArticle = ({ Img, Title, Description }) => {
    return (


        <article className="mediumArticleGame">

            <img className="mediumArticleThumb" src={Img} alt="Assassins creed news" />

            <p className="titleArticle">{Title} </p>
            <p className="articleDescription">{Description} </p>

        </article>

    );
}

export default MediumArticle;