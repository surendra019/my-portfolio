import React from 'react'
import './ProjectUnit.css'
import ProjectModal from '../ProjectModal/ProjectModal';
import { useState } from 'react';

function ProjectUnit() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
    <div className="project-card" onClick={openModal}>
      <img src={process.env.PUBLIC_URL + "Celestial_Clash2.jpg"} alt={`Project`} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{"Title"}</h3>
        <p className="project-description">{"description"}</p>
        <div className="project-tags">
          {/* {technologies.map((tech, index) => (
            <span key={index} className={`tag ${tech.toLowerCase()}`}>
              {tech}
            </span>
          ))} */}
        <span key={1} className={`tag `}>
              Godot
            </span>
        </div>
      </div>
   
    </div>
    <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={"ds"}
        title={"title"}
        description={"description"}
        technologies={""}
        link={"link"}
      />
    </>
    
  )
}

export default ProjectUnit
