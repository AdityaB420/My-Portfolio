import React  from 'react';
import { useEffect,useRef } from 'react';
import "../Styles/Home.css";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import logo from '../Images/logo.svg';
import  Resume  from '../Images/Resume.pdf';
import Typed from 'typed.js';

function Home() {
    const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['FrontEnd Developer', 'Software Engineer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    // Initialize Typed.js when the component mounts
    typedRef.current = new Typed('.multiple-text', options);

    // Clean up and destroy Typed.js when the component unmounts
    return () => {
            if (typedRef.current) {
                typedRef.current.destroy();
            }
            };
        }, []);

    return (
    <div className='Home' id='Home'>
            <div className='Home__Intro'>
                <img src={logo} className="App-logo" alt="logo" />
                <div className='Home__Text'>
                    <p>Welcome to my world!</p>
                    <h1 className='Home__Name'>Hi, I'm Aditya Butola.</h1>
                    <h2 className='Home__Role'>I am a <span className='multiple-text'></span></h2>
                </div>
                <div className='Home__Icons'>
                    <BsGithub className='Home__Icon' onClick={() => { window.location.assign("https://github.com/AdityaB420") }} />
                    <ImLinkedin className='Home__Icon' onClick={() => { window.location.assign("https://www.linkedin.com/in/aditya-butola-372398172//") }} />
                </div>
                <a href={Resume} target="_blank"> 
                        <button className='Resume'>
                            View Resume
                        </button>
                </a>
            </div>
    </div>
    );
}

export default Home;