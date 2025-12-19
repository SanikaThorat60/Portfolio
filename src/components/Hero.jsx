import React from 'react';
import resume from '../assets/Sanika_Thorat.pdf';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-content">
                <p className="hero-greeting">Hello, I'm</p>
                <h1 className="hero-name">Sanika Thorat</h1>
                <h2 className="hero-title">MERN Stack Developer</h2>
                <p className="hero-subtitle">Crafting elegant digital experiences with code and design.</p>
                <a href={resume} className="cta-button" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
        </section>
    );
};

export default Hero;
