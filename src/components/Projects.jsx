import React from 'react';
import project3 from '../assets/diseasedetect.png';
import project1 from '../assets/kalyan village.jpg';
import project2 from '../assets/Gokart.jpeg';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Kalyan Village Development Website',
            category: 'Web Development',
            description: 'A platform to promote rural development — includes agriculture, education & healthcare info.',
            link: 'https://kalyanvillagee.netlify.app/',
            image: project1
        },
        {
            id: 2,
            title: 'Club Website GoKart & REEV Website',
            category: 'React.js',
            description: 'Developed a responsive and modern club website using React.js with smooth page navigation and transitions.',
            link: 'https://resonance-website-beta.vercel.app/',
            image: project2
        }, {
            id: 3,
            title: 'Crop Disease Detection using API',
            category: 'MERN Stack Development',
            description: 'A smart web app that detects plant diseases using image-based API integration.',
            link: '',
            image: project3
        },
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card glass">
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                            </div>
                            <div className="project-info">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <a href={project.link} className="cta-button" target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
