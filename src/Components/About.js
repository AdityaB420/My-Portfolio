import React from 'react';
import "../Styles/About.css";
import HTML5 from '../Images/Logos/HTML5.png';
import CSS3 from "../Images/Logos/css3.png";
import Js from "../Images/Logos/js.png";
import reactjs from "../Images/Logos/reactjs.png";
import redux from "../Images/Logos/redux.png";
import mui from "../Images/Logos/material-ui.svg";
import bootstrap from "../Images/Logos/bootstrap.png";
function About() {
    return (
        <div className='About' id='About'>
            <div className='About__Col1'>
                <h1 className='About__Title'>About</h1>
                <p>
                Hey there, I'm Aditya! I started in Electrical Engineering but switched gears to become a software enthusiast. 
                I'm skilled in <b>React.js</b>, <b>JavaScript</b>, <b>HTML</b>, <b>CSS</b>, <b>Java</b>, and <b>SQL</b>.
                <br></br>
                I have a strong interest in front-end development, 
                where I get to blend my technical skills with my passion for creating beautiful and user-friendly interfaces. 
                Whether it's crafting responsive web applications or diving into the intricacies of software architecture,
                I thrive on solving problems and bringing ideas to life through code.

                </p>
            </div>
            <div className='About__Col2'>
                <h1 className='About__Title2'>Technical skills</h1>
                <div className='Logo__Images'>
                    <div className='L__Div'>
                        <img className='Logo' src={HTML5} alt='html' title='HTML5' />
                        <p>HTML5</p>
                    </div>
                    <div className='L__Div'>
                        <img className='Logo' src={CSS3} alt='html' title='CSS3' />
                        <p>CSS3</p>
                    </div>
                    <div className='L__Div'>
                        <img className='Logo' src={Js} alt='' title='JavaScript' />
                        <p>JavaScript</p>
                    </div>
                    <div className='L__Div'>
                        <img className='Logo' src={reactjs} alt='' title='ReactJS' />
                        <p>ReactJS</p>
                    </div>
                    <div className='L__Div'>
                        <img className='Logo' src={redux} alt='' title='Redux' />
                        <p>Redux</p>
                    </div>
                    <div className='L__Div'>
                        <img className='Logo' src={bootstrap} alt='' title='Bootstrap' />
                        <p>Bootstrap</p>
                    </div>
                    <div className='L__Div'>
                        <img className='Logo' src={mui} alt='' title='Material UI' />
                        <p>Material UI</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;