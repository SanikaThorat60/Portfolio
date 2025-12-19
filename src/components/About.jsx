import React from 'react';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-content">
                <div className="about-text">
                    <h2 className="section-title">About Me</h2>
                    <p>
                        I am a passionate Web Developer and MERN Stack Developer with a strong interest in building responsive, user-friendly, and scalable web applications. I enjoy turning ideas into real-world solutions using MongoDB, Express.js, React, and Node.js. I focus on writing clean code, creating intuitive user interfaces, and continuously improving my skills by working on real-time projects and modern web technologies.
                    </p>
                    <p>
                        When I'm not coding, I'm exploring new design trends, learning new technologies, or working on creative side projects.
                    </p>
                </div>
                <div className="about-image">
                    <img src="/profile-image.jpeg" alt="Sanika Thorat - Web Developer" />
                </div>
            </div>
        </section>
    );
};

export default About;
