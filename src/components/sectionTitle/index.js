import React from 'react';
import '../../global.css'
import { Title } from "../../Styles"


const SectionTitle = ({ text }) => {
    return (

        <div className="container">
            <div >
                <Title>{text}</Title>


            </div>
        </div>



    );
}

export default SectionTitle;