import React from 'react';
import "../Styles/Contact.css";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import Mail from './Mail';
import { IoMdMail, IoMdCall } from "react-icons/io";
function Contact() {
    return (
        <div className='Contact' id='Contact'>
            <div className='Contact__Intro'>
                <div className='Contact__Text'>
                    <p>Reach out to me!</p>
                    <h1 className='Contact__Name'>Contact</h1>
                    <div className='Contact__Log'>
                        <Mail email="butola.aditya10@gmail.com" subject="Front-End Job - regarding">
                            <button className='Contact__Btn__Log'>
                                <IoMdMail className='Conact__Icon' /> butola.aditya10@gmail.com
                            </button>
                        </Mail>
                        <a href="tel:+919557424420">
                            <button className='Contact__Btn__Log'>
                                <IoMdCall className='Conact__Icon' /> +91 9557424420
                            </button>
                        </a>
                    </div>
                </div>
                <div className='Contact__Icons'>
                    <BsGithub className='Contact__Icon' onClick={() => { window.location.assign("https://github.com/AdityaB420") }} />
                    <ImLinkedin className='Contact__Icon' onClick={() => { window.location.assign("https://www.linkedin.com/in/aditya-butola-372398172/") }} />
                </div>
            </div>
        </div>
    );
}

export default Contact;