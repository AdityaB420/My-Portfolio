import React from 'react';
import "../Styles/Project.css";
import typing from "../Images/Projects/Typing-test.PNG";
import weather from "../Images/Projects/Weather.PNG";
import meshop from "../Images/Projects/Meshop.PNG";
import { AiFillGithub } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

function Project() {
    return (
        <div className='Project' id='Project'>
            <h1 className='Project__Title'>Projects</h1>
            <div className='Project__Content'>
                <div className='Project1'>
                    <img className='Project__Img' src={typing} alt='' />
                    <span className='blue-overlay'></span>
                    <div className='Project__Info'>
                        <h2 className='Project__Info__Title'>Typing Speed Test</h2>
                        <p className='Project__Caption'>Developed an interactive and user-friendly Typing Speed Test application using modern web technologies,
                        including React.js and the Context API. The application provides users with an engaging platform to assess
                        and improve their typing proficiency.
                        </p>
                        <div className='Project__Techs'>
                            <div className='Techs'>REACTJS</div>
                            <div className='Techs'>MATERIAL-UI</div>
                            <div className='Techs'>FIREBASE</div>
                            <div className='Techs'>CONTEXT API</div>
                        </div>
                        <div className='Project__Buttons'>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://rapid-keys-typing-test.netlify.app/") }}>
                                <FaArrowRight className='git' /> VISIT
                            </button>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://github.com/AdityaB420/Typing-Speed-Test-React") }}>
                                <AiFillGithub className='git' /> FRONTEND
                            </button>
                        </div>
                    </div>
                </div>
                <div className='Project1'>
                    <img className='Project__Img' src={weather} alt='' />
                    <span className='blue-overlay'></span>
                    <div className='Project__Info'>
                        <h2 className='Project__Info__Title'>Weather APP</h2>
                        <p className='Project__Caption'>
                        Designed and developed a dynamic Weather Forecast Web Application using HTML, CSS, and JavaScript,
                        providing users with real-time weather updates and forecasts.
                        </p>
                        <div className='Project__Techs'>
                            <div className='Techs'>HTML & CSS</div>
                            <div className='Techs'>Weather API</div>
                            <div className='Techs'>JavaScript</div>
                        </div>
                        <div className='Project__Buttons'>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://weather-app-jsx.netlify.app/") }}>
                                <FaArrowRight className='git' /> VISIT
                            </button>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://github.com/AdityaB420/weather-app") }}>
                                <AiFillGithub className='git' /> FRONTEND
                            </button>
                        </div>
                    </div>
                </div>
                <div className='Project1'>
                    <img className='Project__Img' src={meshop} alt='' />
                    <span className='blue-overlay'></span>
                    <div className='Project__Info'>
                        <h2 className='Project__Info__Title'>MeShop</h2>
                        <p className='Project__Caption'>Developed a shopping web application with authentication, cart and checkout feature, users can search and
                        filter (API fetched) products, add them to the cart and then also can make dummy payment using Razorpay
                        test mode.</p>
                        <div className='Project__Techs'>
                            <div className='Techs'>HTML & CSS</div>
                            <div className='Techs'>JavaScript</div>
                            <div className='Techs'>Fake Store API</div>
                            <div className='Techs'>RAZORPAY</div>
                        </div>
                        <div className='Project__Buttons'>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://meshop-ecom-app.netlify.app/") }}>
                                <FaArrowRight className='git' /> VISIT
                            </button>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://github.com/AdityaB420/Shopping-cart/") }}>
                                <AiFillGithub className='git' /> FRONTEND
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;