import React from 'react';
import '../../global.css'
import { Title, FinalTitle } from "../../Styles"


const SectionTitle = ({ text, text2 }) => {
    return (

        <div className="container">
            <div >
                <Title>{text}</Title>
                <FinalTitle>{text2}</FinalTitle>

            </div>
        </div>



    );
}

export default SectionTitle;