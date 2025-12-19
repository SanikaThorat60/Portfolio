import React from 'react';

const Skills = () => {
    const skills = [
        { category: 'Frontend', items: ['React', 'JavaScript', 'HTML5 & CSS3', 'Tailwind CSS', 'Bootstrap'] },
        { category: 'Backend', items: ['Node.js', 'Express'] },
        { category: 'Database', items: ['MySQL', 'MongoDB'] },
        { category: 'Tools', items: ['Git & GitHub', 'VS Code', 'Figma', 'Canva'] },
        { category: 'Languages', items: ['C++', 'Python'] },
    ];
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className="skill-card glass">
                            <h3 className="skill-category">{skillGroup.category}</h3>
                            <ul className="skill-list">
                                {skillGroup.items.map((item, idx) => (
                                    <li key={idx} className="skill-item">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
