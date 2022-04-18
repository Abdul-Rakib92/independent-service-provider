import React from 'react';
import rakib from '../../images/rakib.jpg'
import './About.css';

const About = () => {
    return (
        <div className='container'>
            <div className='about-photo'>
                <img src={rakib} alt="" />
            </div>
            <div className='text-container'>
            <h1>My <span>Vision</span></h1>
            <p>My name is Abdul Rakib. I am graduate person. My future goal is to become a good web developer. So I practice coding everyday more then 8 hour. I believe with hard work and practice, I can able to feel the interest of coding. My vision is to get a good job after finish my programing course. </p>
            </div>
        </div>
    );
};

export default About;