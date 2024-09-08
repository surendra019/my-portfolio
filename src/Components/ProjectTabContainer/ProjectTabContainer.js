import React, { useState } from 'react';
import ProjectUnit from '../ProjectUnit/ProjectUnit';
import './ProjectTabContainer.css';

const ProjectTabContainer = ({ projects }) => {
    const [activeTab, setActiveTab] = useState('web');
    const [selectedProject, setSelectedProject] = useState(null);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        console.log(tab)
    };

    const handleCardClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    function filteredProjects(){
        if (projects){
            return projects.filter(project => project.type === activeTab);
        }
        return null
    }

    return (
        <div className="tabs-with-projects">
            <div className="tabs " >
                {['web', 'game', 'app'].map((tab) => (
                    <div
                        key={tab}
                        className={`tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => handleTabClick(tab)}
                    >
                        <div>{tab ==="web" ? "Web Development" : tab === "app" ? "App Development" : "Game Development"}</div>
                        <img src={process.env.PUBLIC_URL +
                                tab === "app" ? "android app dev icon.png" : tab === "web" ? "web dev icon.png" : "game dev icon.png"
                            } />
                   
                    </div>
                ))}

            </div>
            <div className="projects-grid">
                {
                    filteredProjects() !== null ?
                    filteredProjects().map(project => {
                        return <ProjectUnit key={project.title} project={project}/>
                    }) : "[Loader]"
                }
            </div>

        </div>
    );
};

export default ProjectTabContainer;
