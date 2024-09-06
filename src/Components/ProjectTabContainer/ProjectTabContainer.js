import React, { useState } from 'react';
import ProjectUnit from '../ProjectUnit/ProjectUnit';
import './ProjectTabContainer.css';

const ProjectTabContainer = ({ projects }) => {
    const [activeTab, setActiveTab] = useState('Web Development');
    const [selectedProject, setSelectedProject] = useState(null);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleCardClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    const filteredProjects = projects.filter(project => project.category === activeTab);

    return (
        <div className="tabs-with-projects">
            <div className="tabs " >
                {['Web Development', 'Game Development', 'Android Development'].map((tab) => (
                    <div
                        key={tab}
                        className={`tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab}
                    </div>
                ))}
     
            </div>
            <div className="projects-grid">
                <ProjectUnit/>
                <ProjectUnit/>
            </div>

        </div>
    );
};

export default ProjectTabContainer;
