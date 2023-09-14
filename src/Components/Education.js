import React from 'react';
import "../Styles/Education.css";
import Upes from "../Images/Education/Upes.jpg"
import dp from "../Images/dp.jpg";

function Education() {
    return (
        <div className='Work' id='Work'>
            <div className='Work__Col1'>
                <h1 className='Edu__Title'>Education</h1>
                <h2 className='Edu__Clg'>
                    <img className='Edu__Logo' src={Upes} alt='' />University of Petroluem and Energy Studies, Dehradun.
                </h2>
                <p>B.Tech Power System Engineering</p>
                <p className='Year'>AUG 2015 - JUNE 2019</p>
                <p>CGPA - 7.02</p>
            </div>
        </div>
    );
}

export default Education;