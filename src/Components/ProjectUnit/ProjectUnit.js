import React from 'react'
import './ProjectUnit.css'
import ProjectModal from '../ProjectModal/ProjectModal';
import { useState } from 'react';

function ProjectUnit({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="project-card" onClick={openModal}>
        <img src={process.env.PUBLIC_URL + "Celestial_Clash2.jpg"} alt={`Project`} className="project-image" />
        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description.substr(0, 40) + "..."}</p>
          <div className="project-tags">
            {
              project.tags.map(tag => {
                return <span key={tag} className={`tag `}>
                  {tag}
                </span>
              })
            }

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
