import React from 'react';

const Certifications = () => {
    const certifications = [
        { title: 'City of Moreton Bay – Web Development Job Simulation ', issuer: '(Forage)', date: '2024' },
        { title: 'Generative AI Study Jam 2024', issuer: 'AISSMS GDG group', date: '2024' },
        { title: 'Oracle OCI Generative AI Professional Certification', issuer: 'Oracle', date: '2025' },
    ];

    return (
        <section id="certifications" className="certifications-section">
            <div className="container">
                <h2 className="section-title">Certifications</h2>
                <div className="certifications-list">
                    {certifications.map((cert, index) => (
                        <div key={index} className="certification-item glass">
                            <div className="cert-info">
                                <h3 className="cert-title">{cert.title}</h3>
                                <p className="cert-issuer">{cert.issuer}</p>
                            </div>
                            <span className="cert-date">{cert.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
