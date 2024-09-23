// TopProjects.js
import React from 'react';
import './style.css';

const projects = [
    {
        id: 1,
        title: "Project One",
        description: "A brief description of project one.",
        image: "path/to/image1.jpg",
        link: "https://example.com/project1"
    },
    {
        id: 2,
        title: "Project Two",
        description: "A brief description of project two.",
        image: "path/to/image2.jpg",
        link: "https://example.com/project2"
    },
    {
        id: 3,
        title: "Project Three",
        description: "A brief description of project three.",
        image: "path/to/image3.jpg",
        link: "https://example.com/project3"
    },
    {
        id: 4,
        title: "Project Four",
        description: "A brief description of project four.",
        image: "path/to/image4.jpg",
        link: "https://example.com/project4"
    },
];

const TopProjects = () => {
    return (
        <div className="top-projects">
            <h2>Top Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopProjects;
